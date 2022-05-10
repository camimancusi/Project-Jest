describe('Google', () => {
  beforeAll(async () => {
    await page.goto('https://ethereum.org/en/');
  });

  it('should be titled as "Home | etherum.org"', async () => {
    await expect(page.title()).resolves.toMatch('Home | ethereum.org');
  });
});