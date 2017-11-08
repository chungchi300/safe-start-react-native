import { CALL_API } from 'redux-api-middleware';
export function load() {
  return async (dispatch, getState) => {
    let result = await dispatch({
      [CALL_API]: {
        endpoint: 'https://api.github.com/users/chungchi300',
        method: 'GET',
        types: [
          {
            type: 'REQUEST',
            meta: { source: 'author' },
          },
          {
            type: 'SUCCESS',
            meta: { source: 'author' },
          },
          {
            type: 'FAILURE',
            meta: { source: 'author' },
          },
        ],
      },
    });
  };
}
