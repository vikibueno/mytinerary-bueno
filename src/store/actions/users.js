import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../apiUrl";

const read_6_users = createAsyncThunk(
    'read_6_users',
    async()=> {
        try {
            let users = await axios(apiUrl+'users')
            console.log(users.data.response)
            return {
                users: users.data.response
            }
        } catch (error) {
            console.log(error);
            return {
                users: []
            }
        }

    }
)

const signin = createAsyncThunk(
    'signin',
    async(obj)=> {
        try {
            let data = await axios.post(apiUrl+'auth/signin',obj.data)
            console.log(data);
            localStorage.setItem('token',data.data.response.token)
            return {
                user: data.data.response.user,
                token: data.data.response.token
            }
        } catch (error) {
            console.log(error);
            return {
                user: {},
                token: '',
                messages: error.response.data.messages || [error.response.data.message]
            }
        }
    }
)

const signin_token = createAsyncThunk(
    'signin_token',
    async()=> {
        try {
            let token = localStorage.getItem('token')
            let authorization = { headers:{ 'Authorization':`Bearer ${token}` } }
            let data = await axios.post(apiUrl+'auth/signinToken',null,authorization)
            console.log(data);
            localStorage.setItem('token',data.data.response.token)
            return {
                user: data.data.response.user,
                token: data.data.response.token
            }
        } catch (error) {
            console.log(error);
            return {
                user: {},
                token: ''
            }
        }
    }
)

const signup = createAsyncThunk(
    "signup",
     async (obj) => {
        console.log(obj,'OBJ');
    try {
      let data = await axios.post(apiUrl + "auth/register", obj.newUser);
      return {
        newUser: data.data.response,
        messages: [],
      };
    } catch (error) {
        console.log(error);
      return {
        newUser: {},
        messages: error.response.data.messages || [error.response.data.message],
      };
    }
  });

const signout = createAsyncThunk(
    'signout',
    async()=> {
        try {
            let token = localStorage.getItem('token')
            let authorization = { headers:{ Authorization:`Bearer ${token}` } }
            let data = await axios.post(apiUrl+'auth/signout',null,authorization)
            console.log(data);
            localStorage.removeItem('token')
            return {
                user: {},
                token: ''
            }
        } catch (error) {
            console.log(error);
            return {
                user: {},
                token: ''
            }
        }
    }
)

const users_actions = { read_6_users,signin,signin_token,signout,signup }
export default users_actions