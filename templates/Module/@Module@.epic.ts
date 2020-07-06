import { combineEpics } from 'redux-observable';
import { postEpic } from 'Utils/epics';
import url from 'Utils/constants';
import { @MODULE@_REQUEST } from './@Module@Result/@Module@Result.types';
import { @module@Success, @module@Failure } from './@Module@Result/@Module@Result.actions';
import {
  @module@AddEpic,
  @module@UpdateEpic,
  @module@ByIdEpic,
} from './@Module@Form/@Module@Form.epic';

export const @module@SearchEpic = postEpic(
  url.@module@s.filter,
  @MODULE@_REQUEST,
  @module@Success,
  @module@Failure
);

const @module@Epic = combineEpics(
  @module@SearchEpic,
  @module@AddEpic,
  @module@UpdateEpic,
  @module@ByIdEpic
);

export default @module@Epic;
