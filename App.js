import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Login, CategoryScreen, Home, Product} from './components';

const { Navigator, Screen } = createStackNavigator()

const App = () => <NavigationContainer>
    <Navigator initialRouteName="Login">
        <Screen name="Login" component={Login} options={{ title: 'Welcome to Login Screen' }}/>
        <Screen name="Category"  component={CategoryScreen} />
        <Screen name="Home" component={Home} />
        <Screen name="Product" component={Product} />
       
    </Navigator>
</NavigationContainer>
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default App;
