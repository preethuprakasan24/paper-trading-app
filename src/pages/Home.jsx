// import React, { useState } from "react";
// import WatchList from "../components/WatchList";
// import Dashboard from "../components/Dashboard";
// import Orders from "../components/Orders";
// import Holdings from "../components/Holdings";
// import Funds from "../components/Funds";
// import Header from "../components/Header";

// import Auth from "./Auth";

// import Profile from "../pages/Profile";

// function Home() {

//   const [selectedPage, setSelectedPage] = useState("Home");

//   const renderContent = () => {
//     switch (selectedPage) {
//       case "Home":
//         return <Auth />;
//       case "Dashboard":
//         return <Dashboard />;
//       case "Orders":
//         return <Orders />;
//       case "Holdings":
//         return <Holdings />;
//       case "Funds":
//         return <Funds />;
//       case "Profile":
//         return <Profile />;
//       default:
//         return <Auth />;
//     }
//   };

//   return (
//     <div>
//       <Header setSelectedPage={setSelectedPage} />

//       <div className="row">
//         <div className="col-md-3">
//           <WatchList />
//         </div>
//         <div className="col-md-9">{renderContent()}</div>
//       </div>
//     </div>
//   );
// }

// export default Home;

import React from "react";
import { Link } from "react-router-dom";
import './Home.css';
import trade from '../assets/trade.png';
import trade2 from '../assets/trade2.png';

function Home() {
  return (
    <div className="home-container container" style={{height:'90vh',width:'100%'}}>
      <div className="row align-items-center">
        <div className="col-md-6">
          <header className="home-header mt-5">
            <h1>Welcome to TradeMaster</h1>
            <p>Your ultimate paper trading platform</p>
          </header>
          <main className="home-main">
            <section className="features mb-5">
              <h2>Features</h2>
              <ul>
                <li>Real-time market data</li>
                <li>Advanced charting tools</li>
                <li>Paper trading simulations</li>
                <li>Performance tracking</li>
              </ul>
            </section>
            <section className="cta mt-5 mb-5">
              <Link to={'/login'}>
                <button className="btn btn-primary" id="button">Get Started</button>
              </Link>
                <button className="btn btn-outline-primary ms-5 " id="button1">User Manual</button>
            </section>
          </main>
        </div>
        <div className="col-md-6 position-relative">
          <img src={trade} alt="Trading Illustration" className="img-trade1" />
          <img src={trade2} alt="Trading Illustration" className="img-trade2" />
        </div>
      </div>
    </div>
  );
}

export default Home;
