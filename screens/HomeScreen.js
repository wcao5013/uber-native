import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env'
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice';
import NavFavorites from '../components/NavFavorites';

const HomeScreen = () => {
    const dispatch = useDispatch()


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
                styles={{
                    container: {
                        flex: 0,
                    },
                    textInput: {
                        fontSize: 18,
                    },
                }}

                onPress={(data, details = null) => {
                    dispatch(setOrigin({
                        location: details.geometry.location,
                        description: data.description
                    }))

                    dispatch(setDestination(null))
                }}
                fetchDetails={true}
                returnKeyType={"Search"}
                enablePoweredByContainer={false}
                minLength={2}
                keepResultsAfterBlur={true}

                query={{
                    key: GOOGLE_MAPS_APIKEY,
                    language: 'en'
                }}
                nearbyPlacesAPI='GooglePlacesSearch'
                debounce={400}
            />
            <NavOptions />
            <NavFavorites />
        </View>
      </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    
})
