import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View, TextInput, Text } from 'react-native';


class Home extends Component {
    _onPressButton() {
        Alert.alert('You tapped the button!')
    }
    render() {
        return (
            <View>
                <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                <View style={{width: 75, height: 75, backgroundColor: 'skyblue'}} />
                <View style={{width: 100, height: 100, backgroundColor: 'steelblue'}}/>
                <View style = {styles.buttonContainer}>
                    <Button
                            onPress={this._onPressButton}
                            title="Press Me"
                    />
                    <Button
                        onPress={this._onPressButton}
                        title="Press Me"
                        color="#841584"
                    />
                </View>
            </View>
        );
    }
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    buttonContainer: {
        margin: 30,
    },
    alternativeLayoutButtonContainer: {
        margin: 20,
        width: 200,
        height: 200,
    }
})