// import React, { useState } from 'react';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import Home from './Component/Home';
// import Apparel from './Component/NavbarComponent/Apparel';
// import Digital from './Component/NavbarComponent/Digital';
// import Contact from './Component/Contact';
// import Signup from './Component/Main/Signup';
// import LoginPage from './Component/Main/LoginPage';
// import Cart from './Component/NavbarComponent/Cart';

// import './App.css';
// import Terms from './Component/Main/Terms';

// const App = () => {
//   const [cartItems, setCartItems] = useState([]);

//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <Signup />,
//       children: [
//         {
//           path: "/terms",
//           element: <Terms />,
//         },
//       ],
//     },
//     {
//       path: "/login",
//       element: <LoginPage />,
//     },
//     {
//       path: "/home",
//       element: <Home />,
//     },
//     {
//       path: "/apparel",
//       element: <Apparel cartItems={cartItems} setCartItems={setCartItems} />,
//     },
//     {
//       path: "/digital",
//       element: <Digital />,
//     },
//     {
//       path: "/cart",
//       element: <Cart cartItems={cartItems} setCartItems={setCartItems} />,
//     },
//     {
//       path: "/contact",
//       element: <Contact />,
//     },
//   ]);

//   return (
//     <div>
//       <RouterProvider router={router} />
//     </div>
//   );
// };

// export default App;



import React, { useState } from 'react'

const App = () => {
let [state,setstate]=useState(0)
  return (
    <div>
      <h1>{state}</h1>
      <input type="button" value="" />
    </div>
  )
}

export default App