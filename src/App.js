import React, { Component } from "react";
import Geolocation from "react-geolocation";

class App extends Component {
  render() {
    return (
      <Geolocation
        render={({
          fetchingPosition,
          position: { coords: { latitude, longitude } = {} } = {},
          error,
          getCurrentPosition
        }) => (
          <div>
            <button onClick={getCurrentPosition}>Get Position</button>
            {error && <div>{error.message}</div>}
            <pre>
              Latitude: {latitude} <br />
              Longitude: {longitude}
            </pre>
          </div>
        )}
      />
    );
  }
}

export default App;
