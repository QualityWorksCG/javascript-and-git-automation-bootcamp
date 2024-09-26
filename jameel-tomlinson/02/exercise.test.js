// const { l } = require("vitest/dist/index-40e0cb97");

describe('02', () => {
    it('02. Create a new string from any string by taking the last 3 letters of that string and adding it to the front and back.', () => {
        /**
         * If the length of the string is less than 3, return false.
         * 
         * Remember we discussed splice() method in the previous exercise.
         */

        function lastThree(str) {
            if (str.length < 3 ) return false
            let lastThreeLetters = str.slice(-3)

            return `${lastThreeLetters}${str}${lastThreeLetters}`
        }

        // Test cases
        expect(lastThree('hello')).toBe('llohellollo');
        expect(lastThree('wor')).toBe('worworwor');
        expect(lastThree('qw')).toBe(false);
    });
});