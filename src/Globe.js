import React, { useState, useEffect } from 'react';
import './App.css';
import ReactGlobe from 'react-globe-custom';
import markers from './markers';

const Globe = () => {
  const [autoRotate, setAutoRotate] = useState("rotate")
  const [globe, setGlobe] = useState(null)

  const handleClickOutside = () => {
    console.log("handleClickOutside", globe.rotate)
    switch (globe.rotate) {
      case "AfterOnClickOutside":
        onDefocus()
        break
      case "AfterOnDefocus":
        globe.rotate = "AfterOnClickOutside"
        setAutoRotate("AfterOnClickOutside")
        break
      case "rotate":
      case "onClickTouchMarker":
      case "AfterOnClickTouchMarker":
      default:
    }
  }

  const onClickTouchMarker = (_marker, markerObject, event) => {
    console.log("onClickTouchMarker", globe.rotate)
    setAutoRotate("onClickTouchMarker")
    globe.rotate = "onClickTouchMarker"
    if (globe.options.enableMarkerTooltip) {
      const clientX = event.clientX ? event.clientX : event.touches[0].clientX
      const clientY = event.clientY ? event.clientY : event.touches[0].clientY
      globe.tooltip.show(
        clientX,
        clientY,
        globe.options.markerTooltipRenderer(markerObject.marker)
      )
    }
    return false
  }
  const onDefocus = (_previousCoordinates, _shouldDefocus) => {
    console.log("onDefocus", globe.rotate)
    switch (globe.rotate) {
      case "AfterOnClickOutside":
        if (globe.options.enableMarkerTooltip) {
          globe.tooltip.hide()
        }
        globe.rotate = "rotate"
        setAutoRotate("rotate")
        break
      case "onClickTouchMarker":
        globe.rotate = "AfterOnDefocus"
        setAutoRotate("AfterOnDefocus")
        break
      case "rotate":
      default:
        break
    }

    return false
  }

  const returnTootipText = (marker) => {
    if (marker.city === "Berlin") {

    }
    return `${marker.year} ${marker.city}\n${marker.activity}`
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  });

  return (
    <ReactGlobe
      markers={markers}
      options={{
        enableGlobeGlow: false,
        globeGlowCoefficient: 0,
        enableMarkerTooltip: true,
        markerTooltipRenderer: returnTootipText,
        markerRadiusScaleRange: [0.001, 0.045],
        enableCameraZoom: true,
        cameraAutoRotateSpeed: autoRotate === "rotate" ? 1 : 0
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