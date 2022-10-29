describe('06', () => {

    // Tip: Use setTimeout to delay the execution of marking

    const listOfPapers = [
        {
            subject: "Maths",
            wasSubmitted: true,
            markPaper: () => {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve("Maths paper marked")
                    }, 2000);
                });
                // add a promise here that resolves after 2 seconds
                // and print "Maths paper marked"
            }
        },
        {
            subject: "Geology",
            wasSubmitted: true,
            markPaper: () => {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve("Geology paper marked")
                    }, 2000);
                });
                // add a promise here that resolves after 2 seconds
                // and print "Geology paper marked"
            }
        },
        {
            subject: "Social Studies",
            wasSubmitted: false,
            markPaper: () => {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve("Social Studies paper marked")
                    }, 2000);
                });
                // add a promise here that resolves after 2 seconds
                // and print "Social Studies paper marked"
            }
        },
    ]

    it('Check if a paper was submitted, and if yes, wait for it to be marked', async () => {
        const spyOnLog = vi.spyOn(console, 'log');

        console.log(listOfPapers[0].markPaper())
        listOfPapers.forEach ( 
            paper => { 
                if (paper.wasSubmitted) paper.markPaper().then((val) => {console.log(val)}) 
            } 
        )

        
        expect(listOfPapers[0].markPaper()).toBeInstanceOf(Promise);
        expect(listOfPapers[1].markPaper()).toBeInstanceOf(Promise);
        expect(listOfPapers[2].markPaper()).toBeInstanceOf(Promise);
        // expect(spyOnLog).toHaveBeenCalledWith("Maths paper marked");
        // expect(spyOnLog).toHaveBeenCalledWith("Geology paper marked");
        // expect(spyOnLog).not.toHaveBeenCalledWith("Social Studies paper marked");
    });
});