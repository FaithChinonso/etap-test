Geofencing App - README
This is a cool geofencing app built with React Native. It uses your device’s location to let you set up virtual boundaries (geofences) on a map. When you cross these boundaries, the app will notify you. Perfect for tracking movements or setting up alerts based on your location!



Tools
Node.js
React Native CLI
Android Studio (for Android)
or Xcode (for iOS)

Components

Home Component: This is your main screen. It shows the map and handles user login, location permissions, and geofencing setup.
MapViewComponent: Displays the map, lets you set geofences, and tracks your location. It’ll alert you when you enter or exit a geofenced area.




Dependencies


react-native: The core framework.
react-native-maps: For the map display.
react-native-geolocation-service: For accessing location services.
react-native-keyboard-aware-scrollview: To handle keyboard interactions smoothly.
Custom utilities and components from @components, @utils, @slices, @helpers.



Permissions
Android: Add the following to your AndroidManifest.xml:
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />


iOS: Update Info.plist with:

<key>NSLocationWhenInUseUsageDescription</key>
<string>We need your location to manage geofences.</string>
<key>NSLocationAlwaysUsageDescription</key>
<string>We need your location even when the app is in the background.</string>




Manual Testing

Location Permissions: Test on both Android and iOS to grant and deny permissions.
Geofencing: Long press on the map to set a geofence and check if you get notifications when crossing it.
Location Permissions: Make sure your device’s location services are on and permissions are granted.

