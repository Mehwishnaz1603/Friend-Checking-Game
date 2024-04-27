import inquirer from "inquirer";
let isFriend = await inquirer.prompt([{
        name: "name", type: "string", message: "Enter your Friend name:",
    }]);
if (isFriend.name === "Mehwishnaz" || isFriend.name === "Noorulain") {
    console.log(` ${isFriend.name} is your Friend`);
}
else {
    console.log(` ${isFriend.name} is not your Friend`);
}
