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
var correctAnswers=0;
var wrongAnswers=0;
var selectedAnswer;
var rightAnswer;


//start game on-click function, hides start button, displays the submit row and runs the question population function and timer function
$("#start-game").on("click", function() {
    $("#start-game").addClass("hidden");
    $("submitRow").addClass("display:flex");
    popQuestion();
    resetTimer();
});

//timer countdown function updates dom, and checks if time has run out
function decrement(){
    timer--;
    $("#time-remaining").html("<h2> Time Remaining: "+ timer+ "</h2>");
    if (timer===0){
        gameEnd();
    }
}
// basic timer function
function resetTimer() {
    clearInterval(intervalId);
    timer = 30;
    intervalId = setInterval(decrement, 1000);
    decrement();
};
// checks if the quiz is over, else emptys previous question, populates question div with question
// and buttons with new answers. also resets correct/selected variables every time.
function popQuestion() {
    question="";
    if (questionCounter ===10){
        gameEnd();
        questionCounter = 0;
    }
    else {    
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
// when one option is selected this updates the selected/right answer variables to store until submission.
$(document).on("click", ".btn-answer", function(){
    selectedAnswer = $(this).text();
    rightAnswer = $(this).attr("correctAnswer");
});

//runs submit check on selected vs right answers, updates counters accordingly and starts the next question
$(document).on("click", "#submit", function(){
    if (rightAnswer === selectedAnswer){
        correctAnswers++;
        questionCounter++;
        popQuestion();
        resetTimer();
    }
    else {
        wrongAnswers++;
        questionCounter++;
        popQuestion();
        resetTimer();
    }
});
//empties all divs, clears timer, updates divs with correct/wrong answer variables and a cool flashing game over header.
function gameEnd(){
    $("#answerRow").empty();
    $("#questionRow").empty();
    $("#submit").empty();
    clearInterval(intervalId);
    $("#timeRow").remove();
    $("#questionRow").append("<h1>Game Over!</h1>");
    $("#start-game").addClass("hidden");

    $("#answerRow").append("<p> Correct Answers: "+ correctAnswers + " Wrong Answers: "+ wrongAnswers + "</p>");
    var button=$("button").attr("class","btn reset-button").on("click", function(){
        $("#button").attr("value", "Reset")
        question = questionArray[questionCounter].question;
        wrongAnswers=0;
        correctAnswers=0;
        questionCounter=0;
        popQuestion();
        resetTimer();

    });
    $("submitRow").append(button);
};
});