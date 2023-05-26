import { View, Text, Dimensions, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import Navbar from '../components/Navbar'

const { height, width } = Dimensions.get('window')

const GalleryScreen = () => {
    const nav = useNavigation()
    useLayoutEffect(() => {
        nav.setOptions({
            headerShown: false,
        })
    }, [nav])
    return (
        <View style={styles.container}>
            <Navbar
                back={"Capture"}
                header={"Gallery"}
            />
            <ScrollView style={styles.gallery}>
                <View style={styles.galleryBox}>
                    <View style={styles.dateBox}>
                        <Text style={styles.dateText}>Today</Text>
                    </View>
                    <View style={styles.imageBox}>
                        <View style={styles.imageContainer}></View>
                        <View style={styles.imageContainer}></View>
                        <View style={styles.imageContainer}></View>
                        <View style={styles.imageContainer}></View>
                        <View style={styles.imageContainer}></View>
                        <View style={styles.imageContainer}></View>
                    </View>
                </View>
                <View style={styles.galleryBox}>
                    <View style={styles.dateBox}>
                        <Text style={styles.dateText}>Yesterday</Text>
                    </View>
                    <View style={styles.imageBox}>
                        <View style={styles.imageContainer}></View>
                        <View style={styles.imageContainer}></View>
                        <View style={styles.imageContainer}></View>
                        {/* <View style={styles.imageContainer}></View> */}
                        {/* <View style={styles.imageContainer}></View> */}
                    </View>
                </View>
                <View style={styles.galleryBox}>
                    <View style={styles.dateBox}>
                        <Text style={styles.dateText}>12/12/2012</Text>
                    </View>
                    <View style={styles.imageBox}>
                        <View style={styles.imageContainer}></View>
                        <View style={styles.imageContainer}></View>
                        <View style={styles.imageContainer}></View>
                        <View style={styles.imageContainer}></View>
                        {/* <View style={styles.imageContainer}></View> */}
                    </View>
                </View>
            </ScrollView>
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
        // paddingHorizontal: 20,
    },
    gallery: {
        // backgroundColor: '#161B22',
        width: width,
        // height: height,
    },
    galleryBox: {
        // backgroundColor: '#161B22',
        marginBottom: 10,
        marginHorizontal: 10,
        borderRadius: 20,
    },
    dateBox: {
        backgroundColor: '#161B22',
        paddingHorizontal: 28,
        paddingVertical: 10,
        borderRadius: 20,
        marginBottom: 10,
        marginTop: 20,
    },
    dateText: {
        color: '#fff',
        fontSize: 14,
    },
    imageBox: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        // padding: 10,
    },
    imageContainer: {
        width: width * 0.3,
        height: width * 0.3,
        backgroundColor: '#D9D9D9',
        borderRadius: 20,
        marginBottom: 10,
    },
})

export default GalleryScreen
