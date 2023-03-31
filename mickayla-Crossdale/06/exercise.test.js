describe('06', () => {
 
    // Tip: Use setTimeout to delay the execution of marking
    function delay(time_ms)
    {
        return new Promise((resolve, reject) => {
            setInterval(resolve(), time_ms);
        });
    }
 
    const listOfPapers = [
        {
            subject: "Maths",
            wasSubmitted: true,
            markPaper: () => {
                return delay(2000);
            }
        },
        {
            subject: "Geology",
            wasSubmitted: true,
            markPaper: () => {
                return delay(2000);
            }
        },
        {
            subject: "Social Studies",
            wasSubmitted: false,
            markPaper: () => {
                return delay(2000);
            }
        },
    ]
 
    it('Check if a paper was submitted, and if yes, wait for it to be marked', async () => {
        const spyOnLog = vi.spyOn(console, 'log');
 
        for(let i = 0; i < listOfPapers.length; ++i)
        {
            if(listOfPapers[i].wasSubmitted)
            {
                await listOfPapers[i].markPaper();
                let markval = listOfPapers[i].subject + " paper marked";
                console.log(markval);
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