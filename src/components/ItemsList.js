import React, { Component } from 'react';
import {
    View,
    Text,
    FlatList,
    ScrollView,
    TouchableHighlight
} from 'react-native';
import { bindActionCreators } from 'redux';
import { Actions } from 'react-native-router-flux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { connect } from 'react-redux';
import Swipeout from 'react-native-swipeout';
import * as actions from '../actions';
import { CardSection, Input, Button, Spinner } from './common';

class ItemsList extends Component {
    componentWillMount() {
        this.props.actions.itemsFetch();
    }

    render() {
        const { items } = this.props;
        return (
            <View style={styles.containerStyle}>
                <ScrollView>
                    <CardSection style={styles.itemRow}>
                        <Text>Purchase</Text>
                        <Text>Brand</Text>
                        <Text>Price</Text>
                        <Text>TimesOut</Text>
                    </CardSection>

                    <FlatList
                        data={items}
                        renderItem={({ item }) => (
                            <View>
                                <Swipeout
                                    right={[
                                        {
                                            text: 'Delete',
                                            backgroundColor: '#007aff',
                                            onPress: () => {
                                                this.props.actions.deleteItem(
                                                    item.uid
                                                );
                                            }
                                        }
                                    ]}
                                >
                                    <TouchableHighlight
                                        onPress={() => {
                                            Actions.formEdit({ item });
                                        }}
                                    >
                                        <View>
                                            <CardSection style={styles.itemRow}>
                                                <Text>{item.purchase}</Text>
                                                <Text>{item.brand}</Text>
                                                <Text>{item.price}</Text>
                                                <Text>{item.timesOut}</Text>
                                            </CardSection>
                                        </View>
                                    </TouchableHighlight>
                                </Swipeout>
                            </View>
                        )}
                    />
                </ScrollView>
            </View>
        );
    }
}
const styles = {
    itemRow: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    buttonStyle: {
        fontSize: 20
    },
    textStyle: {
        padding: 15,
        width: 300,
        height: 60
    },
    containerStyle: {
        flex: 1,
        flexDirection: 'column'
    }
};

const mapStateToProps = state => {
    const items = _.map(state.items, (val, uid) => {
        return { ...val, uid };
        //to add ID to onject with user information and turn it to ARR
    });
    return { items };
};

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);
