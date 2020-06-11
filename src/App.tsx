import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { IngredientsPage } from "./pages/IngredientsPage/IngredientsPage";
import { Layout } from "/src/components/Layout/Layout";
import { HomePage } from "/src/pages/HomePage/HomePage";

export const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/ingredients">
            <IngredientsPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};
