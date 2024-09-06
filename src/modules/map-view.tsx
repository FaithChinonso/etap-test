/* eslint-disable handle-callback-err */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {Dispatch, SetStateAction, useEffect, useState} from 'react';
import {
  View,
  Alert,
  PermissionsAndroid,
  Platform,
  StyleSheet,
  AppState,
} from 'react-native';
import MapView, {
  Marker,
  Circle,
  Region,
  PROVIDER_GOOGLE,
  PROVIDER_DEFAULT,
} from 'react-native-maps';
import mapStyles from './mapstyle.json';
import Geolocation from 'react-native-geolocation-service';
import {Coordinates, Geofence} from '@screens/types/types';
import {calculateDistance, getZoomLevel, HDP, RF} from '@helpers';
import {flash} from '@helpers/FlashMessageHelpers';
import {ModalView} from '@components/modal-view';
import {Button, SizedBox, TextInput} from '@components';
import {family, palette} from '@theme';

const MapViewComponent = ({
  setGranted,
}: {
  setGranted: Dispatch<SetStateAction<string>>;
}) => {
  const [region, setRegion] = useState<Region>({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [geofence, setGeofence] = useState<Geofence | null>(null);
  const [showModal, setShowModal] = useState(false);

  const [radius, setRadius] = useState<string>('');
  const [coordinateValue, setCoordinates] = useState<Coordinates | null>(null);

  useEffect(() => {
    if (Platform.OS === 'ios') {
      Geolocation.requestAuthorization('always').then(res => setGranted(res));
    }
    getLocation();
    watchPosition();
  }, []);
  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (nextAppState === 'active') {
        getLocation(); // Reload location data when the app comes back to the foreground
      }
    });

    return () => {
      subscription.remove();
    };
  }, []);
  const requestLocationPermission = async (): Promise<boolean> => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,

        {
          title: 'Geolocation Permission',
          message: 'Can we access your location?',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      setGranted(granted);

      return granted === 'granted';
    } catch (err) {
      return false;
    }
  };

  const checkGeofence = (coords: Coordinates): void => {
    if (geofence) {
      const distance = calculateDistance(coords, geofence.center);
      console.log(distance, 'dis', geofence.radius);
      if (distance < geofence.radius) {
        Alert.alert('Entered geofence');
      } else {
        Alert.alert('Exited geofence');
      }
    }
  };

  const handleMapLongPress = (e: any): void => {
    setShowModal(true);
    const {coordinate} = e.nativeEvent;
    setCoordinates(coordinate);
  };

  const submitHandler = (): void => {
    if (!coordinateValue || !radius) return;

    const zoomLevel = getZoomLevel(+radius, coordinateValue.latitude);

    setGeofence({
      center: coordinateValue,
      radius: +radius,
    });
    console.log(coordinateValue, 'coor');
    setRegion({
      ...coordinateValue,
      latitudeDelta: zoomLevel.latitudeDelta,
      longitudeDelta: zoomLevel.longitudeDelta,
    });

    setShowModal(false);
    setRadius('');
    flash.success({
      description: `You have successfully set a geofence around coordinates longitude:${coordinateValue.longitude.toFixed(
        5,
      )} latitude:${coordinateValue.latitude.toFixed(5)}.`,
    });
  };

  const handleMapPress = (e): void => {
    const {coordinate} = e.nativeEvent;
    console.log('first', coordinate);
    checkGeofence(coordinate);
  };

  const getLocation = (): void => {
    try {
      const handlePositionSuccess = (position: any) => {
        setRegion({
          longitude: position.coords.longitude,
          latitude: position.coords.latitude,
          latitudeDelta: 0.00922,
          longitudeDelta: 0.00421,
        });

        checkGeofence(position.coords);
      };

      const handlePositionError = (err: any) => {
        console.log(err);
        setRegion({
          longitude: 0,
          latitude: 0,
          latitudeDelta: 0.00922,
          longitudeDelta: 0.00421,
        });
      };

      if (Platform.OS === 'ios') {
        Geolocation.getCurrentPosition(
          handlePositionSuccess,
          handlePositionError,
          {
            enableHighAccuracy: true,
            timeout: 15000,
            maximumAge: 10000,
          },
        );
      } else {
        requestLocationPermission().then(res => {
          if (res) {
            Geolocation.getCurrentPosition(
              handlePositionSuccess,
              handlePositionError,
              {
                enableHighAccuracy: true,
                timeout: 15000,
                maximumAge: 10000,
              },
            );
          } else {
            setRegion({
              latitude: 6.5244,
              longitude: 3.3792,
              latitudeDelta: 0.00922,
              longitudeDelta: 0.00421,
            });
          }
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const watchPosition = (): void => {
    try {
      Geolocation.watchPosition(
        position => {
          const {latitude, longitude} = position.coords;
          setRegion(prevRegion => ({
            ...prevRegion,
            latitude,
            longitude,
            latitudeDelta: prevRegion.latitudeDelta,
            longitudeDelta: prevRegion.longitudeDelta,
          }));
          console.log('Position updated:', position.coords);
          checkGeofence(position.coords);
        },
        error => {
          console.log('Error in watchPosition:', error);
        },
        {
          enableHighAccuracy: true,
          distanceFilter: 0.1, // Adjusted distanceFilter for more frequent updates
          interval: 10000, // Optional: Time in milliseconds between updates
          fastestInterval: 5000, // Optional: Fastest interval for location updates
        },
      );
    } catch (error) {
      console.log(error);
    }
  };

  const closeModal = (): void => {
    setShowModal(false);
    setRadius('');
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        showsUserLocation={true}
        onPress={handleMapPress}
        customMapStyle={mapStyles}
        initialRegion={{
          latitude: 0,
          longitude: 0,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        provider={
          Platform.OS === 'android' ? PROVIDER_GOOGLE : PROVIDER_DEFAULT
        }
        showsScale={true}
        region={region}
        onLongPress={handleMapLongPress}
        zoomEnabled>
        <Marker
          coordinate={region}
          tappable
          description="Me"
          title="Geofence Center"
        />
        {geofence && (
          <>
            <Marker
              coordinate={geofence.center}
              tappable
              description="Long press to geocode this area"
              title="Geofence Center"
            />
            <Circle
              center={geofence.center}
              radius={geofence.radius}
              strokeColor="rgba(255,0,0,0.5)"
              fillColor="rgba(255,0,0,0.2)"
            />
          </>
        )}
      </MapView>

      <ModalView
        show={showModal}
        afterHide={closeModal}
        dropPress={closeModal}
        content={
          <View style={{padding: HDP(20)}}>
            <TextInput
              placeholder="Enter desired radius"
              value={radius}
              onChangeText={val => setRadius(val)}
              keyboardType="numeric"
            />
            <SizedBox height={20} />
            <Button title="Submit" disabled={!radius} onPress={submitHandler} />
          </View>
        }
      />
    </View>
  );
};

export default MapViewComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: palette.black,
  },
  map: {
    flex: 1,
  },
  mainLabel: {
    fontSize: RF(18),
    fontFamily: family.Bold,
    color: palette.white,
    textTransform: 'capitalize',
  },
  button: {
    backgroundColor: palette.white,
  },
});
