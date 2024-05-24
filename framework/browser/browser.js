const { chromium } = require('playwright');

class Browser {
    static async getBrowser() {
        return await chromium.launch();
    }

    static async getContext(browser) {
        return await browser.newContext();
    }

    static async getPage(context) {
        return await context.newPage();
    }
}

module.exports = Browser;
