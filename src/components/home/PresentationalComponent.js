import React, { Component } from 'react';
import { Text, View, StyleSheet,ScrollView,TextInput } from 'react-native';

const PresentationalComponent = (props) => {

    return (
        <ScrollView>
            <View style = {styles.container1}>
                <View style={styles.myLogo}/>
                <View style={{padding: 10}}/>
            </View>
            <TextInput
                style={styles.myName}
                placeholder="Who is the tracker for? (e.g. myself)"
                onChangeText={props.myName}
            />
        </ScrollView>
    )
}

export default PresentationalComponent

const styles = StyleSheet.create ({
    container1: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#f4c842'
    },
    myState: {
        marginTop: 20,
        textAlign: 'center',
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 20
    },
    myLogo: {
        width: 50,
        height: 50,
        backgroundColor: 'powderblue'
    },
    myName: {
        height: 80
    }
})