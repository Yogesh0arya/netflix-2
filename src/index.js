import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import SearchResult from "./components/SearchResult/SearchResult";

import store from "./store/store";

import Home from "./pages/Home/Home";

import "./index.scss";
import Movie from "./components/Movie/Movie";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/search" component={SearchResult} exact />
        <Route path="/movie" component={Movie} exact />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
