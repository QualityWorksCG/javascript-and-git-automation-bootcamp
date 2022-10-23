describe('07', () => {
    test('Using the "forEach" array method, print the current element', () => {
        const spyOnLog = vi.spyOn(console, 'log');
        /**
         * You are expected to use the forEach array method
         * 
         * You are expected to use the console.log() method
         * 
         * You are expected to use the template literal syntax
         * Example: `The current element is ....`
         */
        const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        // Your code here

        // Test cases
        expect(spyOnLog).toHaveBeenCalledWith('The current element is 1');
        expect(spyOnLog).toHaveBeenCalledWith('The current element is 2');
        expect(spyOnLog).toHaveBeenCalledWith('The current element is 3');
        expect(spyOnLog).toHaveBeenCalledWith('The current element is 4');
        expect(spyOnLog).toHaveBeenCalledWith('The current element is 5');
        expect(spyOnLog).toHaveBeenCalledWith('The current element is 6');
        expect(spyOnLog).toHaveBeenCalledWith('The current element is 7');
        expect(spyOnLog).toHaveBeenCalledWith('The current element is 8');
        expect(spyOnLog).toHaveBeenCalledWith('The current element is 9');
        expect(spyOnLog).toHaveBeenCalledWith('The current element is 10');
    });
});