import React from "react";

import "./GameGridBlock.scss";
import "./GameGridDisplay.scss";

import { mapBlockNumberToColorClass } from "./util";

class GameGridDisplay extends React.Component {
    
    render()
    {
        if(!this.props.gameGrid){ return <div></div>;}
        return(
            <div className="GameGridDisplayContainer" style={{maxWidth : this.props.maxWidth}}>
                <div className="GameGridDisplay">
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
                </div>
            </div>
        );

    }
}

export default GameGridDisplay;