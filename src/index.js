import React, { useLayoutEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, useLocation } from "react-router-dom";
import App from "./App";


const root = ReactDOM.createRoot(
  document.getElementById("root"));

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};
root.render(
  
    <BrowserRouter >
      <Wrapper >
        
        <App />
    
      </Wrapper>
    </BrowserRouter>
  
);
