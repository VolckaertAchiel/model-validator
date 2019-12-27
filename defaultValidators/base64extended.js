module.exports = {
    Name : 'Base64ext',
    Validate : (value,propName) => {
        const base64Re = /^[a-zA-z0-9-_\/,.;:° ()Ø=+%ù`*¨^]*$/;
        if (!base64Re.test(value)) {
            throw Error(propName+' was not valid');
        }
        return true;
    }
}