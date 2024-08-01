
import React, { useState } from "react";
import WatchList from "../components/WatchList";
import Dashboard from "../components/Dashboard";
import Orders from "../components/Orders";
import Holdings from "../components/Holdings";
import Funds from "../components/Funds";
import Header from "../components/Header";

import Auth from "./Auth";

import Profile from "../pages/Profile";


function Home() {
  // Initialize selectedPage to "Home" to show Auth page on load
  const [selectedPage, setSelectedPage] = useState("Home");

  const renderContent = () => {
    switch (selectedPage) {
      case "Home":
        return <Auth />;
      case "Dashboard":
        return <Dashboard />;
      case "Orders":
        return <Orders />;
      case "Holdings":
        return <Holdings />;
      case "Funds":
        return <Funds />;
      case "Profile":
        return <Profile />;
      default:
        return <Auth />;
    }
  };

  return (
    <div>
      <Header setSelectedPage={setSelectedPage} />
      
      <div className="row">
        <div className="col-md-3">
          <WatchList />
        </div>
        <div className="col-md-9">{renderContent()}</div>
      </div>
    </div>
  );
}

export default Home;
