import initialState from 'Store/initialState';
import { @MODULE@_BYID_FAILURE, @MODULE@_BYID_SUCCESS } from './@Module@Form.types';

export const @module@ObjectReducer = (state = initialState.@module@.object, action) => {
  switch (action.type) {
    case @MODULE@_BYID_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case @MODULE@_BYID_FAILURE:
      return initialState.@module@.object;
    default:
      return state;
  }
};
export default @module@ObjectReducer;
