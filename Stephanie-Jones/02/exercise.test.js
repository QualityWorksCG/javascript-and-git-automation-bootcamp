describe('02', () => {
    it('02. Create a new string from any string by taking the last 3 letters of that string and adding it to the front and back.', () => {
        /**
         * If the length of the string is less than 3, return false.
         * 
         * Remember we discussed splice() method in the previous exercise.
         */

        function lastThree(str) {
            // Your code here
            if (str.length<3){
                return false;
            } else if(str.length==3){
                var word= str;
                var output = []
                output.push(word,str,word);
                return output.join("")
            }
            else{
              var concat= str.slice(2,5)
              var newstring = []
              newstring.push(concat,str,concat);
              return newstring.join("")
            }
        }

        // Test cases
        expect(lastThree('hello')).toBe('llohellollo');
        expect(lastThree('wor')).toBe('worworwor');
        expect(lastThree('qw')).toBe(false);
    });
});