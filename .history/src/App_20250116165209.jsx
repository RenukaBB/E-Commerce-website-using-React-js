import React from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Component/Home';


import "./App.css"
import Apparel from './Component/NavbarComponent/Apparel';
import Accessories from './Component/Accessories';
import Digital from './Component/NavbarComponent/Digital';

let router = createBrowserRouter([
  {
    path: "/",
    element: <Home />, // Home will only be rendered at "/"
  },
  {
    path: "Apparel",
    element: <Apparel />, // Separate route for Apparel
  },
  {
    path: "Accessories",
    element: <Accessories />, // Separate route for Accessories
  },
  {
    path: "digital",
    element: <Digital />, // Separate route for Digital
  },
]);
const App = () => {
  return (
    <div>
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;
