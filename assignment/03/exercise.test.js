describe('03', () => {
    it('03. Check if any of two number is 6, if the sum of them makes 6 or if the difference is 6', () => {

        function isSix(x, y) {
            // The following code could be written in a single line, 
            // but we are breaking it down for you to understand better.

            if (x == 6 || y == 6) return true;

            if (x + y == 6) return true;

            if (x - y == 6) return true;

            if (y - x == 6) return true;

            return false;

        }

        // Test cases
        expect(isSix(6, 0)).toBe(true);
        expect(isSix(0, 6)).toBe(true);
        expect(isSix(3, 3)).toBe(true);
        expect(isSix(3, 4)).toBe(false);
        expect(isSix(3, 9)).toBe(true);
        expect(isSix(3, 3)).toBe(true);
        expect(isSix(3, 3)).toBe(true);
    });
});