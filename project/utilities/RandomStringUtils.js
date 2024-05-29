class RandomStringUtils {
    static generateRandomEmail() {
        const domains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'aol.com'];
        const usernameLength = 10;

        let username = '';
        const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < usernameLength; i++) {
            username += characters.charAt(Math.floor(Math.random() * characters.length));
        }

        const domain = domains[Math.floor(Math.random() * domains.length)];

        return `${username}@${domain}`;
    }

    static generateRandomValidPassword(email) {
        const passwordLength = 10;
        const capitalLetterRegex = /[A-Z]/;
        const numeralRegex = /\d/;
        const cyrillicRegex = /[\u0400-\u04FF]/;

        let password = '';
        while (
            password.length < passwordLength ||
            !capitalLetterRegex.test(password) ||
            !numeralRegex.test(password) ||
            !cyrillicRegex.test(password)
        ) {
            password = '';
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
            for (let i = 0; i < passwordLength; i++) {
                password += characters.charAt(Math.floor(Math.random() * characters.length));
            }
        }
        return password;
    }

    static generateRandomInvalidPassword() {
        const passwordLength = 5;
        const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

        let password = '';
        for (let i = 0; i < passwordLength; i++) {
            password += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return password;
    }
}

export default RandomStringUtils;
