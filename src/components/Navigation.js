import React from 'react'
import {Link , withRouter} from 'react-router-dom'
import './Navigation.css' 

function Navigation(props) {
    return(
      <div className = "navigation magenta">
        <Link to = "/myreactwebsite">
          MAIN PAGE
        </Link>
        
        <ul className = "pageslist">
        <li>
            <Link to = "/myreactwebsite/memory">
              Memory
            </Link>
          </li>
          <li>
            <Link to = "/myreactwebsite/memorysimple">
              Memory Simple
            </Link>
          </li>
          <li>
            <Link to = "/myreactwebsite/pendu">
              Hang-man
            </Link>
          </li>
        </ul>

      </div>

    )
}

export default withRouter(Navigation);