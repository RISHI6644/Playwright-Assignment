import BaseForm from '../../framework/form/BaseForm';
import Label from '../../framework/elements/Label';
import TextField from '../../framework/elements/TextField';
import Button from '../../framework/elements/Button';

class FirstCardForm extends BaseForm {
    emailField = new TextField('//input[@placeholder="Your email"]', 'Email Field');
    domainField = new TextField('//input[@placeholder="Domain"]', 'Domain Field');
    passwordField = new TextField('//input[@placeholder="Choose Password"]', 'Password Field');
    dropdownButton = new Button('//div[@class="dropdown__field"]', 'Dropdown button');
    termsAndConditionsButton = new Button('//span[@class="checkbox__box"]', 'Terms & Conditions Button');
    nextButton = new Button('//a[@class="button--secondary"]', 'Next Button');

    constructor() {
        super(new Label('//div[@class="first-card"]', 'First Card Form Label'), 'First Card Form');
    }
}

export default FirstCardForm;
