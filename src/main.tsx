import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Button } from "./components/ui/button";
import "./index.css";
import { store } from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <div className="mx-auto my-20">
        <Button variant="link">Click me</Button>
        <h1 className="text-5xl">Hello</h1>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </Provider>
  </React.StrictMode>
);
