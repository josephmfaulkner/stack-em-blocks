import game from "../../store/reducers/game";
import { togglePauseGame, restartGame, incrementGameScore, gameOver } from "../../store/actions/gameStatus";

const expectedGrid = [
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  ];



it('initial game state', () => {
    let gameState = game(undefined, {});

    expect(gameState.grid).toEqual(expectedGrid);

    expect(gameState.playerBlock.blockData).toEqual(null);
    expect(gameState.playerBlock.xPos).toEqual(0);
    expect(gameState.playerBlock.yPos).toEqual(0);


    expect(gameState.stats.score).toEqual(0);
    expect(gameState.stats.paused).toEqual(false);
    expect(gameState.stats.gameOver).toEqual(false);
    
})

it('toggle paused', () => {

    let gameState = game(undefined, {});
    expect(gameState.stats.paused).toEqual(false);

    gameState = game(gameState, togglePauseGame());
    expect(gameState.stats.paused).toEqual(true);

    gameState = game(gameState, togglePauseGame());
    expect(gameState.stats.paused).toEqual(false);

})

it('increment game score', () => {
  let gameState = game(undefined, {});

  expect(gameState.stats.score).toEqual(0);

  gameState = game(gameState, incrementGameScore(10));
  expect(gameState.stats.score).toEqual(10);

  gameState = game(gameState, incrementGameScore(15));
  expect(gameState.stats.score).toEqual(25);

})


it('game over', () => {
  let gameState = game(undefined, {});
  expect(gameState.stats.gameOver).toEqual(false);

  gameState = game(gameState, gameOver());
  expect(gameState.stats.gameOver).toEqual(true);
})

it('reset game', () => {
  let gameState = game(undefined, {});

  gameState = game(gameState, incrementGameScore(15));
  gameState = game(gameState, togglePauseGame());
  gameState = game(gameState, gameOver());

  gameState = game(gameState, restartGame());


  expect(gameState.grid).toEqual(expectedGrid);

  expect(gameState.playerBlock.blockData).toEqual(null);
  expect(gameState.playerBlock.xPos).toEqual(0);
  expect(gameState.playerBlock.yPos).toEqual(0);

  expect(gameState.stats.score).toEqual(0);
  expect(gameState.stats.paused).toEqual(false);
  expect(gameState.stats.gameOver).toEqual(false);
})
