import initialState from './initialState';
import {
    DO_SOMETHING
} from '../actions/actionTypes';

export default function search(state = initialState, { type }) {
    if(!type){
        return state;
    }

    switch(type) {
        case DO_SOMETHING:
        return Object.assign({}, state, { test: 1 })

        default:
            return state;
    }
}