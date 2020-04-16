import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Incidents from './pages/Incidents';
import Details from './pages/Details';

const AppStack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Casos" component={Incidents} />
                <AppStack.Screen name="Detalhes" component={Details} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}