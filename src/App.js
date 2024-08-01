
import { Route, Routes } from "react-router-dom";
import "./App.css";
// import Header from './components/Header';
import Footer from './components/Footer';

import Home from "./pages/Home";
import Auth from "./pages/Auth";
import LandingPage from "./pages/LandingPage";


function App() {
  return (
    <>

      {/* <Header /> */}
      
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/register" element={<Auth register/>} />
        <Route path="/login" element={<Auth />} />
        <Route path="/landingpage" element={<LandingPage/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
