export const @MODULE@_FAILURE = '@MODULE@_FAILURE';
export const @MODULE@_SUCCESS = '@MODULE@_SUCCESS';
export const @MODULE@_REQUEST = '@MODULE@_REQUEST';

export interface @Module@Request {
  type: typeof @MODULE@_REQUEST;
  payload: any;
  callback(showMessage: boolean): any;
}
interface @Module@Success {
  type: typeof @MODULE@_SUCCESS;
  payload: any;
}
interface @Module@Failure {
  type: typeof @MODULE@_FAILURE;
  error: any;
}
export type @Module@ResultActionTypes = @Module@Request | @Module@Success | @Module@Failure;
