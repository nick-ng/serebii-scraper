import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <StrictMode>
    <BrowserRouter>
      <div>Hello World</div>
    </BrowserRouter>
  </StrictMode>
);
