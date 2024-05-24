const BaseForm = require('../../framework/form/baseForm');

class MainPage extends BaseForm {
    constructor(page) {
        super(page, 'body'); 
        this.page = page;
        this.hereLink = page.getByRole('link', { name: 'HERE' });
        this.cancelButton = page.getByRole('button', { name: 'Cancel' });
        this.helpButton = page.getByText('Help', { exact: true });
        this.helpResponse = page.getByText('Please wait, there are', { exact: false });
        this.emailField = page.getByPlaceholder('Your email');
        this.domainField = page.getByPlaceholder('Domain');
        this.domainDropdown = page.getByText('other').first();
        this.dropdownListElement = page.locator('//div[@class="dropdown__list-item"]');
        this.passwordField = page.getByPlaceholder('Choose Password');
        this.termsAndConditionsCheckbox = page.locator('label span').nth(1);
        this.nextButton = page.getByText('Next');
        this.nextCardButton = page.getByRole('button', { name: 'Next' });
    }

    async navigateToMainPage(url) {
        await this.page.goto(url);
    }

    async clickHereLink() {
        await this.hereLink.click();
    }

    async clickHelpButton() {
        await this.helpButton.click();
    }

    async isHelpResponseVisible() {
        return this.helpResponse.isVisible();
    }

    async isGamePageOpen() {
        return this.nextButton.isVisible();
    }

    async clearEmailField() {
        await this.emailField.fill('');
    }

    async clearDomainField() {
        await this.domainField.fill('');
    }

    async clearPasswordField() {
        await this.passwordField.fill('');
    }

    async clickDomainDropdown() {
        await this.domainDropdown.click();
    }

    async selectRandomDomainFromDropdown() {
        const dropdownItems = await this.page.locator('//div[@class="dropdown__list-item"]').all();
        const randomIndex = Math.floor(Math.random() * dropdownItems.length);
        await dropdownItems[randomIndex].click();
    }

    async clickNextButton() {
        await this.nextButton.click();
    }

    async isNextCardButtonVisible() {
        return this.nextCardButton.isVisible();
    }

    async clickTermsAndConditionsCheckbox() {
        await this.termsAndConditionsCheckbox.click();
    }
}

module.exports = MainPage;
