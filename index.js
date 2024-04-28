"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var isFriend = await inquirer_1.default.prompt([{
        name: "Friendname", type: "string", message: "Enter your Friend name:",
    }]);
if (isFriend.Friendname === "Mehwishnaz" || isFriend.Friendname === "Noorulain") {
    console.log(" ".concat(isFriend.Friendname, " is your Friend"));
}
else {
    console.log(" ".concat(isFriend.Friendname, " is not your Friend"));
}
