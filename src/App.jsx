import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Nav from './layouts/nav'

import Main from './main/index'
import Bakmi from './detail/bakmi'
import Kopinikmat from "./detail/kopinikmat";
import Palmbeach from "./detail/palmbeach";

import Footer from './layouts/footer'

function App() {

  return (
    <>
      <Router>
        <div className="site-wrap">
          <Nav />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/bakmi68" element={<Bakmi />} />
            <Route path="/kopinikmat" element={<Kopinikmat />} />
            <Route path="/palmbeach" element={<Palmbeach />} />


          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  )
}

export default App
