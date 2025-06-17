import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import InspectionForm from './pages/InspectionForm'
import './App.css'

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tool/:toolId/inspection/:inspectionId/inspectionform" element={<InspectionForm />} />
      </Routes>
    </>
  )
}

export default App
