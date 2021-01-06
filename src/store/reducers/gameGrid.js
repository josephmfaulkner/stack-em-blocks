import getGame from "../model/Game";
import block from "./block";
import { CLEAR_FILLED_ROWS, SHIFT_CLEARED_ROWS } from "../actions/gameGrid";
const gameGrid = function(state = getGame().getGameStateAsGrid() , action)
{  
    state = block(state, action);
    switch(action.type)
    {
        case CLEAR_FILLED_ROWS:
            getGame().clearFilledGameRows();
            return getGame().getGameStateAsGrid();
        case SHIFT_CLEARED_ROWS:
            getGame().shiftClearedGameRowsDown();
            return getGame().getGameStateAsGrid();
        default:
            return getGame().getGameStateAsGrid();
    }
}

export default gameGrid;