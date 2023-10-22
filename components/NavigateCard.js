import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'tailwind-react-native-classnames'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAPS_APIKEY } from '@env'

const NavigateCard = () => {

    return (
      <SafeAreaView style={tw`bg-white flex-1`}>
        <Text style={tw`text-center py-5 text-xl`}>Good Morning, Wan</Text>
        <Text style={tw`border-t border-gray-200 flex-shrink`}>Good Morning, Wan</Text>
        <View>
            <View>
        
            </View>
        </View>
      </SafeAreaView>
   
    )
}
export default NavigateCard

const styles = StyleSheet.create({})
