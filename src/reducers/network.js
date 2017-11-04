import _ from "lodash";
export default function network(state = {}, action) {
  switch (true) {
    case action.type === "SUCCESS":
      let so = {};

      so[action.meta.source] = "SUCCESS";

      return { ...state, ...so };

    case action.type === "FAILURE":
      let fo = {};

      fo[action.meta.source] = "FAILURE";

      return { ...state, ...fo };

    case action.type === "REQUEST":
      let ro = {};

      ro[action.meta.source] = "REQUEST";

      return { ...state, ...ro };
  }
  return state;
}
