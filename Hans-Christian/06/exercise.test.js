describe('Exercise 06', () => {

    // Tip: Use setTimeout to delay the execution of marking

    const listOfPapers = [
        {
            subject: "Maths",
            wasSubmitted: true,
            markPaper: async () => {
                
                    await new Promise(function (resolve, reject) {
                    
                        setTimeout(resolve, 2000);
               
                    });
                console.log("Maths paper marked");
                 
            }
        },
        {
            subject: "Geology",
            wasSubmitted: true,
            markPaper: async () => {
                await new Promise(function (resolve, reject) {

                    setTimeout(resolve, 2000);
                
                });
                console.log("Geology paper marked");
            }
        },
        {
            subject: "Social Studies",
            wasSubmitted: false,
            markPaper: async () => {
                await new Promise(function (resolve, reject) {


                    setTimeout(resolve, 2000);
               
                });
                console.log("Social Studies paper marked");
            }
        },
    ]

    it('Check if a paper was submitted, and if yes, wait for it to be marked', async () => {
        const spyOnLog = vi.spyOn(console, 'log');

       async function paperSubmitted() {
        return new Promise((Submitted, Null) => {
            Submitted('Paper will be marked.')
        })
       }

       Try {
            const value = await paperSubmitted()
            console.log(value)
        } catch (error) {
            console.log(error)
        }

        expect(spyOnLog).toHaveBeenCalledWith("Maths paper marked");
        expect(spyOnLog).toHaveBeenCalledWith("Geology paper marked");
        expect(spyOnLog).not.toHaveBeenCalledWith("Social Studies paper marked");
        expect(listOfPapers[0].markPaper()).toBeInstanceOf(Promise);
        expect(listOfPapers[1].markPaper()).toBeInstanceOf(Promise);
        expect(listOfPapers[2].markPaper()).toBeInstanceOf(Promise);
    });
});