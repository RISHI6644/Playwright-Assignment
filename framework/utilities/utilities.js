class Utilities {
    static generateRandomString(length) {
        return Math.random().toString(36).substring(2, length + 2);
    }
}

module.exports = Utilities;
