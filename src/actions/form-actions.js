import {formConstants} from '../constants/constants';

export function addForm(payload) {
    return {
        type: formConstants.SUBMIT_FORM,
        payload
    };
}