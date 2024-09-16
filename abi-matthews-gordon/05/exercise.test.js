describe('05', () => {
    it('Take an array of any length and add all elements to return a sum', () => {

        //first attempt uses a regular for loop
        // const sum = (array) => {

        //     let total = 0;

        //     for (let i = 0; i < array.length; i++) {

        //         total += array[i];
        //     }

        //     return total;
        // }


        //second attempt uses the reduce method to iterate over the array
        //it is also optimized for performance
        const sum = (array) => {

            const total = array.reduce((sumKeeper, value) => {

                return sumKeeper + value;

            }, 0);

            return total;
        }


        // //third & simplier attempt uses a for..of loop to iterate over the array
        // const sum = (array) => {

        //     let total = 0;

        //     for(const value of array){
            
        //     total += value;
        //     }
        //     return total;
        // }


        // Test cases
        expect(sum([1, 2, 3])).toBe(6);
        expect(sum([1, 4, 3, 50, 10])).toBe(68);
        expect(sum([1, 4, 5, 6, 7, 8, 9, 10])).toBe(50);
        expect(sum([1, 4, 6, 7, 8, 9, 10])).toBe(45);
        expect(sum([1, 4, 7, 8, 9, 10])).toBe(39);
        expect(sum([1, 4, 8, 9, 10])).toBe(32);
    });
})