/** Created by hhj on 8/8/16. */
import { Map } from 'immutable'
import { Record } from '../transit'

const InitialState = Record({
  seznam: Map()
}, 'shoplist')

export default function shoplistReducer(state = new InitialState, action) {
  return state
}


