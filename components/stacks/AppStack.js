import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../pages';
import { ShowPageScreen, TvScreen } from '../screens';

const Stack = createNativeStackNavigator();

export const AppStack = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Movies">
      <Stack.Screen
        name="Movies"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ShowPage"
        component={ShowPageScreen}
        options={({ route }) => ({
          title: route.params.label,
          headerBackTitle: 'Back to List',
        })}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
