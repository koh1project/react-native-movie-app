import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Header } from '../layout/Header';
import { MoviesScreen, TvScreen } from '../screens';

const Tab = createMaterialTopTabNavigator();

export const Home = () => {
  return (
    <>
      <Header />
      <Tab.Navigator
        initialRouteName="Movies"
        screenOptions={{
          tabBarIndicatorStyle: { backgroundColor: '#2c3e50', height: 3 },
          tabBarLabelStyle: { textTransform: 'none', fontSize: 13 },
        }}
      >
        <Tab.Screen name="Movies" component={MoviesScreen} />
        <Tab.Screen
          name="TvScreen"
          component={TvScreen}
          options={{ tabBarLabel: 'TV Shows' }}
        />
      </Tab.Navigator>
    </>
  );
};
