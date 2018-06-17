import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Text, View, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { CardSection, Input, Button, Spinner } from './common';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            secureTextEntry: true,
            passwordMessage: 'Show'
        };
    }
    emailLogin(email, password) {
        this.props.actions.emailLogin(email, password);
    }
    emailSingup(email, password) {
        this.props.actions.singUpWithEmail(email, password);
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
                                passwordMessage:
                                    this.state.passwordMessage === 'Show'
                                        ? 'Hide'
                                        : 'Show'
                            });
                        }}
                    >
                        <View>
                            <Text style={styles.hidePasswordText}>
                                {this.state.passwordMessage}{' '}
                            </Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <Text>{this.props.auth.error}</Text>
                <CardSection>
                    {this.props.auth.loading === true ? (
                        <Spinner />
                    ) : (
                        <Button
                            onPress={() => {
                                this.emailLogin(
                                    this.state.email,
                                    this.state.password
                                );
                            }}
                        >
                            Login
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

Login.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);
