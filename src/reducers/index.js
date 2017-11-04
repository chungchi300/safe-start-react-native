import count from "./count.js";
import network from "./network.js";
import domain from "./domain";
const rootReducer = function(state = {}, action) {
  return {
    count: count(state.count, action),
    domain: domain(state.domain, action),
    network: network(state.network, action)
  };
};
export default rootReducer;
