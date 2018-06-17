import React from 'react';
import { Scene, Router, Stack, Actions } from 'react-native-router-flux';
import Form from './components/Form';
import FormEdit from './components/FormEdit';
import ImageFull from './components/ImageFull';
import ItemsList from './components/ItemsList';
import ChooseImg from './components/ChooseImg';
import Login from './components/Login';
import WelcomePage from './components/WelcomePage';
import Singup from './components/Singup';
import Chart from './components/Chart';
import AddImage from './components/AddImage';

const RouterComponent = () => (
    <Router>
        <Scene key="root" hideNavBar>
            <Stack key="auth">
                <Scene
                    key="welcome"
                    component={WelcomePage}
                    title="Please login or singup"
                    initial
                />
                <Scene key="login" component={Login} title="Please login" />
                <Scene key="singup" component={Singup} title="Please singup" />
            </Stack>

            <Stack key="main">
                <Scene
                    key="itemsList"
                    component={ItemsList}
                    title="Items"
                    rightTitle="Add"
                    leftTitle="Chart"
                    initial
                    onRight={() => {
                        Actions.form();
                    }}
                    onLeft={() => {
                        Actions.chart();
                    }}
                />

                <Scene key="form" component={Form} title="Create New Item" />
                <Scene key="formEdit" component={FormEdit} title="Edit Item" />
                <Scene
                    key="images"
                    component={ChooseImg}
                    title="Photo Gallery"
                />
                <Scene key="fullImage" component={ImageFull} title="Image" />
                <Scene key="chart" component={Chart} title="Data" />
                <Scene key="addImage" component={AddImage} title="Add Image" />
            </Stack>
        </Scene>
    </Router>
);
export default RouterComponent;
