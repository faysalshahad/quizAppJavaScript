const startButton = document.getElementById("start-btn");

/**Calling startGame Function */
startButton.addEventListener("click", startGame);

const nextButton = document.getElementById("next-btn");

nextButton.addEventListener("click", ()=>{
    /**increamenting the value to display next questions */
currentQuestionIndex++;
/**calling setNextQuestion function */
setNextQuestion();
});

const questionContainerElement = document.getElementById("question-container");

let shuffledQuestions, currentQuestionIndex;

const questionElement = document.getElementById("question");

const answerButtonElement = document.getElementById("answer-buttons");

function startGame() {

    /**Testing the function */
    console.log("Start button has been clicked.");
    /**Hiding the Start Button after the code is being started */
    startButton.classList.add("hide");
    /**Shuffling Questions */
    shuffledQuestions = questions.sort(()=>{Math.random() - .5});
    /**Setting  currentquestionIndex to 0*/
    currentQuestionIndex = 0;
    /**Removing the hide class from question container */
    questionContainerElement.classList.remove("hide");
    /**Calling the setNextQuestion function */
    setNextQuestion();
    
}

function setNextQuestion() {
    /**Resetting the answers, question and div back to the default when we
     * set a new question everytime
     */
    resetState();

    /**Suffling the Questions */
    showQuestion(shuffledQuestions[currentQuestionIndex]);
    
}

function showQuestion(question) {

    /**Displaying the questions */
    questionElement.innerText = question.question;

    /**Looping Thorugh the answers of our question
     * here answer pointing out the arrow is the parameter.*/
    question.answers.forEach(answer => {
        /**Creating button for each one of the answers */
        const button = document.createElement("button");
        /**Defining the text of the button as same as the answers */
        button.innerText = answer.text;
        /**Setting our class to the button which is btn class */
        button.classList.add("btn");
        /**Checking if the answer is correct */
        if (answer.correct) {
            /**We are only setting this for the button with the correct answer */
            button.dataset.correct = answer.correct;
            
        }
        /**Adding event listener to the button and calling the function selectAnswer */
        button.addEventListener("click", selectAnswer);
        /**Adding the button variable which we have created to the 
         * answerButtonElement. This appendchild method will add
         * buttons relevent to the answer options. There will be as
         * many as buttons as the answer options defined to each question. */
        answerButtonElement.appendChild(button);
    });
    
}

function resetState() {
    /**Resetting the body colour to neutral for every new question */
    clearStatusClass(document.body);
    /**Hiding the next button. Everytime we click an answer we would like to
     * hide the next button everytime.*/
    nextButton.classList.add("hide");
    /**We want to loop through all the children for our answerButtonElement */
    while (answerButtonElement.firstChild) {
        /**removing the firstChild element from answerButtonElement */
        answerButtonElement.removeChild(answerButtonElement.firstChild);
        
    }
}

function selectAnswer(event) {

const selectButton = event.target;
const correct = selectButton.dataset.correct;
/**Setting Status for them by calling setStatusClass*/
setStatusClass(document.body, correct);
/**Creating an array from the children of the answerButtonElement */
Array.from(answerButtonElement.children).forEach(button=>{
setStatusClass(button, button.dataset.correct);
});
/**Checking if there is anymore questions left */
if (shuffledQuestions.length > currentQuestionIndex + 1) {
    /**removing hide class in order to make the nextButton visible */
   nextButton.classList.remove("hide");
} else {
    startButton.innerText = "Restart";
    startButton.classList.remove("hide");
    
}
 
}

function setStatusClass(element, correct) {
    /**Calling clearStatusClass function */
    clearStatusClass(element);
    if (correct) {
        element.classList.add("correct");
    } else{
        element.classList.add("wrong");
    }
}

function clearStatusClass(element) {
    element.classList.remove("correct");
    element.classList.remove("wrong");
}

const questions = [
    {
        question: "1. What is 2 + 2 ?",
        answers: [
            {text: "4", correct: true },
            {text: "6", correct: false },
            {text: "9", correct: false },
            {text: "60", correct: false },
        ]
    },
    {
        question: "2. What is 3 + 3 ?",
        answers: [
            {text: "6", correct: true },
            {text: "2", correct: false },
            {text: "1", correct: false },
            {text: "8", correct: false },
        ]
    },
    {
        question: "3. What is 4 + 4 ?",
        answers: [
            {text: "8", correct: true },
            {text: "6", correct: false },
            {text: "81", correct: false },
            {text: "34", correct: false },
        ]
    },
    {
        question: "4. What is 12 * 12 ?",
        answers: [
            {text: "140", correct: false },
            {text: "144", correct: true },
            {text: "11", correct: false },
            {text: "84", correct: false },
        ]
    },
    {
        question: "5. What is 420 / 20 ?",
        answers: [
            {text: "44", correct: false },
            {text: "21", correct: true },
            {text: "13", correct: false },
            {text: "82", correct: false },
        ]
    },
    {
        question: "6. What is 4562 - 546 ?",
        answers: [
            {text: "4016", correct: true },
            {text: "3678", correct: false },
            {text: "1268", correct: false },
            {text: "8235", correct: false },
        ]
    },
    {
        question: "7. What is 420 - 720 ?",
        answers: [
            {text: "-4576", correct: false },
            {text: "-300", correct: true },
            {text: "-4143", correct: false },
            {text: "-1872", correct: false },
        ]
    },

    {
        question: "8. What is 420 * 20 ?",
        answers: [
            {text: "4478", correct: false },
            {text: "8400", correct: true },
            {text: "2731", correct: false },
            {text: "1838", correct: false },
        ]
    },

    {
        question: "9. What is 20 / 20 ?",
        answers: [
            {text: "4", correct: false },
            {text: "1", correct: true },
            {text: "102", correct: false },
            {text: "888", correct: false },
        ]
    },

    {
        question: "10. What is 39 / 3 ?",
        answers: [
            {text: "24", correct: false },
            {text: "13", correct: true },
            {text: "2511", correct: false },
            {text: "682", correct: false },
        ]
    }
]

