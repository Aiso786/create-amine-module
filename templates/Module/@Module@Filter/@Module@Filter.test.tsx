import @module@FilterReducer from './@Module@Filter.reducer';
import { @MODULE@_FILTER_RESET, @MODULE@_FILTER_CHANGE } from './@Module@Filter.types';

const name = 'Test 1';
describe('@Module@ Filter reducer tests', () => {
  const initialState = {
    name: name
  };

  it('should handle @MODULE@_FILTER_CHANGE', () => {
    expect(
      @module@FilterReducer(initialState, {
        type: @MODULE@_FILTER_CHANGE,
        payload: {
          name: name,
        },
      })
    ).toEqual({
      name: name,
    });
  });
  it('should handle @MODULE@_FILTER_RESET', () => {
    expect(
      @module@FilterReducer(initialState, {
        type: @MODULE@_FILTER_RESET,
      })
    ).toEqual({
      name: '',
    });
  });
});
