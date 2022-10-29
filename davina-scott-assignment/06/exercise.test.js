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
                        resolve('Maths paper marked');
                        reject('Paper was not marked');
                    }, 2000);
                    // return myPromise
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
                        resolve('Geology paper marked');
                        reject('Paper was not marked');
                    }, 2000);
                });
                // return myPromise

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
                        resolve('Social Studies paper marked');
                        reject('Paper was not marked');
                    }, 2000);
                    
                });
                // return myPromise
            }
        },
    ]

    it('Check if a paper was submitted, and if yes, wait for it to be marked', async () => {
        const spyOnLog = vi.spyOn(console, 'log');

        // Your code here
        listOfPapers.forEach(element => {
            const arrayResult = element.markPaper()
            console.log(arrayResult)
            if (element.wasSubmitted = true){
                arrayResult.then((value) => {
                    console.log(value);
                }).catch((error) => {
                        expect(error).toBe('Promise rejected');
                })
            }
        });


        expect(spyOnLog).toHaveBeenCalledWith("Maths paper marked");
        expect(spyOnLog).toHaveBeenCalledWith("Geology paper marked");
        expect(spyOnLog).not.toHaveBeenCalledWith("Social Studies paper marked");
        expect(listOfPapers[0].markPaper()).toBeInstanceOf(Promise);
        expect(listOfPapers[1].markPaper()).toBeInstanceOf(Promise);
        expect(listOfPapers[2].markPaper()).toBeInstanceOf(Promise);
    });
});