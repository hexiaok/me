import React, { useState } from 'react';
import './App.css';
import ReactGlobe from 'react-globe-custom';
import markers from './markers';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';


function Globe() {
  const [autoRotate, setAutoRotate] = useState(true)
  const [globe, setGlobe] = useState(null);
  const onClickTouchMarker = (_marker, markerObject, event) => {
    setAutoRotate(false)
    globe.isLocked = true
    if (globe.options.enableMarkerTooltip) {
      globe.tooltip.show(
        event.clientX,
        event.clientY,
        globe.options.markerTooltipRenderer(markerObject.marker),
      )
    }
    return false
  }
  const onDefocus = (_previousCoordinates, _shouldDefocus) => {
    if (!globe.isLocked && !autoRotate) {
      if (globe.options.enableMarkerTooltip) {
        globe.tooltip.hide()
      }
      setAutoRotate(true)
    }
    globe.isLocked = false
    return false
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
      onClickMarker={onClickTouchMarker}
      onTouchMarker={onClickTouchMarker}
      onMouseOverMarker={() => false}
      onMouseOutMarker={() => false}
      onDefocus={onDefocus}
      onGetGlobe={setGlobe}
    />
  );
}

export default Globe;