import { CHANGE_LANGUAGE } from '@redux-app/actionType';

const initialState = {
  lang: ''
};

const setting = (state = initialState, action: any) => {
  switch (action.type) {
    case CHANGE_LANGUAGE.HANDLER:
      console.log({ action });
      return { ...state, lang: action.lang };

    default:
      return state;
  }
};

export default setting;
