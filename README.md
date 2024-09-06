<b>Geofencing App - README</b>
<br />
This is a cool geofencing app built with React Native. It uses your device’s location to let you set up virtual boundaries (geofences) on a map. When you cross these boundaries, the app will notify you. Perfect for tracking movements or setting up alerts based on your location!

<b>What You will need</b>

<b>Node.js</b>:  Download it from nodejs.org if you don’t have it.

<b>React Native CLI</b>:Install it globally with:

<code>npm install -g react-native-cli</code>

<b>Android Studio (for Android)</b> or <b>Xcode (for iOS)</b>: These are necessary for running the app on an emulator or physical device.

<ol><b>Setting It Up</b></ol>

<li>Clone the Repo</li>

<code>git clone "https://github.com/FaithChinonso/etap-test.git"</code>

<code>cd "repository-directory"</code>

<li>Install Dependencies</li>

<code>npm install</code>

   or
   
   <code>Yarn</code>
   
<li>Link Native Dependencies</li>
<br/>
   For React Native versions below 0.60:
   <br/>
<code>react-native link</code>
<br/>
   For React Native 0.60 and above, auto-linking should handle this.
<br/>
<li>Configure Android/iOS</li>
<br/>
<b>Android:</b>

Ensure you’ve set up the Android SDK and have an emulator or device ready.
Update AndroidManifest.xml with location permissions.
<br/>
<b>iOS:</b>

Open the ios folder in Xcode.
Make sure Info.plist includes the location permissions.
<br/>

<ol><b>Running the App</b></ol>
<br/>
<li>Start the Metro Bundler</li>
<br/>
   <code>npm start</code>
<br/>
<li>Run on Android</li>

  <code> npm run android</code>
<br/>
<li>Run on iOS</li>

  <code> npm run ios</code>
<br/>
<br/>
<b>How It Works</b>
<br/>
<ol><b>Components</b></ol>

<li><b>Home Component:</b> This is your main screen. It shows the map and handles user login, location permissions, and geofencing setup.</li>

<li><b>MapViewComponent:</b> Displays the map, lets you set geofences, and tracks your location. It’ll alert you when you enter or exit a geofenced area.</li>
<br/><br/>
<ol><b>Dependencies</b></ol>


<li><b>react-native:</b> The core framework.</li>
<li><b>react-native-maps:</b> For the map display.</li>
<li><b>react-native-geolocation-service:</b> For accessing location services.</li>
<li><b>react-native-keyboard-aware-scrollview:</b> To handle keyboard interactions smoothly.</li>
<li>Custom utilities and components from <b>@components, @utils, @slices, @helpers.</b></li>



<b>Permissions</b>

<b>Android:</b> Add the following to your AndroidManifest.xml:

<code><uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" /></code>


<b>iOS:</b> Update Info.plist with:

<key>NSLocationWhenInUseUsageDescription</key>
<string>We need your location to manage geofences.</string>
<key>NSLocationAlwaysUsageDescription</key>
<string>We need your location even when the app is in the background.</string>


<b>Manual Testing</b>

<b>Location Permissions:</b> Test on both Android and iOS to grant and deny permissions.
<b>Geofencing:</b> Long press on the map to set a geofence and check if you get notifications when crossing it.
<b>Location Permissions:</b> Make sure your device’s location services are on and permissions are granted.

<b>Got Issues?</b>
If you run into trouble:

<b>Location Permissions:</b> Make sure your device’s location services are on and permissions are granted.
<b>Map Not Showing:</b> Check that your Google Maps API key is set up correctly.
