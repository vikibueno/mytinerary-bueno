import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from '../../apiUrl'


const read_carousel = createAsyncThunk(
    'read_carousel',                    //nombre de la accion
    async()=> {                         //callback que realiza la peticion
        try {
            let data = await axios(apiUrl+'cities/carousel')
            return {
                carousel: data.data.data_carousel
            }
        } catch (error) {
            return {
                carousel: []
            }
        }
    }
)

const read_cities = createAsyncThunk(
    'read_cities',
    async(obj)=>{
        try {
            let data = await axios(apiUrl+'cities?city='+obj.text)
            return {
                cities: data.data.response
            }
        } catch (error) {
            return { cities: [] }
        }
    }
)

const read_city = createAsyncThunk(
    'read_city',
    async(obj)=>{
        try {
            let data = await axios(apiUrl+'cities/'+obj.id)
            return {
                city: data.data.response
            }
        } catch (error) {
            return { city: {} }
        }
    }
)

const city_actions = { read_carousel,read_cities,read_city }
export default city_actions