import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SignIn } from './auth/SignIn'
import { SignUp } from './auth/SignUp'
import { Layout } from './components/Layout'
import { Dashboard } from './dashboard/Dashboard'
import { Inventory } from './inventory/Inventory'
import { Product } from './product/Product'

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