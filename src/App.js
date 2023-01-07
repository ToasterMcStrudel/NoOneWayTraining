

import Navbar from "./Navbar"
import Footer from "./Footer"
import Home from "./pages/Home"
import Services from "./pages/Services"
import Philosophy from "./pages/Philosophy"
import NotFound from "./pages/NotFound"
import { Container} from "react-bootstrap"
import { Route, Routes } from "react-router-dom"




function App() {
  return (
    <Container fluid  className=' p-0 m-0' > 
      <Navbar />
      <div className="bottomLine" />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Philosophy" element={<Philosophy />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>

      <Footer />
    </Container>
  );
}

export default App;
