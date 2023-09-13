import { useRef,useEffect, useState } from "react";
import axios from "axios";
import apiUrl from "../apiUrl";
import { Link as Anchor, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import users_actions from "../store/actions/users";
const { read_6_users,signup } = users_actions
import Swal from "sweetalert2";
import Users from "../components/Users"

export default function SignUp() {
    
    const name = useRef()
    const lastName = useRef()
    const country = useRef()
    const photo = useRef()
    const mail = useRef()
    const password = useRef()
    const [reload,setReload] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(
        ()=>{dispatch(read_6_users())},
        [reload]
    )

    async function handleSignUp(event) {
        event.preventDefault()
        try {
            let data = {
                name: name.current.value,
                lastName: lastName.current.value,
                country: country.current.value,
                photo: photo.current.value,
                mail: mail.current.value,
                password: password.current.value
    
            }
            dispatch(signup({newUser:data}))
            .then(res=> {
                console.log(res);
                if (res.payload.newUser) {
                    Swal.fire({
                        icon: 'success',
                        title: 'User regitered!',
                      })
                    navigate('/')
                } else if (res.payload.messages.length>0) {
                    Swal.fire({
                        title: 'Something went wrong!',
                        icon: 'error',
                        html: res.payload.messages.map(each=>`<p>${each}</p>`).join('')
                      })
                }
                
            })
            console.log(data);
            setReload(!reload)
        } catch (error) { 
            console.log(error);
        }
    }
    
    return (
        <div className="p-5 flex flex-col gap-12 justify-center items-center font-rale
        lg:flex-row flex-grow bg-signup bg-center bg-cover">
            <h1 className="text-[30px] font-bold text-white lg:w-1/3 ">My Tinerary</h1>
   
            <div className="w-full flex bg-white rounded lg:w-1/3">
            <form className="w-full flex flex-col p-4 text-sm">

                <h1 className="font-bold text-[20px] pb-6">Create account</h1>

                <div className="flex w-full font-semibold gap-1 text-xs">
                    <p>Already have an account?</p>
                    <Anchor to={'/signin'}>
                        <p className="text-indigo-600">Sign in</p>
                    </Anchor>
                </div>

                <div className="flex justify-center items-center py-3">
                    <svg width="52" height="52" role="img"><title>Google's Logo</title><g id="Google-Button" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><rect x="0" y="0" width="52" height="52" rx="2"></rect><g id="logo_googleg_48dp" transform="translate(13.65, 13.65) scale(1.4300000000000002)"><path d="M17.64,9.20454545 C17.64,8.56636364 17.5827273,7.95272727 17.4763636,7.36363636 L9,7.36363636 L9,10.845 L13.8436364,10.845 C13.635,11.97 13.0009091,12.9231818 12.0477273,13.5613636 L12.0477273,15.8195455 L14.9563636,15.8195455 C16.6581818,14.2527273 17.64,11.9454545 17.64,9.20454545 L17.64,9.20454545 Z" id="Shape" fill="#4285F4"></path><path d="M9,18 C11.43,18 13.4672727,17.1940909 14.9563636,15.8195455 L12.0477273,13.5613636 C11.2418182,14.1013636 10.2109091,14.4204545 9,14.4204545 C6.65590909,14.4204545 4.67181818,12.8372727 3.96409091,10.71 L0.957272727,10.71 L0.957272727,13.0418182 C2.43818182,15.9831818 5.48181818,18 9,18 L9,18 Z" id="Shape" fill="#34A853"></path><path d="M3.96409091,10.71 C3.78409091,10.17 3.68181818,9.59318182 3.68181818,9 C3.68181818,8.40681818 3.78409091,7.83 3.96409091,7.29 L3.96409091,4.95818182 L0.957272727,4.95818182 C0.347727273,6.17318182 0,7.54772727 0,9 C0,10.4522727 0.347727273,11.8268182 0.957272727,13.0418182 L3.96409091,10.71 L3.96409091,10.71 Z" id="Shape" fill="#FBBC05"></path><path d="M9,3.57954545 C10.3213636,3.57954545 11.5077273,4.03363636 12.4404545,4.92545455 L15.0218182,2.34409091 C13.4631818,0.891818182 11.4259091,0 9,0 C5.48181818,0 2.43818182,2.01681818 0.957272727,4.95818182 L3.96409091,7.29 C4.67181818,5.16272727 6.65590909,3.57954545 9,3.57954545 L9,3.57954545 Z" id="Shape" fill="#EA4335"></path><path d="M0,0 L18,0 L18,18 L0,18 L0,0 Z" id="Shape"></path></g></g></svg>
                    <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg>
                </div>

                <span className="text-xs p-2 text-center font-semibold text-gray-500 ">Or with email and password</span>

                <div className="mt-6 grid grid-cols-1 gap-x-6 lg:gap-y-1 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label className="block text-sm font-medium leading-6 text-gray-500 font-semibold">First name</label>
                            <div className="mt-2">
                                <input  ref={name} type="text" name="name" id="name"autoComplete="given-name" className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-500 font-semibold shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label className="block text-sm font-medium leading-6 text-gray-500 font-semibold">Last name</label>
                            <div className="mt-2">
                                <input ref={lastName} type="text" name="lastName" id="lastName" autoComplete="family-name" className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-500 font-semibold shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                            </div>
                        </div>

                        <div className="sm:col-span-full">
                            <label className="block text-sm font-medium leading-6 text-gray-500 font-semibold">Photo</label>
                            <div className="mt-2">
                                <input ref={photo} type="text" name="photo" id="photo" autoComplete="family-name" className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-500 font-semibold shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                            </div>
                        </div>


                        <div className="sm:col-span-full">
                            <label className="block text-xs font-semibold font-medium leading-6 text-gray-500">Email address</label>
                            <div className="mt-2">
                                <input ref={mail} name="email" type="email" autoComplete="email" className="px-2 block w-full rounded-md border-0 py-1.5 font-semibold text-gray-500  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div className="sm:col-span-full">
                            <label className="block text-xs font-semibold font-medium leading-6 text-gray-500">Password</label>
                            <div className="mt-2">
                                <input ref={password} name="password" type="password" autoComplete="email" className="px-2 block w-full rounded-md border-0 py-1.5 font-semibold text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label  className="block text-sm font-medium leading-6 text-gray-500 font-semibold">Country</label>
                            <input ref={country} type="text" className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-500 font-semibold shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6" name="country" id="country" />
                            {/* <div className="mt-2">
                                <select id="country" name="country" autoComplete="country-name" className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-500 font-semibold shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                    <option>Argentina</option>
                                    <option>Canada</option>
                                    <option>Mexico</option>
                                </select> 
                            </div>*/}
                        </div>
                    </div>
                    
                <button type="submit" onClick={handleSignUp} className="mt-12 lg:mt-6 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign Up!</button>
            </form>
            </div>
  
            {/* <Users /> */}
        </div>
    )
}
