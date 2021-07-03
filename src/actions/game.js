import { ADD_GAME, DELETE_GAME } from './types';

export const addGame = (game) => (
  {
    type: ADD_GAME,
    data: game
  }
);

export const deleteGame = (key) => (
  {
    type: DELETE_GAME,
    key: key
  }
);
