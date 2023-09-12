import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../apiUrl";

const read_activities_from_itinerary = createAsyncThunk(
    'read_activities_from_itinerary',
    async(obj)=> {
        try {
            let data = await axios(apiUrl+'activities?itinerary_id='+obj.itinerary_id)
            return {
                activities_from_itinerary: data.data.response,
                id:obj.itinerary_id
            }

        } catch (error) {
            return {
                activities_from_itinerary: []
            }
        }
    }
)

const activities_actions = { read_activities_from_itinerary }
export default activities_actions