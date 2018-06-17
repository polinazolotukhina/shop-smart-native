import React from 'react';
import { connect } from 'react-redux';
import { View, ScrollView } from 'react-native';
import { bindActionCreators } from 'redux';
import { Actions } from 'react-native-router-flux';
import * as actions from './../actions';
import { Card, CardSection, Input, Button } from './common';
import AddImage from './AddImage';

class Form extends React.Component {
    onBtnPress() {
        const { purchase, brand, price, timesOut } = this.props.itemsForm;
        this.props.actions.submitItem({ purchase, brand, price, timesOut });
    }
    render() {
        return (
            <ScrollView>
                <Card>
                    <CardSection>
                        <Input
                            label="Purchase"
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
                        <AddImage />
                    </CardSection>
                </Card>
                <Card>
                    <CardSection>
                        <Button
                            onPress={() => {
                                this.onBtnPress();
                            }}
                        >
                            Submit
                        </Button>
                    </CardSection>
                </Card>
            </ScrollView>
        );
    }
}

function mapStateToProps(state) {
    const { itemsForm } = state;
    return {
        itemsForm
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
