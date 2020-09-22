import React from 'react'
import {Link , withRouter} from 'react-router-dom'
import './Navigation.css' 

function Navigation(props) {
    return(
      <div className = "navigation magenta">
        <Link to = "/myreactwebsite">
          Main Page
        </Link>
        
        <ul className = "pageslist">
          <li>
            <Link to = "/myreactwebsite/memory">
              Memory
            </Link>
          </li>
          <li>
            <Link to = "/myreactwebsite/pendu">
              Pendu
            </Link>
          </li>
        </ul>

      </div>

    )
}

export default withRouter(Navigation);