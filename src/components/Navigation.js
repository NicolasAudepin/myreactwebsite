import React from 'react'
import {Link , withRouter} from 'react-router-dom'
import './Navigation.css' 

function Navigation(props) {
    return(
      <div className = "navigation">
        <Link to = "/">
          Main Page
        </Link>
        <Link to = "/">
          Main Page
        </Link>
      </div>

    )
}

export default withRouter(Navigation);