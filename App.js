import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CocktailsList from './CocktailsList';
import CocktailDetail from './CocktailDetail';
const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="CocktailDetail" component={CocktailDetail} />
                <Stack.Screen name="CocktailList" component={CocktailsList} />
            </Stack.Navigator>

        </NavigationContainer>
    );
}
