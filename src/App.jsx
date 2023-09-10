import { RouterProvider } from 'react-router-dom'
import router from "./router"
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import users_actions from './store/actions/users'
const { signin_token } = users_actions


function App() {
  const discpatch = useDispatch()
  useEffect(() => {
    let token = localStorage.getItem('token')
    if (token) {
      discpatch(signin_token())
    }
  }, [])
  return <RouterProvider router={router}/>

}

export default App
