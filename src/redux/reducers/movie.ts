import { GET_LIST_MOVIE } from '../actionType';
const initialState = {
  listMovie: []
};

const movieReducer = (state = initialState, action: { type: string; payload: any }) => {
  const { type, payload } = action;

  switch (type) {
    case GET_LIST_MOVIE.HANDLER:
      return {
        ...state
      };

    case GET_LIST_MOVIE.SUCCESS:
      return {
        ...state,
        listMovie: payload
      };

    case GET_LIST_MOVIE.FAILURE:
      return {
        ...state,
        listMovie: payload
      };

    default:
      return state;
  }
};

export default movieReducer;
