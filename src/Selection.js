import React, { PureComponent }  from 'react'
import { View, Image, StyleSheet,TouchableOpacity} from 'react-native'
import { Actions } from 'react-native-router-flux';


class Selection extends PureComponent{

    get touch(){
        alert('Someghin')
    }
    render(){
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.touch} onPress={() => Actions.dealshome()}>
                    <Image onPress source={require('./deals.jpeg')} style={{width:'40%', height:70}} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.touch} onPress={() => Actions.mysterybox()}>
                    <Image source={require('./magicbox.jpeg')} style={{width:'40%', height:70}} />
                </TouchableOpacity>
            </View>
        )
    }
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'row',
        justifyContent: 'space-around',
        paddingTop: 10,
        borderBottomWidth:1,
        borderBottomColor: 'white',
        elevation: 5,
        backgroundColor:'white'
    },
    touch: {
        flexDirection:'row',
        justifyContent: 'space-around',
        width: '70%'
    }
})

export default Selection