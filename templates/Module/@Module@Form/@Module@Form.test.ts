import { assert } from 'chai';
import { toArray } from 'rxjs/operators';

import { @module@AddEpic, @module@UpdateEpic } from './@Module@Form.epic';
import { of, throwError } from 'rxjs';

import {
  @MODULE@_ADD_REQUEST,
  @MODULE@_ADD_SUCCESS,
  @MODULE@_ADD_FAILURE,
  @MODULE@_UPDATE_SUCCESS,
  @MODULE@_UPDATE_REQUEST,
  @MODULE@_UPDATE_FAILURE,
} from './@Module@Form.types';

const state$ = null; // not needed for this epic

describe('@Module@ Form Actions', () => {
  const mockResponse = { response: { name: 'test' } };

  describe('add @module@', () => {
    const action$ = of({
      type: @MODULE@_ADD_REQUEST,
      payload: mockResponse,
      callback: () => {},
    });
    it('dispatches "@MODULE@_ADD_SUCCESS" actions when it is successful', (done) => {
      const ajax = {
        postJSON: (url, payload) => of(payload),
      };
      const expectedActions = [
        {
          type: @MODULE@_ADD_SUCCESS,
          payload: mockResponse.response,
          showMessage: true,
        },
      ];
      const result$ = @module@AddEpic(action$, state$, { ajax }).pipe(
        toArray() // buffers output until your Epic naturally completes()
      );

      result$.subscribe((actions) => {
        assert.deepEqual(actions, expectedActions);
        done();
      });
    });
    it('dispatches "@MODULE@_ADD_FAILURE" actions when it is fails', (done) => {
      const errorMessage = 'add failed';
      const expectedActions = [{ type: @MODULE@_ADD_FAILURE, error: errorMessage }];
      const ajax = {
        postJSON: () => throwError(errorMessage),
      };
      const result$ = @module@AddEpic(action$, state$, { ajax }).pipe(toArray());

      result$.subscribe((actions) => {
        assert.deepEqual(actions, expectedActions);
        done();
      });
    });
  });

  describe('update @module@', () => {
    const action$ = of({
      type: @MODULE@_UPDATE_REQUEST,
      payload: mockResponse,
      callback: () => {},
    });
    it('dispatches "@MODULE@_UPDATE_SUCCESS" actions when it is successful', (done) => {
      const ajax = {
        postJSON: (url, payload) => of(payload),
      };
      const expectedActions = [
        {
          type: @MODULE@_UPDATE_SUCCESS,
          payload: mockResponse.response,
          showMessage: true,
        },
      ];
      const result$ = @module@UpdateEpic(action$, state$, { ajax }).pipe(toArray());

      result$.subscribe((actions) => {
        assert.deepEqual(actions, expectedActions);
        done();
      });
    });

    it('dispatches "@MODULE@_UPDATE_FAILURE" actions when it is fails', (done) => {
      const errorMessage = 'update failed';
      const expectedActions = [
        { type: @MODULE@_UPDATE_FAILURE, error: errorMessage },
      ];
      const ajax = {
        postJSON: () => throwError(errorMessage),
      };
      const result$ = @module@UpdateEpic(action$, state$, { ajax }).pipe(toArray());

      result$.subscribe((actions) => {
        assert.deepEqual(actions, expectedActions);
        done();
      });
    });
  });
});
