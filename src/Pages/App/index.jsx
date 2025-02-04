import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SignIn } from '../Auth/SignIn'
import { SignUp } from '../Auth/SignUp'
import { Layout } from '../../Components/Layout'
import { Dashboard } from '../Dashboard'
import { Inventory } from '../Inventory'
import { Product } from '../Product'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Dashboard />} />
          <Route path="/profile" element={<h1>Profile</h1>} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/product" element={<Product />} />
        </Route>
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App