/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

 import React from 'react';
 //first import createStackNavigator from react-navigation
 //then import StackNavigator for creatign nested routes
 import { NavigationContainer } from '@react-navigation/native';
 import { createStackNavigator } from '@react-navigation/stack';
 //Import your screens 
 import PokeList from './components/PokeList';
 import Pokemon from './components/Pokemon';
 import Home from './components/Home';
 
 
 //Define your routes using createStackNavigator, which will be a object full of options. 
//  const RootStack = createStackNavigator({
//      //Define your screens.
//      Home: { screen: Home },
//      PokeList: { screen: PokeList },
//      Pokemon: {screen: Pokemon }
//    },
//    {
//      initialRouteName:  'Home'
//    })

const { Navigator, Screen } = createStackNavigator()

const App = () => <NavigationContainer>
    <Navigator initialRouteName="PokeList">
        <Screen name="Home" component={Home} options={{ title: 'Welcome to Login Screen' }}/>
        <Screen name="PokeList"  component={PokeList} initialParams={{ id: 1, item: 'React Native v2' }} />
        <Screen name="Pokemon" component={Pokemon} />
    </Navigator>
</NavigationContainer>
 
 
 //Export default the stateless component 
//  const App = () => {
//    return <RootStack />
//  }
 
 export default App;
 
 