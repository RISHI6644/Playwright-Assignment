class BaseElement {
    constructor(page, locator) {
        this.page = page;
        this.locator = locator;
    }

    async click() {
        await this.locator.click();
    }

    async isVisible() {
        return this.locator.isVisible();
    }

    async fill(value) {
        await this.locator.fill(value);
    }
}

module.exports = BaseElement;
