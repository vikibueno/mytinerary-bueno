import { useRef } from "react";
import { Link as Anchor } from "react-router-dom";
//import axios from "axios";
//import apiUrl from "../apiUrl";

export default function Form() {
    const mail = useRef()
    const password = useRef()

    async function handleSignIn() {
        try {
            let data = {
                mail: mail.current.value,
                password: password.current.value
            }
            console.log(data);
        } catch (error) { 
            console.log(error);
        }   
    }
    
    return (
        <form className="flex flex-col justify-evenly w-4/5 items-center">
            <input ref={mail} type="text" className="w-4/5 py-4 text-center" name="mail" id="mail" placeholder="Type Mail" />
            <input ref={password} type="password" className="w-4/5 py-4 text-center" name="password" id="password" placeholder="Type password" />
            <input type="button" className="bg-blue-400 text-white w-4/5 py-4 text-center cursor-pointer" value="Sign In!" onClick={handleSignIn} />

            <p>Dont already have an account? <Anchor to={'/auth/signup'}>Sign up</Anchor></p> 

        </form>
    )
}
