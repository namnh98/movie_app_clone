const initialState = {
  lang: '',
};

const reducers = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'changeLang':
      return { ...state, lang: click % 2 === 0 ? 'Eng' : 'Vie' };

    default:
      return { ...state };
  }
};

export default reducers;
