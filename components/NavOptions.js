import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text, StyleSheet, View, FlatList, TouchableOpacity, Image, ScrollView } from 'react-native'
import { Icon } from 'react-native-elements'
import { useSelector } from 'react-redux'
import tw from 'tailwind-react-native-classnames'
import { selectOrigin } from '../slices/navSlice'

const data = [
    {
        id: '123',
        title: 'Get a ride',
        image: 'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_537/v1569352630/assets/4b/28f11e-c97b-495a-bac1-171ae9b29362/original/BlackSUV.png',
        screen: 'MapScreen',
    },
    {
        id: '456',
        title: 'Order food',
        image: 'https://cdn.iconscout.com/icon/free/png-256/free-uber-eats-1613370-1369417.png',
        screen: 'EatsScreen'
    },
]

const NavOptions = () => {
    const navigation = useNavigation()
    const origin = useSelector(selectOrigin)
    
    return (
        <FlatList 
            data={data}
            horizontal
            keyExtractor={(item) => item.id}
            renderItem={({ item}) => (
                <TouchableOpacity 
                    onPress={() => navigation.navigate(item.screen)}
                    style={tw`p-2 pt-6 pb-8 pt-4 m-2 w-40`}
                    disabled={!origin}
                    >
                    
                <View style={tw` ${!origin && 'opacity-20'}`}>
                    <Image
                        style={{ width: 120, height: 120, resizeMode: 'contain'}}
                        source={{ uri: item.image }}
                    />
                    <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
                    <Icon 
                        style={tw`p-2  bg-black rounded-full w-10 mt-4`}
                        type='antdesign' name='arrowright' color='white' />
                </View>
            </TouchableOpacity>
            )}
        />
      )
}


export default NavOptions

const styles = StyleSheet.create({})
