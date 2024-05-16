import { BrowserRouter,  Routes, Route,  } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Home from "./pages/home/Home.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import Footer from "./components/footer/Footer.jsx";
import './css/main.scss'
import "./css/mixinsandfunctions.scss";
import Micronutrition from "./pages/micronutrinition/Micronutrition.jsx";
import Blog from "./pages/blog/Blog.jsx";



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(

  <BrowserRouter>

    <Navbar />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/micronutrition" element={<Micronutrition />} />
      <Route path="/blog" element={<Blog />} />




      {/* <Route path="*" element={<Error />} />  */}






  

    </Routes>
    <Footer />

  {/* </Router> */}
  </BrowserRouter>

  // </React.StrictMode>
);