/* eslint-disable @typescript-eslint/no-unused-vars */
import {Coordinates} from '@screens/types/types';
import {Dimensions, PixelRatio, Platform} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

export const SCREEN_HEIGHT = Dimensions.get('window').height;
export const SCREEN_WEIGHT = Dimensions.get('window').width;

export function RF(
  size: number,
  scale: number = Platform.OS === 'android' ? 2 : 4,
) {
  let factor = PixelRatio.get();
  factor > 2.2 ? (factor = 2) : null;
  let font = ((factor * SCREEN_WEIGHT) / 1000) * size;
  return font + 6;
}

export const getWidthPercentage = (
  value: number,
  creativeWidth = SCREEN_WEIGHT,
) => (value / creativeWidth) * 100;

export const getHeightPercentage = (
  value: number,
  creativeHeight = SCREEN_WEIGHT,
) => (value / creativeHeight) * 100;

export function HDP(size: number) {
  return PixelRatio.roundToNearestPixel(size);
}

export function MH(height: number) {
  return (height / 100) * SCREEN_HEIGHT;
}

export function WP(size: number) {
  return widthPercentageToDP(size);
}

export function HP(size: number) {
  return heightPercentageToDP(size);
}

// new
export const RW = (value: number) => {
  return widthPercentageToDP(getWidthPercentage(value));
};

export const RH = (value: number) => {
  return heightPercentageToDP(getHeightPercentage(value));
};

const toRad = (value: number): number => (value * Math.PI) / 180;

export const calculateDistance = (
  coord1: Coordinates,
  coord2: Coordinates,
): number => {
  const lat1 = coord1.latitude;
  const lon1 = coord1.longitude;
  const lat2 = coord2.latitude;
  const lon2 = coord2.longitude;

  const R = 6371e3; // Earth's radius in meters
  const φ1 = toRad(lat1);
  const φ2 = toRad(lat2);
  const Δφ = toRad(lat2 - lat1);
  const Δλ = toRad(lon2 - lon1);

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const distance = R * c; // Distance in meters
  return distance;
};
export const getZoomLevel = (radius: number, lat: any) => {
  const buffer = 5.5; // Adjust this factor to control how much space outside the geofence is visible
  const earthRadius = 6371000; // in meters

  // Adjust the deltas based on the radius and buffer
  const latitudeDelta = (radius * buffer) / ((earthRadius * Math.PI) / 180);
  const longitudeDelta =
    (radius * buffer) /
    ((earthRadius * Math.cos((Math.PI * lat) / 180) * Math.PI) / 180);

  return {latitudeDelta, longitudeDelta};
};
