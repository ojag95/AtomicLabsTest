import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../../Screens/WelcomeSection/WelcomeScreen';
import RegisterStepOneScreen from '../../Screens/WelcomeSection/RegisterStepOneScreen';

const Stack = createStackNavigator();

function InitialNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{ headerShown: false}}/>
      <Stack.Screen name="RegisterStepOne" component={RegisterStepOneScreen} options={{ headerShown: false}}/>
    </Stack.Navigator>
  );
}

export default InitialNavigator;