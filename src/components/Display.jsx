import  { Link as Anchor } from "react-router-dom"

export default function Display({ options }) {
  return (
    <div className="w-full block flex-grow lg:flex lg:items-center lg:auto"> 
      <div className="text-sm lg:flex-grow">
        {options.map(each=><Anchor className="block mt-4 hover:text-white mr-4" key={each.to} to={each.to}>{each.title}</Anchor>)}
        <p className="block mt-4 hover:text-white mr-4">Login</p>
      </div>
    </div>
 
  )
}
