//import { AppMapleFinance } from './selectors/AppMapleFinance'
  const elementSelector = async (selector, page, type, timeout, hidden = false) => {
    // Handling Xpath and css selectors is different. Since many functions require
    // to make this distinction this function was created to do it
    if (type === 'Xpath') {
      return page.waitForXPath(selector, { timeout, hidden })
    } else {
      return page.waitForSelector(selector, { timeout, hidden })
    }
  }
  
  const clickElement = async ({ selector, type}, page) => {
    const element = await elementSelector(selector, page, type, 60000)
    await element.click()
    return element
  }

module.exports = {
  elementSelector,
  clickElement
}