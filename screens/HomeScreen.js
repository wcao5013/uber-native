import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAP_APIKEY } from '@env'

const HomeScreen = () => {
    return (
      <SafeAreaView style={tw`bg-white h-full w-full`}  >
        <View style={tw`p-3`}>
            <Image
                style={{
                    width: 100,
                    height: 100,
                    resizeMode: "contain",
                }}
                source={{
                    uri: "https://cdn-images-1.medium.com/max/1200/1*kg5JVNgH_oJmwCBSA0NAXA.jpeg" 
                }}
            />
            <GooglePlacesAutocomplete
                placeholder='Where From?'
                nearbyPlacesAPI='GooglePlacesSearch'
                debounce={400}
            />
            <NavOptions />
        </View>
      </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    
})
