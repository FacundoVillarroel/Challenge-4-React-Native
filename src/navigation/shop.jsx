import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { Categories, Products, Product } from "../screens/index";
import { COLORS } from "../constants/colors";

const Stack = createNativeStackNavigator();
const ShopNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.background,
        },
        headerTintColor: COLORS.primaryText,
        headerTitleStyle: {
          fontFamily: 'Anek-Bold',
        },
        headerBackTitle:"",
      }}>
      <Stack.Screen
        name="Categories"
        component={Categories}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Products" component={Products} 
        options={( {route} ) => ({
          title:(route.params.title).toUpperCase()
        })} 
      />
      <Stack.Screen name="Product" component={Product} 
        options={( {route} ) => ({
          title:""
        })}
      />
    </Stack.Navigator>
  );
};

export default ShopNavigator;
