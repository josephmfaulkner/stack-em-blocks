import { DIRECTION_DOWN, DIRECTION_LEFT, DIRECTION_RIGHT } from "../../actions/block";
import { rotateLeft, rotateRight } from "../../utils/blockActions"
export default class GameBlockHelper {
    static replacePlayerBlock(state, blockData)
    {
        const newBlockData = blockData;
        const newX = (state.grid[0].length / 2) - 1;
        const newY = 0;
        const newPlayerBlock = {
            xPos: newX, 
            yPos: newY,
            blockData: newBlockData
        }; 

        return {
            ...state,
            playerBlock: newPlayerBlock
        }

    }

    static moveBlock(state, direction)
    {
        let newX = state.playerBlock.xPos;
        let newY = state.playerBlock.yPos;
        
        switch (direction) {
            case DIRECTION_DOWN:
                newY = newY + 1;
                break;
            case DIRECTION_LEFT:
                newX = newX - 1;
                break;
            case DIRECTION_RIGHT:
                newX = newX + 1;
                break;    
            default:
                break;
        }

        const newPlayerBlock = {
            ...state.playerBlock,
            xPos: newX, 
            yPos: newY
        }; 

        return {
            ...state,
            playerBlock: newPlayerBlock
        }



    }   
    
    static rotateBlock(state, direction)
    {
        let newPlayerBlock = state.playerBlock;
        switch (direction) {
            case DIRECTION_LEFT:
                newPlayerBlock = rotateLeft(state.playerBlock);
                break;
            case DIRECTION_RIGHT:
                newPlayerBlock = rotateRight(state.playerBlock);
                break;
            default:
                break;
        }

        return {
            ...state,
            playerBlock: newPlayerBlock
        }

    }

}