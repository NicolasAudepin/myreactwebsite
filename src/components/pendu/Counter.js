import React from 'react'
import PropTypes from 'prop-types'

import './Counter.css'

const Counter = ({guesses}) => <div className="guesses" >{guesses}</div>

Counter.propTypes = {
    guesses: PropTypes.number.isRequired
}

export default Counter