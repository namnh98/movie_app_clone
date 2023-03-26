import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import vi from '@i18n/locales/vi';
import en from '@i18n/locales/en';
import { store } from '@redux-app/configureStore';
import { I18N_LOCALE } from '@constants/common';
import moment from 'moment';
import Memoize from 'lodash.memoize';
import checkNumber from '@helpers/checkNumber';
import { changeLanguage } from '@redux-app/actions/setting';

const regexCheckExist = /^(?=.*\bmissing\b)(?=.*\btranslation\b).*$/g;

export const translate = Memoize(
  (key, config) => {
    try {
      if (Array.isArray(key)) {
        const arr = [...key].filter(ob => {
          if ((ob + '').trim()) {
            return ob;
          }
        });

        const newArr = arr.map(ob => {
          if (checkNumber(ob)) {
            return ob;
          }

          const trans = i18n.t(ob, config);

          if (!trans.match(regexCheckExist)) {
            return trans;
          }

          return ob;
        });

        return newArr.join(' ');
      }

      const textTranslate = i18n.t(key, config);

      if (textTranslate.match(regexCheckExist) || typeof textTranslate === 'object') {
        return key;
      }

      return i18n.t(key, config);
    } catch (error) {
      return key;
    }
  },
  (textTranslate, config) => {
    try {
      return config ? textTranslate + JSON.stringify(config) : textTranslate;
    } catch (error) {
      return textTranslate;
    }
  }
);

export const setI18nConfig = async (lang = '') => {
  const fallback = { languageTag: lang || 'vi' };
  const { languageTag } = fallback;
  i18n.locale = languageTag;
  // i18n.translations = {
  //   [languageTag]: translationGetters[languageTag]
  // };
  moment.locale(i18n.locale);
  // translate.cache.clear();
};

export const initLanguage = () => {
  const lang = store.getState()?.setting?.lang || '';
  if (lang) {
    setI18nConfig(lang);
  } else {
    const languageCode = I18N_LOCALE.VI;
    // const locales = RNLocalize.getLocales();
    // const languageCode = locales[0]?.languageCode || '';
    store.dispatch(changeLanguage(languageCode));
    setI18nConfig(languageCode);
  }
};

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources: {
    en,
    vi
  },
  lng: 'vi',
  fallbackLng: 'vi',
  interpolation: {
    escapeValue: false
  },
  react: {
    useSuspense: false
  }
});

export default i18n;
