describe('06', () => {

    // Tip: Use setTimeout to delay the execution of marking

    const listOfPapers = [
        {
            subject: "Maths",
            wasSubmitted: true,
            markPaper: (wasSubmitted) => {
                // add a promise here that resolves after 2 seconds
                // and print "Maths paper marked"
                return new Promise((resolve, reject) => {
                    if (wasSubmitted) {
                        setTimeout(resolve(console.log("Maths paper marked")), 2000);
                    }
                });
            }
        },
        {

            subject: "Geology",
            wasSubmitted: true,
            markPaper: (wasSubmitted) => {
                // add a promise here that resolves after 2 seconds
                // and print "Geology paper marked"
                return new Promise((resolve, reject) => {
                    if (wasSubmitted) {
                        setTimeout(resolve(console.log("Geology paper marked")), 2000);
                    }
                });
            }
        },
        {

            subject: "Social Studies",
            wasSubmitted: false,
            markPaper: (wasSubmitted) => {
                // add a promise here that resolves after 2 seconds
                // and print "Social Studies paper marked"
                return new Promise((resolve, reject) => {
                    if (wasSubmitted) {
                        setTimeout(resolve(console.log("Social Studies paper marked")), 2000);
                    }
                });
            }
        },
    ]

    it('Check if a paper was submitted, and if yes, wait for it to be marked', async () => {
        const spyOnLog = vi.spyOn(console, 'log');

        // Your code here
        listOfPapers.forEach(element => {
            element.markPaper(element.wasSubmitted).then((message) => {
                console.log(message)
            }).catch((error) => {
                console.log(error)
            })
        });


        expect(spyOnLog).toHaveBeenCalledWith("Maths paper marked");
        expect(spyOnLog).toHaveBeenCalledWith("Geology paper marked");
        expect(spyOnLog).not.toHaveBeenCalledWith("Social Studies paper marked");
        expect(listOfPapers[0].markPaper()).toBeInstanceOf(Promise);
        expect(listOfPapers[1].markPaper()).toBeInstanceOf(Promise);
        expect(listOfPapers[2].markPaper()).toBeInstanceOf(Promise);
    });
});