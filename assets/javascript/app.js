//initialize page
//create object with question sub-objects.
//question objects contain question, answers, and correct answer atributes.
//populate html card with first question, and possible answers in radio buttons
//set timer - 30 seconds
//initialize confirmation button
//alert button with yes/no confirmation that starts upon confirmation button click
//no confirmation results in timer continuation
//lack of confirmation results in a loss, and a reset of the timer, new question population.
//yes confirmation results in logging of question correctness, reet of page with new question object, Timer reset
//at end of questions, display number of correct answers, wrong answers, and the right answers to the questions guessed incorrectly.
//total reset button

$(document).ready(function(){;
var questionArray= [
    {
        question:"How tall is the tallest Pyramid at Giza?",
        answers: ["481 Feet", "400 Feet", "140 Meters", "1000 feet"],
        correct:0
    },
    {
        question:"Whats the name of the tallest Pyramid?",
        answers:["Khafre's Pyramid", "Khufu's Pyramid", "Menkaure's Pyramid", "Tutankhamun's Pyramid"],
        correct:1
    },
    {
        question: "What are The Pyramids made out of?",
        answers: ["Limestone", "Basalt", "Sandstone", "Granite"],
        correct:3
    },
    {
        question: "What were the Pyramids capped with after construction finished?",
        answers:["Gold and Basalt", "Gold and Limestone", "Bronze and Granite", "Granite and Gold"],
        correct:1
    },
    {
        question: "How may Pyramids are at Giza?",
        answers:["3", "2", "6", "10"],
        correct: 2
    },
    {
        question:"how tall is the shortest Pyramid at Giza?",
        answers: ["50 Feet", "210 Feet", "106 Feet", "80 Feet"], 
        correct:2
    },
    {
        question:"When was the title of tallest man made structure taken from the Pyramid of Khufu?",
        answers: ["852 A.D.", "1835 A.D.", "204 B.C.", "1311 A.D."],
        correct: 3
    },
    {
        question: "What are the three Pyramids north of Khufu called?",
        answers:["The Pyrmids of the Builders", "The Queen's Pyramids", "Tomb of Hemon", "The Great Sphinx Pyramid"],
        correct:1
    },
    {
        question:"What group of people mainly built The Pyramids?",
        answers:["Priests", " Foreign Slaves", "Egyptian Farmers", "Aliens"], 
        correct: 2
    },
    {
        question: "Every Pyramid has a base that is a: ",
        answers: ["Perfect Rectangle", "Perfect Triangle", "Perfect Square", "Perfect Circle"],
        correct:2
    }
]

var timer = 0;
var intervalId;
var questionCounter=0;
var answerCounter=0;
var correctAnswers=0;
var wrongAnswers=0;
var selectedAnswer;
var rightAnswer;
$("#submitRow").addClass("d-none");

$("#start-game").on("click", function() {
    console.log(timer);
    $("#start-game").addClass("hidden");
    popQuestion();
    resetTimer();
});

function decrement(){
    timer--;
    $("#time-remaining").html("<h2> Time Remaining: "+ timer+ "</h2>");
    if (timer===0){
        gameEnd();
    }
}
function resetTimer() {
    clearInterval(intervalId);
    timer = 3000;
    intervalId = setInterval(decrement, 1000);
    decrement();
};

function popQuestion() {
    if (questionCounter ===10){
        gameEnd();
    }
    else {    
        console.log(questionCounter);
        $("#answerRow").empty();
        $("#questionRow").empty();
        question = questionArray[questionCounter].question;
        $("#questionRow").append(question);
        questionArray[questionCounter].answers.forEach(element => {
            var button=$("<button>");
            button.addClass("btn btn-primary btn-answer");
            button.attr("correctAnswer", questionArray[questionCounter].answers[questionArray[questionCounter].correct]);
            button.text(element);
            $("#answerRow").append(button);
            $("#submitRow").removeClass("d-none");
        });
    };
};
$(document).on("click", ".btn-answer", function(){
    selectedAnswer = $(this).text();
    rightAnswer = $(this).attr("correctAnswer");
    console.log(selectedAnswer);
    console.log(rightAnswer);

});

$(document).on("click", "#submit", function(){
    if (rightAnswer === selectedAnswer){
        correctAnswers++;
        questionCounter++;
        popQuestion();
        resetTimer();
        console.log("question Counter: " + questionCounter);
        console.log("Correct Answers: " +correctAnswers);
        console.log("wrong Asnwers: "+wrongAnswers);
    }
    else {
        wrongAnswers++;
        questionCounter++;
        popQuestion();
        resetTimer();
    }
});
function gameEnd(){
    $("#answerRow").empty();
    $("#questionRow").empty();
    $("#submit").empty();
    $("#submit").removeClass("btn btn-primary")
    clearInterval(intervalId);
    console.log(questionCounter);
    console.log(correctAnswers);
    console.log(wrongAnswers);
    $("#submitRow").remove();
    $("#questionRow").append("<h1>Game Over!</h1>");
    $("#answerRow").append("<p> Correct Answers: "+ correctAnswers + " Wrong Answers: "+ wrongAnswers + "</p>");
};
// me trying to figure out how to clear the screen at game end by removing divs. it didn't work.
// function removeElement(id) {
//     var elem = document.getElementById(id);
//     return elem.parentNode.removeChild(elem);
// }
});