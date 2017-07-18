/**
 * Created by stephanierandolph on 7/18/17.
 */
import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

class List extends Component {

    state = {
        names: [
            {
                id: 0,
                name: 'Medications',
            },
            {
                id: 1,
                name: 'Immunizations',
            },
            {
                id: 2,
                name: 'Notes',
            },
        ]
    }

    alertItemName = (item) => {
        let msg = 'Creating new: ' + item.name;
        alert(msg)
    }

    render() {
        return (
            <View>
                {
                    this.state.names.map((item, index) => (
                        <TouchableOpacity
                            key = {item.id}
                            style = {styles.container}
                            onPress = {() => this.alertItemName(item)}
                        >
                            <Text style={styles.text}>
                                {item.name}
                            </Text>
                        </TouchableOpacity>
                    ))
                }
            </View>
        )
    }
}

export default List

const styles = StyleSheet.create ({
    container: {
        padding: 10,
        marginTop: 3,
        backgroundColor: '#81c6f9',
        alignItems: 'center',
    },
    text: {
        color: '#4f603c'
    }
})