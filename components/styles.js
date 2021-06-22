//import styleSheet for creating a css abstraction.
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    listItemContainer: {
        backgroundColor: '#0ff',
        borderStyle: 'solid',
        borderColor: '#fff',
        width: 320,
        borderBottomWidth: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15
    },
    pokeItemHeader: {  
        color: '#000',
        fontSize: 20,
    },
    pokeImage: {
        backgroundColor: 'transparent',
        height: 50,
        width: 50
    },
    container: {
        flex: 1,
        paddingTop: 22,
        alignItems: 'center'
    },
    text: {
        color: "blue",
        textAlign: "center",
        alignItems: 'center',
        padding: 14,
        marginTop: 20,
        marginBottom: 30,
        marginLeft: 10,
        fontSize: 25
    }
})

export default styles;