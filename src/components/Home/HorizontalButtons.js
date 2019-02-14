import React from 'react';
import { Button, View, StyleSheet, Dimensions } from 'react-native';

const screen = Dimensions.get('screen');
const screenWidth = screen.width;

const HorizontalButtons = (props) => (
    <View>
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <Button
                    title="Enquiries"
                    color= {props.isEnquiry ? "#60D1A0" : "black"}
                    onPress={() => props.onPressFirst()}
                />
            </View>
            <View style={styles.virticalSeperator} />
            <View style={styles.buttonContainer}>
                <Button
                    title="Students"
                    color={props.isEnquiry ? "black" : "#60D1A0"}
                    onPress={() => props.onPressSecond()} />
            </View>
        </View>
        <View style={[styles.horizontalSeperator, {marginLeft: props.isEnquiry ? 0 : screenWidth / 2}]}>
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
    buttonContainer: {
        flex: 1,
    },
    virticalSeperator: {
        backgroundColor: "#EBEBEB",
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
        backgroundColor: "#60D1A0"
    }
});

export default HorizontalButtons;
