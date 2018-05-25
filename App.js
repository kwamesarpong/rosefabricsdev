/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Router, Scene, Drawer, Actions } from 'react-native-router-flux';
import { AsyncStorage, View, Image } from 'react-native'
import Header from './src/Header'
import BackHeader from './src/BackHeader'
import Login from './src/Login'
import Signup from './src/Signup'
import Sidebar from './src/Sidebar'
import Home from './src/Home'
import Cart from './src/Carts'
import ProductDetails from './src/ProductDetails'
import Checkout from './src/Checkout'
import requireAuth from './src/HOC'
import MysteryBox from './src/Mysterybox'
import DealsHome from './src/DealsHome'
import NotificationsHome from './src/NotificationsHome'
import CategoriesHome from './src/CategoriesHome'
import TailorsHome from './src/TailorsHome'


export default class App extends Component<Props> {
    state = {
        loading: true
    }

    async componentDidMount(){
        if(await AsyncStorage.getItem('token')){
            this.setState({ loading: false })
            Actions.home()
        }
        else {
            this.setState({ loading: false })
        }
      }


  render() {
      if(this.state.loading){
          return (
              <View style={{flex: 1}}>
                <View style={{flex: 1}}>
                    <Image source={require('./splash.png')} style={{width:'100%', height:'100%'}} />
                </View>
              </View>
          )
      }
    return (
              <Router>
                  <Scene key='root' navBar={Header} >
                      <Scene key='login' component={Login} title='Login' initial hideNavBar/>
                      <Scene key='signup' component={Signup} title='Signup'  hideNavBar/>
                      <Drawer key="drawer" contentComponent={Sidebar} hideDrawerButton drawerWidth={300} >
                          <Scene key='home' component={requireAuth(Home)} title='home'hideNavBar />
                          <Scene key='carts' component={requireAuth(Cart)} title='cart' hideNavBar />
                      </Drawer>
                      <Scene key={'product'} path={"/product/:id/"} component={requireAuth(ProductDetails)} navBar={BackHeader} />
                      <Scene key='checkout' component={Checkout} navBar={BackHeader} />
                      <Scene key='mysterybox' component={MysteryBox} title='mysterybox' navBar={BackHeader} />
                      <Scene key='dealshome' component={DealsHome} title='dealshome' navBar={BackHeader} />
                      <Scene key='notificationshome' component={NotificationsHome} title='notificationshome' navBar={BackHeader} />
                      <Scene key='categorieshome' component={CategoriesHome} title='categorieshome' navBar={BackHeader} />
                      <Scene key='tailorshome' component={TailorsHome} title='tailorshome' navBar={BackHeader} />
                  </Scene>
              </Router>
    );
  }
}
