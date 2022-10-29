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

                    setTimeout(() => resolve("Math paper marked"), 2000);

                }).then(

                    function(result){

                        console.log(result);
                    }
                );
            }
        },
        {
            subject: "Geology",
            wasSubmitted: true,
            markPaper: () => {
                // add a promise here that resolves after 2 seconds
                // and print "Geology paper marked"
                return new Promise((resolve, reject) => {

                    setTimeout(() => resolve("Geology paper marked"), 2000);

                }).then(

                    function(result){

                        console.log(result);
                    }
                );
            }
        },
        {
            subject: "Social Studies",
            wasSubmitted: false,
            markPaper: () => {
                // add a promise here that resolves after 2 seconds
                // and print "Social Studies paper marked"
                return new Promise((resolve, reject) => {

                    setTimeout(() => resolve("Social Studies paper marked"), 2000);

                }).then(

                    function(result){

                        console.log(result);
                    }
                );
            }
        },
    ]

    it('Check if a paper was submitted, and if yes, wait for it to be marked', async () => {
        const spyOnLog = vi.spyOn(console, 'log');

        for(let paper of listOfPapers){

            if(paper.wasSubmitted){

                paper.markPaper();
            }
        }

        setTimeout(() => {
            
            expect(spyOnLog).toHaveBeenCalledWith("Maths paper marked");
            expect(spyOnLog).toHaveBeenCalledWith("Geology paper marked");
            expect(spyOnLog).not.toHaveBeenCalledWith("Social Studies paper marked");
            expect(listOfPapers[0].markPaper()).toBeInstanceOf(Promise);
            expect(listOfPapers[1].markPaper()).toBeInstanceOf(Promise);
            expect(listOfPapers[2].markPaper()).toBeInstanceOf(Promise);

        }, 2050); //given more time to ensure it doesn't run before the code it's waiting on

    });
});