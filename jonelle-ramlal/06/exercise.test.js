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
                        resolve(console.log("Maths paper marked"))
                    }
                , 2000);
                });

                
                // const promise = new Promise((resolve, reject) => {
                //     setTimeout(() => {
                //         resolve("Maths paper marked");
                //     },2000);
                // })


                
                
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
                        resolve(console.log("Geology paper marked"))
                    }
                , 2000);
                });
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
                        resolve(console.log("Social Studies paper marked"))
                    }
                , 2000);
                });
            }
        },
    ]

    it('Check if a paper was submitted, and if yes, wait for it to be marked', async () => {
        const spyOnLog = vi.spyOn(console, 'log');

        for (const i of listOfPapers){
            if  (i.wasSubmitted){
                        await i.markPaper()
                    }

        }

        //if(listOfPapers.some(({wasSubmitted})=> wasSubmitted == true)){
        // for (const i in listOfPapers){
        //     console.log(i)
        //     if  (i.wasSubmitted){
        //         const result = await i.markPaper()
        //         console.log(result)
        //     }
        // }    


       
        
        //const wasSubmitted = await Promise;


         expect(spyOnLog).toHaveBeenCalledWith("Maths paper marked");
        expect(spyOnLog).toHaveBeenCalledWith("Geology paper marked");
        expect(spyOnLog).not.toHaveBeenCalledWith("Social Studies paper marked");
        expect(listOfPapers[0].markPaper()).toBeInstanceOf(Promise);
        expect(listOfPapers[1].markPaper()).toBeInstanceOf(Promise);
        expect(listOfPapers[2].markPaper()).toBeInstanceOf(Promise);
    });
});