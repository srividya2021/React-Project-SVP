import React, { useState } from 'react';
import { Text, TextInput, StyleSheet, View, Button, Alert } from 'react-native'


export const Login = props => {
    const [userName, setUserName] = useState('')

    //validate listener
    const validate = (evt) => {

        if (userName == '')
        {
            Alert.alert("Please enter user name")
        }
        else{
            if (userName === 'Admin') {
                Alert.alert("Login Success")
                props.navigation.navigate('Category')

            } else {
                Alert.alert("Login Failed")
            }
        }
        
    }

    return <View style={{ padding: 10}, container}>
        <Text style={{textAlign: 'center', fontSize: 25}}>User Name</Text>
        <TextInput
            style={{ height: 40, width: 300, backgroundColor: 'yellow', textAlign: 'center' }}
            placeholder="Enter User Name"
            onChangeText={userName => setUserName(userName)}
        />
        
        <Button
            title="SignIn"
            color="blue"
            onPress={ validate}
        />
    </View>
}

const { text, container } = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: '#fff',
        alignItems: 'center',
        marginTop: 70
       
    },
    text: {
        color: "red",
        textAlign: "center",
        marginTop: 30,
        marginLeft: 10,
        backgroundColor: "#eaeaea"
    }

})

