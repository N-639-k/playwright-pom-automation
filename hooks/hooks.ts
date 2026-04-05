import { Before, After } from '@cucumber/cucumber';
import { testContext } from '../utils/TestContext';

Before(async function () {
  await testContext.launchBrowser();
});

After(async function () {
  await testContext.closeBrowser();
});