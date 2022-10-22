const { execSync } = require("child_process");

const [, , exercise] = process.argv;

if (!exercise) {
    console.log("Please specify an exercise");
    process.exit(1);
}

try {
    console.clear();
    execSync(`vitest run -t "${exercise}.*" --passWithNoTests`, {
        stdio: "inherit",
    });
} catch (error) {
    console.log("Failed. Try again!");
}