describe('06', () => {

    // Tip: Use setTimeout to delay the execution of marking

    const listOfPapers = [
        {
            subject: "Maths",
            wasSubmitted: true,
            markPaper: () => {
                // add a promise here that resolves after 2 seconds
                // and print "Maths paper marked"
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve("Maths paper marked");
                    }, 2000);
                })
            }
        },
        {
            subject: "Geology",
            wasSubmitted: true,
            markPaper: () => {
                // add a promise here that resolves after 2 seconds
                // and print "Geology paper marked"
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve("Geology paper marked");
                    }, 2000);
                })
            }
        },
        {
            subject: "Social Studies",
            wasSubmitted: false,
            markPaper: () => {
                // add a promise here that resolves after 2 seconds
                // and print "Social Studies paper marked"
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve("Social Studies paper marked");
                    }, 2000)
                })
            }
        },
    ]

    it('Check if a paper was submitted, and if yes, wait for it to be marked', async () => {
        const spyOnLog = vi.spyOn(console, 'log');

        // Loop through the list of papers and mark them
        // if they were submitted
        // Use await to wait for the promise to resolve
        // and then print the result


        for (let paper of listOfPapers) {
            if (paper.wasSubmitted) {
                await paper.markPaper().then((result) => {
                    console.log(result);
                })
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