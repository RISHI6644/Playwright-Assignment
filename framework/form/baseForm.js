import logger from '../../logger.js';

class BaseForm {
    constructor(uniqueElement, name) {
        this.uniqueElement = uniqueElement;
        this.name = name;
    }

    async isDisplayed(timeout = 5000) {
        logger.info(`Checking if form '${this.name}' is displayed`);
        return this.uniqueElement.isVisible(timeout);
    }
}

export default BaseForm;
