const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const applicationVersion = "v2.0.1";

async function main() {
    let iteration = 0;
    while (true) {
        iteration++;
        console.log("Server is running", applicationVersion, iteration);
        await sleep(5000);
    }
}

(async () => {
    await main();
})();