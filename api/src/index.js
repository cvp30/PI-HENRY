const server = require('./app.js');
const { sequelize } = require('./database/database.js');
const { loadAllCountries } = require('./utils/index.js');
require("./models/Country.js");
require("./models/Activity.js");
require("./models/CountryActivity.js");
// require("dotenv").config();
// const { PORT } = process.env;

async function main() {
  try {
    await sequelize.sync({ force: true }).then(() => {

      loadAllCountries();

      server.listen(3001, () => {
        console.log('Server is listening on port %s', 3001);
      });
    })
  } catch (error) {
    console.log("unable to connet to the DB", error);
  }
}

main();

