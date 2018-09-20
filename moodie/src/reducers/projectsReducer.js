import initialState from './initialState';
import {
    FETCH_PROJECTS,
    RECEIVE_PROJECTS,
    SET_PROJECT_ID
} from '../actions/actionTypes';

export default function projects(state = initialState, { type, items, projectId }) {
    if(!type){
        return state;
    }

    switch(type) {
        case SET_PROJECT_ID:
            return Object.assign({}, state, { projectId })

        case FETCH_PROJECTS:
            return type;

        case RECEIVE_PROJECTS:
            return Object.assign({}, state, { items })

        default:
            return state;
    }
}