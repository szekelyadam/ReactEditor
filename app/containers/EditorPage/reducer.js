/*
 *
 * EditorPage reducer
 *
 */

import { fromJS } from 'immutable';
import { DEFAULT_ACTION, TOGGLE_EDITOR } from './constants';

const initialState = fromJS({
  editing: false,
  components: {
    id: '1',
    type: 'row',
    selected: true,
    children: [],
  },
});

function editorPageReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case TOGGLE_EDITOR:
      return state.withMutations((s) => {
        s.set('editing', !state.get('editing'));
      });
    default:
      return state;
  }
}

export default editorPageReducer;
