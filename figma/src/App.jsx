import { Navbar } from "./Component/navbar/Navbar"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from "./Pages/Home"
import { SollerCatalogue } from "./Pages/SollerCatalogue"
import './App.css'
import { SubmitPage } from "./Pages/SubmitPage"
import { Footer } from "./Component/footer/Footer"

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/soller/catalogue" element={
          <>
            <SollerCatalogue />
            <Footer />
          </>
        } />
        <Route path="/submited" element={<SubmitPage />} />
      </Routes>
    </Router>
  )
}

export default App
