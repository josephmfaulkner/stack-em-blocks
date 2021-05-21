import React from "react";

import { newBlank2dArray } from "../store/utils/misc";

import {
    withRouter,
} from "react-router-dom";

import { connect } from 'react-redux';
import { startGame } from '../store/actions/gameStatus';
import { getGameStateAsGrid } from "../store/utils/gameGrid";

import PopupMainMenu from "./components/popup/PopupMainMenu";
import GameGridDisplay from "./components/GameGridDisplay";

import "./MainGame.scss";
class NewMainMenu extends React.Component {
    
    constructor(props)
    {
        super(props)
        this.state = { 
            maxWidth: 0
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this); 
    }


    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }
      
    updateWindowDimensions() {
        if(this.props.gameGrid !== undefined) {
            const maxWidth = window.innerWidth; 
            this.setState({ maxWidth });
        }
    }

   onClickStartGame()
   {
        this.props.history.push("/singlePlayerGame");
   }

   render()
   {
       let className = "mainGameContainer PopupBackgroundContent";
       return (    
            <div className={className} style={{maxWidth : this.state.maxWidth}}>
                <GameGridDisplay gameGrid={newBlank2dArray(5,50)} maxWidth={this.state.maxWidth}/>
                <PopupMainMenu
                        modalOpen={true} 
                        onClickStartGame={this.onClickStartGame.bind(this)}
                />
            </div>  
       );
   }

}

const mapStateToProps = (state) => {
    return {
      gameGrid: getGameStateAsGrid(state.game)
    }
};
  
const mapDispatchToProps = { startGame };

export default connect( mapStateToProps, mapDispatchToProps )(withRouter(NewMainMenu));