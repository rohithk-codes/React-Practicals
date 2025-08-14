import { Component, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import {store} from './reduxslice/Store'
import Compo from './Compo'


createRoot(document.getElementById("root")).render(
  <StrictMode>
    
   <App/>
  </StrictMode>
);
