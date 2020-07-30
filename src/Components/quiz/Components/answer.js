import React from 'react'
import './answer.css'

function Answer(props) {
    let classes = ["answer"];
    if (props.selected) {
        classes.push('selected')
    }

    return (
        <button 
            className="buttonContainer" 
            value={props.letter} 
            onClick={props.handleClick}>
            <span>{props.letter}.</span> {props.answer}
        </button>


    )
}

export default Answer