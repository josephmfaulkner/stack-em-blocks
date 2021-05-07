import React from "react";
import { inputLeft, inputRight, inputDown,  inputRotateLeft, inputRotateRight , inputPauseResume } from '../../store/actions/input';
import { connect } from 'react-redux';

const Mousetrap = require("mousetrap");
class InputControls extends React.Component {
    
    render()
    {
        return (<div className="inputControls"></div>)
    }

    componentDidMount() {

        Mousetrap.bind("down", () => this.props.inputDown());
        Mousetrap.bind("left", () => this.props.inputLeft());
        Mousetrap.bind("right", () => this.props.inputRight());

        Mousetrap.bind("up", () => this.props.inputRotateRight());
        Mousetrap.bind("space", () => this.props.inputRotateLeft());

        Mousetrap.bind("esc", () => this.props.inputPauseResume());
        Mousetrap.bind("enter", () => this.props.inputPauseResume());
    }
    
    componentWillUnmount() {
        Mousetrap.unbind("down");
        Mousetrap.unbind("left");
        Mousetrap.unbind("right");
        Mousetrap.unbind("up");
        Mousetrap.unbind("space");
        Mousetrap.unbind("esc");
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

export default connect( mapStateToProps, mapDispatchToProps )(InputControls);
