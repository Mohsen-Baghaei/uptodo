import { createRoot } from "react-dom/client";
import "./index.css";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router/dom";
import Router from "./app/Router";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={Router} />
  </Provider>
);
