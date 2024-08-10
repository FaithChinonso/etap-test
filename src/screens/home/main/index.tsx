/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {BottomSheet, Button, SizedBox, TextInput} from '@components';

import {predictFuelRefill, predictOverheating, predictOverspeed} from '@utils';
import generateRandomDataAsync from '@utils/dataSimulator';
import {generateSimulatedJourneyData} from '@utils/simulatedLog';
import React, {FC, useEffect, useState} from 'react';
import {Image, Linking, SafeAreaView, Text, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {RootState, useAppDispatch, useAppSelector} from 'store';
import style from './styles';
import MapViewComponent from '@modules/map-view';
import {HDP} from '@helpers';
import {setUser} from '@slices/user';
import {flash} from '@helpers/FlashMessageHelpers';
import {Logo} from '@assets/images';
import {ModalView} from '@components/modal-view';

export const Home: FC = ({navigation}: any) => {
  const [showBottom, setShowBottom] = useState(false);
  const [text, setText] = useState('');
  const [shsowModal, setShowmadal] = useState(false);
  const [granted, setGranted] = useState<any>('granted');
  const {user} = useAppSelector<any>((store: RootState) => store);

  const dispatch = useAppDispatch();
  useEffect(() => {
    if (user === '') {
      setShowBottom(true);
    } else {
      setShowBottom(false);
    }
  }, [user]);
  const submitNameHandler = () => {
    dispatch(setUser(text));
    flash.success({
      description: `Welcome ${text}, Long press any area to geofence`,
    });
    setShowBottom(false);
  };
  const settingsHandler = () => {
    Linking.openSettings();
  };

  useEffect(() => {
    if (granted === 'granted') {
      setShowmadal(false);
    } else {
      setShowmadal(true);
    }
  }, [granted]);

  return (
    <View style={style.pageWrap}>
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="handled"
        style={style.container}
        contentContainerStyle={{
          justifyContent: 'space-between',
          flex: 1,
        }}>
        {user ? (
          <>
            <View style={style.map}>
              <MapViewComponent setGranted={setGranted} />
            </View>
            <View style={style.absolute}>
              <Text style={style.mainLabel}>Welcome {user}!</Text>

              <Text style={style.subLabel}>
                Long press any area to set geofence
              </Text>
            </View>
          </>
        ) : (
          <View style={style.deniedCovere}>
            <Image source={Logo} style={style.logo} />
          </View>
        )}
      </KeyboardAwareScrollView>
      <BottomSheet
        show={showBottom}
        afterHide={() => {}}
        dropPress={() => {}}
        content={
          <View style={{padding: HDP(20)}}>
            <Text style={style.mainLabel}>Welcome to ETAP geofencing app!</Text>
            <SizedBox height={20} />
            <Text style={style.denyText}>
              Enter your username to get started
            </Text>
            <SizedBox height={20} />
            <TextInput
              placeholder="Enter your name"
              value={text}
              onChangeText={val => {
                setText(val);
              }}
            />
            <SizedBox height={20} />
            <Button
              title="Submit"
              disabled={text.length === 0}
              onPress={submitNameHandler}
            />
          </View>
        }
      />
      <ModalView
        show={shsowModal}
        content={
          <View style={style.deniedCover}>
            <SizedBox height={10} />
            <Text style={style.head}>Location Permission Required!!</Text>
            <SizedBox height={20} />
            <Text style={{...style.desc}}>
              Open Settings and grant permission manually
            </Text>
            <SizedBox height={20} />
            <Button title="Go to settings" onPress={settingsHandler} />

            <SizedBox height={20} />
          </View>
        }
      />
    </View>
  );
};
