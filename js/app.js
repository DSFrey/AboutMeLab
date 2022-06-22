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
    let quizScore = 0;
    let output;
    let quizContent = [
        [`Was I born already old? yes/no`,`no`,`What? No, that doesn't make any sense.`,`That's correct!`],
        [`Am I an Iowa Hawkeye? yes/no`,`no`,`Ew, gross. Go Cyclones!`,`That's right! Go Cyclones!`],
        [`Have I spent time wrangling children at summer camp? yes/no`,`yes`,`Actually I have, or at least I tried to, even if it is like herding cats.`,`Yep. That was tiring.`],
        [`Did I have a job selling used books? yes/no`,`yes`,`I actually did, sorry.`,`Yep. Lots of interesting stuff came through there.`],
        [`Do I want to become a mushroom farmer? yes/no`,`no`,`You know, I think I'll take a pass on that job.`,`Yeah, I agree. Let's stick to computers.`]
    ];
    for (let i = 0; i < quizContent.length; i++) {
        let answerGiven = prompt(quizContent[i][0]).toLowerCase();
        if ((answerGiven == 'yes') || (answerGiven == 'no')) {
            if (answerGiven == quizContent[i][1]) {
                output = quizContent[i][3];
                quizScore++;
            } else {
                output = quizContent[i][2];
            }
        } else {
            output = `Please follow the directions. No points for you.`;
        }
        alert(output)
    }
/*
Old code for first 5 questions.
    let question1 = prompt('Was I born already old? yes/no').toLowerCase();
    switch (question1) {
        case ('yes'):
            // console.log('Incorrect');
            output = `What? No, that doesn't make any sense.`;
            break;
        case ('no'):
            // console.log('Correct');
            quizScore++;
            output = `That's correct!`;
            break;
        default:
            // console.log('Incomplete');
            output = `Please follow the directions. No points for you.`;
    }
    alert(output)

    let question2 = prompt('Am I an Iowa Hawkeye? yes/no').toLowerCase();
    switch (question2) {
        case ('yes'):
            // console.log('Incorrect');
            output = `Ew, gross. Go Cyclones!`;
            break;
        case ('no'):
            // console.log('Correct');
            quizScore++;
            output = `That's right! Go Cyclones!`;
            break;
        default:
            // console.log('Incomplete');
            output = `Please follow the directions. No points for you.`;
    }
    alert(output)

    let question3 = prompt('Have I spent time wrangling children at summer camp? yes/no').toLowerCase();
    switch (question3) {
        case ('yes'):
            // console.log('Correct');
            output = `Yep. That was tiring.`;
            quizScore++;
            break;
        case ('no'):
            // console.log('Incorrect');
            output = `Actually I have, or at least I tried to, even if it is like herding cats.`;
            break;
        default:
            // console.log('Incomplete');
            output = `Please follow the directions. No points for you.`;
    }
    alert(output)

    let question4 = prompt('Did I have a job selling used books? yes/no').toLowerCase();
    switch (question4) {
        case ('yes'):
            // console.log('Correct');
            output = `Yep. Lots of interesting stuff came through there.`;
            quizScore++;
            break;
        case ('no'):
            // console.log('Incorrect');
            output = `I actually did, sorry.`;
            break;
        default:
            // console.log('Incomplete');
            output = `Please follow the directions. No points for you.`;
    }
    alert(output)

    let question5 = prompt('Do I want to become a mushroom farmer? yes/no').toLowerCase();
    switch (question5) {
        case ('yes'):
            // console.log('Incorrect');
            output = `You know, I think I'll take a pass on that job.`;
            break;
        case ('no'):
            // console.log('Correct');
            quizScore++;
            output = `Yeah, let's stick to computers.`;
            break;
        default:
            // console.log('Incomplete');
            output = `Please follow the directions. No points for you.`;
    }
    alert(output)
*/
    let question6
    let targetNumber = Math.floor(Math.random() * 10 + 1)
    for (let i = 0; (question6 !== targetNumber) && (i < 4); i++) {
        question6 = parseInt(prompt('Guess a number between 1 and 10'))
        if (isNaN(question6)) {
            output = 'That is not a number.';
        } else if (question6 < targetNumber) {
            output = 'Nope. Too low.';
        } else if (question6 > targetNumber) {
            output = 'Nope. Too high.';
        } else {
            output = `That's right! Good job.`;
            quizScore++
        }
        alert(output)
    }
    if (question6 != targetNumber) {
        alert(`The correct answer was actually ${targetNumber}`)
    }
    let question7
    let favoriteGames = ['Dragon Age','XCOM','XCOM 2','Civilization','Skyrim','Elder Scrolls Online','Pathfinder','Dungeons & Dragons']
    for (let i = 0; (favoriteGames.indexOf(question7) < 0) && (i < 6); i++) {
        question7 = prompt('You know I like Mass Effect. What is another one of my favorite games?');
        if (favoriteGames.indexOf(question7) < 0) {
            output = `Sorry, but that's not on my list.`;
        } else {
            output = `Good guess!`;
            quizScore++;
        }
        alert(output)
    }
    let favoriteGamesOutput = 'Some of my favorite games are '
    for (let i=0; i < favoriteGames.length; i++) {
        if (i === favoriteGames.length - 1) {
            favoriteGamesOutput = `${favoriteGamesOutput}and ${favoriteGames[i]}.`
        } else {
            favoriteGamesOutput = `${favoriteGamesOutput}${favoriteGames[i]}, `
        }
    }
    alert(favoriteGamesOutput)
    switch (quizScore) {
        case (0):
            alert(`Did you even read the page, ${userName}?`);
            break;
        case (1): 
        case (2):
        case (3): 
            alert(`Well ${userName}, at least you got ${quizScore} right.`);
            break;
        case (4):
        case (5):
        case (6):
            alert(`Not bad, ${userName}. You got ${quizScore} correct.`);
            break;
        case (7):
            alert(`Great job, ${userName}! You got a perfect score!`);
            break;
    }
    // console.log(quizScore)
}
