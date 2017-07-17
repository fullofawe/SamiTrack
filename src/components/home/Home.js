import React, { Component } from 'react';
import { Alert, AppRegistry, Platform, StyleSheet, Text,TextInput, FlatList, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View, ScrollView, Image, } from 'react-native';


class Home extends Component {
    constructor(props){
        super(props);
        this.state = {text: ''};
    }
    _onPressButton() {

        Alert.alert("You tapped a button")
    };

    _onLongPressButton() {
        Alert.alert('You long-pressed a button')
    }
    render() {
        return (
            <ScrollView>
                <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                <View style={{width: 75, height: 75, backgroundColor: 'steelblue'}} />
                <View style={{padding: 10}}>
                    <TextInput
                        style={{height: 80}}
                        placeholder="Who are you creating a Tracker for?"
                        onChangeText={(text) => this.setState({text})}
                    />
                </View>
                <FlatList
                    data={[
                            {key: 'Med Tracker'},
                            {key: 'Immunization Tracker'},
                            {key: 'Note Tracker'},
                            {key: 'Allergy Tracker'},
                            {key: 'Symptom Tracker'},
                        ]}
                     renderItem={({item}) =>   <TouchableOpacity onPress={this._onPressButton}>
                         <View style={styles.button}>
                             <Text style={styles.buttonText}>Create {item.key}</Text>
                         </View>
                     </TouchableOpacity>}
                />
            </ScrollView>
        );
    }
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    button: {
        marginBottom: 30,
        width: 250,
        alignItems: 'center',
        backgroundColor: '#2196F3'
    },
    buttonText: {
        padding: 20,
        color: 'white'
    }
})