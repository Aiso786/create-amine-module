import {
  @MODULE@_ADD_REQUEST,
  @MODULE@_ADD_SUCCESS,
  @MODULE@_ADD_FAILURE,
  @MODULE@_UPDATE_REQUEST,
  @MODULE@_UPDATE_SUCCESS,
  @MODULE@_UPDATE_FAILURE,
  @Module@ActionTypes,
  @MODULE@_BYID_SUCCESS,
  @MODULE@_BYID_REQUEST,
  @MODULE@_BYID_FAILURE,
} from './@Module@Form.types';

//@module@ ADD
export function @module@AddRequest(payload, callback): @Module@ActionTypes {
  return { type: @MODULE@_ADD_REQUEST, payload, callback };
}

export function @module@AddSuccess(payload, showMessage): @Module@ActionTypes {
  return { type: @MODULE@_ADD_SUCCESS, payload, showMessage };
}

export function @module@AddFailure(error, showMessage): @Module@ActionTypes {
  return { type: @MODULE@_ADD_FAILURE, error };
}
//@module@ Update
export function @module@UpdateRequest(payload, callback): @Module@ActionTypes {
  return { type: @MODULE@_UPDATE_REQUEST, payload, callback };
}

export function @module@UpdateSuccess(payload, showMessage): @Module@ActionTypes {
  return { type: @MODULE@_UPDATE_SUCCESS, payload, showMessage };
}

export function @module@UpdateFailure(error, showMessage): @Module@ActionTypes {
  return { type: @MODULE@_UPDATE_FAILURE, error };
}

export function @module@GetByIdRequest(id): @Module@ActionTypes {
  return { type: @MODULE@_BYID_REQUEST, id };
}

export function @module@GetByIdSuccess(payload): @Module@ActionTypes {
  return { type: @MODULE@_BYID_SUCCESS, payload };
}

export function @module@GetByIdFailure(error): @Module@ActionTypes {
  return { type: @MODULE@_BYID_FAILURE, error };
}
