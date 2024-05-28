import { test } from '@playwright/test';
import PageProvider from '../PageProvider';
import BrowserSteps from '../steps/BrowserSteps';
import MainPage from '../pages/MainPage';

test('Help form', async ({ page }) => {
    PageProvider.setPage(page);

    const mainPage = new MainPage();
    await BrowserSteps.navigateTo('https://userinyerface.com');
    await mainPage.isDisplayed();
    await mainPage.helpForm.clickHereButton();
});
