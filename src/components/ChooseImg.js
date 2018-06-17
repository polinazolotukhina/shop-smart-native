import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { View, ScrollView, CameraRoll } from 'react-native';
import * as actions from './../actions';
import List from './List';

class ChooseImg extends Component {
    state = {
        photoArray: []
    };
    componentWillMount() {
        this.getPhotosFromGallery();
    }

    getPhotosFromGallery() {
        CameraRoll.getPhotos({ first: 1000000 }).then(res => {
            this.setState({
                photoArray: res.edges
            });
        });
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                {this.state.photoArray.length > 0 && (
                    <List uri={this.state.photoArray} header={'Pick a photo'} />
                )}
            </View>
        );
    }
}
const styles = {
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
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
};
ChooseImg.propTypes = {
    actions: PropTypes.object.isRequired,
    movies: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    const { movies } = state;
    return {
        movies
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChooseImg);
