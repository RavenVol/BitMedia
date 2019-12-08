import React from 'react';
import { Line } from 'react-chartjs-2';

import StatsHeader from '../statisticsPagesShare/StatsHeader';
import StatsNavigation from '../statisticsPagesShare/StatsNavigation';
import StatsFooter from '../statisticsPagesShare/StatsFooter';
import getDataFromServer from '../../data/getDataFromServer';

import '../../styles/css/userDetails.css';

class UserDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: "2019-10-15",
      endDate: "2019-10-21",
      userId: null,
      user: {},
      clicks: {
        labels: [],
        datasets: [
          {
            label: "Clicks",
            fill: false,
            borderColor: "#3A80BA",
            data: [],
          }
        ]
      },
      pages: {
        labels: [],
        datasets: [
          {
            label: "Pages",
            fill: false,
            borderColor: "#3A80BA",
            data: [],
          }
        ]
      }
    }
  }

  componentDidMount = () => {
    const userId = this.props.match.params.id;
    // let endDate = new Date();
    // let endYear = endDate.getFullYear();
    // let endMonth = endDate.getMonth();
    // let endDay = endDate.getDate();

    // let startDate = new Date(endYear, endMonth, endDay - 6);
    // let startYear = startDate.getFullYear();
    // let startMonth = startDate.getMonth();
    // let startDay = startDate.getDate();

    this.setState({
      userId,
      startDate: "2019-10-15",
      endDate: "2019-10-21",
      // startDate: `${startYear}-${startMonth + 1}-${startDay}`,
      // endDate: `${endYear}-${endMonth + 1}-${endDay}`,
    }, () => this.retriveData());
  }

  setDate = (date, type) => {
    switch (type) {
      case 'start' :
        this.setState({startDate: date});
        break;
      case 'end' :
        this.setState({endDate: date});
        break;
      default :
        return null;
    }
  }

  formSubmit = (event) => {
    event.preventDefault();
    const {startDate, endDate} = this.state;

    if (!startDate || !endDate) {
      alert("Date could not be empty");
    } else if (startDate <= endDate) {
      this.retriveData();
    } else  {
      alert("Start Date must be earlier than End Date");
    }
  }

  retriveData = async() => {
    const {userId, startDate, endDate} = this.state;
    const userStat = await getDataFromServer(`http://localhost:5123/api/user/id:${userId}/start:${startDate}/end:${endDate}`);

    if (userStat.warn === "OK") {
      this.setState({
        user: userStat.user,

        clicks: {
          labels: userStat.stat.map(entry => entry.date),
          datasets: [
            {
              label: "Clicks",
              fill: false,
              borderColor: "#3A80BA",
              data: userStat.stat.map(entry => entry.clicks),
            }
          ]
        },

        pages: {
          labels: userStat.stat.map(entry => entry.date),
          datasets: [
            {
              label: "Pages",
              fill: false,
              borderColor: "#3A80BA",
              data: userStat.stat.map(entry => entry.pages),
            }
          ]
        }
      });
    } else {
      alert(userStat.warn);
      this.props.history.goBack();
    }
  }

  render() {
    return (
      <>
        <header className="userPageHeader">
          <StatsHeader />
          <nav className="userPageHeader__navigation">
            <StatsNavigation
              menu={[
                {title: "Main Page", address: "/"},
                {title: "Users Statistics", address: "/stats"},
                {title: `${this.state.user.first_name} ${this.state.user.last_name}`, address: `/user${this.state.userId}`},
              ]}
            />
          </nav>
        </header>

        <main className="userPageMain">
          <h2 className="userPageMain__userName">
            {`${this.state.user.first_name} ${this.state.user.last_name}`}
          </h2>

          <form className="userPageMain__dateForm dateForm"
            onSubmit={(event) => this.formSubmit(event)}
          >
            <label htmlFor="fromDate">
              Start Date:&nbsp;&nbsp;
              <input
                id="fromDate"
                type="date"
                value={this.state.startDate}
                onChange={(event) => {
                  this.setDate((event.target.value), 'start');
                }}
              />
            </label>
            <label htmlFor="toDate">
              End Date:&nbsp;&nbsp;
              <input
                id="toDate"
                type="date"
                value={this.state.endDate}
                onChange={(event) => {
                  this.setDate((event.target.value), 'end');
                }}
              />
            </label>
            <button
              type="submit"
              className="dateForm__button"
            >
              Submit
            </button>
          </form>

          <h3 className="userPageMain__graphLabel">Clicks</h3>
          <Line
            options={{
              responsive: true,
            }}
            data={this.state.clicks}
            width={81.94}
            height={24.8}
          />

          <h3 className="userPageMain__graphLabel">Pages views</h3>
          <Line
            options={{
              responsive: true,
            }}
            data={this.state.pages}
            width={81.94}
            height={24.8}
          />
        </main>

        <footer className="userPageFooter">
          <StatsFooter />
        </footer>
      </>
    );
  }
}

export default UserDetails;

