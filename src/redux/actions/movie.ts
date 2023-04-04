import { GET_LIST_MOVIE } from '@redux-app/actionType';

export const getListMovieHandler = (payload: any, onSuccess: any, onFailure: any) => {
  return {
    type: GET_LIST_MOVIE.HANDLER,
    payload,
    onSuccess,
    onFailure
  };
};

export const getListMovieSuccess = (payload: any) => {
  return {
    type: GET_LIST_MOVIE.SUCCESS,
    payload
  };
};

export const getListMovieFailure = (payload: any) => {
  return {
    type: GET_LIST_MOVIE.FAILURE,
    payload
  };
};
