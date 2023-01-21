import { createBrowserRouter } from 'react-router-dom'
import Main from '../../Leyout/Main/Main'
import Home from '../../pages/Home/Home'
import SignIn from '../../pages/Sheards/SignIn/SignIn'
import SignUp from '../../pages/Sheards/SignUP/SignUp'

export  const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>, children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'/signin',
                element: <SignIn></SignIn>
            },
            {
               path:'/signUp',
               element: <SignUp></SignUp>
            }
        ]
    }

])