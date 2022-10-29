describe('02', () => {
    it('02. Create a new string from any string by taking the last 3 letters of that string and adding it to the front and back.', () => {
        /**
         * If the length of the string is less than 3, return false.
         * 
         * Remember we discussed splice() method in the previous exercise.
         */

        function lastThree(str) {
          //your code here
            var str1 = "";
             if (str.length < 3) {
               return false;
             } else {
               str1 = str.slice(str.length - 3, str.length);
               return str1 + str + str1;
             }
           }
       
           console.log(lastThree('hello'));

        // Test cases
        expect(lastThree('hello')).toBe('llohellollo');
        expect(lastThree('wor')).toBe('worworwor');
        expect(lastThree('qw')).toBe(false);
    });
});