import BaseElement from './baseElement.js';
import logger from '../../logger.js';

class Dropdown extends BaseElement {
    constructor(selector, name) {
        super(selector, name);
    }

    async selectRandomOption() {
        logger.info(`Selecting random option from dropdown '${this.name}'`);
        const options = await this.getElement().locator('//div[@class="dropdown__list-item"]').all();
        const randomIndex = Math.floor(Math.random() * options.length);
        await options[randomIndex].click();
    }
}

export default Dropdown;
