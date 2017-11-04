import _ from "lodash";
export default function domain(
  state = {
    author: null
  },
  action
) {
  switch (action.type) {
    case "SUCCESS":
      if (action.meta.source == "author") {
        return { ...state, author: action.payload };
      }

    default:
      return state;
  }
}
