import React from "react";
import WatchList from "../components/WatchList";
import Dashboard from "../components/Dashboard";

function Home() {
  return (
    <div>
      <div className="row">
        <div className="col-md-3">
          <WatchList />
        </div>
        <div className="col-md-9">
          <Dashboard />
        </div>
      </div>
    </div>
  );
}

export default Home;
