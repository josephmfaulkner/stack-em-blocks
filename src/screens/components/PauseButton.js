import React from "react";
import "./PauseButton.css";
class PauseButton extends React.Component {
    
    constructor(props)
    {
        super(props);
    }

    render()
    {
        const className = this.props.isVisible ? "PauseButton" : "PauseButton PauseButtonHidden";
        return(
            <button className={className} onClick={() => {this.props.onClick();}}>
                <i className="fas fa-pause-circle"></i>
            </button>
        );
    }
}

export default PauseButton;