let x = () => {
  let listOfPapers = [
    {
      subject: "Maths",
      wasSubmitted: true,
      markPaper: async () => {
        await new Promise((resolve) => {
          setTimeout(() => {
            resolve(console.log("Maths paper marked"));
            // add a promise here that resolves after 2 seconds
            // and print "Maths paper marked"
          }, 2000);
        });
      },
    },
    {
      subject: "Geology",
      wasSubmitted: true,
      markPaper: async () => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(console.log("Geology paper marked"));
          }, 2000);
        });
      },
    },
    {
      subject: "Social Studies",
      wasSubmitted: false,
      markPaper: async () => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(console.log("Social Studies paper marked"));
          }, 2000);
        });
      },
    },
  ];

  listOfPapers.forEach(async (p) => {
    if (p.wasSubmitted) {
      p.markPaper();
    }
  });
};

x();
