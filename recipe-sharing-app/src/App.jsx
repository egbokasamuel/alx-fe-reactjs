import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import SearchBar from "./components/SearchBar";
import "./App.css";

function App() {
  return (
    <div>
      <h1>Recipe Sharing App</h1>
      <SearchBar />
      <Router>
        <Switch>
          <Route path="/" exact>
            <RecipeList />
            <AddRecipeForm />
          </Route>
          <Route path="/recipe/:id" component={RecipeDetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
