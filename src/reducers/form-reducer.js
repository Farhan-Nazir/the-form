import {formConstants} from '../constants/constants'
const initialState = {
  data: [],
  isSubmitted: false
};

export default function formReducer(state = initialState, {type, payload}) {
  switch (type) {
    case formConstants.ADD_FORM:
      window.localStorage.setItem("theForm", JSON.stringify(payload)); // is it good place?
      return Object.assign({}, state, {
        data: state.data.concat(payload)
      });
    default:
      return state;
  }
}