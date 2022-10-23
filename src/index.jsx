import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { SWRConfig } from "swr";

import "./index.scss";
import { App } from "./App";

const fetcher = (url) => axios.get(url).then((res) => res.data);

ReactDOM.render(
  <React.StrictMode>
    <SWRConfig value={{ fetcher }}>
      <App />
    </SWRConfig>
  </React.StrictMode>,
  document.getElementById("root")
);
