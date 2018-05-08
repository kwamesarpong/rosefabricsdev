import React, { PureComponent } from 'react'
import { View, ScrollView, Text, Image, TouchableOpacity, AsyncStorage } from 'react-native'
import { Icon } from 'native-base'
import axios from 'axios'
import { Actions } from 'react-native-router-flux'
import SidebarCats from './SidebarCats'

class Sidebar extends PureComponent {

    state = {
        data: [],
        firstName: ''
      }

    async componentWillMount(){
        const url = 'http://50.116.8.175/api/v1/service/rosefabrics/db?table=categories'
        const res = await axios.get(url, {headers: {'Devless-token': 'd463354149e3e51dd115ec140819e0a7'}})
        const resReversed = res.data.payload.results.reverse();
        const resSliced = resReversed.slice(0, 5)
        this.setState({ data:resSliced })

        let userFirstname = await AsyncStorage.getItem('first_name')
        let parsedFirstname = JSON.parse(userFirstname)
        let stringFirstname = parsedFirstname.toString()

        this.setState({ firstName: stringFirstname })
      }

      handleClick = async(data) => {
        await AsyncStorage.setItem('cat', JSON.stringify(data))
        Actions.categorieshome();
      }

      renderCats = () => {
        return this.state.data.map((data, i) => {
          return (
           <SidebarCats
            key={i}
            {...data}
            handleClick={this.handleClick}
           />
          )
         
        })
      }

    logout = async() => {
        await AsyncStorage.removeItem('token')
        await AsyncStorage.removeItem('user_id')
        await AsyncStorage.removeItem('pushtoken')
        Actions.login()
    }

    render(){
        return (
            <ScrollView>
                <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'brown' }}>
                    <View style={{ width: '30%', paddingTop: 10, paddingBottom: 10, paddingLeft: 20 }}>
                        <Image source={require('../pic.jpg')} style={{ width: 30, height: 30, borderRadius: 50 }} />
                    </View>
                    <View style={{ width: '70%', paddingTop: 10, paddingBottom: 10, paddingLeft: 20 }}>
                        <Text style={{ fontSize: 20, color: '#ffffff' }}>{this.state.firstName}</Text>
                    </View>
                </View>
                <View style={{ backgroundColor: 'white', paddingBottom: 30 }}>
                <TouchableOpacity onPress={() => Actions.home()} style={{flexDirection:'row', alignItems:'center', paddingTop:20}}>
                    <Image source={require('../home.png')} style={{paddingLeft:10}} />
                    <Text style={{paddingLeft:20}}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Actions.carts()}  style={{flexDirection:'row', alignItems:'center', paddingTop:20}}>
                    <Image source={require('../carts.png')} style={{paddingLeft:10}} />
                    <Text style={{paddingLeft:20}}>Carts</Text>
                </TouchableOpacity>
                {this.renderCats()}
                <TouchableOpacity onPress={() => Actions.morecatshome()} style={{flexDirection:'row', alignItems:'center', paddingTop:20}}>
                    <Image source={require('../category.png')} style={{paddingLeft:10}} />
                    <Text style={{paddingLeft:20}}>More Categories</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection:'row', alignItems:'center', paddingTop:20}}>
                    <Image source={require('../messages.png')} style={{paddingLeft:10}} />
                    <Text style={{paddingLeft:20}}>Messages</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection:'row', alignItems:'center', paddingTop:20}}>
                    <Image source={require('../notifications.png')} style={{paddingLeft:10}} />
                    <Text style={{paddingLeft:20}}>Notifications</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Actions.tailorshome()} style={{flexDirection:'row', alignItems:'center', paddingTop:20}}>
                    <Image source={require('../tailor.png')} style={{paddingLeft:10}} />
                    <Text style={{paddingLeft:20}}>Find Designers</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection:'row', alignItems:'center', paddingTop:20}}>
                    <Image source={require('../settings.png')} style={{paddingLeft:10}} />
                    <Text style={{paddingLeft:20}}>Settings</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.logout} style={{flexDirection:'row', alignItems:'center', paddingTop:20}}>
                    <Image source={require('../logout.png')} style={{paddingLeft:10}} />
                    <Text style={{paddingLeft:20}}>Logout</Text>
                </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}

export default Sidebar