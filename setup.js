const path = require("path");
const { promisify } = require('util');

const { launch, setupMetamask, switchNetwork } = require("@chainsafe/dappeteer");
const puppeteer = require("puppeteer");

const { METAMASK_OPTIONS, METAMASK_VERSION, NETWORK_NAME } = require("./metamask.config");
const { syncBuiltinESMExports } = require("module");

module.exports = async function () {
  const browser = await launch(puppeteer, { metamaskVersion: METAMASK_VERSION });
  try {
    //Import metamask using browser, seed & password (metam)
    const metamask = await setupMetamask(browser, METAMASK_OPTIONS);

    //It is necessary a bit more time to load all the test nets
    await new Promise(resolve => setTimeout(resolve, 1000));  
    
    //Change the network in metamask
    await metamask.switchNetwork(NETWORK_NAME);

    //global.browser = browser;
    process.env.PUPPETEER_WS_ENDPOINT = browser.wsEndpoint();
  } catch (error) {
    console.log(error);
    throw error;
  }
};
