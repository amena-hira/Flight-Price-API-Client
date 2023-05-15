import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../pages/Home/Home';
import Login from '../pages/Authentication/Login';
import Signup from '../pages/Authentication/Signup';
import AddFlight from '../pages/AddFlight/AddFlight';
import Passengers from '../pages/Passengers/Passengers';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/addFLight',
                element: <AddFlight></AddFlight>
            },
            {
                path: '/passengers',
                element: <Passengers></Passengers>
            }
        ]
    },
    
])

export default routes;