import BaseForm from '../../framework/form/BaseForm';
import Label from '../../framework/elements/Label';
import Button from '../../framework/elements/Button';

class MainPage extends BaseForm {
    #hereButton = new Button('//a[@class="start__link"]', 'Here Button');

    constructor() {
        super(new Label('//div[@class="logo__icon"]', 'Main Page Label'), 'Main Page');
    }

    async clickHereButton() {
        await this.#hereButton.click();
    }
}

export default MainPage;
