/* eslint-disable no-empty */
/* eslint-disable no-undef */
import fetchIntercept from 'fetch-intercept';
import { callRefreshToken } from 'src/helpers/tokenHelper';
const REQUEST_TIMEOUT = 60000;
import NetInfo, { NetInfoStateType } from '@react-native-community/netinfo';
const EXPIRED_TOKEN =
  'eyJhbGciOiJFUzI1NiIsImtpZCI6IkU0RDNGNzFFQzNERDlBNDVCNUU0MzJDOTY5NDgxIiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2NzMyNDQxMjUsImV4cCI6MTY3MzI0NDcyNSwiaXNzIjoiaHR0cHM6Ly90ZXN0LmF1dGgub2tlbGFyZXN1bWUuY29tIiwiYXVkIjoiaHR0cHM6Ly90ZXN0LmF1dGgub2tlbGFyZXN1bWUuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6ImFrYVJFWFNQQSIsInN1YiI6IjMzZjRlOGVjLWRmYjAtNDQ4My1hYjhkLTQzMjM0YTNiNWY2MyIsImF1dGhfdGltZSI6MTY3MzI0NDEyNSwiaWRwIjoibG9jYWwiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjMzZjRlOGVjLWRmYjAtNDQ4My1hYjhkLTQzMjM0YTNiNWY2MyIsIm5hbWUiOiJmcHRzb3ctbWluaG5jIiwiZW1haWwiOiJuZ2NtaW5oLnFuQGdtYWlsLmNvbSIsImZhbWlseV9uYW1lIjoiTmd1eeG7hW4gQ8O0bmcgTWluaCIsImNvbXBhbnlJRCI6IkZQVFNPVyIsInJvbGUiOiJGUFRTT1ctUGh1IC0gRnVsbCBSb2xlIiwiY3VycmVudF9yb2xlIjoiRlBUU09XLVBodSAtIEZ1bGwgUm9sZSIsImRlcGFydG1lbnRJRCI6IjU1NzIwMzRkLTc5MjYtNGNmMC05MDgyLTE5YTkzOWFhMTRiNyIsImRhdGFLZXkiOiJGUFRTT1ciLCJha2FyZXhfcGVybWlzc2lvbnMiOlsiQ29tcGFueVByb2ZpbGU6UmVhZENvbXBhbnlQcm9maWxlIiwiQ29tcGFueVByb2ZpbGU6VXBkYXRlQ29tcGFueVByb2ZpbGUiLCJSb2xlOkxpc3RSb2xlIiwiUm9sZTpVcGRhdGVSb2xlIiwiUm9sZTpDcmVhdGVSb2xlIiwiUm9sZTpSZWFkUm9sZSIsIlJvbGU6RGVsZXRlUm9sZSIsIk1hc3RlclJlamVjdFJlYXNvbnM6UmVhZE1hc3RlclJlamVjdFJlYXNvbnMiLCJNYXN0ZXJSZWplY3RSZWFzb25zOkRlbGV0ZU1hc3RlclJlamVjdFJlYXNvbnMiLCJFbWFpbFRlbXBsYXRlOkxpc3RFbWFpbFRlbXBsYXRlIiwiRW1haWxUZW1wbGF0ZTpVcGRhdGVFbWFpbFRlbXBsYXRlIiwiRW1haWxUZW1wbGF0ZTpDcmVhdGVFbWFpbFRlbXBsYXRlIiwiRW1haWxUZW1wbGF0ZTpEZWxldGVFbWFpbFRlbXBsYXRlIiwiRW1haWxUZW1wbGF0ZTpSZWFkRW1haWxUZW1wbGF0ZSIsIkpvYkNhdGVnb3J5OkRlbGV0ZUpvYkNhdGVnb3J5IiwiSm9iQ2F0ZWdvcnk6TGlzdEpvYkNhdGVnb3J5IiwiSm9iQ2F0ZWdvcnk6Q3JlYXRlSm9iQ2F0ZWdvcnkiLCJKb2JDYXRlZ29yeTpSZWFkSm9iQ2F0ZWdvcnkiLCJSZWNDaGFubmVsOkNyZWF0ZVJlY0NoYW5uZWwiLCJSZWNDaGFubmVsOlVwZGF0ZVJlY0NoYW5uZWwiLCJSZWNDaGFubmVsOkRlbGV0ZVJlY0NoYW5uZWwiLCJSZWNDaGFubmVsOkxpc3RSZWNDaGFubmVsIiwiUmVjQ2hhbm5lbDpSZWFkUmVjQ2hhbm5lbCIsIkpvYlJhbms6RGVsZXRlSm9iUmFuayIsIkpvYlJhbms6UmVhZEpvYlJhbmsiLCJKb2JSYW5rOlVwZGF0ZUpvYlJhbmsiLCJKb2JSYW5rOkNyZWF0ZUpvYlJhbmsiLCJKb2JSYW5rOkxpc3RKb2JSYW5rIiwiRGVwYXJ0bWVudDpDcmVhdGVEZXBhcnRtZW50IiwiRGVwYXJ0bWVudDpEZWxldGVEZXBhcnRtZW50IiwiSW50ZXJ2aWV3U2V0dGluZzpBZGRVcGRhdGVJbnRlcnZpZXdTZXR0aW5nIiwiSW50ZXJ2aWV3U2V0dGluZzpMaXN0SW50ZXJ2aWV3U2V0dGluZyIsIkRlcGFydG1lbnQ6UmVhZERlcGFydG1lbnQiLCJEZXBhcnRtZW50Okxpc3REZXBhcnRtZW50IiwiQ2FuZGlkYXRlOkxpc3RDYW5kaWRhdGUiLCJDYW5kaWRhdGU6Q3JlYXRlQ2FuZGlkYXRlIiwiQ2FuZGlkYXRlOlJlYWRDYW5kaWRhdGUiLCJDYW5kaWRhdGU6VXBkYXRlQ2FuZGlkYXRlIiwiTWFzdGVyUmVqZWN0UmVhc29uczpDcmVhdGVNYXN0ZXJSZWplY3RSZWFzb25zIiwiTWFzdGVyUmVqZWN0UmVhc29uczpVcGRhdGVNYXN0ZXJSZWplY3RSZWFzb25zIiwiTWFzdGVyUmVqZWN0UmVhc29uczpMaXN0TWFzdGVyUmVqZWN0UmVhc29ucyIsIkxvY2F0aW9uOlVwZGF0ZUxvY2F0aW9uIiwiTG9jYXRpb246UmVhZExvY2F0aW9uIiwiTG9jYXRpb246TGlzdExvY2F0aW9uIiwiTG9jYXRpb246RGVsZXRlTG9jYXRpb24iLCJMb2NhdGlvbjpDcmVhdGVMb2NhdGlvbiIsIlVzZXJQcm9maWxlOlJlYWRVc2VyUHJvZmlsZSIsIlVzZXJQcm9maWxlOlVwZGF0ZVVzZXJQcm9maWxlIiwiVXNlclByb2ZpbGU6Q2hhbmdlUGFzc3dvcmQiLCJNeVByb2R1Y3Q6UmVhZE15UHJvZHVjdCIsIlJvbGU6UmVzdG9yZVJvbGUiLCJQcm9kdWN0UHVyY2hhc2U6UHVyY2hhc2VQcm9kdWN0IiwiVXNlcjpVcGRhdGVVc2VyIiwiVXNlcjpMaXN0VXNlciIsIlVzZXI6UmVhZFVzZXIiLCJVc2VyOkRlbGV0ZVVzZXIiLCJSZWZlcnJhbDpBZGRSZWZlcnJhbCIsIkludGVydmlld1NldHRpbmc6RGVsZXRlSW50ZXJ2aWV3U2V0dGluZyIsIlJlZmVycmFsOlJlbW92ZVJlZmVycmFsIiwiUmVmZXJyYWw6QnV5UmVmZXJyYWwiLCJSZWZlcnJhbDpMaXN0UmVmZXJyYWwiLCJSZWZlcnJhbDpSZWFkUmVmZXJyYWwiLCJQcm9kdWN0UHVyY2hhc2U6TGlzdE15T3JkZXIiLCJQcm9kdWN0UHVyY2hhc2U6UmVhZE9yZGVyIiwiSm9iUmVxdWVzdDpDcmVhdGVKb2JSZXF1ZXN0IiwiSm9iUmVxdWVzdDpBcHByb3ZlU2FsYXJ5T2ZmZXIiLCJKb2JSZXF1ZXN0OkFkZENhbmRpZGF0ZVRvSm9iUmVxdWVzdCIsIlVzZXI6Q3JlYXRlVXNlciIsIlVzZXI6U2VuZEVtYWlsVmVyaWZpY2F0aW9uTGluayIsIlVzZXI6Q2hhbmdlUGFzc1dvcmRVc2VyIiwiSm9iUmVxdWVzdDpJbnRlcnZpZXdNYW5hZ2UiLCJKb2JSZXF1ZXN0OlJlYWRKb2JSZXF1ZXN0IiwiSm9iUmVxdWVzdDpBcHByb3ZlT2ZmZXJMZXR0ZXIiLCJKb2JSZXF1ZXN0OkRlbGV0ZUpvYlJlcXVlc3QiLCJKb2JSZXF1ZXN0OlVwZGF0ZUpvYlJlcXVlc3QiLCJKb2JSZXF1ZXN0OlB1Ymxpc2hKb2JSZXF1ZXN0IiwiRGVwYXJ0bWVudDpVcGRhdGVEZXBhcnRtZW50IiwiVGFsZW50TWFuYWdlbWVudDpUYWxlbnRNYW5hZ2VtZW50IiwiUGhvbmVuZXQ6Q2FsbENhbmRpZGF0ZSIsIlBob25lbmV0OkdldFVSTFJlY29yZGluZyIsIkpvYkNhdGVnb3J5OlVwZGF0ZUpvYkNhdGVnb3J5IiwiSW50ZXJ2aWV3U2V0dGluZzpBZGRVcGRhdGVUcmlnZXIiLCJDYW5kaWRhdGU6UmVmZXJyYWxDYW5kaWRhdGUiLCJDYW5kaWRhdGU6RGVsZXRlQ2FuZGlkYXRlIiwiQ2FuZGlkYXRlOkRhc2hib2FyZExpc3RDYW5kaWRhdGVGb2xsb3ciLCJSZWZlcnJhbDpMaXN0Q29tbWVudCIsIlJlZmVycmFsOkFkZENvbW1lbnQiLCJKb2JSZXF1ZXN0Okxpc3RKb2JSZXF1ZXN0IiwiQ29tcGFueUpvYkNhdGVnb3J5Okxpc3QiLCJDb21wYW55Sm9iQ2F0ZWdvcnk6Q3JlYXRlIiwiQ29tcGFueUpvYkNhdGVnb3J5OlVwZGF0ZSIsIkNvbXBhbnlKb2JDYXRlZ29yeTpEZWxldGUiLCJDb21wYW55Sm9iQ2F0ZWdvcnk6UmVhZCJdLCJqdGkiOiI4MTYxN0YxQTBDMUExNTgxNkNDMTVCQzUwNzdBNDZBRiIsInNpZCI6IkMzQjZGQjg2ODQ0QjMxNUY4ODY2MTE2RTJCMTQwRDMyIiwiaWF0IjoxNjczMjQ0MTI1LCJzY29wZSI6WyJvcGVuaWQiLCJwcm9maWxlIiwiYWthcmV4X3Byb2ZpbGUiLCJha2FyZXhfYXBpIiwiSWRlbnRpdHlTZXJ2ZXJBcGkiLCJvZmZsaW5lX2FjY2VzcyJdLCJhbXIiOlsicHdkIl19.BeEeImiNK9Ew1BUnEHKKqeQ5uB3Q1-anVyMA2iaKJ6Eg2UchrNb2JBbL_YMp6U6fFu3sMIxyX3I7Qcd6nhuq2Q';

const refreshToken = async () => {
  const token = await callRefreshToken();
  if (token) return token;
};

//HANDLE INTERCEPTER
const unregister = fetchIntercept.register({
  request: async function (url, config) {
    // let token = await getToken();
    let token = EXPIRED_TOKEN;
    const tempConfig = { ...config };
    if (!tempConfig.headers) {
      tempConfig.headers = {};
    }
    if (token && tempConfig && tempConfig.headers && !tempConfig.headers.Authorization) {
      tempConfig.headers.Authorization = 'Bearer ' + token;
    }

    // Modify the url or config here
    return [url, tempConfig];
  },

  requestError: function (error) {
    // Called when an error occured during another 'request' interceptor call
    return Promise.reject(error);
  },

  response: async function (response) {
    if (response?.status === 401) {
      await refreshToken();
    }
    // Modify the reponse object

    return response;
  },

  responseError: async function (error) {
    // Handle an fetch error
    return Promise.reject(error);
  }
});

class APIUtils {
  additionalHeader = {};

  #buildURLWithParams = (url, tmpParams = {}) => {
    let params = { ...tmpParams };
    let requestedURL = url;
    if (params) {
      const keys = Object.keys(params);

      if (Array.isArray(keys) && keys.length > 0) {
        requestedURL += '?';
        for (var property of keys) {
          const index = keys.indexOf(property);
          if (index > 0 && index < keys.length) {
            requestedURL += '&';
          }
          requestedURL += `${property}=${params[property]}`;
        }
      }
    }
    return requestedURL;
  };

  #handleRequestBlob = (url, config) => {
    // eslint-disable-next-line no-undef
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchConfig = {
      ...config,
      signal
    };

    setTimeout(() => {
      controller.abort();
    }, REQUEST_TIMEOUT);
    if (__DEV__) {
      console.log('>>>>>request>>>>>', {
        url,
        config: fetchConfig
      });
    }

    return fetch(url, fetchConfig).then(async response => {
      let responseJson = {};
      try {
        responseJson = await response.blob();
      } catch (err) {}
      if (__DEV__) {
        console.log('>>>>>response>>>>>', {
          url,
          data: responseJson,
          status: response.status
        });
      }

      if (response.status >= 400 && response.status <= 499) {
        throw { data: responseJson, status: response.status };
      }
      if (response.status >= 200 && response.status <= 299) {
        return { data: responseJson, status: response.status };
      }
      throw { data: responseJson, status: response.status };
    });
  };

  #handleRequest = (url, config) => {
    // eslint-disable-next-line no-undef
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchConfig = {
      ...config,
      signal
    };

    setTimeout(() => {
      controller.abort();
    }, REQUEST_TIMEOUT);
    if (__DEV__) {
      console.log('>>>>>request>>>>>', {
        url,
        config: fetchConfig
      });
    }

    return fetch(url, fetchConfig)
      .then(async response => {
        let responseJson = {};
        try {
          responseJson = await response.json();
        } catch (err) {}
        if (__DEV__) {
          console.log('>>>>>response>>>>>', {
            url,
            data: responseJson,
            status: response.status
          });
        }

        if (response.status >= 400 && response.status <= 499) {
          throw { data: responseJson, status: response.status };
        }
        if (response.status >= 200 && response.status <= 299) {
          return { data: responseJson, status: response.status };
        }
        throw { data: responseJson, status: response.status };
      })
      .catch(async error => {
        // check internet
        const connectionInfo = await NetInfo.fetch();

        if (
          !connectionInfo?.isConnected ||
          connectionInfo?.type === NetInfoStateType.none ||
          connectionInfo?.type === NetInfoStateType.unknown
        ) {
          throw new Error('common.cannotConnected');
        }
        throw error;
      });
  };

  #buildConfig = config => {
    let headersDefault = {
      'Content-Type': 'application/json',
      Accept: 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      e_platform: 'mobile'
    };
    const { headers, params, method, body, ...restConfig } = config;

    return {
      cache: 'default',
      credentials: 'include',
      headers: {
        ...headersDefault,
        ...config.headers,
        ...this.additionalHeader
      },
      ...restConfig,
      method,
      body: method !== 'GET' && method !== 'DELETE' ? JSON.stringify(config.body) : undefined
    };
  };

  #buildConfigForm = config => {
    let headersDefault = {
      'Content-Type': 'application/json',
      Accept: 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      e_platform: 'mobile'
    };
    const { headers, params, method, body, ...restConfig } = config;

    return {
      cache: 'default',
      credentials: 'include',
      headers: {
        ...headersDefault,
        ...config.headers,
        ...this.additionalHeader
      },
      ...restConfig,
      method,
      body: method !== 'GET' && method !== 'DELETE' ? config.body : undefined
    };
  };

  setAdditionalHeader = data => {
    this.additionalHeader = data;
  };

  postFormData(requestedURL, config) {
    const fetchConfig = this.#buildConfigForm({ ...config, method: 'POST' });
    return this.#handleRequest(requestedURL, fetchConfig);
  }

  getBlob(url, config = { headers: {}, params: {} }) {
    const requestedURL = this.#buildURLWithParams(url, config?.params);
    const fetchConfig = this.#buildConfig({ ...config, method: 'GET' });
    return this.#handleRequestBlob(requestedURL, fetchConfig);
  }

  get(url, config = { headers: {}, params: {} }) {
    const requestedURL = this.#buildURLWithParams(url, config?.params);
    const fetchConfig = this.#buildConfig({ ...config, method: 'GET' });
    return this.#handleRequest(requestedURL, fetchConfig);
  }

  post(url, config = { headers: {}, params: {} }) {
    const requestedURL = this.#buildURLWithParams(url, config?.params);
    const fetchConfig = this.#buildConfig({ ...config, method: 'POST' });
    return this.#handleRequest(requestedURL, fetchConfig);
  }

  delete(url, config = { headers: {} }) {
    const fetchConfig = this.#buildConfig({ ...config, method: 'DELETE' });
    return this.#handleRequest(url, fetchConfig);
  }

  put(url, config = { headers: {} }) {
    const fetchConfig = this.#buildConfig({ ...config, method: 'PUT' });
    return this.#handleRequest(url, fetchConfig);
  }
}

const apiUtils = new APIUtils();

export default apiUtils;
