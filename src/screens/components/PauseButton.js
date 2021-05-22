import React from "react";
import "./PauseButton.scss";
class PauseButton extends React.Component {
    
    render()
    {
        const displayClassName = this.props.isMobile ? "PauseButton Compact" : "PauseButton Full" ;
        const className = this.props.isVisible ? displayClassName : displayClassName + " PauseButtonHidden";

        return(
            <button className={className} onClick={() => {this.props.onClick();}}>
                <i className="fas fa-pause-circle"></i>
            </button>
        );
    }
}

export default PauseButton;