import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../../Screens/WelcomeSection/WelcomeScreen';
import RegisterStepOneScreen from '../../Screens/WelcomeSection/RegisterStepOneScreen';
import RegisterStepTwoScreen from '../../Screens/WelcomeSection/RegisterStepTwoScreen';
import RegisterStepThreeScreen from '../../Screens/WelcomeSection/RegisterStepThreeScreen';


const Stack = createStackNavigator();

function InitialNavigator() {
  return (
    <Stack.Navigator initialRouteName="WelcomeScreen">
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{ headerShown: false}}/>
      <Stack.Screen name="RegisterStepOne" component={RegisterStepOneScreen} options={{ headerShown: false}}/>
      <Stack.Screen name="RegisterStepTwo" component={RegisterStepTwoScreen} options={{ headerShown: false}}/>
      <Stack.Screen name="RegisterStepThree" component={RegisterStepThreeScreen} options={{ headerShown: false}}/>
    </Stack.Navigator>
  );
}

export default InitialNavigator;