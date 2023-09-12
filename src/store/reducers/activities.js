import { createReducer } from "@reduxjs/toolkit";
import activities_actions from "../actions/activities";
const { read_activities_from_itinerary } = activities_actions

const initial_state = {
    activities_from_itinerary: []
    
}

const activity_reducer = createReducer(
    initial_state,
    builder => builder.addCase(
        read_activities_from_itinerary.fulfilled,
        (state,action) => {
            let new_state = {
                ...state,
                [action.payload.id]: action.payload.activities_from_itinerary
            }
            return new_state
        }
    )
)

export default activity_reducer