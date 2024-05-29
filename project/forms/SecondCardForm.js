import BaseForm from '../../framework/form/baseForm';
import Label from '../../framework/elements/Label';

class SecondCardForm extends BaseForm {
    #secondCardLabel = new Label('//div[@class="avatar-and-interests"]', 'Second Card');

    constructor() {
        super(new Label('//div[@class="avatar-and-interests__avatar-box"]', 'Second Card Form Label'), 'SecondCardForm');
    }

    async isSecondCardVisible(){
        return this.#secondCardLabel.isVisible();
    }
}

export default SecondCardForm;
