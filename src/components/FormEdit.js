import React from 'react';
import { connect } from 'react-redux';
import { Text, View, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import { Actions } from 'react-native-router-flux';
import * as actions from './../actions';
import { Card, CardSection, Input, Button } from './common';

class FormEdit extends React.Component {
    componentWillMount() {
        console.log('this is what i recieve', this.props.item);
        _.each(this.props.item, (value, prop) => {
            this.props.actions.onTypeItems({ prop, value });
        });
    }
    onBtnPressEdit() {
        const { purchase, brand, price, timesOut } = this.props;
        this.props.actions.editItem(
            {
                purchase,
                brand,
                price,
                timesOut
            },
            this.props.item.uid
        );
    }
    onBtnPressDelete() {
        this.props.actions.deleteItem(this.props.item.uid);
        Actions.pop();
    }
    render() {
        return (
            <View>
                <Card>
                    <CardSection>
                        <Input
                            label="purchase"
                            placeholder="Skirt/Top/Shoes/..."
                            onChangeText={text => {
                                this.props.actions.onTypeItems({
                                    prop: 'purchase',
                                    value: text
                                });
                            }}
                            value={this.props.purchase}
                            autoCorrect
                        />
                    </CardSection>
                    <CardSection>
                        <Input
                            label="Brand"
                            placeholder="Brand"
                            onChangeText={text => {
                                this.props.actions.onTypeItems({
                                    prop: 'brand',
                                    value: text
                                });
                            }}
                            value={this.props.brand}
                        />
                    </CardSection>
                    <CardSection>
                        <Input
                            label="Price"
                            placeholder="$"
                            onChangeText={text => {
                                this.props.actions.onTypeItems({
                                    prop: 'price',
                                    value: text
                                });
                            }}
                            value={this.props.price}
                        />
                    </CardSection>
                    <CardSection>
                        <Input
                            label="Times Out"
                            placeholder="0"
                            onChangeText={text => {
                                this.props.actions.onTypeItems({
                                    prop: 'timesOut',
                                    value: text
                                });
                            }}
                            value={this.props.timesOut}
                        />
                    </CardSection>
                </Card>
                <Card>
                    <CardSection>
                        <Button
                            onPress={() => {
                                this.onBtnPressEdit();
                            }}
                        >
                            Save
                        </Button>
                    </CardSection>
                </Card>
                <Card>
                    <CardSection>
                        <Button
                            onPress={() => {
                                this.onBtnPressDelete();
                            }}
                        >
                            Delete
                        </Button>
                    </CardSection>
                </Card>
            </View>
        );
    }
}

const mapStateToProps = state => {
    const { purchase, brand, price, timesOut } = state.itemsForm;
    return { purchase, brand, price, timesOut };
};

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(FormEdit);
