import React, { useState} from 'react';
import './App.css';
import ReactGlobe from './react-globe';
import markers from './markers';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';


function returnTootipText(marker) {

  if (marker.city == "Berlin") {
    
  }

  return `${marker.year} ${marker.city}\n${marker.activity}`
}

function Globe() {
    const [click, setClick] = useState(0)
//     function onMouseOverMarker(marker, markerObject, event) {
//     setEvent({
//       type: 'MOUSEOVER',
//       marker,
//       markerObjectID: markerObject.uuid,
//       pointerEventPosition: { x: event.clientX, y: event.clientY },
//     })
//   }
    return (
    // <div onMouseDown={() => setClick(!click)}>
        <ReactGlobe
        globeOptions={{
          enableBackground: false,
          enableClouds: false,
          enableGlow: false,
          cloudsTexture: null
        }}
        cameraOptions={{
          autoRotateSpeed: 1,
          enableZoom: true,
          clickedOut: click
        }}
        markers={markers}
        // onMouseOverMarker={onMouseOverMarker}
        markerOptions={{
          glowCoefficient: 0.25,
          activeScale: 1,
          enableTooltip: true,
          getTooltipContent: returnTootipText,
          radiusScaleRange: [0.001, 0.045],
        }}
      /> 
    // </div>
    );
}

export default Globe;