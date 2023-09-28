import { Routes, Route } from "react-router-dom"
//Page Imports for Routing
import Register from "./pages/RegisterPage"
import Login from "./pages/LoginPage"
import Posts from "./pages/Post"
import Profile from "./pages/Profile"
import PostDetails from "./pages/PostDetails"
import Navbar from "./components/Navbar"
import { useState } from "react"


function App() {
  const [userToken, setUserToken] = useState(null)

  return (
    <div>
      <Routes>
        <Route path="/" element={<Login setUserToken={setUserToken} />} />
        <Route path="/register" element={<Register setUserToken={setUserToken} />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/posts/:postId" element={<PostDetails />} />
      </Routes>
    </div>
  )
}

export default App
