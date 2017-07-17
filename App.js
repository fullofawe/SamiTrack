import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import Home from './src/components/home/Home.js'

class samiTrakApp extends Component {
    render() {
        return (
            <View>
                <Home/>
            </View>
        );
    }
}

export default samiTrakApp;

//AppRegistry.registerComponent('SamiTrack', () => samiTrakApp);