import * as Type from '../actions/Type';
import initialState from '../initialState';

export default (state = initialState, action) => {
    switch (action.type) {
        case Type.TYPE:
            return Object.assign({}, state, {
            });
        default:
            return state;
    }
}