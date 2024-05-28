import BaseElement from './baseElement.js';
import logger from '../../logger.js';

class TextField extends BaseElement {
    constructor(selector, name) {
        super(selector, name);
    }

    async fill(value) {
        logger.info(`Filling text field '${this.name}' with value: ${value}`);
        await this.getElement().fill(value);
    }
}

export default TextField;
