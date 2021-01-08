const START_GAME = 'START_GAME';
const RESTART_GAME = 'RESTART_GAME';
const PAUSE_RESUME_GAME = 'PAUSE_RESUME_GAME';
const UPDATE_GAME_SCORE = 'UPDATE_GAME_SCORE';
const INCREMENT_GAME_SCORE = 'INCREMENT_GAME_SCORE';
const GAME_OVER = 'GAME_OVER';
const EXIT_GAME = 'EXIT_GAME';


function startGame()
{
    return {
        type: START_GAME,
        payload: null
    }
}

function restartGame()
{
    return {
        type: RESTART_GAME,
        payload: null
    }
}

function updateGameScore()
{
    return {
        type: UPDATE_GAME_SCORE,
        payload: null
    }
}

function incrementGameScore(amount)
{
    return {
        type: INCREMENT_GAME_SCORE,
        payload: amount
    }
}

function togglePauseGame() {
    return {
        type: PAUSE_RESUME_GAME,
        payload: null
    }
}

function gameOver() {
    return {
        type: GAME_OVER,
        payload: null
    }
}

function exitGame() {
    return {
        type: EXIT_GAME,
        payload: null
    }
}

export { 
    START_GAME, startGame,
    RESTART_GAME, restartGame,
    PAUSE_RESUME_GAME, togglePauseGame,
    UPDATE_GAME_SCORE, updateGameScore,
    INCREMENT_GAME_SCORE, incrementGameScore,
    GAME_OVER, gameOver,
    EXIT_GAME, exitGame
}