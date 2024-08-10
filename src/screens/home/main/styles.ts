import {HDP, RF} from '@helpers';
import {family, palette} from '@theme';
import {Dimensions, StyleSheet} from 'react-native';
const {width} = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    backgroundColor: palette.black,
    position: 'relative',

    flexDirection: 'column',
  },
  pageWrap: {
    backgroundColor: palette.white,
    flex: 1,
  },
  absolute: {
    width,
    height: HDP(200),
    padding: HDP(24),
    backgroundColor: palette.black,
  },
  mainLabel: {
    fontSize: RF(18),
    fontFamily: family.Bold,
    color: palette.white,
    textTransform: 'capitalize',
  },
  subLabel: {
    fontSize: RF(14),
    fontFamily: family.Bold,
    color: palette.chalice,
  },
  head: {
    fontSize: RF(18),
    fontFamily: family.Bold,
    color: palette.black,
    textTransform: 'capitalize',
    textAlign: 'center',
  },
  desc: {
    fontSize: RF(14),
    fontFamily: family.Bold,
    color: palette.chalice,
    textAlign: 'center',
  },
  button: {
    backgroundColor: palette.white,
    borderColor: palette.purple,
  },
  buttonText: {
    color: palette.purple,
  },
  map: {
    // height: 400,
    // width: 400,
    flex: 1,
  },

  deniedCover: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: HDP(24),
  },
  deniedCovere: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: HDP(24),
    backgroundColor: palette.white,
  },
  denyText: {
    fontSize: RF(12),
    fontFamily: family.Bold,
    color: palette.white,
    textTransform: 'capitalize',
  },
  logo: {
    opacity: 0.3,
  },
});

export default styles;
