import React from 'react'

function Answer(props) {

    return (
        <button value={props.letter} >
            <span>{props.letter}.</span> 
            {props.answer}
        </button>


    )
}

export default Answer