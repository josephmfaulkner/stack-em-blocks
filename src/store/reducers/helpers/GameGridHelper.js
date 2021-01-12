import {  addBlockToGrid, clearFilledRows, shiftClearedRowsDown } from "../../utils/gameGrid";

export default class GameGridHelper {

    static addBlockToGrid(state) {
        const block = state.playerBlock;
        const grid = state.grid;
        const newGrid = addBlockToGrid(block, grid);

        const newState = {
            ...state,
            grid: newGrid
        }

        return newState;
    }

    static clearFilledRows(state) {
        const grid = state.grid;
        const { newGrid , scoredPoints } = clearFilledRows(grid);

        const newState = {
            ...state,
            grid: newGrid
        };

        return newState;
    }

    static shiftClearedRowsDown(state) {
        const grid = state.grid;
        const newGrid = shiftClearedRowsDown(grid);

        const newState = {
            ...state,
            grid: newGrid
        }

        return newState;
    }

}