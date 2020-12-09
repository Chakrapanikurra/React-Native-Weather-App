import React from 'react'
import { View, Text, Platforms, Platform, StyleSheet } from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import {colors} from '../utils/index'

export default function Reloadicon({load}) {
    const reloadIconName = Platform.OS === 'ios' ? 'ios-refresh' : 'md-refresh'
    return (
        <View style = {styles.reloadIcon}>
            <Ionicons onPress={load} name= {reloadIconName} size={24} color={colors.SEOCONDARY_COLOR} />
        </View>
    )
}


const styles = StyleSheet.create({
    reloadIcon: {
        position: 'absolute',
        top: 100,
        right: 20
    }
})