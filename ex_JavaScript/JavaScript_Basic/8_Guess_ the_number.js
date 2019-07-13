/*
Write a JavaScript program 
where the program takes a random integer between 1 to 10,
the user is then prompted to input a guess number. 
If the user input matches with guess number, 
the program will display a message "Good Work" 
otherwise display a message "Not matched"
*/

let guess = prompt('Enter, your number (between 1 to 10):');
let randomNumber = Math.ceil(Math.random() * 10);

if (guess < 1 || guess > 10) {
    console.log('Sorry, please re-enter');
} else {
    if (guess == randomNumber) {
        console.log('Good Work');
    } else {
        console.log(`Not matched, the result is ${randomNumber}`);
    }
}


