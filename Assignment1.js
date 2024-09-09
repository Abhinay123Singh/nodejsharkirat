const fs = require("fs");

function main(filename) {
    fs.readFile(filename, "utf-8", function (err, data) {
        if (err) {
            console.error("Error reading file:", err);
            return;
        }

        let total = 0;
        for (let i = 0; i < data.length; i++) {
            console.log(data[i]);  // Prints each character
            if (data[i] === " ") {
                total++;  // Counts spaces
            }
        }

        console.log("Total spaces:", total);  // Prints the total count of spaces
    });
}

// Call the main function with the correct filename
main("a.txt");
