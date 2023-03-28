export const actionType = (action: string) => ({
  ORIGIN: action,
  HANDLER: `${action}_HANDLER`,
  PENDING: `${action}_PENDING`,
  START: `${action}_START`,
  MORE: `${action}_MORE`,
  SUCCESS: `${action}_SUCCESS`,
  FAILURE: `${action}_FAILURE`,
  ERROR: `${action}_ERROR`,
  CLEAR: `${action}_CLEAR`,
  STORE: `${action}_STORE`,
  END: `${action}_END`
});

//SETTINGS
export const CHANGE_LANGUAGE = actionType('SETTINGS/CHANGE_LANGUAGE');

//SYSTEM
export const SHOW_ERROR = actionType('system/SHOW_ERROR');
export const CLEAR_ERROR = actionType('system/CLEAR_ERROR');
export const INITIAL_PROPS = actionType('system/INITIAL_PROPS');

//MOVIE
export const GET_LIST_MOVIE = actionType('movie/GET_LIST_MOVIE');
