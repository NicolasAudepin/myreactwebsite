import React from 'react'
import {Link , withRouter} from 'react-router-dom'
import './Navigation.css' 

function Navigation(props) {
    return(
      <div className = "navigation magenta">
        <Link to = "/">
          Main Page
        </Link>
        
        <ul className = "pageslist">
          <li>
            <Link to = "/memory">
              Memory
            </Link>
          </li>
          <li>
            <Link to = "/">
              Pendu
            </Link>
          </li>
        </ul>

      </div>

    )
}

export default withRouter(Navigation);