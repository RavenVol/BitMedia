import React from 'react';
import getDataFromServer from '../../data/getDataFromServer';
import Paginator from '../Paginator';

import '../../styles/css/statsMain.css';

class StatsMain extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      usersStats: [],
      currPage: 1,
      pagesQtty: 1,
    }
  }

  componentDidMount = () => {
    this.handleHewPage();
  }

  handleHewPage = async() => {
    const page = +this.props.match.params.page;
    let currPage = 1;
    let reply = {};

    if (!page) {
      reply = await getDataFromServer(`https://appco-api-serv.herokuapp.com/api/stats/1`);
    } else if (page === this.state.currPage) {
      return;
    } else {
      reply = await getDataFromServer(`https://appco-api-serv.herokuapp.com/api/stats/${page}`);
      currPage = page;
    }

    this.setState({
      usersStats: reply.stats,
      pagesQtty: reply.pagesQtty,
      currPage,
    });
  }

  render() {
    if (!this.state.usersStats.length) {
      return (<div>Loading...</div>)
    }

    this.handleHewPage();

    return (
      <>
        <h1 className="stats__header">User Statistics</h1>
        <div className="tableWrap">
          <table className="statsTable">
            <thead className="statsTable__head">
              <tr className="statsTable__headRow">
                <th className="statsTable__headDash">ID</th>
                <th className="statsTable__headDash">First Name</th>
                <th className="statsTable__headDash">Last Name</th>
                <th className="statsTable__headDash">Email</th>
                <th className="statsTable__headDash">Gender</th>
                <th className="statsTable__headDash">IP</th>
                <th className="statsTable__headDash">Total clicks</th>
                <th className="statsTable__headDash">Total page views</th>
              </tr>
            </thead>
            <tbody className="statsTable__body">
              {this.state.usersStats.map((user, index) => (
                <tr
                  key={user.id}
                  className="statsTable__bodyRow"
                  onClick={() => {this.props.history.push(`/user${user.id}`)}}
                >
                  <td className="statsTable__bodyDash">{user.id}</td>
                  <td className="statsTable__bodyDash">{user.first_name}</td>
                  <td className="statsTable__bodyDash">{user.last_name}</td>
                  <td className="statsTable__bodyDash">{user.email}</td>
                  <td className="statsTable__bodyDash">{user.gender}</td>
                  <td className="statsTable__bodyDash">{user.ip_address}</td>
                  <td className="statsTable__bodyDash">{user.totalClicks}</td>
                  <td className="statsTable__bodyDash">{user.totalPages}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="stats__paginator">
          <Paginator currPage={this.state.currPage} pagesQtty={this.state.pagesQtty}/>
        </div>
      </>
    )
  }
}

export default StatsMain;

