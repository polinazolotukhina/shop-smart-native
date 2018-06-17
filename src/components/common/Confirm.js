import React from 'react';
import { Modal, Text, TouchableHighlight, View } from 'react-native';
import { CardSection } from './CardSection';
import { Button } from './Button';

const Confirm = ({ children, visible, onAccept, onDecline }) => {
    const { contaierStyle, textStyle, cardSectionStyle } = styles;
    return (
        <Modal
            animationType="slide"
            transparent
            visible={visible}
            onRequestClose={() => {}}
        >
            <View style={contaierStyle}>
                <CardSection style={cardSectionStyle}>
                    <Text style={textStyle}>{children}</Text>
                </CardSection>
                <CardSection>
                    <Button onPress={onAccept}>Yes</Button>
                    <Button onPress={onDecline}>No</Button>
                </CardSection>
            </View>
        </Modal>
    );
};

const styles = {
    cardSectionStyle: {
        justifyContent: 'center'
    },
    textStyle: {
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 40
    },
    contaierStyle: {
        backgroundColor: 'rgba(0, 0, 0,  0.75)',
        position: 'relative',
        flex: 1,
        justifyContent: 'center'
    }
};

export { Confirm };
