const readline = require("readline");

const r = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r.question("Enter number: ", function(n) {
    n = Number(n);
    let prime = true;

    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            prime = false;
            break;
        }
    }

    if (!prime || n < 2) {
        console.log("Not a prime number");
    } else {
        let p = n + 1;

        while (p.toString() != p.toString().split("").reverse().join("")) {
            p++;
        }

        console.log("Next palindrome:", p);
    }

    r.close();
});
