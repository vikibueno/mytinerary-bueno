import { useState } from "react"
import Display from "./Display"
import Label from "./Label"
import { useSelector,useDispatch } from "react-redux"
import users_actions from "../store/actions/users"
const {signout} = users_actions

export default function NavBar() {
  let [show,setShow] = useState(false)
  let photo = useSelector(store=>store.users.user?.photo)
  let mail = useSelector(store=>store.users.user?.mail)

  let options = [
    {to: "/", title: "Home"},
    {to: "/cities", title: "Cities"},
    // {to: "", title: "Sign out"},
    {
      title: "Sign Out",
      onClick: () => {
        dispatch(signout());
        navigate("/");
      },
    },
    {
      to: "/signin",
      title: "Log In",
      show: mail ? false : true,
    },
  ]

  
  let dispatch = useDispatch()
  // console.log(mail);
  return ( 
    <header className="flex font-rale items-center justify-between flex-wrap p-2 bg-[#00000049]">
      <div className="flex items-center flex-shrink-0 text-white mr-6 gap-3">
        <div className="w-10 h-10">
          
          {(photo) ? (<img src={photo} className="rounded-full" />):(<img src="/img/profile.png" alt="profile"className="rounded-full" />)}
          
        
        </div>
        <h1 className="font-semibold text-x1 font-rale">My Tinerary </h1>
      </div>

      <div>
        {/* {photo && <span onClick={()=>dispatch(signout())}>SIGN OUT</span>} */}
        <Label options={options}/>
      </div>
      
      <div className="lg:hidden">
        <button className="relative inline-flex items-center justify-center rounded-md p-2 text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
          {show ? 
          (<svg xmlns="http://www.w3.org/2000/svg" onClick={()=>setShow(!show)} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>) 
          
          : 
          
          (<svg className="block h-6 w-6" onClick={()=>setShow(!show)} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>)}
      
        </button>
      </div>
      { show && <Display options={options}/>}
    </header>
  )
}
