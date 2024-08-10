/* eslint-disable react-native/no-inline-styles */

import React, {FC, useEffect} from 'react';
import {Image, View} from 'react-native';
import * as Animatable from 'react-native-animatable';
import style from './styles';
import {Logo} from '@assets/images';

export const SplashScreen: FC = ({navigation}: any) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 2300);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={style.container}>
      <Animatable.View animation="flash" direction="normal" duration={2000}>
        <Animatable.View animation="fadeIn" duration={2300}>
          <Image source={Logo} style={style.image} />
        </Animatable.View>
      </Animatable.View>
    </View>
  );
};
