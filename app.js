const express = require("express");
const app = express();

app.get("/", (request, response) => {
  const todaysDateAndTime = new Date();
  const todaysDate = `${todaysDateAndTime.getDate()}-${
    todaysDateAndTime.getMonth() + 1
  }-${todaysDateAndTime.getFullYear()}`;
  response.send(todaysDate);
});

module.exports = app;
