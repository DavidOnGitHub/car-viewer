import * as Type from '../actions/Type';
import initialState from '../initialState';

export default (state = initialState, action) => {
  switch (action.type) {
    case Type.SELECT_MAKE:
      return Object.assign({}, state, {
        selectedMake: action.id
      });
    case Type.SELECT_MODEL:
      return Object.assign({}, state, {
        selectedModel: action.id
      });
    default:
      return state;
  }
};
