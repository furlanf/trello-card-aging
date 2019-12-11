import { SAVE_SETTINGS } from '../constants/ActionTypes';

const initialState = {};

function settingsReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_SETTINGS:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}

export default settingsReducer;
