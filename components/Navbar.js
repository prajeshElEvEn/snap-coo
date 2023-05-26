import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const { height, width } = Dimensions.get('window')

const Navbar = ({ back, header }) => {
    const nav = useNavigation()

    return (
        <View style={styles.navbar}>
            <View style={styles.navLeft}>
                <TouchableOpacity
                    style={styles.btnContainer}
                    onPress={() => nav.navigate(`${back}`)}
                >
                    <Ionicons name="arrow-back" size={24} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.headerText}>
                    {header}
                </Text>
            </View>
            <View style={styles.navRight}>
                <TouchableOpacity
                    style={styles.btnContainer}
                    onPress={() => nav.navigate('Setting')}
                >
                    <Ionicons name="ios-settings-sharp" size={24} color="#fff" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Navbar

const styles = StyleSheet.create({
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: width - 20,
        // paddingHorizontal: 20,
        // paddingVertical: 10,
        backgroundColor: '#161B22',
        margin: 10,
        borderRadius: 50,
    },
    navLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    navRight: {},
    btnContainer: {
        padding: 10,
    },
    headerText: {
        color: '#fff',
        fontSize: 18,
    },
})
