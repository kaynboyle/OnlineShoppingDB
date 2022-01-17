const express = require("express");
const sequelize = require("./config/connection");

const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//get everything from routes folder collected from const routes
app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`listening on ${PORT}!`);
  });
});
