import React from "react";
import "./GameStatsDisplay.scss";
import { BLOCK_DISPLAY_MAP } from "../../store/utils/blockDisplayConstants"; //"../../store/utils/blockDisplayConstants"; 

import BlockDisplay from "./BlockDisplay";

class GameStatsDisplay extends React.Component {
    
    render()
    {
        let randBlockMapKeys = Object.keys(BLOCK_DISPLAY_MAP);
        const displayClassName = this.props.isMobile ? "GameStatsDisplayCompact" : "GameStatsDisplay" ;
        const className = this.props.isVisible ? displayClassName : displayClassName + " GameStatsDisplayHidden";
        
        const xPos = this.props.xPos; 
        const style = this.props.isMobile ? {} : {'left' : xPos};
        
        return(
            <div className={className} style={style}>
                <div className="BlockStatsDisplayRow">
                    {
                        randBlockMapKeys.map((key, keyIndex) => 
                            <div className="BlockStatsDisplayItem" key={keyIndex}>
                                <BlockDisplay blockData = {BLOCK_DISPLAY_MAP[key]} /> <div>{this.props.blockCount[key]}</div>
                            </div>
                        )
                    }
                </div>
                <div className="StatsDisplayRow">
                    <div className="GameScoreDisplaySection">
                        <div className="scoreItem">
                            <h2 className="scoreIcon"><i className="fa fa-trophy"></i></h2>
                            <h2 className="scoreNumber">{1000}</h2> 
                        </div>
                        <div className="scoreItem">
                            <h2 className="scoreIcon"><i className="fa fa-star"></i></h2>
                            <h2 className="scoreNumber">{this.props.gameScore}</h2> 
                        </div>

                    </div>
                    <div className="NextBlockAndLevelDisplaySection">
                        <div className="NextBlockDisplay">
                            <BlockDisplay blockData = {BLOCK_DISPLAY_MAP[1]} />
                            <h2><i className="fa fa-forward"></i></h2> 
                        </div>
                        <div className="scoreItem">
                            <h2 className="scoreIcon"><i className="fa fa-layer-group"></i></h2>
                            <h2 className="scoreNumber">{1}</h2> 
                        </div>
                    </div>    


                </div>
                

            </div>
        );
    }
}

export default GameStatsDisplay;

/*
{this.props.gameGrid.map((row, indexRow) =>
        <div key={indexRow} className="GameGridDisplaygridRow">
            {row.map((blockNumber, indexColumn) =>{
                let classNames = "gridBlock " + mapBlockNumberToColorClass(blockNumber);
                let divKey = `${indexRow}-${indexColumn}`;
                return(
                    <div key={divKey} className={classNames}></div>  
                )
            }
            )}
        </div>
    )}
*/