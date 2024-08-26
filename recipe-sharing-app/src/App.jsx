import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import SearchBar from "./components/SearchBar";
import RecipeDetails from "./components/RecipeDetails"; // Ensure this is correctly imported
import "./App.css";

function App() {
  return (
    <div>
      <h1>Recipe Sharing App</h1>
      <SearchBar />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <RecipeList />
                <AddRecipeForm />
              </>
            }
          />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
