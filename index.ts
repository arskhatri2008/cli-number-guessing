import inquirer from "inquirer"

// computer will generate a random number
// user will guess the number
// compare user input with computer generated number and show the result

const randomNumber = 13

// const randomNumber = Math.floor(Math.random() * 10) + 1;
// console.log(randomNumber)

// console.log("Guess the number between 1 to 10")

// user input
// inquirer.prompt([
//     {
//         name: "userGuessNumber",
//         type: "number",
//         message: "Enter your guess number"
//     }
const answers = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "Enter your guess number"
    }
])

if(answers.userGuessNumber === randomNumber){
    console.log("Congratulations! you guess the right number")
}
else{
    console.log("You guess the wrong number")
}