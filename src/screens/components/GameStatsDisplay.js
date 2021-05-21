import React from "react";
import "./GameStatsDisplay.scss";
import { BLOCK_DISPLAY_MAP } from "../../store/utils/blockDisplayConstants"; //"../../store/utils/blockDisplayConstants"; 

import BlockDisplay from "./BlockDisplay";

class GameStatsDisplay extends React.Component {
    
    render()
    {
        let randBlockMapKeys = Object.keys(BLOCK_DISPLAY_MAP);
        const className = this.props.isVisible ? "GameStatsDisplay" : "GameStatsDisplay GameStatsDisplayHidden";
        return(
            <div className={className}>
                <h2><i className="fa fa-star"></i> {this.props.gameScore}</h2> 
                {
                    randBlockMapKeys.map((key, keyIndex) => 
                        <div className="BlockStatsDisplayRow" key={keyIndex}>
                            <BlockDisplay blockData = {BLOCK_DISPLAY_MAP[key]} /> <div>{this.props.blockCount[key]}</div>
                        </div>
                    )
                }
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