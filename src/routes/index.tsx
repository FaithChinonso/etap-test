/* eslint-disable react-native/no-inline-styles */
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SplashScreen} from '@screens';
import React from 'react';
import {StatusBar, View} from 'react-native';
import FlashMessage from 'react-native-flash-message';
import AppStackScreens from './AppStack';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <View style={{position: 'relative', flex: 1}}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="SplashScreen"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="Home" component={AppStackScreens} />
        </Stack.Navigator>
      </NavigationContainer>
      <FlashMessage duration={6000} />
    </View>
  );
};

export default RootNavigator;
