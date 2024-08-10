import {danger_config, success_config} from '@utils';
import {showMessage} from 'react-native-flash-message';

const flash: any = {
  success: ({description}) => {
    return showMessage({...success_config, description});
  },
  danger: ({description}) => {
    return showMessage({...danger_config, description});
  },
};

export {flash};
