import React from 'react';
import ReactDOM from 'react-dom/client';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.scss';
import App from './App';
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import cartReducer from './Redux/Slices/cartSlice.js'
import { Context } from './Context/context'

export const store = configureStore({
  reducer: {
    cart: cartReducer
  }
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
