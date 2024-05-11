import { BrowserRouter,  Routes, Route,  } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import Footer from "./components/footer/Footer.jsx";
import './css/main.scss'
import "./css/mixinsandfunctions.scss";



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(

  <BrowserRouter>

    <Navbar />

    <Routes>
      <Route path="/" element={<Home />} />


      {/* <Route path="*" element={<Error />} />  */}






  

    </Routes>
    <Footer />

  {/* </Router> */}
  </BrowserRouter>

  // </React.StrictMode>
);