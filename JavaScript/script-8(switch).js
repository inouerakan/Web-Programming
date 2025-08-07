const prompt = require('prompt-sync')();
var val = prompt("Type number: ");
switch (val) {
    case "1":
        console.log("You typed one");
        break
    case "2":
        console.log("You typed two");
        break
    case "3":
        console.log("You typed three");
        break
    default: console.log("You typed something else");
        break;
}