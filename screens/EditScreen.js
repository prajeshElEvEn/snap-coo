import { View, Text, StyleSheet, Dimensions, Image, TextInput, KeyboardAvoidingView, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import Navbar from '../components/Navbar'
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const { height, width } = Dimensions.get('window')

const EditScreen = () => {
    const nav = useNavigation()
    useLayoutEffect(() => {
        nav.setOptions({
            headerShown: false,
        })
    }, [nav])

    return (
        <ScrollView style={styles.container}>
            <Navbar
                back={"Capture"}
                header={"Edit"}
            />
            <KeyboardAvoidingView style={styles.imageBox}>
                <View style={styles.imageContainer}>
                    <Image source={require('../assets/images/image.jpg')} style={styles.image} />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Write a caption..."
                        placeholderTextColor="#b1cbef"
                    />
                    <View style={styles.imageData}>
                        <View style={styles.dateTextBox}>
                            <Ionicons name="ios-locate" size={18} color="#fff" />
                            <Text style={styles.dateText}>
                                23.6778, 90.35
                            </Text>
                        </View>
                        <View style={styles.dateBox}>
                            <View style={styles.dateTextBox}>
                                <Feather name="calendar" size={18} color="#fff" />
                                <Text style={styles.dateText}>
                                    12/12/2012
                                </Text>
                            </View>
                            <View style={styles.dateTextBox}>
                                <AntDesign name="clockcircleo" size={18} color="#fff" />
                                <Text style={styles.dateText}>12:00 PM</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#0D1117',
        height: height,
        width: width,
        // paddingHorizontal: 20,
    },
    dateBox: {

        // marginBottom: 10,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    dateText: {
        color: '#fff',
        fontSize: 14,
        marginLeft: 5,
    },
    dateTextBox: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    imageBox: {
        width: width,
        // flexDirection: 'row',
        // flexWrap: 'wrap',
        // justifyContent: 'space-between',
        paddingHorizontal: 10,
        // backgroundColor: '#161B22',
    },
    imageContainer: {
        width: '100%',
        // height: height * 0.8,
        // backgroundColor: '#D9D9D9',
        borderRadius: 20,
        flexDirection: 'column',
        justifyContent: 'space-between',
        // marginBottom: 10,
        height: height * 0.8,
    },
    image: {
        width: '100%',
        height: '80%',
        borderRadius: 20,
        // marginBottom: 20,
    },
    imageData: {
        // height: '18%',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#161B22',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
    },
    textInput: {
        color: '#fff',
        fontSize: 18,
        paddingHorizontal: 20,
        // paddingVertical: 10,
        // marginVertical: 20,
    },

})

export default EditScreen
