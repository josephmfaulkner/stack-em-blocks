

export default class GameStatusHelper {

    static togglePaused(state) {
        const paused = state.stats.paused; 
        const newPaused = !paused;
        const newStats = { ...state.stats, paused: newPaused };

        const newState = {
            ...state,
            stats: newStats
        }

        return newState;
    }

    static incrementGameScore(state, incrementAmount) {
        const score = state.stats.score; 
        const newScore = score + incrementAmount ;
        const newStats = { ...state.stats, score: newScore };

        const newState = {
            ...state,
            stats: newStats
        }

        return newState;
    }

    static incrementBlockCount(state, blockNumber) {
        const newBlockCount = { ...state.stats.blockCount };
        newBlockCount[blockNumber]++; 

        const newStats = { ...state.stats, blockCount: newBlockCount };

        const newState = {
            ...state,
            stats: newStats
        }

        return newState;

    }

    static setNextBlockIndex(state, newNextBlockIndex) {
        const newStats = { ...state.stats, nextBlockIndex: newNextBlockIndex };

        const newState = {
            ...state,
            stats: newStats
        }

        return newState;
    }

    static gameOver(state) {
        const newStats = { ...state.stats, gameOver: true };

        const newState = {
            ...state,
            stats: newStats
        }

        return newState;
    }

}