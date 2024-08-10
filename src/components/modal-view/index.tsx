/* eslint-disable @typescript-eslint/no-unused-vars */
import {Button, SizedBox, SvgIcon} from '@components';
import React, {FC} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Modal from 'react-native-modal';
import styles from './styles';
import {palette} from '@theme';
import {HDP} from '@helpers';

interface Props {
  title?: string;
  content?: any;

  show?: boolean;
  dropPress?: any;
  afterHide?: any;
  avoidKeyboard?: boolean;
  modalStyle?: any;
}

export const ModalView: FC<Props> = ({
  title,
  content,
  show = false,
  dropPress,
  afterHide,
  avoidKeyboard = true,
  modalStyle,
}) => {
  return (
    <Modal
      avoidKeyboard={avoidKeyboard}
      isVisible={show}
      onBackdropPress={dropPress}
      onModalHide={afterHide}>
      <View
        style={[
          styles.modalView,
          title?.length! > 0 && {paddingHorizontal: HDP(24)},
          modalStyle,
        ]}>
        <SizedBox height={21} />
        <View>{content}</View>
        <SizedBox height={24} />
      </View>
    </Modal>
  );
};
