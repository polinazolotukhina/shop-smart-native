import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { Actions } from 'react-native-router-flux';
import { RaisedTextButton } from 'react-native-material-buttons';
import * as actions from './../actions';

class ImageFull extends Component {
    onBtnPress(img) {
        this.props.actions.confirmImg(img);

        Actions.pop();
        Actions.pop();
    }
    render() {
        const { img } = this.props;
        const { containerStyle, imgStyle, text } = styles;
        return (
            img && (
                <View style={containerStyle}>
                    <Image style={imgStyle} source={{ uri: img.img }} />
                    <RaisedTextButton
                        title="Click me"
                        style={text}
                        onPress={() => this.onBtnPress(img.img)}
                    />
                </View>
            )
        );
    }
}
const styles = {
    containerStyle: {
        flexDirection: 'column',
        flex: 1
    },
    imgStyle: {
        width: null,
        height: 200,
        flex: 15
    },
    text: {
        flex: 1
    }
};

ImageFull.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(ImageFull);
