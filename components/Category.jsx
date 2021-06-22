import React, { useState } from 'react';
import { Text, TextInput, StyleSheet, View, TouchableHighlight, TouchableOpacity, Button, Alert, Image } from 'react-native'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const catImg = {
    uri:'https://img.icons8.com/ios/50/000000/category.png',
    width:90,
    height:60
}

const giftImg = {
      uri:'https://img.icons8.com/ios/50/000000/gift.png',
      width:90,
      height:90
  }

export  const CategoryScreen = props => {   
    const { route } = props
    return (
        <View style={container} padding={16}>
            <Text style={text}>Lab Cart</Text>
            <TouchableHighlight activeOpacity={0.6} underlayColor="#959595" onPress={() => props.navigation.navigate('Home')}> 
            <View style={{padding: 44}}><Image source={catImg} onMagicTap={() => alert('Pressed!')}/><Text style={{textAlign: 'center', fontSize: 25}}>Catagories</Text></View></TouchableHighlight>
            <View style={{padding: 44}}><Image source={giftImg}/><Text style={{textAlign: 'center', fontSize: 25}}>Gift List</Text></View>
        </View>
    );
}

const { text, container, container1} = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: '#fff',
        alignItems: 'center',
        marginTop: 80,
        height: 40
       
    },
    text: {
        color: "blue",
        textAlign: "center",
        alignItems: 'center',
        padding: 24,
        marginTop: 30,
        marginLeft: 10,
        fontSize: 35
    }

})