'use strict';

const getUserStat = function (startDate, endDate, stat) {
  const fileStat = [...stat];
  const userStat = [];
  let [startYear, startMonth, startDay] = [...startDate.split('-').map(part => +part)];
  let [endYear, endMonth, endDay] = [...endDate.split('-').map(part => +part)];
  startMonth--;

  const newEndDate = new Date(endYear, --endMonth, ++endDay);
  endYear = newEndDate.getFullYear();
  endMonth = newEndDate.getMonth();
  endDay = newEndDate.getDate();

  while (startDay < endDay || startMonth < endMonth || startYear < endYear) {

    let currDate = `${startYear}-`;
    currDate += startMonth + 1 < 10 ? `0${startMonth + 1}-` : `${startMonth + 1}-`;
    currDate += startDay < 10 ? `0${startDay}` : `${startDay}`;

    const statIndex = fileStat.findIndex(entry => entry.date === currDate);
    if (statIndex === -1) {
      userStat.push({date: currDate, clicks: 0, pages: 0});
    } else {
      userStat.push(fileStat.splice(statIndex, 1)[0]);
    }

    startDay++;
    const nextDate = new Date(startYear, startMonth, startDay);
    startYear = +nextDate.getFullYear();
    startMonth = +nextDate.getMonth();
    startDay = +nextDate.getDate();
  }

  return userStat;
}

module.exports = getUserStat;

