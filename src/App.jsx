import './App.css';
import Home from './Pages/Home';
import UserPosts from './Pages/UserPosts';
import Login from "./authentication/Login";
import Signup from './authentication/Signup';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/userposts" element={<UserPosts />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
    </BrowserRouter>
  );
}

export default App;
