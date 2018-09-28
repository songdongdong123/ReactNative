import { createStackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import CostomerScreen from './CostomerScreen';

export default createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
    CostomerScreen: CostomerScreen
  },
  {
    initialRouteName: 'Home',
  }
)
