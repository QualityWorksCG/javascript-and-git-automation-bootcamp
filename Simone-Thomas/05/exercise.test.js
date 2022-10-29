describe('05', () => {
    it('Take an array of any length and add all elements to return a sum', () => {


        const sum = (array) => 
        {
         
            

                let sum = 0;
                for (let i = 0; i < array.length; i++) {
                    sum += array[i];
                }
                return sum;
    
    

        }

        // Test cases
       
        expect(sum([1, 4, 3, 50, 10]));
        expect(sum([1, 4, 5, 6, 7, 8, 9, 10]));
        expect(sum([1, 4, 6, 7, 8, 9, 10]));
        expect(sum([1, 4, 7, 8, 9, 10]));
        expect(sum([1, 4, 8, 9, 10]));
    });
})