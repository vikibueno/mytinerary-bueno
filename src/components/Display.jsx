import  { Link as Anchor } from "react-router-dom"

export default function Display({ options }) {
  return (
    <div className="w-full block flex-grow text-white lg:flex lg:items-center lg:auto"> 
      <div className="text-sm lg:flex-grow">
      {options.map((each) =>
            each.to
              ? each.show &&
                (each.to === "/signin" ? (
                  <Anchor
                    key={each.to}
                    to={each.to}
                    className="block mt-4 hover:text-white mr-4"
                  >
                    {each.title}
                  </Anchor>
                ) : (
                  <Anchor
                    key={each.to}
                    to={each.to}
                    className="block mt-4 hover:text-white mr-4"
                  >
                    {each.title}
                  </Anchor>
                ))
              : each.show && (
                  <span
                    key={each.title}
                    onClick={each.onClick}
                    className="block mt-4 hover:text-white mr-4"
                  >
                    {each.title}
                  </span>
                )
          )}
      </div>
    </div>
 
  )
}
