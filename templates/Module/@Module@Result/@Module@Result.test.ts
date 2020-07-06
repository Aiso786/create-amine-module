import { assert } from 'chai';
import { toArray } from 'rxjs/operators';

import { @module@SearchEpic } from '../@Module@.epic';
import { of, throwError } from 'rxjs';

import { @MODULE@_REQUEST, @MODULE@_SUCCESS, @MODULE@_FAILURE } from './@Module@Result.types';

const state$ = null; // not needed for this epic

describe('@Module@ Result Actions', () => {
  const mockResponse = { response: { name: 'test' } };

  describe('@Module@ search', () => {
    const action$ = of({
      type: @MODULE@_REQUEST,
      payload: mockResponse,
      callback: () => {},
    });
    it('dispatches "@MODULE@_SUCCESS" action when it is successful', (done) => {
      const ajax = {
        postJSON: (url, payload) => of(payload),
      };
      const expectedActions = [
        {
          type: @MODULE@_SUCCESS,
          payload: mockResponse.response,
        },
      ];
      const result$ = @module@SearchEpic(action$, state$, { ajax }).pipe(
        toArray() // buffers output until your Epic naturally completes()
      );

      result$.subscribe((actions) => {
        assert.deepEqual(actions, expectedActions);
        done();
      });
    });
    it('dispatches "@MODULE@_FAILURE" action when it is fails', (done) => {
      const errorMessage = '@Module@ search failed';
      const expectedActions = [{ type: @MODULE@_FAILURE, error: errorMessage }];
      const ajax = {
        postJSON: () => throwError(errorMessage),
      };
      const result$ = @module@SearchEpic(action$, state$, { ajax }).pipe(toArray());

      result$.subscribe((actions) => {
        assert.deepEqual(actions, expectedActions);
        done();
      });
    });
  });
});
