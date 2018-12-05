import { createStackNavigator } from 'react-navigation';

import HomeScreen from '../screens/Home';
import QuizScreen from '../screens/Quiz';

export default createStackNavigator({
  Home: QuizScreen,
  Quiz: QuizScreen
})