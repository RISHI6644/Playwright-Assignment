import PageProvider from '../../project/PageProvider.js';
import logger from '../../logger.js';

class BrowserSteps {
    static browser;

    static async navigateTo(url) {
        logger.info(`Navigating to ${url}`);
        await PageProvider.getPage().goto(url);
    }

    static async closeBrowser() {
        logger.info('Closing browser');
        await this.browser.close();
    }
}

export default BrowserSteps;
