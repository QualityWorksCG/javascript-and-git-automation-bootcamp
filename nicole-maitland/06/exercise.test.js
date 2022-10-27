describe('06', () => {
    //From the following list of papers check if each individual one is submitted, and if so send that paper for marking which is an async function.

    // Tip: Use setTimeout to delay the execution of marking

    const listOfPapers = [
        {
            subject: "Maths",
            wasSubmitted: true,
            markPaper: () => {
                const promise = new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve('Maths paper marked');
                    }, 2000);
                });
                //2000 
            }
        }, {

            subject: "Geology",
            wasSubmitted: true,
            markPaper: () => {
                const promise = new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve('Geology paper marked');
                    }, 2000);
                });
            }
        },
        {
            subject: "Social Studies",
            wasSubmitted: false,
            markPaper: () => {
                const promise = new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve('Social Studies paper marked');
                    }, 2000);
                });
            }
        },
    ]

    it('Check if a paper was submitted, and if yes, wait for it to be marked', async () => {
        const spyOnLog = vi.spyOn(console, 'log');

        // Your code here


        expect(spyOnLog).toHaveBeenCalledWith("Maths paper marked");
        expect(spyOnLog).toHaveBeenCalledWith("Geology paper marked");
        expect(spyOnLog).not.toHaveBeenCalledWith("Social Studies paper marked");
        expect(listOfPapers[0].markPaper()).toBeInstanceOf(Promise);
        expect(listOfPapers[1].markPaper()).toBeInstanceOf(Promise);
        expect(listOfPapers[2].markPaper()).toBeInstanceOf(Promise);
    });
});