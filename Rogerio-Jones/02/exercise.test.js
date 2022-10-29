describe('02', () => {
    it('02. Create a new string from any string by taking the last 3 letters of that string and adding it to the front and back.', () => {
        /**
         * If the length of the string is less than 3, return false.
         * 
         * Remember we discussed splice() method in the previous exercise.
         */

        function lastThree(str) {
            // Your code here
            if(str.length < 3){
                return false
            }else{
                let ar = [...str]
                let end = ar.slice(-3) 
                ar = ar.concat(end)
                ar = end.concat(ar)
                
                ar = ar.join('')
                return ar
            }
        }

        // Test cases
        expect(lastThree('hello')).toBe('llohellollo');
        expect(lastThree('wor')).toBe('worworwor');
        expect(lastThree('qw')).toBe(false);
    });
});