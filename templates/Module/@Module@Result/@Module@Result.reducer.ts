import initialState from 'Store/initialState';
import {
  @MODULE@_SUCCESS,
  @MODULE@_FAILURE,
  @MODULE@_REQUEST,
  @Module@ResultActionTypes,
} from './@Module@Result.types';
import { @MODULE@_FILTER_RESET } from '../@Module@Filter/@Module@Filter.types';
import { paginationReducer, resultReducer } from 'Utils/reducers';

export const @module@PaginationReducer = paginationReducer<@Module@ResultActionTypes>(
  initialState.@module@.pagination,
  @MODULE@_REQUEST,
  @MODULE@_SUCCESS,
  @MODULE@_FILTER_RESET
);

export const @module@ResultReducer = resultReducer<any, @Module@ResultActionTypes>(
  initialState.@module@.results,
  @MODULE@_SUCCESS,
  @MODULE@_FAILURE,
  @MODULE@_FILTER_RESET
);
