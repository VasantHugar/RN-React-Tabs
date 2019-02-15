import React from "react";
import { View, Text, StyleSheet} from "react-native";


const circularLabel = props => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{props.text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginRight: 8,
        height: 20,
        width: 20,
        borderRadius: 10,
        backgroundColor: "#60D1A0",
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 12,
        fontWeight: 'bold',
        color: "white",
    },
});

export default circularLabel;
