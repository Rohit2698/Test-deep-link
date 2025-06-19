import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import InspectionForm from './pages/InspectionForm'
import './App.css'
import DeviceIdForm from './pages/DeviceIdForm'

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tool/:toolId/inspection/:inspectionId/inspectionform" element={<InspectionForm />} />
        <Route path="/device" element={<DeviceIdForm />} />
      </Routes>
    </>
  )
}

export default App
