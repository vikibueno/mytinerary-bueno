import  { Link as Anchor } from "react-router-dom"
import { useSelector } from "react-redux";

export default function Label({ options }) {
  let photo = useSelector((store) => store.users.user?.photo);
  return (
    <div className="w-full block gap-3 font-semibold text-white flex-grow     
    lg:flex lg:items-center lg:w-auto hidden"> 

    {options.map((each) =>
            each.to
              ? each.show &&
                (each.to === "/signin" ? (
                  <Anchor
                    key={each.to}
                    to={each.to}
                    className="hover:opacity-75 text-white font-semibold hover:text-white py-2 px-4"
                  >
                    {each.title}
                  </Anchor>
                ) : (
                  <Anchor
                    key={each.to}
                    to={each.to}
                    className="hover:opacity-75 text-white font-semibold hover:text-white py-2 px-4"
                  >
                    {each.title}
                  </Anchor>
                ))
              : each.show && (
                  <span
                    key={each.title}
                    onClick={each.onClick}
                    className="hover:opacity-75 text-white font-semibold hover:text-white py-2 px-4"
                  >
                    {each.title}
                  </span>
                )
          )}
   </div>
  )
}
