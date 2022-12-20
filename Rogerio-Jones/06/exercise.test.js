describe('06', () => {

    // Tip: Use setTimeout to delay the execution of marking

    const listOfPapers = [
        {
            subject: "Maths",
            wasSubmitted: true,
            markPaper: () => {
                const myPromise = new Promise((resolve) => {
                    setTimeout(() => {
                        resolve("Maths paper marked");
                    }, 2000);
                });
                return myPromise
                // add a promise here that resolves after 2 seconds
                // and print "Maths paper marked"
            }
        },
        {
            subject: "Geology",
            wasSubmitted: true,
            markPaper: () => {
                const myPromise = new Promise((resolve) => {
                    setTimeout(() => {
                        
                        resolve("Geology paper marked");
                    }, 2000);
                });
                return myPromise
                // add a promise here that resolves after 2 seconds
                // and print "Geology paper marked"
            }
        },
        {
            subject: "Social Studies",
            wasSubmitted: false,
            markPaper: () => {
                const myPromise = new Promise((resolve) => {
                    setTimeout(() => {
                      resolve("Social Studies paper marked");
                    }, 2000);
                });
                return myPromise
                // add a promise here that resolves after 2 seconds
                // and print "Social Studies paper marked"
            }
        },
    ]

    it('Check if a paper was submitted, and if yes, wait for it to be marked', async () => {
        const spyOnLog = vi.spyOn(console, 'log');

        // Your code here
        for(let assignment of listOfPapers){
            if(assignment.wasSubmitted){
                console.log(await assignment.markPaper())
            }
        }
        
        expect(spyOnLog).toHaveBeenCalledWith("Maths paper marked");
        expect(spyOnLog).toHaveBeenCalledWith("Geology paper marked");
        expect(spyOnLog).not.toHaveBeenCalledWith("Social Studies paper marked");
        expect(listOfPapers[0].markPaper()).toBeInstanceOf(Promise);
        expect(listOfPapers[1].markPaper()).toBeInstanceOf(Promise);
        expect(listOfPapers[2].markPaper()).toBeInstanceOf(Promise);
    });
});