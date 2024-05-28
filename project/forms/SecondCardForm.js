import BaseForm from '../../framework/form/BaseForm';
import Label from '../../framework/elements/Label';

class SecondCardForm extends BaseForm {
    secondCardLabel = new Label('//div[@class="avatar-and-interests__avatar-box"]', 'Second Card Form Label');

    constructor() {
        super(this.secondCardLabel, 'SecondCardForm');
    }
}

export default SecondCardForm;
