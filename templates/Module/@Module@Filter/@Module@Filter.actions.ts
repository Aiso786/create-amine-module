import {
  @MODULE@_FILTER_RESET,
  @MODULE@_FILTER_CHANGE,
  FilterActionTypes,
} from './@Module@Filter.types';

export function @module@FilterChange(payload): FilterActionTypes {
  return { type: @MODULE@_FILTER_CHANGE, payload };
}
export function @module@FilterReset(): FilterActionTypes {
  return { type: @MODULE@_FILTER_RESET };
}
