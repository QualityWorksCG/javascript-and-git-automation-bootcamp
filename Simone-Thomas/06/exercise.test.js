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
                });
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
                });
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
                    }, 2000);
                });
            }
        },
    ]

    it('Check if a paper was submitted, and if yes, wait for it to be marked', async () => {
        const spyOnLog = vi.spyOn(console, 'log');

        // Your code here
        for (let i = 0; i < listOfPapers.length; i++) {
            const paper = listOfPapers[i];
            if (paper.wasSubmitted) {
                const result = await paper.markPaper();
                console.log(result);
            }
        }


        expect(spyOnLog);
        expect(spyOnLog);
        expect(spyOnLog);
        expect(listOfPapers[0].markPaper());
        expect(listOfPapers[1].markPaper());
        expect(listOfPapers[2].markPaper());
    });
});