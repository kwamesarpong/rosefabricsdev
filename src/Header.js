import React, { PureComponent } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements'
import { Header } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';


class NavBar extends PureComponent {

    render(){
        const { carts } = this.props
        return (
                <Header
                backgroundColor='white'
                leftComponent={
                        <Icon 
                        name='menu'
                        color='brown'
                        size={20}
                        onPress={() => Actions.drawerOpen()} />}
                        centerComponent={<Image source={require('../log.jpeg')} style={styles.image} />}
                        rightComponent={<Icon onPress={() => Actions.carts()}
                        name="shopping-cart" 
                        color="brown" 
                        size={20} 
                />}
            />
        )
    }
}


const styles = StyleSheet.create({
    image: {
        width: 150,
        height: 30
    }
})
export default NavBar;
