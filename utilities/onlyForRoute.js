const { run } = require("@memlab/api");
module.exports = async function getOnlyRouteLeak(route) {
  _puppeteerConfig={
    headless: false, defaultViewport: null, args:['--start-maximized']
  }
  const scenario = {
    url: () => `https://cm-staging.tokopedia.net/${route}`,
    beforeInitialPageLoad: async (page) => {
      await page.evaluate(() => {
        localStorage.setItem(
          "userEntity", '');
      });
      await page.evaluate(() => {
        localStorage.setItem(
          "authToken", '');
      });
      await page.evaluate(() => {
        localStorage.setItem("emailID", "");
      });
      await page.evaluate(() => {
        localStorage.setItem("permission", '');
      });
    },
    action: async (page) => {
      await page.click('[data-testid="btnMenuAnalyze"]');
      await page.click('a[href="/performance"]');
    },
    back: async (page) => {
      await page.click('[data-testid="btnMenuCampaign"]');
      await page.click('a[href="/campaign-list"]');
    },
  };
 
  const { takeSnapshots } = await run({
    scenario,
    snapshotForEachStep: true,
    workDir: "/Users/shivammanitripathi/Desktop/cli/cmds",
  });

  // const result = await takeSnapshots({scenario});
  // const steps = result.getInteractionSteps();
  // // print each browser interaction's name and JavaScript heap size (in bytes)
  // steps.forEach((step) => console.log(step.name, step.JSHeapUsedSize));

  // const dataDir = result.getSnapshotFileDir(); // where the last memlab run stores results
  // const reader = BrowserInteractionResultReader.from(dataDir);
  // console.log(reader);
};
