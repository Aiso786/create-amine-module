export const @MODULE@_ADD_FAILURE = '@MODULE@.ADD_FAILURE';
export const @MODULE@_ADD_SUCCESS = '@MODULE@.ADD_SUCCESS';
export const @MODULE@_ADD_REQUEST = '@MODULE@.ADD_REQUEST';

export const @MODULE@_UPDATE_FAILURE = '@MODULE@.UPDATE_FAILURE';
export const @MODULE@_UPDATE_SUCCESS = '@MODULE@.UPDATE_SUCCESS';
export const @MODULE@_UPDATE_REQUEST = '@MODULE@.UPDATE_REQUEST';

export const @MODULE@_BYID_FAILURE = '@MODULE@.BYID_FAILURE';
export const @MODULE@_BYID_SUCCESS = '@MODULE@.BYID_SUCCESS';
export const @MODULE@_BYID_REQUEST = '@MODULE@.BYID_REQUEST';

//@module@ ADD
interface @Module@AddRequest {
  type: typeof @MODULE@_ADD_REQUEST;
  payload: any;
  callback(showMessage: boolean): any;
}

interface @Module@AddSuccess {
  type: typeof @MODULE@_ADD_SUCCESS;
  payload: any;
  showMessage: boolean;
}

interface @Module@AddFailure {
  type: typeof @MODULE@_ADD_FAILURE;
  error: string;
}
//@module@ Update
interface @Module@UpdateRequest {
  type: typeof @MODULE@_UPDATE_REQUEST;
  payload: any;
  callback(showMessage: boolean): any;
}

interface @Module@UpdateSuccess {
  type: typeof @MODULE@_UPDATE_SUCCESS;
  payload: any;
  showMessage: boolean;
}

interface @Module@UpdateFailure {
  type: typeof @MODULE@_UPDATE_FAILURE;
  error: any;
}

//@module@ get by id
interface @Module@GetByIdRequest {
  type: typeof @MODULE@_BYID_REQUEST;
  id: any;
}
interface @Module@GetByIdSuccess {
  type: typeof @MODULE@_BYID_SUCCESS;
  payload: any;
}
interface @Module@GetByIdFailure {
  type: typeof @MODULE@_BYID_FAILURE;
  error: any;
}
export type @Module@ActionTypes =
  | @Module@AddRequest
  | @Module@AddSuccess
  | @Module@AddFailure
  | @Module@UpdateRequest
  | @Module@UpdateSuccess
  | @Module@UpdateFailure
  | @Module@GetByIdRequest
  | @Module@GetByIdSuccess
  | @Module@GetByIdFailure;
