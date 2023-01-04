//Dependencies 
var readlineSync = require('readline-sync');

//Welcome Screen
console.log("Welcome to the Quiz Game!");
var userName = readlineSync.question("May I know your name? ");

console.log("Welcome! " + userName + " Now we will play a quiz to test how well you know your friend Gaurav.");

var score = 0;

//Database of Highscores
var highScores = [{
  name: "Gaurav",
  score: 5,
},
{
  name: "Pratheek",
  score: 3,
},
]

//Function to play Quiz
function Quiz(question,answer)
{
  var userAnswer = readlineSync.question(question);
  if (userAnswer === answer)
  {
    console.log("correct");
    score++;
  }
  else
  {
    console.log("wrong");
  }
  console.log("Your current score is: ", score);
  console.log("---------------");
}

//Array and List of questions
var questions = [
  {
    question: "How old am I? ",
    answer: "22",
  },
  {
    question: "Where do I live? ",
    answer: "Kolkata",
  },
  {
    question: "What did I study? ",
    answer: "BCA",
  },
  {
    question: "What is my passion? ",
    answer: "Programming",
  },
  {
    question: "What is my dream company? ",
    answer: "Microsoft",
  },
]

//FOR Loop to play all questions
for(i = 0; i < questions.length; i++)
{
  Quiz(questions[i].question,questions[i].answer);
}

console.log("Congratulations! Your final score is " + score);
console.log("--------------------");

console.log("Here are the highscores. Send me a screenshot of your score so that I can update it!");
for(i = 0; i < highScores.length; i++)
{
  console.log(highScores[i].name + ": " + highScores[i].score);
}