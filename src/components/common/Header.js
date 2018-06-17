import React, { Component } from 'react';
import { Text, View } from 'react-native';

const Header = ( props )=> {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle} > {props.headerText} </Text>
        </View>
        )
};

const styles = {
    textStyle: {
        fontSize: 20
    },
    viewStyle: {
        backgroundColor: '#f8f8f8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowOffset: {  width: 0,  height: 2 },
        shadowColor: 'black',
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'

    }
};

export { Header };
