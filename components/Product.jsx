import React, { useState, useEffect, Fragment } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, FlatList, Image, TouchableHighlight} from 'react-native';


export  const Product = props => {   
    const { route } = props

    const [todos, setTodos] = useState([])
    const [error, setError] = useState(null)
    const [isLoading, setLoading] = useState(true);
    
    const init = async () => {

        var url  = ''
        const { item } = route.params;

        if (item == 'Mobile') {
            url = 'http://localhost:3000/Mobile'
          } else if (item == 'Laptop')  {
            url = 'http://localhost:3000/Laptop'
          } else if (item == 'Fashion')  {
            url = 'http://localhost:3000/Fashion'
          } else if (item == 'Footwear')  {
            url = 'http://localhost:3000/Footwear'
          }else if (item == 'HomeAppliance')  {
            url = 'http://localhost:3000/HomeAppliance'
          }else if (item == 'Bag'){ 
            url = 'http://localhost:3000/Bag'
          }else {
            url = ''
          }

       // const url = 'https://jsonplaceholder.typicode.com/todos'
        try {
            const response = await fetch(url)
            const todos = await response.json()
            setTodos(todos);
        }
        catch (error) {
            console.log(error);
            setError(error)
        }
        finally {
            setLoading(false);
        }

    }
    //useEffect async... await
    useEffect(() => {
        //async and await
        //init funciton
        init();
        //unMountPhase :componentWillUnMount
        return () => {

        }
    }, [])


    if (error !== null) {
        return <View style={styles.container}>
            <Text style={{ color: 'red', fontSize: 50 }}>Oops!!
                  </Text>
        </View>
    }

    if (isLoading) {
        return <View style={styles.container}>
            <ActivityIndicator size="large" color="#00ff00" />
        </View>
    }
    return <View>
        <Text>{route.params.item}</Text>
        <FlatList
            keyExtractor={(item) => item.id}
            data={todos}
            renderItem={({ item}) => (
                <Fragment>
                <Image source={{ uri: 'https://reactnative.dev/img/tiny_logo.png'}}/> 
                <Text style={styles.item}>{item.Name}</Text>
                </Fragment>
                

                // <View style={styles.listItemContainer}>
                // <Image source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}/>
                // <Text style={styles.item}>{item.Name}</Text>
                // </View>
            )} />
    </View>


// return <View style={styles.container}>
//         <Text>{route.params.item}</Text>
//         <FlatList
//             keyExtractor={(item) => item.name}
//             data={myproduct}
//             renderItem={({ item,separators }) => {
//                 console.log(item)
//                 return <TouchableHighlight
//                     key={item.key}
//                     onPress={() => onPressItem(item)}
//                     onShowUnderlay={separators.highlight}
//                     onHideUnderlay={separators.unhighlight}>
//                     <View style={styles.listItemContainer}>
//                     <Image source={{uri: item.ProductPicUrl}} 
//                         style={styles.pokeImage}/>
//                         <Text style={styles.pokeItemHeader}>{item.Name}</Text>
                        
//                     </View>
//                 </TouchableHighlight>
//             }}

//         />
//     </View>


}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    item: {
        flex: 1,
        marginHorizontal: 10,
        marginTop: 25,
        padding: 30,
        backgroundColor: 'pink',
        fontSize: 14
    }
});
