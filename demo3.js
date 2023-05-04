const fs = require("fs");

fs.writeFileSync("notes.txt", "file was created by node js\n");
fs.appendFileSync("notes.txt", "second line is appended");
