// TODO: Refactor validation function to follow the defined validations rules
const isValid = (gamertag) => {
    if(gamertag.length >= 8){
        return true;
    }
    return false;
};
exports.isValid = isValid;
