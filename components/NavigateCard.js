import React from 'react'
import { Text, StyleSheet, View, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'tailwind-react-native-classnames'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAPS_APIKEY } from '@env'
import { useDispatch } from 'react-redux'
import { setDestination } from '../slices/navSlice'
import { useNavigation } from '@react-navigation/native'
import NavFavorites from './NavFavorites'


const NavigateCard = ( ) => {
    const dispatch = useDispatch()
    const navigation = useNavigation()

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <SafeAreaView style={tw`bg-white flex-1 pt-0`}>
                <Text style={tw`text-center text-xl pb-2`}>Good Morning, Wan</Text>
                <View style={tw`border-t border-gray-200 flex-shrink`}>
                    <View>
                        <GooglePlacesAutocomplete
                            placeholder='Where to?'
                            styles={{
                                container: {
                                    flex: 0,
                                },
                                textInput: {
                                    fontSize: 18,
                                },
                            }}

                            onPress={(data, details = null) => {
                                dispatch(setDestination({
                                    location: details.geometry.location,
                                    description: data.description
                                }));

                                navigation.navigate('RideOptionsCard');
                            }}
                            fetchDetails={true}
                            returnKeyType={"Search"}
                            enablePoweredByContainer={false}
                            keepResultsAfterBlur={true}
                            minLength={2}

                            query={{
                                key: GOOGLE_MAPS_APIKEY,
                                language: 'en'
                            }}
                            nearbyPlacesAPI='GooglePlacesSearch'
                            debounce={400}
                        />
                    </View>
                    <NavFavorites />
                </View>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}
export default NavigateCard

const toInputBoxstyles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingTop: 10,
        flex: 0,
    },
    textInput: {
        backgroundColor: '#DDDDDF',
        borderRadius: 0,
        fontSize: 18,
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0,
    },
})
