const { findLeaks, takeSnapshots } = require("@memlab/api");

module.exports = async function getOnlyRouteLeak(route) {
  const scenario = {
    url: () => `https://cm-staging.tokopedia.net/${route}`,
    action: async (page) => {
      await page.evaluate(() => {
        localStorage.setItem(
          "userEntity",
          JSON.stringify({
            Id: "",
            Name: "",
            profileUrl: "",
          })
        );
      });
      await page.evaluate(() => {
        localStorage.setItem("authToken", "");
      });
      await page.evaluate(() => {
        localStorage.setItem("emailID", "");
      });
      await page.evaluate(() => {
        localStorage.setItem("permission", true);
      });
    },
  };
  const result = await takeSnapshots({ scenario });
  const leaks = findLeaks(result);
  console.log(leaks);
};
