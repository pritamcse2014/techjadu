import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import ProductDetails from './components/ProductDetails/ProductDetails.jsx';
import Order from './components/Order/Order.jsx';

const router = createHashRouter([
  {
    path: "/",
    element: <App></App>
  },
  {
    path: "/products/:id",
    element: <ProductDetails></ProductDetails>
  },
  {
    path: "/Order",
    element: <Order></Order>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
