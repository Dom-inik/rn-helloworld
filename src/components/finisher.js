import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { Constants } from 'expo';


export class CancelButton extends Component {
    render() {
        return (
            <View style={Style.cancelButton}>
                <Text style={Style.inputButtonText}>{this.props.value}</Text>
            </View>
        )
    }
}

export class SubmitButton extends Component {
    render() {
        return (
            <View style={Style.submitButton}>
                <Text style={Style.inputButtonText}>{this.props.value}</Text>
            </View>
        )
    }
}

export class Finisher extends Component {
    render() {
        return (
            <View style={Style.rootContainer}>
                <View style={Style.inputContainer}>
                    <CancelButton value='cancel' key='cancel' />
                    <SubmitButton value='submit' key='submit' />
                </View>
            </View>
        );
    }
}

var Style = StyleSheet.create({
    rootContainer: {
        flex: 2
    },

    inputContainer: {
        flex: 1,
        flexDirection: 'row',
    },

    cancelButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'tomato'
    },

    submitButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'yellowgreen'
    },

    inputButtonText: {
        fontSize: 20,
        color: 'white'
    },
});