class ProjectUtilities {
    static validateEmail(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
}

module.exports = ProjectUtilities;
