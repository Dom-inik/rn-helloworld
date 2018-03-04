import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableHighlight } from 'react-native';
import { Constants } from 'expo';

// Define the input buttons that will be displayed in the calculator.
const inputButtons = [
    [1, 2, 3, '/'],
    [4, 5, 6, '*'],
    [7, 8, 9, '-'],
    [0, ',', '00', '%']
];

export class InputButton extends Component {
    render() {
        return (
            <TouchableHighlight style={Style.inputButton}
                        underlayColor="#193441"
                        onPress={this.props.onPress}>
                <Text style={Style.inputButtonText}>{this.props.value}</Text>
            </TouchableHighlight>
        )
    }

}

export class Calculator extends Component {
    render() {
        return (
            <View style={Style.rootContainer}>
                <View style={Style.displayContainer}></View>
                <View style={Style.inputContainer}>{this._renderInputButtons()}</View>
            </View>
        );
    }
    /**
    * For each row in `inputButtons`, create a row View and add create an InputButton for each input in the row.
    */
    _renderInputButtons() {
        let views = [];

        for (var r = 0; r < inputButtons.length; r++) {
            let row = inputButtons[r];

            let inputRow = [];
            for (var i = 0; i < row.length; i++) {
                let input = row[i];

                inputRow.push(
                    <InputButton value={input} onPress={this._onInputButtonPressed.bind(this, input)} key={r + "-" + i}/>
                );
            }

            views.push(<View style={Style.inputRow} key={"row-" + r}>{inputRow}</View>)
        }

        return views;
    }

    _onInputButtonPressed(input) {
        alert(input)
    }
}

var Style = StyleSheet.create({
    rootContainer: {
        flex: 10
    },

    displayContainer: {
        flex: 2,
        backgroundColor: '#193441'
    },

    inputContainer: {
        flex: 8,
        backgroundColor: '#3E606F'
    },

    inputButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderColor: '#91AA9D'
    },

    inputButtonText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white'
    },

    inputRow: {
        flex: 1,
        flexDirection: 'row'
    }
});