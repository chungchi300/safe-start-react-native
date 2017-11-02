import count from './count.js';
const rootReducer = function(state = {}, action) {
  return {
    count: count(state.count, action),
  };
};
export default rootReducer;
