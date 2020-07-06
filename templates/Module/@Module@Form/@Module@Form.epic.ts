import url from 'Utils/constants';
import {
  @MODULE@_ADD_REQUEST,
  @MODULE@_UPDATE_REQUEST,
  @MODULE@_BYID_REQUEST,
} from './@Module@Form.types';
import {
  @module@AddSuccess,
  @module@AddFailure,
  @module@UpdateSuccess,
  @module@UpdateFailure,
  @module@GetByIdSuccess,
  @module@GetByIdFailure,
} from './@Module@Form.actions';
import getEpic, { postEpic } from 'Utils/epics';

export const @module@AddEpic = postEpic(
  url.@module@s.add,
  @MODULE@_ADD_REQUEST,
  @module@AddSuccess,
  @module@AddFailure
);

export const @module@UpdateEpic = postEpic(
  url.@module@s.update,
  @MODULE@_UPDATE_REQUEST,
  @module@UpdateSuccess,
  @module@UpdateFailure
);
export const @module@ByIdEpic = getEpic(
  url.@module@s.get,
  @MODULE@_BYID_REQUEST,
  @module@GetByIdSuccess,
  @module@GetByIdFailure
);
