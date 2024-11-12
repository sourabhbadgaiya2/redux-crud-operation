import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { BrowserRouter } from "react-router-dom";

const future = {
  v7_startTransition: true,
};

createRoot(document.getElementById("root")).render(
  <BrowserRouter future={future}>
    <App />
  </BrowserRouter>
);
