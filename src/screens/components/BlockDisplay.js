import React from "react";

import "./GameGridBlock.css";
import "./BlockDisplay.css";

import { mapBlockNumberToColorClass } from "./util";

class BlockDisplay extends React.Component {
    
    render()
    {
        if(!this.props.blockData){ return <div></div>;}
        return(
            <div className="BlockStatDisplayContainer">
                <div className="BlockStatGridDisplay">
                    {this.props.blockData.map((row, indexRow) =>
                        <div key={indexRow} className="BlockStatGridDisplaygridRow">
                            {row.map((blockNumber, indexColumn) =>{
                                let classNames = "gridBlock gridBlockDisplay " + mapBlockNumberToColorClass(blockNumber);
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

export default BlockDisplay;