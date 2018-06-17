import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { ScrollView, Text, Image, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { RaisedTextButton } from 'react-native-material-buttons';
import MyTextInput from './MyTextInput';

function MyForm(props) {
    return (
        <ScrollView
            style={{ margin: 15 }}
            keyboardShouldPersistTaps={'handled'}
        >
            <Text>Item</Text>
            <Field name={'item'} component={MyTextInput} placeholder={'item'} />
            <Text>Brand</Text>
            <Field
                name={'brand'}
                component={MyTextInput}
                placeholder={'brand'}
            />
            <Text>Price</Text>
            <Field name={'price'} component={MyTextInput} placeholder={'gbp'} />
            <Text>Times it was used</Text>
            <Field
                name={'times'}
                component={MyTextInput}
                placeholder={'times'}
            />

            <RaisedTextButton
                title="download image"
                onPress={() => {
                    Actions.images();
                }}
            />

            <TouchableHighlight
                onPress={() => {
                    Actions.images();
                }}
            >
                <Image
                    style={{ width: 150, height: 150 }}
                    source={{ uri: props.imgThumb }}
                />
            </TouchableHighlight>

            <RaisedTextButton title="submit" onPress={props.handleSubmit} />
        </ScrollView>
    );
}

export default reduxForm({
    form: 'signIn'
})(MyForm);
