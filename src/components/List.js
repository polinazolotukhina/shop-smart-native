import React, { Component } from 'react';
import { ScrollView, Text, Image, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { Actions } from 'react-native-router-flux';
import * as actions from './../actions';
import { Card } from './common';

class List extends Component {
    onImgPress(uri) {
        this.props.actions.viewImg(uri);
        Actions.fullImage();
    }
    render() {
        const { header, uri } = this.props;
        return (
            <ScrollView contentContainerStyle={styles.containerStyle}>
                <Text>{header}</Text>
                {uri.map((l, i) => (
                    <Card key={i}>
                        <TouchableHighlight
                            onPress={() => {
                                this.onImgPress(l.node.image.uri);
                            }}
                        >
                            <Image
                                style={{ width: 150, height: 150 }}
                                source={{
                                    uri: l.node.image.uri
                                }}
                            />
                        </TouchableHighlight>
                    </Card>
                ))}
            </ScrollView>
        );
    }
}
const styles = {
    containerStyle: {
        justifyContent: 'center',
        alignItems: 'center'
    }
};
List.propTypes = {
    actions: PropTypes.object.isRequired,
    img: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    const { img } = state;
    return {
        img
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
