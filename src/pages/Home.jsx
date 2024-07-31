import React, { useState } from "react";
import WatchList from "../components/WatchList";
import Dashboard from "../components/Dashboard";
import Orders from "../components/Orders";
import Holdings from "../components/Holdings";
import Position from "../components/Position";
import Funds from "../components/Funds";
import Header from "../components/Header";
import Profile from "../pages/Profile";

function Home() {
  const [selectedPage, setSelectedPage] = useState("Dashboard");

  const renderContent = () => {
    switch (selectedPage) {
      case "Dashboard":
        return <Dashboard />;
      case "Orders":
        return <Orders />;
      case "Holdings":
        return <Holdings />;
      case "Position":
        return <Position />;
      case "Funds":
        return <Funds />;
      case "Profile":
        return <Profile />;
      default:
        return <Dashboard />;
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
