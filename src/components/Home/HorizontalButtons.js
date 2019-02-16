import React from 'react';
import { Button, View, StyleSheet, Dimensions, TouchableOpacity, Text } from 'react-native';

import { Color } from '../../helper/Constants';

const screen = Dimensions.get('screen');
const screenWidth = screen.width;

const HorizontalButtons = (props) => (
    <View>
        <View style={styles.container}>

            <TouchableOpacity onPress={() => props.onPressFirst()} style={styles.touchableContainer}>
                <View style={styles.touchableView}>
                    <Text style={[styles.touchableText, { color: props.isEnquiry ? Color.theme : "black" }]}>Enquiries</Text>
                </View>
            </TouchableOpacity>

            <View style={styles.virticalSeperator} />

            <TouchableOpacity onPress={() => props.onPressSecond()} style={styles.touchableContainer}>
                <View style={styles.touchableView}>
                    <Text style={[styles.touchableText, { color: props.isEnquiry ? "black" : Color.theme }]}>Students</Text>
                </View>
            </TouchableOpacity>

        </View>

        <View style={[styles.horizontalSeperator, { marginLeft: props.isEnquiry ? 0 : screenWidth / 2 }]}>
            <View style={styles.marker} />
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 50,
        alignItems: "center"
    },
    touchableContainer: {
        flex: 1,
    },
    touchableView: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    touchableText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    virticalSeperator: {
        backgroundColor: Color.seperator,
        width: 1,
        height: "80%"
    },
    horizontalSeperator: {
        width: "50%",
        height: 3,
        alignItems: 'center'
    },
    marker: {
        flex: 1,
        width: "60%",
        backgroundColor: Color.theme
    }
});

export default HorizontalButtons;
