/*const { mainPage } = require ('../utils/selectors/mainPage');
const { clickElement, 
        isTextPresent } = require ('../selectorsHelpers');
*/
describe('Google', () => {
  beforeAll(async () => {
    await page.goto('https://ethereum.org/en/');
  });

  it('should be titled "Google"', async () => {
    await expect(page.title()).resolves.toMatch('Home | ethereum.org');
  });
});