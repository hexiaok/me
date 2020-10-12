import React, { useState } from 'react';
import ReactGlobe from 'react-globe';

// import optional tippy styles for tooltip support
// import 'tippy.js/dist/tippy.css';
// import 'tippy.js/animations/scale.css';

function MyGlobe() {
  // support rendering markers with simple data
  const markers = [
    {
        id: 1,
        city: 'Ningbo',
        year: '-2006 | ',
        activity: 'Just a kid',
        coordinates: [29.8683, 121.5440],
        value: 100,
        color: 'white',
    },
    {
        id: 2,
        city: 'Tianjin',
        year: '2006-2011 | ',
        activity: 'Student, Tianjin University',
        coordinates: [39.3434, 117.3616],
        value: 100,
        color: 'white',
    },
    {
        id: 3,
        city: 'Boston',
        year: '2011-2015 | ',
        activity: 'Student/Researcher, Harvard University',
        coordinates: [42.3601, -71.0589],
        value: 100,
        color: 'white',
    },
    // {
    //     id: 4,
    //     city: 'Little Farmer\'s Cay | ',
    //     color: 'white',
    //     year: '2013',
    //     activity: 'researcher',
    //     coordinates: [23.9580, -76.3224],
    //     value: 100,
    // },
    {
        id: 4,
        city: 'Singapore',
        year: '2015-2019 | ',
        activity: 'UX Designer, Grab/MING Labs',
        coordinates: [1.3521, 103.8198],
        value: 100,
        color: 'white',
    },
    {
        id: 5,
        city: 'Berlin',
        year: '2019- | ',
        activity: 'Product Designer, Delivery Hero',
        coordinates: [52.5200, 13.4050],
        value: 100,
        color: 'white',
    },
];

  // simple and extensive options to configure globe
  const options = {
    
  enableBackground: true,
  enableClouds: false,
  enableGlow: false,
  cloudsTexture: null,
  autoRotateSpeed: 0.8,
  enableZoom: false,
  clickedOut: click,
  glowCoefficient: 0.25,
  activeScale: 1,
  enableTooltip: true,
  getTooltipContent: marker => `${marker.year} ${marker.city} <br> ${marker.activity}`,
  radiusScaleRange: [0.001, 0.045],
  };

  const [globe, setGlobe] = useState(null);
  console.log(globe); // captured globe instance with API methods

  // simple component usage
  return (
    <ReactGlobe
      height="100vh"
      globeBackgroundTexture="https://your/own/background.jpg"
      globeCloudsTexture={null}
      globeTexture="https://your/own/globe.jpg"
      initialCoordinates={[1.3521, 103.8198]}
      markers={markers}
      options={options}
      width="100%"
      onClickMarker={(marker, markerObject, event) => console.log(marker, markerObject, event)}
      onGetGlobe={setGlobe}
      onMouseOutMarker={(marker, markerObject, event) => console.log(marker, markerObject, event)}
      onGlobeTextureLoaded={() => console.log('globe loaded')}
      onMouseOverMarker={(marker, markerObject, event) => console.log(marker, markerObject, event)}
    />
  )
}

export default MyGlobe;



