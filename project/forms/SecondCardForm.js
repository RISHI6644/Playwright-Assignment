import BaseForm from '../../framework/form/BaseForm';
import Label from '../../framework/elements/Label';

class SecondCardForm extends BaseForm {
    constructor() {
        super(new Label('//div[@class="avatar-and-interests__avatar-box"]', 'Second Card Form Label'), 'SecondCardForm');
    }
}

export default SecondCardForm;
