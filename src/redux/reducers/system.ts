import { CLEAR_ERROR, INITIAL_PROPS, SHOW_ERROR } from '@redux-app/actionType';

const initialState = {
  error: {},
  isError: false,
  initialProps: {}
};

const system = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_ERROR.STORE: {
      return {
        ...state,
        error: action.payload,
        isError: true
      };
    }
    case CLEAR_ERROR.CLEAR: {
      return {
        ...state,
        error: {},
        isError: false
      };
    }

    case INITIAL_PROPS.STORE: {
      return {
        ...state,
        initialProps: action.payload?.initialProps
      };
    }

    default:
      return state;
  }
};

export default system;
