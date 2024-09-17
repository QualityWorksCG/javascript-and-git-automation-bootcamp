describe('06', () => {

    // Tip: Use setTimeout to delay the execution of marking
 //This functions is for marking all papers

 function promiseToMark(sbj) {
    let promise = new Promise(function (resolve, reject) {
        if (setTimeout(() => { console.log("marking " + sbj + " paper...") }, 2000)) {
            resolve(sbj + " paper marked")
        } else {
            reject(sbj + " paper not marked");
        }

    });

    promise.then(
        function (value) { console.log(value) },
        function (error) { console.log(error) }
    )
}
const listOfPapers = [
    {
        subject: "Maths",
        wasSubmitted: true,
        markPaper: () => {

            // add a promise here that resolves after 2 seconds
            // and print "Maths paper marked"
            setTimeout(() => promiseToMark("Maths"));
        }
    },

    {
        subject: "Geology",
        wasSubmitted: true,
        markPaper: () => {

            // // add a promise here that resolves after 2 seconds
            // // and print "Maths paper marked"
            setTimeout(() => promiseToMark("Geology"));
        }
    },

    {
        subject: "Social Studies",
        wasSubmitted: false,
        markPaper: () => {

            // // add a promise here that resolves after 2 seconds
            // // and print "Maths paper marked"
            setTimeout(() => promiseToMark("Social Studies"));
        }
    }
];

it('Check if a paper was submitted, and if yes, wait for it to be marked', async () => {
    const spyOnLog = vi.spyOn(console, 'log');


    for (let paper of listOfPapers) {
        if (paper.wasSubmitted === true) {
            return paper.markPaper

        }
    };


        expect(spyOnLog).toHaveBeenCalledWith("Maths paper marked");
        expect(spyOnLog).toHaveBeenCalledWith("Geology paper marked");
        expect(spyOnLog).not.toHaveBeenCalledWith("Social Studies paper marked");
        expect(listOfPapers[0].markPaper()).toBeInstanceOf(Promise);
        expect(listOfPapers[1].markPaper()).toBeInstanceOf(Promise);
        expect(listOfPapers[2].markPaper()).toBeInstanceOf(Promise);
    });
});