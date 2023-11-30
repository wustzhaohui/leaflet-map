import React, { FC, useEffect } from 'react';
import L from 'leaflet';
export interface MapDefaultProps {}
let map;
const MapDefault: FC<MapDefaultProps> = () => {
    useEffect(() => {
        let container: any = L.DomUtil.get('map-default');
        if (container != null) {
            container._leaflet_id = null;
        }
         
        map = L.map('map-default', {
            center: [36.67, 105.17],
            zoom: 4.4,
        });
        L.tileLayer(`http://localhost:8080/{z}/{x}/{y}.png`, {}).addTo(map)
    }, []);
     return <div id="map-default" style={{
        width: '100vw',
        height: '100vh'
     }}></div>;
};
export default MapDefault;