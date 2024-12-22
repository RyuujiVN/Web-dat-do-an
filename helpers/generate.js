module.exports.generateString = (length) => {
    const string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghiklmnopqrstuvwxyz0123456789";

    let token = "";
    for (let i = 0; i < length; i++) {
        const index = Math.floor(Math.random() * string.length);
        const char = string.charAt(index);

        token += char;
    }

    return token;
};
