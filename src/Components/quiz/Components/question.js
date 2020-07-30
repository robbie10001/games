import React from 'react'
import './question.css'

function Question(props) {

    return <h1 className="quizQuestion">{props.question}</h1>
}

export default Question