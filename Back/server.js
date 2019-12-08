'use strict';
const http = require('http');
const fs = require('fs');
const express = require('express');
const getUsersStatistics = require('./getUsersStatistics');
const getUserStat = require('./getUserStat');

const users = JSON.parse(fs.readFileSync(`${__dirname}/public/users.json`, 'utf-8'));
const stats = JSON.parse(fs.readFileSync(`${__dirname}/public/users_statistic.json`, 'utf-8'));
const usersStatistics = getUsersStatistics(users, stats);
const pagesQtty = users.length / 50;

const app = express();
const port = 5123;

app.get('/api/stats*', (req, res) => {
  const page = +req.url.replace('/api/stats/', '');
  const start = (page - 1) * 50;
  const end = page * 50;

  res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.json({
    stats: [...usersStatistics].slice(start, end),
    pagesQtty,
  });
});

app.get('/api/user*', (req, res) => {
  const reqParts = req.url.split("/");
  const userId = +reqParts.filter(part => part.includes('id:'))[0].replace('id:', '');
  const startDate = reqParts.filter(part => part.includes('start:'))[0].replace('start:', '');
  const endDate = reqParts.filter(part => part.includes('end:'))[0].replace('end:', '');

  if (users.filter(user => user.id === userId).length
  && startDate <= endDate) {
    const userStat = stats.filter(stat => stat.user_id === userId)
    .map(stat => ({date: stat.date, clicks: stat.clicks, pages: stat.page_views}));

    const userCompleteStat = getUserStat(startDate, endDate, userStat);
    const user = users.filter(user => user.id === userId)[0];

    res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.json({user: user, stat: userCompleteStat, startDate, endDate, warn: "OK",});
  } else if (startDate > endDate) {
    res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.json({warn: "Dates are incorrect"});
  } else {
    res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.json({warn: "User Not Found"});
  }
});

app.use(express.static('../build'));

app.listen(port, () => {
  console.log(`Listening port ${port}`);
});

