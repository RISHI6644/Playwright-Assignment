class BaseForm {
    constructor(page, formSelector) {
        this.page = page;
        this.formSelector = formSelector;
    }

    async isVisible() {
        return this.page.isVisible(this.formSelector);
    }

    async clickButton(buttonLocator) {
        await this.page.click(buttonLocator);
    }

    async getText(textLocator) {
        return this.page.textContent(textLocator);
    }

    async fill(fieldLocator, value) {
        await fieldLocator.fill(value);
    }
}

module.exports = BaseForm;
