import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PostsComponent from "./components/PostsComponent"; // Component to be created
import Home from "./components/Home"; // Home Component
import About from "./components/About"; // About Component
import ProtectedRoute from "./components/ProtectedRoute"; // ProtectedRoute Component
import Dashboard from "./components/Dashboard"; // Dashboard Component

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <h1>React Query Demo</h1>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route path="/posts" element={<PostsComponent />} />
          </Routes>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
