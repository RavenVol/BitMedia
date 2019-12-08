'use strict';

const getUsersStatistics = function (users, stats) {
  return users.map(user => {
    const userStats = stats.filter(stat => user.id === stat.user_id);
    const totalClicks = userStats.reduce((clicks, stat) => clicks + stat.clicks , 0);
    const totalPages = userStats.reduce((pages, stat) => pages + stat.page_views , 0);

    return { ...user, totalClicks, totalPages };
  });
}

module.exports = getUsersStatistics;
