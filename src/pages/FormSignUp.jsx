import { useRef,useEffect, useState } from "react";
import axios from "axios";
import apiUrl from "../apiUrl";
import { Link as Anchor } from "react-router-dom";
import { useDispatch } from "react-redux";
import users_actions from "../store/actions/users";
const { read_6_users } = users_actions
import Users from "../components/Users"

export default function Form() {
    const name = useRef()
    const lastName = useRef()
    const country = useRef()
    const photo = useRef()
    const mail = useRef()
    const password = useRef()
    const [reload,setReload] = useState(false)

    const dispatch = useDispatch()

    useEffect(
        ()=>{dispatch(read_6_users())},
        [reload]
    )

    async function handleSignUp() {
        try {
            let data = {
                name: name.current.value,
                lastName: lastName.current.value,
                country: country.current.value,
                photo: photo.current.value,
                mail: mail.current.value,
                password: password.current.value
    
            }
            await axios.post(
                apiUrl+'users/signup', //url del endpoint de creacion
                data//objeto con los datos para crear
            )
            console.log(data);
            setReload(!reload)
        } catch (error) { 
            console.log(error);
        }
        
    }
    
    return (
        <div>
        <form className="flex flex-col flex-grow justify-evenly w-4/5 items-center">
            <input ref={name} type="text" className="w-4/5 py-4 text-center" name="name" id="name" placeholder="Type Name" />
            <input ref={lastName} type="text" className="w-4/5 py-4 text-center" name="lastName" id="lastName" placeholder="Type lastName" />
            <input ref={photo} type="text" className="w-4/5 py-4 text-center" name="photo" id="photo" placeholder="Type Photo" />
            <input ref={country} type="text" className="w-4/5 py-4 text-center" name="country" id="country" placeholder="Type Country" />
            <input ref={mail} type="text" className="w-4/5 py-4 text-center" name="mail" id="mail" placeholder="Type Mail" />
            <input ref={password} type="password" className="w-4/5 py-4 text-center" name="password" id="password" placeholder="Type password" />
            <input type="button" className="bg-blue-400 text-white w-4/5 py-4 text-center cursor-pointer" value="Sign Up!" onClick={handleSignUp} />
        <p>Already have an account? <Anchor to={'/auth/signin'}>Sign in</Anchor></p>
        </form>
        <Users />
        </div>
    )
}
