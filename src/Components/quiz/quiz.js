import React from "react"; 
import Progress from "./Components/progress"
import Question from "./Components/question"
import Answer from "./Components/answer"

function Quiz() {


    return (
        <div>
            <section>
                <h1>The Great Quiz</h1>
                    <Progress total="10" current="1" />
                    <Question question="What is React?" />
                    <Answer letter="A" answer="Framework" />
            </section>
        </div>
    )
};

export default Quiz