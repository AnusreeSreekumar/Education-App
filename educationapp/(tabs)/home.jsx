import { View, Text, Platform } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import Colors from './../../constant/Colors'
import HomeScreeen from '../../components/Home'


export default function Home() {
  return (
    <View style={{
        padding:25,
        paddingTop:Platform.OS=='ios'&&45,
        flex:1,
        backgroundColor:Colors.WHITE
    }}>
      <Header/>
      <HomeScreeen/>
    </View>
  )
}