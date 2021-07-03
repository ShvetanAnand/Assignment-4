import { ADD_GAME, DELETE_GAME } from '../actions/types';

const initialState = {
  gameList: []
}

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_GAME:
      return {
        ...state,
        gameList: state.gameList.concat({
          key: Math.random(),
          name: action.data
        })
      };
    case DELETE_GAME:
      return {
        ...state,
        gameList: state.gameList.filter((item) =>
          item.key !== action.key)
      };
    default:
      return state;
  }
}

export default gameReducer;