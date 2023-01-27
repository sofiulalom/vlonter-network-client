import { createBrowserRouter } from 'react-router-dom'
import Main from '../../Leyout/Main/Main'
import Home from '../../pages/Home/Home'
import ChackOut from '../../pages/Sheards/Chackout/ChackOut'
import Orders from '../../pages/Sheards/Orders/Orders'
import SignIn from '../../pages/Sheards/SignIn/SignIn'
import SignUp from '../../pages/Sheards/SignUP/SignUp'
import PrivetRoute from './PriivetRoute/PrivetRoute'

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
            },
            {
                path:'/chackout/:id',
                element: <PrivetRoute> <ChackOut></ChackOut></PrivetRoute>,
                loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path:'/orders',
                element: <PrivetRoute><Orders></Orders></PrivetRoute>
            }
        ]
    }

])