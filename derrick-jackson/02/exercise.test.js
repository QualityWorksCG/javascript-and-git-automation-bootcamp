describe('02', () => {
    it('02. Create a new string from any string by taking the last 3 letters of that string and adding it to the front and back.', () => {
        /**
         * If the length of the string is less than 3, return false.
         * 
         * Remember we discussed splice() method in the previous exercise.
         */

        function lastThree(str) {
            // Your code here

            let strArray = str.slice(-3)
            let fulStr = strArray+str+strArray

            if( str.length < 3) {
                return false
            }

            return fulStr
        }

        // Test cases
        expect(lastThree('hello')).toBe('llohellollo');
        expect(lastThree('wor')).toBe('worworwor');
        expect(lastThree('qw')).toBe(false);
    });
});