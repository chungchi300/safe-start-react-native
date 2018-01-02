import Api from 'redux-api-middleware-addon';
export function load() {
  return async (dispatch, getState) => {
    dispatch(
      Api.Action.request(
        '/pet/findByStatus',
        {
          method: 'get',
          data: { status: 'available' },
          subst: null,
        },
        Api.Helper.entity('PETS_BY_ID')
      )
    ).then(res => console.log(res));
  };
}
