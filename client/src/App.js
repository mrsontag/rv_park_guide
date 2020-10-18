import React from 'react';
import { Router } from '@reach/router';
import './App.css';
import AllParks from "./components/allparks";
import CreatePark from "./components/createpark";
import ViewPark from "./components/viewpark";
import UpdatePark from "./components/updatepark";


function App() {
  return (
    <div className="App">
      <Router>
        <AllParks path="/" />
        <CreatePark path="/new" />
        <ViewPark path="/park/:id" />
        <UpdatePark path="/park/:id/update"/>
      </Router>
    </div>
  );
}

export default App;
