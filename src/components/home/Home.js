import React, { Component }from 'react';
import { View, ScrollView} from 'react-native';
import List from './List.js';
import PresentationalComponent from './PresentationalComponent.js';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    render() {
        return (
            <View>
                <PresentationalComponent/>
                <List />
            </View>
            )
        }
    }


export default Home