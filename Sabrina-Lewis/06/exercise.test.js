describe('06', () => {

    // Tip: Use setTimeout to delay the execution of marking

    const listOfPapers = [
        {
            subject: "Maths",
            wasSubmitted: true,
            resultOfMarkedPaper: "Maths paper marked",
            markPaper: () => {
                const promise = new Promise ((resolve, reject)=>{
                    setTimeout (()=> {
                        resolve("Maths paper marked");},
                        2000);
                })
                return promise;
            }  
        },
        {
            subject: "Geology",
            wasSubmitted: true,
            resultOfMarkedPaper: "Geology paper marked",
            markPaper: () => {
                const promise = new Promise ((resolve, reject)=>{
                    setTimeout (()=> {
                 resolve("Geology paper marked");},
                2000);
             })
              return promise;
            }
        },

            {
            subject: "Social Studies",
            wasSubmitted: false,
            resultOfMarkedPaper: "Social Studies paper marked",
            markPaper: () => {
                const promise = new Promise ((resolve, reject)=>{
                    setTimeout (()=> {
                resolve("Social Studies paper marked");},
                2000);
            })
             return promise 
        
             },
         }
    ]

    it('Check if a paper was submitted, and if yes, wait for it to be marked', async () => {
         const spyOnLog = vi.spyOn(console, 'log');
        
         for (const paper of listOfPapers) 
            {
            if(paper.wasSubmitted==true)
            {
                const resultOfMarkedPaper= await paper.markPaper();
                console.log(resultOfMarkedPaper);
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