import initialState from 'Store/initialState';

import {
  @MODULE@_FILTER_RESET,
  @MODULE@_FILTER_CHANGE,
  FilterActionTypes,
} from './@Module@Filter.types';
import { filterReducer } from 'Utils/reducers';
import { I@Module@Filter } from './@Module@Filter.state.type';

export const @module@FilterReducer = filterReducer<I@Module@Filter, FilterActionTypes>(
  initialState.@module@.filter,
  @MODULE@_FILTER_RESET,
  @MODULE@_FILTER_CHANGE
);
export default siteFilterReducer;
