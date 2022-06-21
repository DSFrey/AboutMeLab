/*
File: app.js
DATE: 2022-06-21
AUTHOR: DSFrey
*/
'use strict';

var userName
function initialize() {
    console.log('in initialize()');
    greeting()
    prepareQuiz()
}
function greeting() {
    userName = prompt('Welcome to my page. What is your name?');
    document.getElementById('userGreeting').innerHTML = `Hello, ${userName}, welcome to my page!`;
    // console.log(userName);
}
function prepareQuiz() {
    document.getElementById("runQuiz").addEventListener("click", quiz);
}
function quiz() {
    let quizScore = 0
    let question1 = prompt('Was I born already old? yes/no').toLowerCase();
    switch (question1) {
        case ('yes'):
            // console.log('Incorrect');
            alert(`What? No, that doesn't make any sense.`);
            break;
        case ('no'):
            // console.log('Correct');
            quizScore++;
            alert(`That's correct!`);
            break;
        default:
            // console.log('Incomplete');
            alert(`Please follow the directions. No points for you.`);
    }
    let question2 = prompt('Am I an Iowa Hawkeye? yes/no').toLowerCase();
    switch (question2) {
        case ('yes'):
            // console.log('Incorrect');
            alert(`Ew, gross. Go Cyclones!`);
            break;
        case ('no'):
            // console.log('Correct');
            quizScore++;
            alert(`That's right! Go Cyclones!`);
            break;
        default:
            // console.log('Incomplete');
            alert(`Please follow the directions. No points for you.`);
    }
    let question3 = prompt('Have I spent time wrangling children at summer camp? yes/no').toLowerCase();
    switch (question3) {
        case ('yes'):
            // console.log('Correct');
            alert(`Yep. That was tiring.`);
            quizScore++;
            break;
        case ('no'):
            // console.log('Incorrect');
            alert(`Well, I certainly tried to, even if it is like herding cats.`);
            break;
        default:
            // console.log('Incomplete');
            alert(`Please follow the directions. No points for you.`);
    }

    let question4 = prompt('Did I have a job selling used books? yes/no').toLowerCase();
    switch (question4) {
        case ('yes'):
            // console.log('Correct');
            alert(`Yep. Lots of interesting stuff came through there.`);
            quizScore++;
            break;
        case ('no'):
            // console.log('Incorrect');
            alert(`I actually did, sorry.`);
            break;
        default:
            // console.log('Incomplete');
            alert(`Please follow the directions. No points for you.`);
    }

    let question5 = prompt('Do I want to become a mushroom farmer? yes/no').toLowerCase();
    switch (question5) {
        case ('yes'):
            // console.log('Incorrect');
            alert(`You know, I think I'll take a pass on that job.`);
            break;
        case ('no'):
            // console.log('Correct');
            quizScore++;
            alert(`Yeah, let's stick to computers.`);
            break;
        default:
            // console.log('Incomplete');
            alert(`Please follow the directions. No points for you.`);
    }
    switch (quizScore) {
        case (0):
            alert(`Did you even read the page, ${userName}?`);
            break;
        case (1): 
        case (2):
            alert(`Well ${userName}, at least you got ${quizScore} right.`);
            break;
        case (3): 
        case (4):
            alert(`Not bad, ${userName}. You got ${quizScore} correct.`);
            break;
        case (5):
            alert(`Great job, ${userName}! You got a perfect score!`);
            break;
    }
    // console.log(quizScore)
}
