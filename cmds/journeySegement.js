const getOnlyRouteLeak = require("../utilities/onlyForRoute");
const ora = require("ora");
module.exports = function (route, parentId = 276499, journeyId = 2106) {
  try {
    const spinner = ora();
    spinner.start();
    switch (route) {
      case "campaign-report":
        spinner.stop();
        return getOnlyRouteLeak(
          `campaign-report?parentId=${parentId}&userType=user`
        );

      case "journey":
        spinner.stop();
        return getOnlyRouteLeak(`journey?journeyId=${journeyId}`);

      default:
        spinner.stop();
        return getOnlyRouteLeak(
          `campaign-report?parentId=${parentId}&userType=user`
        );
    }
  } catch (e) {
    spinner.stop();
    console.log(e);
  }
};
