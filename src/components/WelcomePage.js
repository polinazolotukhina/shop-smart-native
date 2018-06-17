import React, { Component } from 'react';
import { TextInput, Text, View, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Input, Button, Spinner } from './common';

class WelcomePage extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 8 }}>
                    <CardSection style={{ flex: 1 }}>
                        <View style={styles.placeholderContainer}>
                            <Text>placeholder</Text>
                        </View>
                    </CardSection>
                </View>
                <View style={{ flex: 1 }}>
                    <CardSection>
                        <Button
                            style={styles.buttonStyle}
                            onPress={Actions.login}
                        >
                            Login
                        </Button>
                    </CardSection>
                </View>
                <View style={{ flex: 1 }}>
                    <CardSection>
                        <Button style={styles.buttonStyle}>
                            Login with facebook
                        </Button>
                    </CardSection>
                </View>
                <View style={{ flex: 1 }}>
                    <CardSection>
                        <Button
                            style={styles.buttonStyle}
                            onPress={Actions.singup}
                        >
                            Singup
                        </Button>
                    </CardSection>
                </View>
            </View>
        );
    }
}

const styles = {
    placeholderContainer: {
        alignSelf: 'stretch',
        backgroundColor: '#007aff',
        flex: 1
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    }
};
export default WelcomePage;
