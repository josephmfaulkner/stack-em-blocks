import React from "react";

import {
    withRouter,
} from "react-router-dom";

import { connect } from 'react-redux';
import { startGame, restartGame, togglePauseGame, exitGame } from '../store/actions/gameStatus';
import { getGameStateAsGrid } from "../store/utils/gameGrid";

import GameGridDisplay from "./components/GameGridDisplay";
import GameStatsDisplay from "./components/GameStatsDisplay";
import InputControls from "./components/InputControls";
import InputTouchScreenControls from "./components/InputTouchScreenControls";
import PauseButton from "./components/PauseButton";

import PopupPaused from "./components/popup/PopupPaused";
import PopupGameOver from "./components/popup/PopupGameOver";


import "./MainGame.scss";
class MainGame extends React.Component {
    
    constructor(props)
    {
        super(props)
        this.state = { 
            maxWidth: 0,
            blockWidth: 1,
            touchSensitivity: 50,
            displayXLeft: 0, 
            displayXRight : 0
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
        if(this.props.gameGrid !== undefined) {
            const rowsNum = this.props.gameGrid.length; if(rowsNum <= 0) {return;}
            const colsNum = this.props.gameGrid[0].length;
            const blockWidth = window.innerHeight / rowsNum;
            const maxWidth = blockWidth * colsNum;
            const displayXLeft =  (window.innerWidth / 2) - (maxWidth / 2);
            const displayXRight = (window.innerWidth / 2) + (maxWidth / 2);
            const isMobile = displayXLeft  < 275; 
            this.setState({ maxWidth });
            this.setState({ blockWidth });
            this.setState({ displayXLeft });
            this.setState({ displayXRight })
            this.setState({ isMobile });
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
            <GameStatsDisplay 
                isVisible={!modalOpen} 
                gameScore={this.props.gameScore} 
                blockCount={this.props.blockCount}
                nextBlockIndex={this.props.nextBlockIndex}
                displayXLeft={this.state.displayXLeft}
                displayXRight={this.state.displayXRight}

                xPos={this.state.gameStatsDisplayXPos}

                isMobile={this.state.isMobile}
            >
                <PauseButton isVisible={!modalOpen} isMobile={this.state.isMobile} onClick={this.onResumeClick.bind(this)}/>      
            </GameStatsDisplay>
            
            <div className={className} style={{maxWidth : this.state.maxWidth}}>
                
                <InputTouchScreenControls moveThreshold={ this.state.blockWidth * (1 / this.state.touchSensitivity)} >
                    <GameGridDisplay gameGrid={this.props.gameGrid} maxWidth={this.state.maxWidth}/>
                </InputTouchScreenControls>
                
                
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
      blockCount: state.game.stats.blockCount,
      gameLevel: state.game.stats.level,  
      gameGrid: getGameStateAsGrid(state.game),
      playerBlock: state.game.playerBlock,
      nextBlockIndex : state.game.stats.nextBlockIndex,
      paused : state.game.stats.paused,
      gameOver : state.game.stats.gameOver
    }
};
  
const mapDispatchToProps = { startGame, togglePauseGame, restartGame, exitGame };

export default connect( mapStateToProps, mapDispatchToProps )(withRouter(MainGame));