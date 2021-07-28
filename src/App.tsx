import React from "react";
import logo from "./logo.svg";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./screens/Home/Home";
import Order from "./screens/Order/Order";

function App() {
  return (
    <AppWrap>
      <Router>
        <Switch>
          <Route path={"/order"} component={Order}></Route>
          <Route path={"/"} component={Home}></Route>
        </Switch>
      </Router>
    </AppWrap>
  );
}

export default App;

const AppWrap = styled.div`
  height: 100vh;
  width: 100%;
  background: #1d1c1c;
`;
