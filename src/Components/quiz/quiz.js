import React, {useState} from "react"; 
import Progress from "./Components/progress"
import Question from "./Components/question"
import Answers from "./Components/answers"
import './quiz.css'
import bodyBuilder from "./Images/question1.png"
import englishMan from "./Images/question2.png"
import bowling from "./Images/question3.png"
import trump from "./Images/question4.png"
import beers from "./Images/question5.png"
import britney from "./Images/question6.png"
import blackhole from "./Images/question7.png"
import galaxy from "./Images/question8.png"
import guts from "./Images/question9.png"
import loner from "./Images/question10.png"



function Quiz() {

    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [currentAnswer, setCurrentAnswer] = useState("")
    const [answer, setAnswers] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const [error, setError] = useState(''); 

    const questions = [
        {
            id: 1,
            question: "What is the largest country in the world?",
            answer_a: "Russia",
            answer_b: "USA",
            answer_c: "Australia", 
            answer_d: "China",
            correct_answer: "a",
            right_answer: "Russia",
            image: bodyBuilder
        },
        {
            id: 2,
            question: "Who was the youngest British Prime Minister?",
            answer_a: "Tony Blair",
            answer_b: "Benjamin Disraeli",
            answer_c: "William Pitt", 
            answer_d: "David Cameron",
            correct_answer: "c",
            right_answer: "William Pitt",
            image: englishMan
        },
        {
            id: 3,
            question: "In Ten Pin Bowling, what is the term given to three strikes?",
            answer_a: "Eagle",
            answer_b: "Birdie",
            answer_c: "Albatros", 
            answer_d: "Turkey",
            correct_answer: "d",
            right_answer: "Turkey",
            image: bowling
        },
        {
            id: 4,
            question: "Who is the Vice President of the United States?",
            answer_a: "Donald Trump Jr",
            answer_b: "Mike Pence",
            answer_c: "Hilary Clinton", 
            answer_d: "Bernie Sanders",
            correct_answer: "b",
            right_answer: "Mike Pence",
            image: trump
        },
        {
            id: 5,
            question: "In Beer, what does IPA stand for?",
            answer_a: "Irish Pacific Ale",
            answer_b: "Indian Pale Ale",
            answer_c: "Iranian People Ale", 
            answer_d: "International Pale Ale",
            correct_answer: "b",
            right_answer: "Indian Pale Ale",
            image: beers
        },
        {
            id: 6,
            question: "What was the name of Britney Spears first single?",
            answer_a: "MUSIC",
            answer_b: "Baby One More Time",
            answer_c: "Toxic", 
            answer_d: "Opps, i did it again",
            correct_answer: "b",
            right_answer: "Baby One More Time",
            image: britney
        },
        {
            id: 7,
            question: "What is the name of the boundary around a blackhole, beyond which events cannot affect the observer? ",
            answer_a: "The Event Horizon",
            answer_b: "The Eye",
            answer_c: "The Big Bang", 
            answer_d: "The Epicenter",
            correct_answer: "a",
            right_answer: "The Event Horizon",
            image: blackhole
        },
        {
            id: 8,
            question: "What star after the sun is closest to earth?",
            answer_a: "The Sun",
            answer_b: "Alpha Centauri",
            answer_c: "The Milky Way", 
            answer_d: "Europa",
            correct_answer: "b",
            right_answer: "Alpha Centauri",
            image: galaxy
        },
        {
            id: 9,
            question: "About how long is the average human intestine?",
            answer_a: "3 feet",
            answer_b: "9 feet",
            answer_c: "18 feet", 
            answer_d: "60 feet",
            correct_answer: "c",
            right_answer: "18 feet",
            image: guts
        },
        {
            id: 10,
            question: "Which US state is know as the lone star state?",
            answer_a: "New York",
            answer_b: "Alabama",
            answer_c: "Georgia", 
            answer_d: "Texas",
            correct_answer: "d",
            right_answer: "Texas",
            image: loner
        },
    ]

    const question = questions[currentQuestion];

    const handleClick = e => {
        setCurrentAnswer(e.target.value);
    }

    const renderError = () => {
        if (!error) {
            return;
        }
        return <div>{error}</div>
    }

    let counter = 0;
    let response = "";

    const renderResultMark = (question, answer) => {
        if (question.correct_answer === answer.answer) {
            counter ++;
            if (counter <= 3) {
                response = "Bro you might be dumb."
            }  else if (counter <= 7) {
                response = "They say P's get degrees!"
            } else {
                response = "You're way smarter than you look!"
            }

            console.log(counter)
            return <span className="correctAnswer">What a geni arse!</span>
        }
            return <span className="wrongAnswer">Wrong dumbass..the correct answer was {question.right_answer} </span>
    }

 

    const renderResultsData = () => {
        return answer.map( answer => {
            const question = questions.find(
                question => question.id === answer.questionId 
                );

               return (<div className="resultParagraph" key={question.id}>{question.id}. {question.question} - {renderResultMark(question, answer)}</div>
               )
        });
    };
//this will have to be changed to link to the next page. 
    const restart = () => {
            window.location.href = "http://localhost:3000/joke1";
    
};

    const next = () => {
        const answered = {questionId: question.id, answer: currentAnswer};

        if (!currentAnswer) {
            setError('Yo idiot, Select an Option');
            return;
        }

        answer.push(answered);
        setAnswers(answer);
        setCurrentAnswer('');

        if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion(currentQuestion + 1);
            return;
        }
        
        setShowResults(true);
    };

    

//the onclick method in this conditional will have to change to go to the next page of the games.
    if (showResults) {
        return (
            <div className="parentResultsPage">
                <h2>LET'S SEE HOW YOU DID!</h2>
                    <ul className="resultInformationParent">{renderResultsData()}</ul> 
                        <h2 className="resultParagraph"> {response}...you got {counter} out of 10!</h2>
                <button onClick={restart}>WHAT'S NEXT! </button>
            </div>
        )
    } else {}

    return (
        <div className="quizContainer">
            <section>
                <h1 className="headingQuiz">THE GREAT QUIZ!</h1>
                    <Progress total={question.length} current={currentQuestion + 1} />
                    <Question question={question.question} />
                    <img className="imageControl" src={question.image} alt="bodybuilder"/>
                    {renderError()}
                    <section>
                    <Answers 
                        question={question} 
                        currentAnswer={currentAnswer} 
                        handleClick={handleClick}
                    />
                    </section>
                    <section>
                    <button 
                    className="buttonPosition"
                    onClick={next}
                    >
                        NEXT QUESTION!
                    </button>
                    </section>
            </section>
        </div>
    )
};

export default Quiz