import React, { PureComponent } from 'react';
import axios from 'axios'
import { View, Alert, ScrollView, Linking, AsyncStorage, StyleSheet, Dimensions } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { Actions } from 'react-native-router-flux'
import Header from './Header'
import SearchBar from './Search'
import MagicBar from './Magic';
import Products from './Products'
import Selection from './Selection'
import OneSignal from 'react-native-onesignal';

class Home extends PureComponent {

  state = {
    img: ' ',
  }

  async componentDidMount() {

    const url = 'http://50.116.8.175/api/v1/service/rosefabrics/db?table=slider'
    const res = await axios.get(url, {headers: {'Devless-token': 'd463354149e3e51dd115ec140819e0a7'}})
    let sliderImage = res.data.payload.results;
    let sliderArray = sliderImage.reverse();
    this.setState({img:sliderArray[0].img_one})
  }

  componentWillMount() {
          OneSignal.addEventListener('received', this.onReceived);
          OneSignal.addEventListener('opened', this.onOpened);
          OneSignal.addEventListener('ids', this.onIds);
      }

      componentWillUnmount() {
          OneSignal.removeEventListener('received', this.onReceived);
          OneSignal.removeEventListener('opened', this.onOpened);
          OneSignal.removeEventListener('ids', this.onIds);
      }

      onReceived(notification) {
          console.log("Notification received: ", notification);
      }

      onOpened(openResult) {
        console.log('Message: ', openResult.notification.payload.body);
        console.log('Data: ', openResult.notification.payload.additionalData);
        console.log('isActive: ', openResult.notification.isAppInFocus);
        console.log('openResult: ', openResult);
      }

      onIds(device) {
  		console.log('Device info: ', device);
      }


handleSelect = (data) => {
  Actions.product({data})
}

makeCall = () => {
  Linking.openURL('tel:+233272954084');
}

 render(){
   console.log(this.props.navigation.state.params.name)
    return (
      <View style={{flex:1, backgroundColor:'white'}}>
      {/* { Alert.alert(`Welocome ${this.props.params.name}`)} */}
      <ScrollView>
        <SearchBar />
        <Card
        containerStyle={styles.container}
        wrapperStyle={styles.wrapper}
        imageStyle={styles.image}
        imageWrapperStyle={styles.imageWrapper}
        image={{uri: this.state.img}}>
        </Card>
        <MagicBar />
        <Selection />
        <Products handleSelect={this.handleSelect}/>
     </ScrollView>
      <View style={{alignItems:'flex-end', backgroundColor:'white'}}>
       <Icon 
          raised
          type='ionicon'
          color='red'
          name='ios-call'
          onPress={this.makeCall}
           />
       </View>
     </View>
    )
  }
} 

const styles = StyleSheet.create({
  container: {
      margin: 0,
      padding: 0
  },
  wrapper: {
      padding: 0,
      margin: 0,
      height: Dimensions.get('window') * 0.95
  },
  image: {
    height: 250,
  }
})

export default Home