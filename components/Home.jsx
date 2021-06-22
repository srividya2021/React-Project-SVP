//Flat List
import React, { useState } from 'react';
import { Alert, FlatList, TouchableHighlight, StyleSheet, Text, View, Image } from 'react-native'
import { category } from '../mock-data/category'
import styles from './styles';

export  const Home = props => {   
    const { route } = props
    const [mycategory, setMycategory] = useState(category);

    //normal method
    const onPressItem = (item) => {
        Alert.alert(item.name)
    }

    return <View style={styles.container}>
         <Text style={styles.text}>Categories</Text>
         <View style={{width: '75%'}}>
            <Text style={{fontSize: 18, textAlign: 'left'}}>Hi Vidya,</Text>
            <Text style={{fontSize: 18, textAlign: 'left', marginBottom: 30}}>Please select the category to get the products list</Text>
        </View>
        <FlatList
            keyExtractor={(item) => item.name}
            data={mycategory}
            renderItem={({ item,separators }) => {
                console.log(item)
                return <TouchableHighlight
                    key={item.key}
                    onPress={() =>  props.navigation.push('Product', {
                        item: item.name
                     })}
                    onShowUnderlay={separators.highlight}
                    onHideUnderlay={separators.unhighlight}>
                    <View style={styles.listItemContainer}>
                        <Text style={styles.pokeItemHeader}>{item.name}</Text>
                        <Image source={{uri: item.image_url}} 
                        style={styles.pokeImage}/>
                    </View>
                </TouchableHighlight>
            }}

        />
    </View>
}