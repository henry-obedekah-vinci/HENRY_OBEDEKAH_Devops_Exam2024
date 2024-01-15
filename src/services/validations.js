// TODO: Refactor validation function to follow the defined validations rules
const isValid = (gamertag) => {
    if(gamertag.length >7){
        return true;
    }
    return false;
};
exports.isValid = isValid;
