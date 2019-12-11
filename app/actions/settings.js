import { SAVE_SETTINGS } from '../constants/ActionTypes';

export function saveSettings(settings) {
  return {
    type: SAVE_SETTINGS,
    payload: settings
  };
}
