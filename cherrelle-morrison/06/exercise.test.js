describe('06', () => {

    // Tip: Use setTimeout to delay the execution of marking

    const listOfPapers = [
        {
            subject: "Maths",
            wasSubmitted: true,
            markPaper: () => {
                // add a promise here that resolves after 2 seconds
                // and print "Maths paper marked"

              return new Promise((resolve,reject) => {
                setTimeout(() => {
                    console.log("Maths paper marked");
                    resolve()
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
                return new Promise((resolve,reject) => {
                    setTimeout(() => {
                        console.log("Geology paper marked");
                        resolve()
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
                return new Promise((resolve,reject) => {
                    setTimeout(() => {
                        console.log("Social Studies paper marked");
                        resolve()
                    }, 2000);                  
                })
            }
        },
    ]

    it('Check if a paper was submitted, and if yes, wait for it to be marked', async () => {
        const spyOnLog = vi.spyOn(console, 'log');

        // Your code here
        for(let i =0; i < listOfPapers.length; i++){
            if(listOfPapers[i].wasSubmitted){
                await listOfPapers[i].markPaper()
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
        // Your code here

        // function getPromise(param) {
        //     return new Promise((resolve)=> {
        //         resolve(param);
        //     });
        // }
        // await expect(getPromise('Maths paper marked')).resolves.toEqual('Maths paper marked');
        // await expect(getPromise('Geology paper marked')).resolves.toEqual('Geology paper marked');
        // await expect(getPromise('Social Studies paper marked')).resolves.toEqual('Social Studies paper marked');