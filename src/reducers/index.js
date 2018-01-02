import count from './count';
import network from './network.js';
import domain from './domain';
import Api from 'redux-api-middleware-addon';
import nav from './nav.js';
const rootReducer = function(state = {}, action) {
  return {
    count: count(state.count, action),
    domain: domain(state.domain, action),
    network: Api.Reducer.network(state.network, action),
    api: Api.Reducer.api(state.api, action),
    domain: Api.Reducer.domain(state.domain, action),
    nav: nav(state.nav, action),
  };
};
export default rootReducer;
