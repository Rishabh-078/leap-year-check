var readlineSync =require('readline-sync');
var chalk= require('chalk');

console.log("Welcome to game of leap year! \n")
var userName= readlineSync.question(chalk.bold.cyanBright('Whats your Name? '));
console.log(chalk.yellow(`\nWelcome ${userName}! Lets see whether you were born in a Leap Year \n`));
var birthYear= readlineSync.question(chalk.blueBright('Please enter your Birth Year in YYYY format: '));

if(isNaN(birthYear) || birthYear<=1000 || birthYear>=9999 ){
    console.log(chalk.bold.red("\nPlease enter in the specified format!"))
}else{
if (birthYear % 4==0){
if(birthYear % 100==0 && birthYear % 400==0) {
  console.log(chalk.green(`\nCongrats ${userName}! You were born in a leap year`))
}
if(birthYear % 100==0 && birthYear % 400!==0) {
  console.log(chalk.magenta(`\nUnfortunately ${userName}, you were not born in a Leap Year!`))
}
if(birthYear %100 !==0){
  console.log(chalk.green(`\nCongrats ${userName}! You were born in a leap year`))
}
} else{
  console.log(chalk.magenta(`\nUnfortunately ${userName}, you were not born in a Leap Year!`))
}
}
console.log("\nThanks for playing. Do share it on social media")
