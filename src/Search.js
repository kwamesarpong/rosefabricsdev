import React, { PureComponent } from 'react'
import { View, StyleSheet, TouchableOpacity, Text, Alert } from 'react-native'


class Search extends PureComponent {

    handleSearch = () => {
        Alert.alert("Howdy")
    }

    render(){
        return (
            <View style={{flex: 1, flexDirection: 'row'}}>
                <TouchableOpacity style={{width: '100%', paddingTop: 5, paddingBottom: 5, paddingLeft: 5, paddingRight: 5}} onPress={this.handleSearch}>
                    <View style={{width: '100%', paddingTop: 10, paddingBottom: 10, alignItems: 'center', backgroundColor: '#f4f4f4'}}>
                        <Text>Tap here to search ... </Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    
})
export default Search;