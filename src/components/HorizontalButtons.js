import React, { Component } from 'react';
import { Button, View, StyleSheet } from 'react-native';

const HorizontalButtons = (props) => (
    <View>
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <Button
                    title="First"
                    // color="black"
                    onPress={() => props.onPressFirst()}
                />
            </View>
            <View style={styles.virticalSeperator} />
            <View style={styles.buttonContainer}>
                <Button
                    title="Second"
                    // color="black"
                    onPress={() => props.onPressSecond()} />
            </View>
        </View>
        <View style={styles.horizontalSeperator}>
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 50,
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    virticalSeperator: {
        backgroundColor: "#60D1A0",
        width: 1,
        height: "100%"
    },
    horizontalSeperator: {
        backgroundColor: "#60D1A0",
        width: "50%",
        height: 3
    }
});

export default HorizontalButtons;
