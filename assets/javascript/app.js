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

var objectObj= {
    q1:{
        question:"How tall is the tallest Pyramid at Giza?",
        answers: ["481 Feet", "400 Feet", "140 Meters", "1000 feet"],
        correct:"481 Feet"
    },
    q2:{
        question:"Whats the name of the tallest Pyramid?",
        answers:["Khafre's Pyramid", "Khufu's Pyramid", "Menkaure's Pyramid", "Tutankhamun's Pyramid"],
        correct:"Khufu's Pyramid"
    },
    q3:{
        question: "What are The Pyramids made out of?",
        answers: ["Limestone", "Basalt", "Sandstone", "Granite"],
        correct: "Granite"
    },
    q4:{
        question: "What were the Pyramids capped with after construction finished?",
        answers:["Gold and Basalt", "Gold and Limestone", "Bronze and Granite", "Granite and Gold"],
        correct:"Gold and Limestone"
    },
    q5:{
        question: "How may Pyramids are at Giza?",
        answers:["3", "2", "6", "10"],
        correct: "6"
    },
    q6:{
        question:"how tall is the shortest Pyramid at Giza?",
        answers: ["50 Feet", "210 Feet", "106 Feet", "80 Feet"], 
        correct: "106 Feet"
    },
    q7:{
        question:"When was the title of tallest man made structure taken from the Pyramid of Khufu?",
        answers: ["852 A.D.", "1835 A.D.", "204 B.C.", "1311 A.D."],
        correct: "1311 A.D."
    },
    q8:{
        question: "What are the three Pyramids north of Khufu called?",
        answers:["The Pyrmids of the Builders", "The Queen's Pyramids", "Tomb of Hemon", "The Great Sphinx"],
        correct: "The Queen's Pyramids"
    },
    q9:{
        question:"What group of people mainly built The Pyramids?",
        answers:["Priests", " Foreign Slaves", "Egyptian Farmers", "Aliens"], 
        correct: "Egyptian Farmers"
    },
    q10:{
        question: "Every Pyramid has a base that is a: ",
        answers: ["Perfect Rectangle", "Perfect Triangle", "Perfect Square", "Perfect Circle"],
        correct:"Perfectly Square"
    }
}

var timer = 0;
var intervalId;
var currentQuestion = "";
var currentAnswerBank = [];
var currentRightAnswer = "";

function resetTimer() {
    clearInterval(intervalId);
    timer = 30;
    intervalId = setInterval(decrement, 1000);
};
function popQuestion() {
    $("#timer").
};
