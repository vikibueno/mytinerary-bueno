import { createReducer } from "@reduxjs/toolkit";
import users_actions from "../actions/users";
const { read_6_users } = users_actions

const initial_state = {
    users: []
}

const user_reducer = createReducer(
    initial_state,
    build => build.addCase(
        read_6_users.fulfilled,
        (state,action)=> {
            let new_state = {
                ...state,
                users: action.payload.users
            }
            return new_state
        }
    )
)

export default user_reducer