import { Reducer } from 'redux';

import {
  CalcOpAction,
  ADD_ACTION, SUBTRACT_ACTION,
  MULTIPLY_ACTION, DIVIDE_ACTION,
  CLEAR_ACTION,
} from '../actions/calcActions';

type ResultReducer = Reducer<number, CalcOpAction>;

export const resultReducer: ResultReducer = (result = 0, action) => {

  switch (action.type) {
    case ADD_ACTION:
      return result + action.payload.num;
    case SUBTRACT_ACTION:
      return result - action.payload.num;
    case MULTIPLY_ACTION:
      return result * action.payload.num;
    case DIVIDE_ACTION:
      return result / action.payload.num;
    case CLEAR_ACTION:
      return 0;
    default:
      return result;
  }

};