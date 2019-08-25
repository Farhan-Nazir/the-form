import {formConstants} from '../constants/constants';
export function addForm(payload) {
    return {
        type: formConstants.ADD_FORM,
        payload
    };
}