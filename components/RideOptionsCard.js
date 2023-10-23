import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { Text, StyleSheet, View, SafeAreaView, TouchableOpacity, FlatList } from 'react-native'
import { Icon, Image } from 'react-native-elements'
import { useSelector } from 'react-redux'
import tw from 'tailwind-react-native-classnames'
import { selectTimeTravelInformation } from '../slices/navSlice'

const data = [
  {
    id: 'Uber-X-123',
    title: 'Uber X',
    multiplier: 1,
    image: 'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_538/v1568070387/assets/b5/0a5191-836e-42bf-ad5d-6cb3100ec425/original/UberX.png'
  },
  {
    id: 'Uber-XL-456',
    title: 'Uber XL',
    multiplier: 1.2,
    image: 'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_537/v1568134115/assets/6d/354919-18b0-45d0-a151-501ab4c4b114/original/XL.png'
  },
  {
    id: 'Uber-LUX-789',
    title: 'Uber LUX',
    multiplier: 1.75,
    image: 'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_538/v1568070443/assets/82/6bf372-6016-492d-b20d-d81878a14752/original/Black.png'
  },
]

//Add a surcharge to price
const SURGE_CHARGE_RATE = 1.5

const RideOptionsCard = () => {
    const navigation = useNavigation()
    const [selected, setSelected] = useState(null)
    const travelTimeInformation = useSelector(selectTimeTravelInformation)

    return (
      <SafeAreaView style={tw`bg-white flex-grow`}>
        <View>
          <TouchableOpacity 
            onPress={() => navigation.navigate('NavigateCard')}
            style={tw`absolute top-3 left-5 z-50 p-3 rounded-full`}>
            <Icon name='chevron-left' type='fontawesome' />
          </TouchableOpacity>
          <Text style={tw`text-center py-5 text-xl`}>
            Select a Ride - {travelTimeInformation?.distance?.text}
          </Text>
        </View>
        <FlatList 
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item: { id, title, multiplier, image }, item }) => (
            <TouchableOpacity 
              onPress={() => setSelected(item)}
              style={tw`flex-row justify-between items-center px-10 ${
                  id === selected?.id && 'bg-gray-200'
              }`}>
              
              <Image
                style={{
                  width: 100,
                  height: 100,
                  resizeMode: 'contain',
                }}
                source={{ uri: image }}
              />
              <View style={tw`-ml-6`}>
                <Text style={tw`text-xl font-semibold`}>{title}</Text>
                <Text>{travelTimeInformation?.duration?.text}</Text>
              </View>
              <Text style={tw`text-xl`}>
                 {new Intl.NumberFormat('en-us', {
                    style: 'currency',
                    currency: 'USD',
                 }).format(
                    (travelTimeInformation?.duration.value * SURGE_CHARGE_RATE * multiplier) / 100
                 )}
              </Text>
            </TouchableOpacity>
          )}
        />

        <View style={tw`mt-auto border-t border-gray-200`}>
          <TouchableOpacity
            disabled={!selected}
            style={tw`bg-black py-3 m-3 ${!selected && 'bg-gray-300'}`}
          >
            <Text style={tw`text-center text-white text-xl`}>
              Choose {selected?.title}
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    )
}
export default RideOptionsCard

const styles = StyleSheet.create({})
