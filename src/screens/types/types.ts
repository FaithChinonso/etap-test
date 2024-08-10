export type Coordinates = {
  latitude: number;
  longitude: number;
  latitudeDelta?: number;
  longitudeDelta?: number;
};

export type Geofence = {
  center: Coordinates;
  radius: number;
};
