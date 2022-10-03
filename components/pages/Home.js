import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Header } from '../layout/Header';
import { MoviesScreen } from '../screens/MoviesScreen';

const Tab = createMaterialTopTabNavigator();

export const Home = () => {
  return (
    <>
      <Header />
      <Tab.Navigator>
        <Tab.Screen name="Movies" component={MoviesScreen} />
      </Tab.Navigator>
    </>
  );
};
