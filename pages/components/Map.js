import React from 'react'
import ReactMapGL from 'react-map-gl'
//App()
function Map() {
  const [viewport, setViewport] = React.useState({
    width:'100%',
    height:'100%',
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8
  })

  return (
    <ReactMapGL
    mapStyle='mapbox://styles/kinsley007/clcjk0osp001d15lalhknxebm'
    mapboxAccessToken={process.env.mapbox_key}
    {...viewport}
    onViewportChange={(nextViewport) => setViewport(nextViewport) }
    />
  )
}

export default Map