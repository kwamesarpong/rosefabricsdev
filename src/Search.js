import React, { PureComponent } from 'react'
import { View, StyleSheet } from 'react-native'
import { SearchBar } from 'react-native-elements';


class Search extends PureComponent {
    render(){
        return (
            <SearchBar
             lightTheme
             containerStyle={{backgroundColor: 'white'}}
             placeholder='Search Here...'
             />
        )
    }
}


const styles = StyleSheet.create({
    
})
export default Search;