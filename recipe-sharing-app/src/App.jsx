import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import "./App.css";

function App() {
  return (
    <div>
      <h1>Recipe Sharing App</h1>
      <AddRecipeForm />
      <RecipeList />
      <Router>
        <Switch>
          <Route path="/" exact>
            <RecipeList />
            <AddRecipeForm />
          </Route>
          <Route
            path="/recipe/:id"
            render={(props) => (
              <RecipeDetails recipeId={parseInt(props.match.params.id)} />
            )}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
