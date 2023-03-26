export const getLoadingSelector = (state: any, actionType: any) => {
  if (Array.isArray(actionType)) {
    return actionType.some(r => {
      const matches = /(.*)_(HANDLER|SUCCESS|FAILURE|END)/.exec(r);
      if (!matches) {
        return false;
      }
      const [, requestName, requestState] = matches;
      return state.loading[`${requestName}`] || false;
    });
  }
  return false;
};
