import PageProvider from '../../project/PageProvider.js';
import logger  from '../../logger.js';

class BaseElement {
    constructor(selector, name) {
        this.selector = selector;
        this.name = name;
    }

    getElement() {
        return PageProvider.getPage().locator(this.selector);
    }

    async click() {
        logger.info(`Clicking on the element '${this.name}'`);
        await this.getElement().click();
    }

    async isVisible(timeout) {
        logger.info(`Checking if '${this.name}' is visible`);
        return await this.getElement().isVisible({ timeout });
    }

    async getText() {
        logger.info(`Getting text from '${this.name}'`);
        return await this.getElement().textContent();
    }
}

export default BaseElement;
