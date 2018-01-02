export default function count(state = 0, action) {
  switch (action.type) {
    case 'count:increase':
      return ++state;
    default:
      return state;
  }
}
