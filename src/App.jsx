import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import AuthPage from "./pages/authentication/AuthPage";

function App() {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <Routes>

        {/* Login */}
        <Route
          path="/login"
          element={<AuthPage setUser={setUser} />}
        />

        {/* Registration */}
        <Route
          path="/register"
          element={<AuthPage setUser={setUser} />}
        />

        {/* Default route */}
        <Route
          path="/"
          element={
            user ? (
              <div>Dashboard</div>
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;