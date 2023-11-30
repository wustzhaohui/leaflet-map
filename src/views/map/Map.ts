import L from 'leaflet';
import { MapOptions } from 'leaflet';
import 'leaflet-boundary-canvas';
import {
    FeatureCollection,
    Geometry,
    GeoJsonProperties,
} from 'geojson';

export interface OLMapType {
    el: any; // 地图容器ID
    option?: MapOptions;
    osmUrl?: string; // 地图瓦片图地址
    onClick?: (e: any) => void;
    boundary?: FeatureCollection<Geometry, GeoJsonProperties>;
}
export default class OLMap {
    L: any;
    titleLayer: L.GeoJSON<any, Geometry>;
    option?: MapOptions;
    map: L.Map;
    boundary: FeatureCollection<Geometry, GeoJsonProperties>;
    boundaryLayer: L.TileLayer.BoundaryCanvas; // 边界的layer
    osmUrl: any;
    constructor(_option: OLMapType) {
        this.L = L;
        const { el, option, osmUrl, onClick, boundary } = _option;
        this.osmUrl = osmUrl || ''; // 本地瓦片服务地址名称
        this.map = L.map(el, {
            ...{
                zoomControl: false, // 关闭缩放按钮
            },
            ...option,
        });
        this.boundary = boundary;
        this.drawBoundary();
        this.drawAreaLine();

        this.titleLayer &&
            this.titleLayer.on('click', (e: L.LeafletMouseEvent) => {
                onClick && onClick(e);
            });
    }
    drawBoundary() {
        // 根据GeoJson来绘制边界区域
        if (!this.boundary) return;
        this.boundaryLayer = L.TileLayer.boundaryCanvas(`${this.osmUrl}/{z}/{x}/{y}.png`, {
            boundary: this.boundary,
        }).addTo(this.map);
    }
    drawAreaLine() {
        // 根据GeoJson绘制GeoJson的区域线和颜色
        this.titleLayer = L.geoJSON(this.boundary, {
            style: {
                color: '#007457',
                weight: 2,
                opacity: 0.5,
                fillColor: '#e4f0ed',
                fillOpacity: 0.8,
                className: '',
            },
        }).addTo(this.map);
    }
}
