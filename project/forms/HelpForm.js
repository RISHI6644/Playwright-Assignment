import BaseForm from '../../framework/form/BaseForm';
import Label from '../../framework/elements/Label';
import Button from '../../framework/elements/Button';

class HelpForm extends BaseForm {
    helpButton = new Button('//a[@class="help-form__help-button"]', 'Help Button');
    helpResponseLabel = new Label('//div[@class="help-form__response"]', 'Help Form Label');

    constructor() {
        super(this.helpResponseLabel, 'HelpForm');
    }

    async clickHereButton() {
        await this.helpButton.click();
    }
}

export default HelpForm;
