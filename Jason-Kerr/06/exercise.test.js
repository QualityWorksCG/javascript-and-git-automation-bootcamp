describe("06", () => {
  // Tip: Use setTimeout to delay the execution of marking

  const listOfPapers = [
    {
      subject: "Maths",
      wasSubmitted: true,
      markPaper: async () => {
        return new Promise(async (resolve) => {
          // Simulate server latency with 2 second delay
          await setTimeout(
            () => resolve(console.log("Maths paper marked")),
            2000
          );
        });
      },
    },
    {
      subject: "Geology",
      wasSubmitted: true,
      markPaper: () => {
        return new Promise(async (resolve) => {
          // Simulate server latency with 2 second delay
          await setTimeout(
            () => resolve(console.log("Maths paper marked")),
            2000
          );
        });
        // add a promise here that resolves after 2 seconds
        // and print "Geology paper marked"
      },
    },
    {
      subject: "Social Studies",
      wasSubmitted: false,
      markPaper: () => {
        return new Promise(async (resolve) => {
          // Simulate server latency with 2 second delay
          await setTimeout(
            () => resolve(console.log("Maths paper marked")),
            2000
          );
        });
        // add a promise here that resolves after 2 seconds
        // and print "Social Studies paper marked"
      },
    },
  ];

  it("Check if a paper was submitted, and if yes, wait for it to be marked", async () => {
    const spyOnLog = vi.spyOn(console, "log");
    listOfPapers.forEach(async (p) => {
      if (p.wasSubmitted) {
        p.markPaper();
        //  Why  could this not
        console.log(p.subject + " paper marked");
      }
    });

    // Your code here

    expect(spyOnLog).toHaveBeenCalledWith("Maths paper marked");
    expect(spyOnLog).toHaveBeenCalledWith("Geology paper marked");
    expect(spyOnLog).not.toHaveBeenCalledWith("Social Studies paper marked");
    expect(listOfPapers[0].markPaper()).toBeInstanceOf(Promise);
    expect(listOfPapers[1].markPaper()).toBeInstanceOf(Promise);
    expect(listOfPapers[2].markPaper()).toBeInstanceOf(Promise);
  });
});
