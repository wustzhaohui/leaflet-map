import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Map from 'views/map';
import MapDefault from 'views/map-default'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Map />
    },
    {
        path: '/map-default',
        element: <MapDefault />
    },

]);

export default router;