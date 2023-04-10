describe('06', () => {

    // Tip: Use setTimeout to delay the execution of marking

    const listOfPapers = [
        {
            subject: "Maths",
            wasSubmitted: true,
            markPaper: async () => {
                // add a promise here that resolves after 2 seconds
                // and print "Maths paper marked"
                const promise = new Promise ((resolve,reject) => {
                    setTimeout( () => {
                        resolve ("Maths paper marked")
                    }, 2000)
                })

                const value = await promise;
                console.log(value);
            }
        },
        {
            subject: "Geology",
            wasSubmitted: true,
            markPaper: async () => {
                // add a promise here that resolves after 2 seconds
                // and print "Geology paper marked"
                const promise = new Promise ((resolve,reject) => {
                    setTimeout( () => {
                        resolve ("Geology paper marked")
                    }, 2000)
                })

                const value = await promise;
                console.log(value);
            }
        },
        {
            subject: "Social Studies",
            wasSubmitted: false,
            markPaper: async () => {
                // add a promise here that resolves after 2 seconds
                // and print "Social Studies paper marked"
                const promise = new Promise ((resolve,reject) => {
                    setTimeout( () => {
                        resolve ("Social Studies paper marked")
                    }, 2000)
                })

                const value = await promise;
                console.log(value);
            }
        },
    ]

    it('Check if a paper was submitted, and if yes, wait for it to be marked', async () => {
        const spyOnLog = vi.spyOn(console, 'log');

        // Your code here

            const promiseList = listOfPapers.map(async (element) => {
                if (element.wasSubmitted === true){
                    return element.markPaper();
                }
            })

            await Promise.all(promiseList)


        expect(spyOnLog).toHaveBeenCalledWith("Maths paper marked");
        expect(spyOnLog).toHaveBeenCalledWith("Geology paper marked");
        expect(spyOnLog).not.toHaveBeenCalledWith("Social Studies paper marked");
        expect(listOfPapers[0].markPaper()).toBeInstanceOf(Promise);
        expect(listOfPapers[1].markPaper()).toBeInstanceOf(Promise);
        expect(listOfPapers[2].markPaper()).toBeInstanceOf(Promise);
    });
});