import React from 'react';
import { connect } from 'react-redux';
import Hammer from "hammerjs";

import { inputLeft, inputRight, inputDown,  inputRotateLeft, inputRotateRight , inputPauseResume } from '../../store/actions/input';

class InputTouchScreenControls extends React.Component {
    
    constructor(props) {
        super(props)
        this.touchScreenControls = null;
        this.state = {
            panLeftTick  : 0,
            panRightTick : 0,
            panDownTick  : 0
        }
    }

    handlePanLeft(event) {
        const { overallVelocityX } = {...event };
        if(this.state.panLeftTick >= this.props.moveThreshold)
        {
            this.setState({panLeftTick: 0});
            this.props.inputLeft();
        }
        else
        {
            this.setState({panLeftTick: this.state.panLeftTick + 1 * Math.abs(overallVelocityX)});
        }
    }


    handlePanRight(event) {
        const { overallVelocityX } = {...event };
        if(this.state.panRightTick >= this.props.moveThreshold)
        {
            this.setState({panRightTick: 0});
            this.props.inputRight();
        }
        else
        {
            this.setState({panRightTick: this.state.panRightTick + 1 * Math.abs(overallVelocityX)});
        }
    }


    handlePanDown(event) {
        const { overallVelocityY } = {...event };
        if(this.state.panDownTick >= this.props.moveThreshold)
        {
            this.setState({panDownTick: 0});
            this.props.inputDown();
        }
        else
        {
            this.setState({panDownTick: this.state.panDownTick + 1 * Math.abs(overallVelocityY) });
        }
    }
    
    componentDidMount() {
    
        const touchScreen = document.getElementById("InputTouchScreenControls")
        this.touchScreenControls  = new Hammer(touchScreen);

        this.touchScreenControls.get('pan').set({ direction: Hammer.DIRECTION_ALL, threshold: 0 });
        this.touchScreenControls.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });

        this.touchScreenControls.on("panleft",  (event) => { this.handlePanLeft(event); }  );
        this.touchScreenControls.on("panright", (event) => { this.handlePanRight(event); } );
        
        this.touchScreenControls.on("pandown",  (event) => { this.handlePanDown(event); }  );
        
        this.touchScreenControls.on("swipeup", () => { this.props.inputRotateRight(); });

        /*
        mc.on("panleft panright panup pandown tap press", function(ev) {
            myElement.textContent = ev.type +" gesture detected.";
        });
        */

    
    }

    componentWillUnmount() {
        this.touchScreenControls.remove('pan');
        this.touchScreenControls.remove('swipe')
    }


    render()
    {
        return(
        <div id="InputTouchScreenControls">
            {this.props.children}
        </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
      
    }
};
  
const mapDispatchToProps = { 
    inputLeft, 
    inputRight, 
    inputDown,
    inputRotateLeft,
    inputRotateRight,
    inputPauseResume
};

export default connect( mapStateToProps, mapDispatchToProps )(InputTouchScreenControls );