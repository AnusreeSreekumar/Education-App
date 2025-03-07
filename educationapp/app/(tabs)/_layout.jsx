import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
        headerShown:false
    }}>
        <Tabs.Screen name='home'
        options={{
            tabBarIcon:()=><Ionicons name="home-outline" size={24} color="#0075ff" />,
            tabBarLabel:'Home'
        }}
        />
        <Tabs.Screen name='explore'
        options={{
            tabBarIcon:()=><MaterialIcons name="explore" size={24} color="#0075ff" />,
            tabBarLabel:'Explore'
        }}
        />
        <Tabs.Screen name='progress'
        options={{
            tabBarIcon:()=><Ionicons name="analytics" size={24} color="#0075ff" />,
            tabBarLabel:'Progress'
        }}/>
        <Tabs.Screen name='profile'
        options={{
            tabBarIcon:()=><FontAwesome name="user-circle" size={24} color="#0075ff" />,
            tabBarLabel:'Profile'
        }}
        />
        
    </Tabs>
  )
}