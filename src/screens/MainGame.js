import React from "react";

import {
    withRouter,
} from "react-router-dom";

import { connect } from 'react-redux';
import { startGame, restartGame, togglePauseGame, gameOver, exitGame } from '../store/actions/gameStatus';
import { getGameStateAsGrid } from "../store/utils/gameGrid";

import GameGridDisplay from "./components/GameGridDisplay";
import InputControls from "./components/InputControls";
import PauseButton from "./components/PauseButton";

import PopupPaused from "./components/popup/PopupPaused";
import PopupGameOver from "./components/popup/PopupGameOver";


import "./MainGame.css";
class MainGame extends React.Component {
    
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
        this.props.startGame();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }
      
    updateWindowDimensions() {
        if(this.props.gameGrid != undefined) {
            const rowsNum = this.props.gameGrid.length; if(rowsNum <= 0) {return;}
            const colsNum = this.props.gameGrid[0].length;
            const blockWidth = window.innerHeight / rowsNum;
            const maxWidth = blockWidth * colsNum;
            this.setState({ maxWidth });
        }
    }

   onResumeClick() {
        this.props.togglePauseGame();
   } 

   onRestartClick() {
       this.props.restartGame();
   } 

   onMainMenuClick() {
        this.props.exitGame();
        this.props.history.push("/");
   }

   render()
   {
       let modalOpen = this.props.paused || this.props.gameOver;
       let className = modalOpen ? "mainGameContainer PopupBackgroundContent" : "mainGameContainer";
       return (   
           <div>
            <PauseButton isVisible={!modalOpen} onClick={this.onResumeClick.bind(this)}/>   
            <div className={className} style={{maxWidth : this.state.maxWidth}}>
                
                <GameGridDisplay gameGrid={this.props.gameGrid} maxWidth={this.state.maxWidth}/>
                <PopupPaused 
                        modalOpen={this.props.paused && ! this.props.gameOver} 
                        onResumeClick={this.onResumeClick.bind(this)} 
                        onRestartClick={this.onRestartClick.bind(this)} 
                        onMainMenuClick={this.onMainMenuClick.bind(this)}
                    />
                <PopupGameOver 
                        modalOpen={this.props.gameOver} 
                        onRestartClick={this.onRestartClick.bind(this)} 
                        gameScore={this.props.gameScore}
                        onMainMenuClick={this.onMainMenuClick.bind(this)}
                    />
                <InputControls />
            </div>
           </div>    

       );
   }

}

const mapStateToProps = (state) => {
    return {
      gameScore: state.game.stats.score,
      gameLevel: state.game.stats.level,  
      gameGrid: getGameStateAsGrid(state.game.grid, state.game.playerBlock),
      playerBlock: state.game.playerBlock,
      paused : state.game.stats.paused,
      gameOver : state.game.stats.gameOver
    }
};
  
const mapDispatchToProps = { startGame, togglePauseGame, restartGame, exitGame };

export default connect( mapStateToProps, mapDispatchToProps )(withRouter(MainGame));