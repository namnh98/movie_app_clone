import { CHANGE_LANGUAGE } from '@redux-app/actionType';

export const changeLanguage = (lang: string) => {
  return {
    type: CHANGE_LANGUAGE.HANDLER,
    lang
  };
};
