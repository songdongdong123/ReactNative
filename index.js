import { AppRegistry, YellowBox } from 'react-native';

YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
  'Module RCTImageLoader requires',
]);
import App from './App';

AppRegistry.registerComponent('initRN', () => App);
