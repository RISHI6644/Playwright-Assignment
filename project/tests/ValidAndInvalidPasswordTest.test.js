import { test, expect } from '@playwright/test';
import PageProvider from '../PageProvider';
import BrowserSteps from '../steps/BrowserSteps';
import MainPage from '../pages/MainPage';
import GamePage from '../pages/GamePage';
import Dropdown from '../../framework/elements/Dropdown';
import RandomStringUtils from '../utilities/RandomStringUtils';

test.describe('Valid and Invalid Password Tests', () => {
    const mainPage = new MainPage();
    const gamePage = new GamePage();
    const dropdown = new Dropdown();

    test.beforeEach(async ({ page }) => {
        PageProvider.setPage(page);
        await BrowserSteps.navigateTo('https://userinyerface.com');
        expect(await mainPage.isDisplayed(), "Main page is opened").toBeTruthy();
        await mainPage.clickHereButton();
        expect(await gamePage.isDisplayed(), "Game page is opened").toBeTruthy();
    });

    test('Valid password', async () => {
        const email = RandomStringUtils.generateRandomEmail();
        await gamePage.firstCardForm.fillEmailField(email);

        const password = RandomStringUtils.generateRandomValidPassword();
        await gamePage.firstCardForm.fillPasswordField(password);

        const domain = Dropdown.generateRandomDomain();
        await gamePage.firstCardForm.fillDomainField(domain);

        await gamePage.firstCardForm.clickDomainDropdown();
        await gamePage.firstCardForm.selectRandomOption();
        await gamePage.firstCardForm.clickTermsAndConditionsCheckbox();
        await gamePage.firstCardForm.clickNextButton();
        expect(await gamePage.secondCardForm.isSecondCardVisible(), "The Second card is open").toBeTruthy();
    });

    test('Invalid password', async () => {
        const email = RandomStringUtils.generateRandomEmail();
        await gamePage.firstCardForm.fillEmailField(email);

        const password = RandomStringUtils.generateRandomInvalidPassword();
        await gamePage.firstCardForm.fillPasswordField(password);

        const domain = Dropdown.generateRandomDomain();
        await gamePage.firstCardForm.fillDomainField(domain);

        await gamePage.firstCardForm.clickDomainDropdown();
        await gamePage.firstCardForm.selectRandomOption();
        await gamePage.firstCardForm.clickTermsAndConditionsCheckbox();
        await gamePage.firstCardForm.clickNextButton();
        expect(await gamePage.secondCardForm.isSecondCardVisible(), "The Second card is not open").toBeFalsy();
    });
 });
