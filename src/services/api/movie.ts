import { API_URL } from '@constants/apiUrl';
import apiUtils from '@utils/apiUtils';

export function getListMovieApi(action) {
  const { params } = action;
  return apiUtils.get(API_URL.LIST_MOVIE);
}
