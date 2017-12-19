import count from './count.js';
import network from './network.js';
import domain from './domain';
import Api from 'redux-api-middleware-addon';
import nav from './nav.js';
const rootReducer = function(state = {}, action) {
  return {
    count: count(state.count, action),
    domain: domain(state.domain, action),
    network: Api.Reducer.network(state.network, action),
    nav: nav(state.nav, action),
  };
};
export default rootReducer;
