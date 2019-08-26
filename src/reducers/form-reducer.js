import {formConstants} from '../constants/constants'

const initialState = {
  data: {}
};

export default function formReducer(state = initialState, {type, payload}) {
  switch (type) {
    case formConstants.SUBMIT_FORM:
      return {...state, data: payload}
    default:
      return state;
  }
}
