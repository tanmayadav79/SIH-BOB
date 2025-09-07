import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import { Home } from './pages/Home'

import Footer from './components/Footer'
import Login from './pages/Login'
import { Appointment } from './pages/Appointment'

function App() {

  return (
    <div className='p-2 flex flex-col min-h-screen'>
      <Navbar />
      <div className='flex-1 flex flex-col'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/appointment" element={<Appointment />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}
export default App
