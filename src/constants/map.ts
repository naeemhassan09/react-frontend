export const MAP_CONTAINER_STYLES = {
  height: '600px',
};

export const DEFAULT_CENTER = {
  lat: 24.9247399,
  lng: 67.2106743,
};

export const MAP_STYLE_SILVER = [
  {
    elementType: 'geometry',
    stylers: [{ color: '#f5f5f5' }],
  },
  {
    elementType: 'labels.icon',
    stylers: [{ visibility: 'off' }],
  },
  {
    elementType: 'labels.text.fill',
    stylers: [{ color: '#616161' }],
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [{ color: '#f5f5f5' }],
  },
  {
    featureType: 'administrative.land_parcel',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#bdbdbd' }],
  },
  {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [{ color: '#eeeeee' }],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#757575' }],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [{ color: '#e5e5e5' }],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#9e9e9e' }],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{ color: '#ffffff' }],
  },
  {
    featureType: 'road.arterial',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#757575' }],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [{ color: '#dadada' }],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#616161' }],
  },
  {
    featureType: 'road.local',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#9e9e9e' }],
  },
  {
    featureType: 'transit.line',
    elementType: 'geometry',
    stylers: [{ color: '#e5e5e5' }],
  },
  {
    featureType: 'transit.station',
    elementType: 'geometry',
    stylers: [{ color: '#eeeeee' }],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{ color: '#c9c9c9' }],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#9e9e9e' }],
  },
];

export const MAP_OPTIONS: google.maps.MapOptions = {
  styles: MAP_STYLE_SILVER,
  streetViewControl: false,
  fullscreenControl: false,
};

export const MAP_ZOOM_LEVEL = 12;

export const POLYGON_OPTIONS = {
  fillColor: 'lightblue',
  fillOpacity: 0.25,
  strokeColor: '#000000',
  strokeOpacity: 1,
  strokeWeight: 3,
  clickable: true,
  draggable: false,
  editable: true,
  geodesic: false,
  zIndex: 1,
};

export const POLYGON_OPTIONS_EDIT = {
  fillColor: 'lightblue',
  fillOpacity: 0.25,
  strokeColor: '#000000',
  strokeOpacity: 1,
  strokeWeight: 3,
  clickable: true,
  draggable: true,
  editable: true,
  geodesic: false,
  zIndex: 1,
};

export const POLYGON_OPTIONS_DISABLED = {
  fillColor: 'lightblue',
  fillOpacity: 0.25,
  strokeColor: '#000000',
  strokeOpacity: 1,
  strokeWeight: 3,
  clickable: true,
  draggable: false,
  editable: false,
  geodesic: false,
  zIndex: 1,
};

export enum OverlayType {
  /**
   * Specifies that the <code>DrawingManager</code> creates circles, and that
   * the overlay given in the <code>overlaycomplete</code> event is a circle.
   */
  CIRCLE = 'circle',
  /**
   * Specifies that the <code>DrawingManager</code> creates markers, and that
   * the overlay given in the <code>overlaycomplete</code> event is a marker.
   */
  MARKER = 'marker',
  /**
   * Specifies that the <code>DrawingManager</code> creates polygons, and that
   * the overlay given in the <code>overlaycomplete</code> event is a polygon.
   */
  POLYGON = 'polygon',
  /**
   * Specifies that the <code>DrawingManager</code> creates polylines, and
   * that the overlay given in the <code>overlaycomplete</code> event is a
   * polyline.
   */
  POLYLINE = 'polyline',
  /**
   * Specifies that the <code>DrawingManager</code> creates rectangles, and
   * that the overlay given in the <code>overlaycomplete</code> event is a
   * rectangle.
   */
  RECTANGLE = 'rectangle',
}

export enum ControlPosition {
  /**
   * Elements are positioned in the center of the bottom row.
   */
  BOTTOM_CENTER = 0.0,
  /**
   * Elements are positioned in the bottom left and flow towards the middle.
   * Elements are positioned to the right of the Google logo.
   */
  BOTTOM_LEFT = 1.0,
  /**
   * Elements are positioned in the bottom right and flow towards the middle.
   * Elements are positioned to the left of the copyrights.
   */
  BOTTOM_RIGHT = 2.0,
  /**
   * Elements are positioned on the left, above bottom-left elements, and flow
   * upwards.
   */
  LEFT_BOTTOM = 3.0,
  /**
   * Elements are positioned in the center of the left side.
   */
  LEFT_CENTER = 4.0,
  /**
   * Elements are positioned on the left, below top-left elements, and flow
   * downwards.
   */
  LEFT_TOP = 5.0,
  /**
   * Elements are positioned on the right, above bottom-right elements, and
   * flow upwards.
   */
  RIGHT_BOTTOM = 6.0,
  /**
   * Elements are positioned in the center of the right side.
   */
  RIGHT_CENTER = 7.0,
  /**
   * Elements are positioned on the right, below top-right elements, and flow
   * downwards.
   */
  RIGHT_TOP = 8.0,
  /**
   * Elements are positioned in the center of the top row.
   */
  TOP_CENTER = 9.0,
  /**
   * Elements are positioned in the top left and flow towards the middle.
   */
  TOP_LEFT = 10.0,
  /**
   * Elements are positioned in the top right and flow towards the middle.
   */
  TOP_RIGHT = 11.0,
}