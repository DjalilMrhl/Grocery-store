import React from 'react';
import ReactDOM from 'react-dom/client';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.scss';
import App from './App';
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import cartReducer from './Redux/Slices/cartSlice.js'
import { productsAPI } from './Redux/API/ProductsAPI'
// import authReducer from './Redux/Slices/AuthSlice.js';
import { Context } from './Context/context'

export const store = configureStore({
  reducer: {
    [productsAPI.reducerPath] : productsAPI.reducer,
    cart: cartReducer
    // auth: authReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(productsAPI.middleware)
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Context>
        <App />
    </Context>
    </Provider>
  </React.StrictMode>
);
