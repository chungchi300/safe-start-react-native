import { AppNavigator } from "../AppNavigator";
const firstAction = AppNavigator.router.getActionForPathAndParams("Author");

const initialNavState = AppNavigator.router.getStateForAction(firstAction);
export default function nav(state = initialNavState, action) {
  let nextState;
  switch (action.type) {
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}
