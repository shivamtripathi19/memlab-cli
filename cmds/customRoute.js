const getOnlyRouteLeak = require("../utilities/onlyForRoute");
module.exports = function (route) {
  try {
    getOnlyRouteLeak(route);
  } catch (err) {
    console.log(err);
  }
};
