import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SignIn } from '../Auth/SignIn'
import { SignUp } from '../Auth/SignUp'
import { Layout } from '../../Components/Layout'
import { Dashboard } from '../Dashboard'
import { Inventory } from '../Inventory'
import { Product } from '../Product'
import { LineItemProvider } from '../../Context'

function App() {
  return (
    <LineItemProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/dashboard" element={<Layout />} >
            <Route index element={<Dashboard />} />
            <Route path="profile" element={<h1>Profile</h1>} />
            <Route path="inventory" element={<Inventory />} />
            <Route path="product" element={<Product />} />
          </Route>
          <Route path="/register" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
      
    </LineItemProvider>
  )
}

export default App