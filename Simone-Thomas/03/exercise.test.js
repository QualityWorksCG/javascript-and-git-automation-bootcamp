describe('03', () => {
    it('03. Check if any of two number is 6, if the sum of them makes 6 or if the difference is 6', () => {

        function isSix(x, y) 
        {
            // Your code here
            
                return ((x == 6 || y == 6) || (x + y == 6));
        

        }

        // Test cases
        expect(isSix(6, 0));
        expect(isSix(0, 6));
        expect(isSix(3, 3));
        expect(isSix(3, 4));
        expect(isSix(3, 9));
        expect(isSix(3, 3));
        expect(isSix(3, 3));
    });
});