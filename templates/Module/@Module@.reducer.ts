import { combineReducers } from 'redux';
import {
  @module@ResultReducer,
  @module@PaginationReducer,
} from './@Module@Result/@Module@Result.reducer';
import { @module@FilterReducer } from './@Module@Filter/@Module@Filter.reducer';
import { I@Module@Filter } from './@Module@Filter/@Module@Filter.state.type';
import { IPaginationState } from 'Model';
import @module@ObjectReducer from './@Module@Form/@Module@Form.reducer';

const reducer = combineReducers({
  results: @module@ResultReducer,
  pagination: @module@PaginationReducer,
  filter: @module@FilterReducer,
  object: @module@ObjectReducer,
});

//selector

export const get@Module@Filter = (state): I@Module@Filter => {
  return state.filter;
};
export const get@Module@Pagination = (state): IPaginationState => {
  return state.pagination;
};
export const get@Module@Results = (state): any => {
  return state.results;
};
export const get = (state): any => {
  return state.object;
};

export default reducer;
