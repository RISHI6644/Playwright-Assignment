import logger from '../../logger.js';

class BaseForm {
    constructor(uniqueElement, name) {
        this.uniqueElement = uniqueElement;
        this.name = name;
    }

    async isDisplayed(timeout) {
        logger.info(`Checking if form '${this.name}' is displayed`);
        return await this.uniqueElement.isVisible(timeout);
    }
}

export default BaseForm;
