import { Counter } from './features/counter/Counter';
import Loginpage from './pages/Loginpage'
import SignupPage from './pages/SignupPage'
import CheckoutPage from './pages/CheckoutPage'
import CartPage from './pages/CartPage'
import ProductDetailPage from './pages/ProductDetailPage'
import './App.css';
import Home from './pages/Home';

import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "login",
    element: <Loginpage></Loginpage>,
  },
  {
    path: "signup",
    element: <SignupPage></SignupPage>,
  },

  {
    path: "cart",
    element: <CartPage></CartPage>,
  },
  {
    path: "checkout",
    element: <CheckoutPage></CheckoutPage>,
  },
  {
    path: "product-detail",
    element: <ProductDetailPage></ProductDetailPage>,
  },
]);




function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;