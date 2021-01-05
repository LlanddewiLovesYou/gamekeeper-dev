import React from "react";
import { Root, addPrefetchExcludes } from "react-static";
import { Router } from "@reach/router";
// import FancyDiv from "components/FancyDiv";
// import Dynamic from "containers/Dynamic";
import { Block } from "./components/Block/Block";
import { CreateGameForm } from "./components/CreateGameForm/CreateGameForm";
import "./app.css";

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(["dynamic"]);

function App() {
  return (
    <Root>
      <div className="app__background">
        <div>Gamekeeper</div>
        <Router>
          <Block completed={false} path="/" />
          <CreateGameForm path="/new" />
        </Router>
      </div>
    </Root>
  );
}

export default App;
