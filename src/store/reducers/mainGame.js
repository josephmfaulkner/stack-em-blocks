
import getGame from "../model/Game";
import { CLEAR_FILLED_ROWS, SHIFT_CLEARED_ROWS } from "../actions/gameStatus";
import blockRedux from "./block"
//const mainGameClass = getGame();
const mainGame = function(state = getGame().getGameStateAsGrid() , action)
{
    state = blockRedux(state, action);   
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

export default mainGame;