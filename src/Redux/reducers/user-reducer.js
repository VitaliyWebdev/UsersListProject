import {ADD_CHOSEN_USER, ADD_USERS_FROM_API, CREATE_USER, DELETE_CHOSEN_USER, SAVE_USERS_LIST} from "../action-types";


const initialState = {
    users: [],
    chosenUser: []
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USERS_FROM_API: {
            return {...state, users: action.payload}
        }
        case ADD_CHOSEN_USER: {
            return {...state, chosenUser: action.payload}
        }
        case DELETE_CHOSEN_USER: {
            const withDeleted = state.users.filter(user => user.id !== action.payload);
            return {...state, users: withDeleted}
        }
        case SAVE_USERS_LIST: {
            return {...state, users: action.payload}
        }
        case CREATE_USER: {
            const users = [...state.users];
            const user = action.payload
            user.id = new Date().getTime()
            users.push(user)
            return {...state, users};
        }
        default: {
            return state;
        }
    }
}
