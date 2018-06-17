import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Text, View, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { CardSection, Input, Button, Spinner } from './common';
import ChartView from 'react-native-highcharts';

class Chart extends Component {
    render() {
        const Highcharts = 'Highcharts';
        const conf = {
            chart: {
                type: 'spline',
                animation: Highcharts.svg, // don't animate in old IE
                marginRight: 10,
                events: {
                    load: function() {
                        // set up the updating of the chart each second
                        var series = this.series[0];
                        setInterval(() => {
                            const x = new Date().getTime(), // current time
                                y = Math.random();
                            series.addPoint([x, y], true, true);
                        }, 1000);
                    }
                }
            },
            title: {
                text: 'Your Shopping Data'
            },
            xAxis: {
                type: 'datetime',
                tickPixelInterval: 100
            },
            yAxis: {
                title: {
                    text: 'Value'
                },
                plotLines: [
                    {
                        value: 10,
                        width: 1,
                        color: '#808080'
                    }
                ]
            },
            tooltip: {
                formatter: function() {
                    return (
                        '<b>' +
                        this.series.name +
                        '</b><br/>' +
                        Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) +
                        '<br/>' +
                        Highcharts.numberFormat(this.y, 2)
                    );
                }
            },
            legend: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            series: [
                {
                    name: 'Purchase',
                    data: [
                        { x: 1, y: 2 },
                        { x: 12, y: 3 },
                        { x: 1, y: 1 },
                        { x: 1, y: 4 }
                    ]
                }
            ]
        };

        const options = {
            global: {
                useUTC: false
            },
            lang: {
                decimalPoint: ',',
                thousandsSep: '.'
            }
        };

        return (
            <ChartView
                style={{ height: 300 }}
                config={conf}
                options={options}
            />
        );
    }
}

Chart.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Chart);
