// assume input time is in second

const inputArgs = process.argv.slice(2)
inputArgs.forEach((time) => {
    setTimeout(() => {
        process.stdout.write('\x07');
    }, time * 1000);
});
