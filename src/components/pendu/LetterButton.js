import React from 'react'
import PropTypes from 'prop-types'
import './LetterButton.css'

//buttons to press
const LetterButton =({letter , pressed, index, onClick}) => (
    <div className = {`letter ${letter}`}
     onClick = {() => onClick(index)}>
         {pressed ? '_' : letter}
     </div>
)

LetterButton.propTypes = {
    letter : PropTypes.string.isRequired,
    pressed : PropTypes.bool.isRequired,
    index : PropTypes.number.isRequired,
    onClick : PropTypes.func.isRequired,
}

export default LetterButton