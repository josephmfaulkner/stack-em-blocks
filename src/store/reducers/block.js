import getGame from "../model/Game";
import { MOVE_DOWN, MOVE_LEFT, MOVE_RIGHT, ROTATE_LEFT, ROTATE_RIGHT, ADD_BLOCK_TO_GRID } from "../actions/block";

const block = function(state = getGame().getGameStateAsGrid() , action)
{
    switch(action.type)
    {
        case MOVE_DOWN:
            getGame().getGameBlock().moveDown();// .moveDown();
            return getGame().getGameStateAsGrid();
        case MOVE_LEFT:
            getGame().getGameBlock().moveLeft();// .moveDown();
            return getGame().getGameStateAsGrid();    
        case MOVE_RIGHT:
            getGame().getGameBlock().moveRight();
            return getGame().getGameStateAsGrid(); 
        case ROTATE_LEFT:
            getGame().getGameBlock().rotateLeft();
            return getGame().getGameStateAsGrid(); 
        case ROTATE_RIGHT:
            getGame().getGameBlock().rotateRight();
            return getGame().getGameStateAsGrid();
        case ADD_BLOCK_TO_GRID: 
            getGame().addGameBlockToGrid();
            return getGame().getGameStateAsGrid();
        default:
            return state;
    }
}

export default block;