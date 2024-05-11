import { BrowserRouter,  Routes, Route,  } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home.jsx";



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(

  <BrowserRouter>

    {/* <Navbar /> */}

    <Routes>
      <Route path="/" element={<Home />} />


      {/* <Route path="*" element={<Error />} />  */}






  

    </Routes>
    {/* <Footer /> */}

  {/* </Router> */}
  </BrowserRouter>

  // </React.StrictMode>
);