import {
  @MODULE@_REQUEST,
  @MODULE@_SUCCESS,
  @MODULE@_FAILURE,
  @Module@ResultActionTypes,
} from './@Module@Result.types';

export function @module@Request(
  payload: any,
  callback: any
): @Module@ResultActionTypes {
  return { type: @MODULE@_REQUEST, payload, callback };
}
export function @module@Success(payload): @Module@ResultActionTypes {
  return { type: @MODULE@_SUCCESS, payload };
}
export function @module@Failure(error): @Module@ResultActionTypes {
  return { type: @MODULE@_FAILURE, error };
}
