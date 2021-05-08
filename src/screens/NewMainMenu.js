import React from "react";

import {
    withRouter,
} from "react-router-dom";

import { connect } from 'react-redux';
import { startGame, restartGame, togglePauseGame, exitGame } from '../store/actions/gameStatus';
import { getGameStateAsGrid } from "../store/utils/gameGrid";

import PopupMainMenu from "./components/popup/PopupMainMenu";
import GameGridDisplay from "./components/GameGridDisplay";


import "./MainGame.css";
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
        this.props.startGame();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }
      
    updateWindowDimensions() {
        if(this.props.gameGrid !== undefined) {
            /*
            const rowsNum = this.props.gameGrid.length; if(rowsNum <= 0) {return;}
            const colsNum = this.props.gameGrid[0].length;
            const blockWidth = window.innerHeight / rowsNum;
            const maxWidth = blockWidth * colsNum;
            */
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
                
                <GameGridDisplay gameGrid={this.props.gameGrid} maxWidth={this.state.maxWidth}/>
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