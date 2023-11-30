import React, { FC, useEffect, useRef, useState } from 'react';
import China from 'vender/china.json';
import L from 'leaflet';
import {
    FeatureCollection,
    Geometry,
    GeoJsonProperties,
} from 'geojson';
import OLMap from './Map';
export interface MapDisplayProps {}
let map;
const MapDisplay: FC<MapDisplayProps> = () => {
   
    useEffect(() => {
        let container: any = L.DomUtil.get('map-con');
        if (container != null) {
            container._leaflet_id = null;
        }
         map = new OLMap({
            el: 'map-con',
            osmUrl: 'http://localhost:8080/',
            boundary: China as FeatureCollection<Geometry, GeoJsonProperties>,
            option: {
                center: [36.67, 105.17],
                zoom: 4.4,
                zoomControl: true
            }
        });
       
    }, []);
    return (
        <div
            id="map-con"
            style={{
                width: '100vw',
                height: '100vh',
            }}
        ></div>
    );
};
export default MapDisplay;
