import React from 'react'
import { Text, StyleSheet, View, FlatList, TouchableOpacity, Image, ScrollView } from 'react-native'

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
    return (
        <FlatList 
            data={data}
            horizontal
            keyExtractor={(item) => item.id}
            renderItem={({ item}) => (
                <TouchableOpacity>
                <View>
                    <Image
                        style={{ width: 120, height: 120, resizeMode: 'contain'}}
                        source={{ uri: item.image }}
                    />
                </View>
            </TouchableOpacity>
            ) 
            }
        />
      )
}


export default NavOptions

const styles = StyleSheet.create({})