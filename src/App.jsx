import { useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage.jsx"
// import axios from "axios";

// axios.defaults.withCredentials = true;

function App() {

  const [user, setUser] = useState(null);

  // const [loading, setLoading] = useState(tru  e);

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     try {
  //       const res = await axios.get("http://localhost:5000/api/auth/me")
  //       setUser(res.data);
  //     } catch (err) {
  //       setUser(null);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }
  //   fetchUser();
  // }, []);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

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
