import BaseForm from '../../framework/form/baseForm';
import HelpForm from '../forms/HelpForm';
import FirstCardForm from '../forms/FirstCardForm';
import SecondCardForm from '../forms/SecondCardForm';
import Label from '../../framework/elements/Label';

class GamePage extends BaseForm {
    helpForm = new HelpForm();
    firstCardForm = new FirstCardForm();
    secondCardForm = new SecondCardForm();

    timerLabel = new Label('//div[@class="timer timer--white timer--center"]', 'Timer Label');

    constructor() {
        super(new Label('//a[@class="login-form__terms-conditions"]', 'Game Page'));
    }

    async getTimerValue(){
        return this.timerLabel.getText();
}
}

export default GamePage;
