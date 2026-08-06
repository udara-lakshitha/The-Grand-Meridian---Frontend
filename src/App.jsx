import { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage.jsx"

function App() {

  const [user, setUser] = useState(null);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage setUser={setUser} />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
