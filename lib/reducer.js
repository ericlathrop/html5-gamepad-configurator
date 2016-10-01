let defaultState = {
};

export default function(state = defaultState) {
  // FIXME: make immutable
  return Object.assign({}, state);
}
