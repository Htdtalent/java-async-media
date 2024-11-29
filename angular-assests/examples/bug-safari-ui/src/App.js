import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import SightingsView from './SightingsView';
import SightingForm from './SightingForm';
import ConfirmDelete from './ConfirmDelete';
import sightingService from './services/asyncSightingService';
// CSS
import 'bootstrap/dist/css/bootstrap.css';

function App() {

  const [layout, setLayout] = useState("loading");
  const [sightings, setSightings] = useState([]);
  const [currentSighting, setCurrentSighting] = useState({});

  useEffect(() => {
    sightingService.findAll()
      .then((data) => {
        setSightings(data);
        setLayout("home");
      });
  }, []);

  function save(sighting) {
    setLayout("loading");
    sightingService.save(sighting)
      .then((data) => {
        setSightings(data);
        setLayout("home");
      });
  }

  function deleteById(sightingId) {
    setLayout("loading");
    sightingService.deleteById(sightingId)
      .then((data) => {
        setSightings(data);
        setLayout("home");
      });
  }

  function activateLayout(layout, sighting) {
    if (sighting) {
      setCurrentSighting(sighting);
    }
    setLayout(layout);
  };

  function renderMain() {
    if (layout === "loading") {
      return (<div className="d-flex justify-content-center m-5">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>);
    } else if (layout === "home") {
      return <SightingsView activateLayout={activateLayout} sightings={sightings} />;
    } else if (layout === "delete") {
      return <ConfirmDelete activateLayout={activateLayout} deleteById={deleteById} sighting={currentSighting} />;
    } else {
      return <SightingForm activateLayout={activateLayout} save={save} layout={layout} sighting={currentSighting} />;

    }
  }

  return (
    <div className="container">
      <NavBar activateLayout={activateLayout} layout={layout} />
      {renderMain()}
    </div>
  );
}

export default App;
