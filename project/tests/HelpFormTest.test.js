import { test, expect } from '@playwright/test';
import PageProvider from '../PageProvider';
import BrowserSteps from '../steps/BrowserSteps';
import MainPage from '../pages/MainPage';
import GamePage from '../pages/GamePage';

test('Help form', async ({ page }) => {
    const mainPage = new MainPage();
    const gamePage = new GamePage();

    PageProvider.setPage(page);
    await BrowserSteps.navigateTo('https://userinyerface.com');
    expect(await mainPage.isDisplayed(), "Main page is opened").toBeTruthy();
    await mainPage.clickHereButton();
    expect(await gamePage.isDisplayed(), "Game page is opened").toBeTruthy();
    await gamePage.helpForm.clickHelpButton();
    expect(await gamePage.helpForm.isHelpResponseVisible(), "Help response is displayed").toBeTruthy();
});
