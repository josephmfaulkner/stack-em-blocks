import React from "react";
import { connect } from 'react-redux';
import { loadSounds } from "../store/actions/sound";
import "./SoundManagerComponent.css";

class SoundManagerComponent extends React.Component
{
    constructor(props)
    {
        super(props);
        this.props.loadSounds();
    }

    render()
    {
        return ( <div className="SoundManagerComponent"></div> );
    }
}
  
const mapDispatchToProps = { loadSounds };

export default connect( null, mapDispatchToProps )(SoundManagerComponent);