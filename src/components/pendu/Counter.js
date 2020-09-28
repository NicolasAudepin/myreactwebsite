import React from 'react'
import PropTypes from 'prop-types'

import './pendu.css'

const Counter = ({guesses}) => <div className="guesses dark round" >Wrong guesses : {guesses}</div>

Counter.propTypes = {
    guesses: PropTypes.number.isRequired
}

export default Counter