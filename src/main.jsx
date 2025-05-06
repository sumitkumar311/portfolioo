import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// import { BrowserRouter as BrowseRouter } from "react-router-dom";
import { HashRouter as Router } from "react-router-dom";


import 'remixicon/fonts/remixicon.css';


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>
);
