import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SignIn } from './auth/SignIn'
import { SignUp } from './auth/SignUp'
import { Layout } from './components/Layout'
import { Dashboard } from './dashboard/Dashboard'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Dashboard />} />
          <Route path="/profile" element={<h1>Profile</h1>} />
        </Route>
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App