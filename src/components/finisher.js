import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableHighlight } from 'react-native';
import { Constants } from 'expo';


export class CancelButton extends Component {
    render() {
        return (
            <TouchableHighlight style={Style.cancelButton}
                        underlayColor="red"
                        onPress={this.props.onPress}>
                <Text style={Style.inputButtonText}>{this.props.value}</Text>
            </TouchableHighlight>
        )
    }
}

export class SubmitButton extends Component {
    render() {
        return (
            <TouchableHighlight style={Style.submitButton}
                        underlayColor="green"
                        onPress={this.props.onPress}>
                <Text style={Style.inputButtonText}>{this.props.value}</Text>
            </TouchableHighlight>
        )
    }
}

export class Finisher extends Component {
    render() {
        return (
            <View style={Style.rootContainer}>
                <View style={Style.inputContainer}>
                    <CancelButton value='cancel' onPress={this._onInputButtonPressed.bind(this, 'cancel')} key='cancel' />
                    <SubmitButton value='submit' onPress={this._onInputButtonPressed.bind(this, 'submit')} key='submit' />
                </View>
            </View>
        );
    }

    _onInputButtonPressed(input) {
        alert(input)
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