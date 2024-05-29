import BaseElement from './baseElement.js';
import logger from '../../logger.js';
import PageProvider from '../../project/PageProvider.js';

class Dropdown extends BaseElement {
    constructor(selector, name) {
        super(selector, name);
    }

    static generateRandomDomain() {
        const domains = ['example.com', 'test.com', 'dummy.com', 'sandbox.com', 'domain.com'];

        const domain = domains[Math.floor(Math.random() * domains.length)];

        return domain;
    }

    async selectRandomOption() {
        logger.info(`Selecting random domain from domain dropdown '${this.name}'`);
        await this.click();

        const options = await PageProvider.getPage().locator('//div[@class="dropdown__list-item"]').all();
        const randomIndex = Math.floor(Math.random() * options.length);
        await options[randomIndex].click();
    }
}

export default Dropdown;
