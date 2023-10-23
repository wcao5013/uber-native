import React from 'react'
import { Text, StyleSheet, View, FlatList, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'
import tw from 'tailwind-react-native-classnames'

const NavFavorites = () => {
    //data insert here
    const data = [
        {
            id: '123',
            icon: 'home',
            location: 'home',
            destination: '1405 N Main St, Warrington, PA 18976'
        },
        {
            id: '456',
            icon: 'briefcase',
            location: 'work',
            destination: '1701 John F kennedy Blvd #300, Philadelphia, PA 19103'
        },
    ]

    return (
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => {
            <View style={[tw`bg-gray-200`, { height: 0.5 }]}/>
        }}
        renderItem={({ item: { location, destination, icon } }) => (
            <TouchableOpacity style={tw`flex-row items-center p-5`}>
                <Icon
                    style={tw`mr-4 rounded-full bg-gray-300 p-3`}
                    name={icon}
                    type='ionicon'
                    color='white'
                    size={18}
                />
                <View>
                    <Text style={tw`font-semibold text-lg`}>{location}</Text>
                </View>
            </TouchableOpacity>
    )}
      />
    )
}

export default NavFavorites

const styles = StyleSheet.create({})
