import {RF} from '@helpers';
import {family, palette} from '@theme';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  navText: {
    fontSize: RF(14),
    fontFamily: family.Medium,
    color: palette.orange,
  },
  navActive: {
    fontSize: RF(14),
    fontFamily: family.Medium,
    color: palette.white,
  },
});

export default styles;
