describe('Exercise 02', () => {
    it('02. Create a new string from any string by taking the last 3 letters of that string and adding it to the front and back.', () => {
        /**
         * If the length of the string is less than 3, return false.
         * 
         * Remember we discussed splice() method in the previous exercise.
         */

        function lastThree(str) {
            if (str.length>=3) {
                str_len = 3;

                back = str.substring(str.length-3);
                return back + str + back
            }
                else 
                return false;

        }
        console.log(lastThree('hello'));
        console.log(lastThree('wor'));
        console.log(lastThree('qw'));
        // Test cases
        expect(lastThree('hello')).toBe('llohellollo');
        expect(lastThree('wor')).toBe('worworwor');
        expect(lastThree('qw')).toBe(false);
    });
});