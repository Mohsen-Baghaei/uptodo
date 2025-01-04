import { createRoot } from "react-dom/client";
import "./index.css";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { HashRouter, Routes, Route } from "react-router";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <HashRouter>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </HashRouter>
  </Provider>
);
