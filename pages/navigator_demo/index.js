import { createStackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import CostomerScreen from './CostomerScreen';
import Page1 from './page1';

export default createStackNavigator(
  {
    HomeScreen: HomeScreen,
    Details: DetailsScreen,
    CostomerScreen: CostomerScreen,
    Page1: Page1
  },
  {
    initialRouteName: 'HomeScreen',
  }
)
