import React, { PureComponent }  from 'react'
import { View, Image, StyleSheet, TouchableOpacity, Text} from 'react-native'
import { Actions } from 'react-native-router-flux';


class Selection extends PureComponent{

    get touch(){
        alert('Someghin')
    }
    render(){
        return (
            <View>
                <View style={styles.container}>
                    <TouchableOpacity style={{width: '100%', flex: 1, flexDirection: 'row'}} onPress={() => Actions.dealshome()}>
                        <View style={{width: '60%', alignItems: 'center'}}>
                            <Image onPress source={require('./deals.jpeg')} style={{width:'80%', height:80}} />
                        </View>
                        <View style={{width: '40%', paddingTop: 20}}>
                            <Text style={{color: 'brown',fontSize: 20}}>Deals</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.container}>
                    <TouchableOpacity style={{width: '100%', flex: 1, flexDirection: 'row'}} onPress={() => Actions.mysterybox()}>
                        <View style={{width: '60%', alignItems: 'center'}}>
                            <Image onPress source={require('./magicbox.jpeg')} style={{width:'80%', height:80}} />
                        </View>
                        <View style={{width: '40%', paddingTop: 20}}>
                            <Text style={{color: 'brown',fontSize: 20}}>Mystery Box</Text>
                        </View>
                    </TouchableOpacity>
                </View>
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
        paddingBottom: 10,
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