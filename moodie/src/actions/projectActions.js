import * as types from './actionTypes';

const domain = (process.env.NODE_ENV === 'production')? 'https://xc-league.herokuapp.com' : 'http://localhost:3000';

export function setProjectId(projectId) {
    return { type: types.SET_PROJECT_ID, projectId };
}

export function receiveProjects({ items }) {
    return { type: types.RECEIVE_PROJECTS, items };
}

export function fetchProjects() {
    return dispatch => {
        fetch(`${domain}/projects`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'cors'
        })
        .then(response => 
            response.json().then(data => ({
                items: data,
                status: response.status
            }))
        )
        .then(response => {
            if(response.status === 200) {
                dispatch(receiveProjects(response));
            }
        });
    }
}

export function signup(email, password) {
    return dispatch => {
        fetch(`${domain}/user/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'cors',
            body: JSON.stringify({ email: email, password: password })
        })
        .then(response =>
            response.json().then(data => {
                console.log(data);
            })
        )
    }
}

export function login(email, password) {
    return dispatch => {
        fetch(`${domain}/user/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'cors',
            body: JSON.stringify({ email: email, password: password })
        })
        .then(response =>
            response.json().then(data => {
                console.log(data);
            })
        )
    }
}
