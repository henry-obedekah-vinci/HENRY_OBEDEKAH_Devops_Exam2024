// TODO: Create tests suite for validation function
const { isValid } = require('../validations');

describe('validations tests suites - isValid', () => {
    //test 1
    test('should return true if gamerTag.length > 7', () => {
        const result = isValid('HenryOBDK');
        expect(isValid(result)).toBe(true);
    });

});
