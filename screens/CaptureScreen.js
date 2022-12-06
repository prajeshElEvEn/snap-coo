import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { MaterialIcons } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'

const { height, width } = Dimensions.get('window')

const CaptureScreen = () => {

    const nav = useNavigation()

    useLayoutEffect(() => {
        nav.setOptions({
            headerShown: false,
        })
    }, [nav])

    return (
        <View style={styles.container}>
            <View style={styles.cameraContainer}></View>
            <View style={styles.cameraButtons}>
                <TouchableOpacity style={styles.btnContainer}>
                    <Ionicons name="camera-reverse" size={28} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnContainer}>
                    <Ionicons name="camera" size={28} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnContainer}>
                    <MaterialIcons name="photo-library" size={28} color="#fff" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0D1117',
        height: height,
        width: width,
    },
    cameraContainer: {
        height: height * 0.8,
        width: width,
        backgroundColor: '#D9D9D9',
    },
    cameraButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: width * 0.8,
        height: height * 0.2,
    },
    btnContainer: {
        backgroundColor: '#0047FF',
        padding: 10,
        borderRadius: 50,
    },
})

export default CaptureScreen
