import { useRef } from "react";
import { useDispatch,useSelector } from "react-redux";
import { Link as Anchor } from "react-router-dom";
import users_actions from "../store/actions/users";
const { signin } = users_actions

export default function Form() {
    const mail = useRef()
    const password = useRef()
    const dispatch = useDispatch()

    async function handleSignIn() {
            let data = {
                mail: mail.current.value,
                password: password.current.value
            }
            dispatch(signin({ data }))
    }
    let user = useSelector(store=>store)
    console.log(user);
    
    return (
        <form className="flex flex-col justify-evenly w-4/5 items-center">
            <input ref={mail} type="text" className="w-4/5 py-4 text-center" name="mail" id="mail" placeholder="Type Mail" />
            <input ref={password} type="password" className="w-4/5 py-4 text-center" name="password" id="password" placeholder="Type password" />
            <input type="button" className="bg-blue-400 text-white w-4/5 py-4 text-center cursor-pointer" value="Sign In!" onClick={handleSignIn} />

            <p>Dont already have an account? <Anchor to={'/auth/signup'}>Sign up</Anchor></p> 

        </form>
    )
}
