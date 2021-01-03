import React, { useState, useEffect } from 'react';
import './App.css';
import ReactGlobe from 'react-globe-custom';
import markers from './markers';

const Globe = () => {
  let [autoRotate, setAutoRotate] = useState("rotate")
  const [globe, setGlobe] = useState(null)
  const touchSequence = ["onTouchMarker", "onTouchDefocus", "onTouchOutside"]
  const clickSequence = ["onClickOutside", "onClickMarker", "onClickDefocus"]

  const handleClickOutside = () => {
    console.debug("handleClickOutside", autoRotate)
    switch (autoRotate) {
      case clickSequence[2]:
      case touchSequence[2]:
        onDefocus()
        break
      case touchSequence[1]:
        setAutoRotate(touchSequence[2])
        break
      default:
    }
  }

  const onClickTouchMarker = (_marker, markerObject, event) => {
    console.debug("onClickMarker", autoRotate, event.type)
    autoRotate = clickSequence[1]
    if (event.type === "touchstart") {
      autoRotate = touchSequence[0]
    }
    // stop rotation
    setAutoRotate(autoRotate)
    // show tooltip
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
    console.debug("onDefocus", autoRotate)
    switch (autoRotate) {
      case clickSequence[2]:
      case touchSequence[2]:
        if (globe.options.enableMarkerTooltip) {
          globe.tooltip.hide()
        }
        autoRotate = "rotate"
        setAutoRotate("rotate")
        break
      case touchSequence[0]:
        autoRotate = touchSequence[1]
        break
      case clickSequence[1]:
        setAutoRotate(clickSequence[2])
        break
      default:
    }
    return false
  }
  const returnTootipText = (marker) => {
    return `${marker.year} ${marker.city}\n${marker.activity}`
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)
    document.addEventListener("touchstart", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("touchstart", handleClickOutside)
    }
  })

  return (
    <ReactGlobe
      markers={markers}
      options={{
        enableGlobeGlow: true,
        globeGlowCoefficient: 0.11,
        globeGlowColor: 'white',
        globeGlowPower: 12,
        globeGlowRadiusScale: 0.45,
        enableMarkerGlow: true,
        markerGlowPower: 10,
        enableMarkerTooltip: true,
        markerTooltipRenderer: returnTootipText,
        markerRadiusScaleRange: [0.001, 0.045],
        enableCameraZoom: true,
        cameraAutoRotateSpeed: autoRotate === "rotate" ? 1 : 0
      }}
      globeTexture="./globe_dark.jpg"
      globeCloudsTexture={null}
      globeBackgroundTexture={null}
      onClickMarker={onClickTouchMarker}
      onTouchMarker={onClickTouchMarker}
      onMouseOverMarker={() => false}
      onMouseOutMarker={() => false}
      onDefocus={onDefocus}
      onGetGlobe={setGlobe}
    />
  )
}

export default Globe