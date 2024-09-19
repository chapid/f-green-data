import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SignIn } from './auth/SignIn'
import { SignUp } from './auth/SignUp'


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<h1>Home page</h1>} />
      <Route path="/login" element={<SignIn />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/profile" element={<h1>Profile</h1>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App