/* eslint-disable no-unused-vars */
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

function Map() {
  const position = [
    [13.496639686526729, 39.47688102722169],
    [14.130062699815133, 38.71969878673554],
    [12.579863369384213, 39.50082778930665],
    [13.879829274143903, 39.598288536071784],
  ];
  return (
    <div style={{ height: "calc(100vh - 4rem" }}>
      <MapContainer
        center={[13.496639686526729, 39.47688102722169]}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {position.map((cur) => (
          <Marker position={cur} key={cur}>
            <Popup key={cur[0]}>
              <h2>place to visit</h2>
              <img src="img/img1.jpg" width="200px" height="200px" />
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default Map;
