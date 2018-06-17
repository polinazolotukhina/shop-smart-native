import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { TextInput, Text, View, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { CardSection, Input, Button, Spinner } from './common';

class Singup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            passwordRepeat: '',
            secureTextEntry: true,
            secureTextEntryRepeat: true,
            ShowPassword: 'Show',
            ShowPasswordRepeat: 'Show',
            passwordAreNotSameMessage: ''
        };
    }

    emailSingup(email, password, passwordRepeat) {
        if (password === passwordRepeat) {
            this.props.actions.singUpWithEmail(email, password);
        } else {
            this.setState({
                passwordAreNotSameMessage: ' Password are not the same'
            });
        }
    }

    render() {
        return (
            <View style={{ padding: 10 }}>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="user@email.com"
                        onChangeText={email => this.setState({ email })}
                        value={this.state.email}
                        autoCorrect={false}
                    />
                </CardSection>
                <View style={{ position: 'relative' }}>
                    <CardSection>
                        <Input
                            label="Password"
                            placeholder="Password"
                            onChangeText={password =>
                                this.setState({ password })
                            }
                            value={this.state.password}
                            autoCorrect={false}
                            secureTextEntry={this.state.secureTextEntry}
                        />
                    </CardSection>

                    <TouchableHighlight
                        style={styles.containerShowPassword}
                        onPress={() => {
                            this.setState({
                                secureTextEntry: !this.state.secureTextEntry,
                                ShowPassword:
                                    this.state.ShowPassword === 'Show'
                                        ? 'Hide'
                                        : 'Show'
                            });
                        }}
                    >
                        <View>
                            <Text style={styles.hidePasswordText}>
                                {this.state.ShowPassword}{' '}
                            </Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <View style={{ position: 'relative' }}>
                    <CardSection>
                        <Input
                            label="Repeat Password"
                            placeholder="Repeat Password"
                            onChangeText={passwordRepeat =>
                                this.setState({
                                    passwordRepeat,
                                    passwordAreNotSameMessage: ''
                                })
                            }
                            value={this.state.passwordRepeat}
                            autoCorrect={false}
                            secureTextEntry={this.state.secureTextEntryRepeat}
                        />
                    </CardSection>
                    <TouchableHighlight
                        style={styles.containerShowPassword}
                        onPress={() => {
                            this.setState({
                                secureTextEntryRepeat: !this.state
                                    .secureTextEntryRepeat,
                                ShowPasswordRepeat:
                                    this.state.ShowPasswordRepeat === 'Show'
                                        ? 'Hide'
                                        : 'Show'
                            });
                        }}
                    >
                        <View>
                            <Text style={styles.hidePasswordText}>
                                {this.state.ShowPasswordRepeat}{' '}
                            </Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <Text>{this.props.auth.error}</Text>
                <Text>{this.state.passwordAreNotSameMessage}</Text>
                <CardSection>
                    {this.props.auth.loading === true ? (
                        <Spinner />
                    ) : (
                        <Button
                            onPress={() => {
                                this.emailSingup(
                                    this.state.email,
                                    this.state.password,
                                    this.state.passwordRepeat
                                );
                            }}
                        >
                            Singup
                        </Button>
                    )}
                </CardSection>
            </View>
        );
    }
}

const styles = {
    containerShowPassword: {
        position: 'absolute',
        right: 10,
        top: 10
    },
    hidePasswordText: {
        textDecorationLine: 'underline',
        fontSize: 12,
        color: 'gray'
    }
};

Singup.propTypes = {
    auth: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    const { auth } = state;
    return {
        auth
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Singup);
