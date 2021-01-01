import React, { useState } from 'react';
import './App.css';
import ReactGlobe from 'react-globe-custom';
import markers from './markers';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';


function Globe() {
  const [autoRotate, setAutoRotate] = useState(true)
  const onClickMarker = (_marker, _markerObject, _event) => {
    setAutoRotate(!autoRotate)
  }

  const returnTootipText = (marker) => {
    if (marker.city === "Berlin") {

    }
    return `${marker.year} ${marker.city}\n${marker.activity}`
  }

  return (
    <ReactGlobe
      markers={markers}
      options={{
        enableGlobeGlow: false,
        globeGlowCoefficient: 0.25,
        enableMarkerTooltip: true,
        markerTooltipRenderer: returnTootipText,
        markerRadiusScaleRange: [0.001, 0.045],
        enableCameraZoom: true,
        cameraAutoRotateSpeed: autoRotate ? 1 : 0
      }}
      globeTexture="https://raw.githubusercontent.com/chrisrzhou/react-globe/main/textures/globe_dark.jpg"
      globeCloudsTexture={null}
      globeBackgroundTexture={null}
      onClickMarker={onClickMarker}
      onDefocus={onClickMarker}
    />
  );
}

export default Globe;