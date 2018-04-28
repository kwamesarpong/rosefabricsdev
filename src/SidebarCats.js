import React, { PureComponent } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";


const  SidebarCats = ({name, handleClick}) => (
    <TouchableOpacity onPress={() =>handleClick(name)} style={{flexDirection:'row', alignItems:'center', paddingTop:20}}>
        <Image source={require('../category.png')} style={{paddingLeft:10}} />
        <Text style={{paddingLeft:20}}>{name}</Text>
    </TouchableOpacity>
)

export default SidebarCats;
