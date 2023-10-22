import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Map from '../components/Map'
import MapView from 'react-native-maps';
import tw from 'tailwind-react-native-classnames';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigateCard from '../components/NavigateCard';
import RideOptionsCard from '../components/RideOptionsCard';

const MapScreen = () => {
    const Stack = createNativeStackNavigator()

    return (
      <View>
        <View style={tw`h-1/2`}>
            <Map />
        </View>
        <View style={tw`h-1/2`}>
            <Stack.Navigator>
                <Stack.Screen
                    name='NavigationCard'
                    component={NavigateCard}
                    options={{
                        headerShown: false,
                    }}
                />
            </Stack.Navigator>

            <Stack.Navigator>
                <Stack.Screen
                    name='RideOptionsCard'
                    component={RideOptionsCard}
                    options={{
                        headerShown: false,
                    }}
                />
            </Stack.Navigator>
        </View>
      </View>
    )
  }

export default MapScreen

const styles = StyleSheet.create({})

