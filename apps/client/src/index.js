const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const applicationVersion = "v1.0.0";

async function main() {
    let iteration = 0;
    while (true) {
        iteration++;
        console.log("Client is running", applicationVersion, iteration);
        await sleep(5000);
    }
}

(async () => {
    await main();
})();