import { BrowserRouter, Routes, Route } from "react-router-dom"
import { createContext, useState } from 'react';
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'
import HomePage from './pages/HomePage'
import UserDetails from './pages/UserDetails'
import Info from "./pages/Info"
import Todos from "./pages/Todos"
import Posts from "./pages/Posts"
import Albums from "./pages/Albums"
import Logout from "./pages/Logout"
import Comments from "./pages/Comments";

export const UserContext = createContext(null);

function App() {

  const [user, setUser] = useState(
    {
      id: "",
      name: "",
      username: "",
      email: "",
      address: {
        street: "",
        suite: "",
        city: "",
        zipcode: "",
        geo: {
          lat: "",
          lng: ""
        }
      },
      phone: "",
      website: "",
      company: {
        name: "",
        catchPhrase: "",
        bs: ""
      }
    }
  );

  return (
    <UserContext.Provider value={user}>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<LogIn setUser={setUser} />} />
          <Route path="/login" element={<LogIn setUser={setUser} />} />
          <Route path="/register" element={<SignUp setUser={setUser} />} />
          <Route path="/userdetails" element={<UserDetails setUser={setUser} />} />
          <Route path="/home" element={<HomePage />}>
            <Route path="users/:id/info" element={<Info />} />
            <Route path="users/:id/todos" element={<Todos />} />
            <Route path="users/:id/posts" element={<Posts />} />
            <Route path="users/:id/posts/:postId" element={<Posts />}>
              <Route path="comments" element={<Comments />} />
            </Route>
            <Route path="users/:id/albums" element={<Albums />} />
            <Route path="logout" element={<Logout setUser={setUser} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  )
}

export default App
