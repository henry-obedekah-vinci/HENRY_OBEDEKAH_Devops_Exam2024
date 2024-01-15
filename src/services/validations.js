// TODO: Refactor validation function to follow the defined validations rules
const isValid = (gamertag) => {
    const specialCharacters = ['$', '#', '@', '!', '%', '&', '*'];

    for (let i = 0; i < specialCharacters.length; i++) {
            if(gamertag.include(specialCharacters[i]) && gamertag.length < 8){
                return true;
            }
        }

    return false;
}

exports.isValid = isValid;