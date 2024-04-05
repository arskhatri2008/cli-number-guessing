#! /usr/bin/env node
import inquirer from "inquirer";
// computer will generate a random number
// user will guess the number
// compare user input with computer generated number and show the result
const randomNumber = Math.floor(Math.random() * 10) + 1;
// user input
const answers = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "Please guess the number between 1 to 10"
    }
]);
if (answers.userGuessNumber === randomNumber) {
    console.log("Congratulations! you guess the right number");
}
else if (answers.userGuessNumber > randomNumber) {
    console.log("You guess the wrong number. The right number was: ", randomNumber);
}
else if (answers.userGuessNumber < randomNumber) {
    console.log("You guess the wrong number. The right number was: ", randomNumber);
}
else {
    console.log("Please enter a valid number");
}
