import MainPage from '../pages/MainPage';

class FormSteps {
    constructor(page) {
        this.page = page;
        this.mainPage = new MainPage(page);
    }

    async navigateToMainPage(url) {
        await this.mainPage.navigateToMainPage(url);
    }

    async clickHereLink() {
        await this.mainPage.clickHereLink();
    }

    async clickHelpButton() {
        await this.mainPage.clickHelpButton();
    }

    async isHelpResponseVisible() {
        return this.mainPage.isHelpResponseVisible();
    }

    async isGamePageOpen() {
        return this.mainPage.isGamePageOpen();
    }

    async getTimerText() {
        return await this.mainPage.getTimerText();
    }

    async generateRandomValidPassword(email) {
        const passwordLength = 10;
        const capitalLetterRegex = /[A-Z]/;
        const numeralRegex = /\d/;
        const emailLetterRegex = new RegExp(email[0], 'i');
        const cyrillicRegex = /[\u0400-\u04FF]/;

        let password = '';
        while (
            password.length < passwordLength ||
            !capitalLetterRegex.test(password) ||
            !numeralRegex.test(password) ||
            !emailLetterRegex.test(password) ||
            !cyrillicRegex.test(password)
        ) {
            password = '';
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
            for (let i = 0; i < passwordLength; i++) {
                password += characters.charAt(Math.floor(Math.random() * characters.length));
            }
        }
        return password;
    }

    async generateRandomInvalidPassword() {
        const passwordLength = 5;
        const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

        let password = '';
        for (let i = 0; i < passwordLength; i++) {
            password += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return password;
    }

    async generateRandomEmail() {
        const domains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'aol.com'];
        const usernameLength = 10;

        let username = '';
        const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < usernameLength; i++) {
            username += characters.charAt(Math.floor(Math.random() * characters.length));
        }

        const domain = domains[Math.floor(Math.random() * domains.length)];

        return `${username}@${domain}`;
    }

    async generateRandomDomain() {
        const domains = ['example.com', 'test.com', 'dummy.com', 'sandbox.com', 'domain.com'];

        const domain = domains[Math.floor(Math.random() * domains.length)];

        return domain;
    }

    async interactWithDropdownList() {
        await this.mainPage.clickDomainDropdown();
        await this.page.waitForSelector('//div[@class="dropdown__list-item"]');
        await this.mainPage.selectRandomDomainFromDropdown();
    }
}

export default FormSteps;
