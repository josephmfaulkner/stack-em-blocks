import React from "react";
import "./MainMenu.css";

import {
    Link
} from "react-router-dom";

class MainMenu extends React.Component {

    render()
    {
        return( 
        <div className="MainMenu">
            <div className="Content">
                <div className="header">
                    <h1>
                        <i className="fas fa-cubes"></i>
                    </h1>
                    <h1>Stack Em Blocks!</h1>
                </div>
                <div className="buttons">
                    <Link to="/singlePlayerGame">
                        <i className="fas fa-play-circle"></i>
                    </Link>
                </div>

            </div>
        </div>
        );
    }

}

export default MainMenu;