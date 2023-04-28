
import './App.css';
//  import Cart from './components/Cart';
// import Header from './components/header';
import Products from './components/products';
import React from 'react';
// import { Routes, Route} from 'react-router-dom';
 import Login from './components/login';
 import Home from './components/Home';
 import MainLayout from "./MainLayout";
 import AuthProtect from "./AuthProtect";
 import { Outlet, useRoutes } from "react-router-dom";
 
 
 function App() {
   return useRoutes([
     {
       path: "/",
       element: (
           <AuthProtect>
             <MainLayout>
                 <Outlet />
             </MainLayout>
           </AuthProtect>
       ),
       children: [
         { path: "/", element: <Home /> },
         // { path: "signin", element: <SignIn /> },
         { path: "products", element: <Products /> },
         
       ],
     },
     { path: "login", element: <Login /> },
   ]);
 }
   
 
 export default App;