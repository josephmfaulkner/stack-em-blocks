import { newBlank2dArray, copy2dArray } from "../utils/misc";
import { addBlockToGrid, clearFilledRows, shiftClearedRowsDown } from "../utils/gameGrid";
import Block from "./Block";

class Game {
    constructor(gameGrid = null, block = null, score = 0)
    {
        if(gameGrid == null)
        {
            gameGrid = newBlank2dArray(10,20);
        }
        this.gameGrid = gameGrid;
        if(block == null)
        {
            block = new Block(this.gameGrid);
        }
        this.replaceBlock(block);
        this.gameScore = score;
    }

    replaceBlock(block = new Block(this.gameGrid))
    {
        this.gameBlock = block;
    }

    getGameBlock()
    {
        return this.gameBlock;
    }    

    getGameStateAsGrid()
    {
        return addBlockToGrid(this.gameBlock, this.gameGrid);
    }

    getGameScore()
    {
        return this.gameScore;
    }

    addGameBlockToGrid()
    {
        this.gameGrid = addBlockToGrid(this.gameBlock, this.gameGrid);
        this.replaceBlock();
    }

    clearFilledGameRows(){
        let clearRows = clearFilledRows(this.gameGrid);
        this.gameGrid = clearRows.newGrid;
        this.gameScore += clearRows.scoredPoints;
        this.gameBlock.gameGrid = this.gameGrid; 
    }
    

    shiftClearedGameRowsDown(){
        this.gameGrid = shiftClearedRowsDown(this.gameGrid);
        this.gameBlock.gameGrid = this.gameGrid;
    }

    isGameOver(){
        return this.gameBlock.isBlockCollision(this.gameBlock.blockData, 0, 0);
    }


}

let gameInstance = null; 
const getGame = function() {
    if(gameInstance != null)
    {
        return gameInstance;
    }
    gameInstance = new Game();
    return gameInstance;
}

const restartGame = function() {
    gameInstance = new Game();
    return gameInstance;
}

export default getGame;
export { getGame as Game, restartGame };