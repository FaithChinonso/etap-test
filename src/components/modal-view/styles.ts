import {HDP, RF} from '@helpers';
import {family, palette} from '@theme';
import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  modalView: {
    backgroundColor: palette.blueBlack,
    borderRadius: HDP(28),
    paddingHorizontal: HDP(24),
    paddingVertical: HDP(32),
    width: Dimensions.get('screen').width * 0.8,
    minHeight: HDP(272),
    alignSelf: 'center',
  },
  modalHeader: {
    fontSize: RF(20),
    fontFamily: family.Medium,
    color: palette.grey,
    textAlign: 'center',
  },
  logo: {
    height: HDP(60),
  },
  modalCTA: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  btn2: {
    borderWidth: 1,
    borderColor: palette.green,
    paddingVertical: HDP(12),
    flex: 1,
    backgroundColor: palette.white,
  },
  btn1: {
    paddingVertical: HDP(12),
    flex: 1,
    backgroundColor: palette.green,
  },
  btnText: {
    fontSize: RF(14),
    color: palette.green,
    fontFamily: family.Medium,
  },
  desc: {
    fontSize: RF(12),
    color: palette.black,
    fontFamily: family.Light,
    textAlign: 'center',
  },
});

export default styles;
