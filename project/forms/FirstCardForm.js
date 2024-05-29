import BaseForm from '../../framework/form/baseForm';
import Label from '../../framework/elements/Label';
import TextField from '../../framework/elements/TextField';
import Button from '../../framework/elements/Button';
import Dropdown from '../../framework/elements/Dropdown';

class FirstCardForm extends BaseForm {
    emailField = new TextField('//input[@placeholder="Your email"]', 'Email Field');
    domainField = new TextField('//input[@placeholder="Domain"]', 'Domain Field');
    passwordField = new TextField('//input[@placeholder="Choose Password"]', 'Password Field');
    dropdownButton = new Button('//div[@class="dropdown__field"]', 'Dropdown button');
    // dropdownListElement = new Dropdown('//div[@class="dropdown__list-item"]', "Dropdown List");
    termsAndConditionsButton = new Button('//span[@class="checkbox__box"]', 'Terms & Conditions Button');
    nextButton = new Button('//a[@class="button--secondary"]', 'Next Button');

    #domainDropdown = new Dropdown('//div[@class="dropdown__header"]', 'Domain Dropdown');

    constructor() {
        super(new Label('//div[@class="login-form"]', 'First Card Form Label'), 'First Card Form');
    }

    async fillEmailField(email) {
        await this.emailField.click();
        await this.emailField.fill('');
        await this.emailField.fill(email);
    }

    async fillDomainField(domain) {
        await this.domainField.click();
        await this.domainField.fill('');
        await this.domainField.fill(domain);
    }

    async fillPasswordField(password) {
        await this.passwordField.click();
        await this.passwordField.fill('');
        await this.passwordField.fill(password);
    }

    async clickDomainDropdown() {
        await this.dropdownButton.click();
    }

    async selectRandomOption(){
        await this.#domainDropdown.selectRandomOption();
    }

    async clickTermsAndConditionsCheckbox() {
        await this.termsAndConditionsButton.click();
    }

    async clickNextButton() {
        await this.nextButton.click();
    }
}

export default FirstCardForm;
