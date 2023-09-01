import { createReducer } from "@reduxjs/toolkit";
import itineraries_actions from "../actions/itineraries";
const { read_itineraries_from_city } = itineraries_actions

const initial_state = {
    itineraries_from_city: []
}

const itinerary_reducer = createReducer(
    initial_state,
    builder => builder.addCase(
        read_itineraries_from_city.fulfilled,
        (state,action) => {
            let new_state = {
                ...state,
                itineraries_from_city: action.payload.itineraries_from_city
            }
            return new_state
        }
    )
)

export default itinerary_reducer