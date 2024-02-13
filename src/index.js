import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ToastContainer } from "react-toastify";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import StepContext from "./Context/StepContext";
import CheckAddUpdateUserVisability from "./Context/CheckAddUpdateUserVisability";

import { PrimeReactProvider, PrimeReactContext } from "primereact/api";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";

import "primereact/resources/themes/lara-light-indigo/theme.css"; // theme

import "primereact/resources/primereact.css";
import CheckAccountType from "./Context/AddAccountaing";
import { AddHr } from "./Context/AddHr";
import { AddReport } from "./Context/AddReport";
import SidebarContext from "./Context/SideBarProvider";
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
const queryClient = new QueryClient()
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <PrimeReactProvider>
      <CheckAccountType>
        <AddReport>
          <AddHr>
            <CheckAddUpdateUserVisability>
              <StepContext>
                <SidebarContext>
                  <App />
                </SidebarContext>
                <ToastContainer />
              </StepContext>
            </CheckAddUpdateUserVisability>
          </AddHr>
        </AddReport>
      </CheckAccountType>
    </PrimeReactProvider>
    <div dir="ltr">
    <ReactQueryDevtools position="bottom-right"  />

    </div>
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
