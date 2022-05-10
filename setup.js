const path = require("path");

const { launch, setupMetamask } = require("@chainsafe/dappeteer");
const puppeteer = require("puppeteer");

const { metamaskOptions, metamaskVersion } = require("./metamask.config");

module.exports = async function () {
  const browser = await launch(puppeteer, { metamaskVersion: metamaskVersion });
  try {
    await setupMetamask(browser, metamaskOptions);
    global.browser = browser;

    process.env.PUPPETEER_WS_ENDPOINT = browser.wsEndpoint();
  } catch (error) {
    console.log(error);
    throw error;
  }
};
