// test the default case, we pass in an action that we know reducer will not respond to.

// second thing to test, test each possible action that the reducer cares about.

import { expect } from '../test_helper';
import commentReducer from '../../src/reducers/comments';
import { SAVE_COMMENT } from '../../src/actions/types';

describe('Comments Reducer', () => {
  it('handles action with unknown type', ()=> {
    expect(commentReducer(undefined, {})).to.be.instanceof(Array);
    expect(commentReducer(undefined, {})).to.eql([]);
  });

  it('handles action of type SAVE_COMMENT', () => {
    const action = { type: SAVE_COMMENT, payload: 'new comment'}
    expect(commentReducer([], action)).to.eql(['new comment']);
  });
});
