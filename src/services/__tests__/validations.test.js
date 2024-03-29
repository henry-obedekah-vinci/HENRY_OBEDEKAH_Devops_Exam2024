// TODO: Create tests suite for validation function
const { isValid } = require('../validations');

describe('validations tests suites - isValid', () => {
    //test 1
    test('should return true if gamerTag.length >= 8', () => {
        expect(isValid('HenryObedekah')).toBe(true);
    });


    test('Invalid - gamertag length must be at least 8 characters', () => {
        const result = isValid('Henry');
        expect(isValid(result)).toBe(false);
    });

   //test 2
   test('should return true if gamerTag contains special characters', () => {
    expect(isValid('gamerTag$')).toBe(true);
    });

    //test 3
    test('Invalid - gamertag must contain at least a number', () => {
        expect(isValid('gamerTag$')).toBe(false);
    });

});
