import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './src/screens/Home';
import ComponentScreen from './src/screens/ComponentScreen';
import ActivityOne from './src/screens/ActivityOne';
import ListScreen from './src/screens/ListScreen';
import ActivityTwo from './src/screens/ActivityTwo';
import ImageScreen from './src/screens/ImageScreen';
import ActivityThree from './src/screens/ActivityThree';
import CounterApplication from './src/screens/CounterApplication';
import ColorScreen from './src/screens/ColorScreen';
import SquareScreen from './src/screens/SquareScreen';
import ConstructorScreen from './src/screens/ConstructorScreen'
import SquareScreenReducer from './src/screens/SquareScreenReducer';
import CounterScreenWithReducer from './src/screens/CounterScreenWithReducer';
import TextScreen from './src/screens/TextScreen';
import ActivityFour from './src/screens/ActivityFour';
import BoxScreen from './src/screens/BoxScreen';
import ActivityFive from './src/screens/ActivityFive';
import ToastShowScreen from './src/screens/ToastShowScreen';

const AppNavigator = createStackNavigator(
  {
    Home: Home,
    Component: ComponentScreen,
    One: ActivityOne,
    List: ListScreen,
    two: ActivityTwo,
    Image:ImageScreen,
    Three:ActivityThree,
    Counter:CounterApplication,
    Color:ColorScreen,
    Square:SquareScreen,
    Constructor: ConstructorScreen,
    Reducer: SquareScreenReducer,
    CounterReducer: CounterScreenWithReducer,
    Text: TextScreen,
    Four: ActivityFour,
    Box: BoxScreen,
    Five: ActivityFive,
    Toast: ToastShowScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(AppNavigator);