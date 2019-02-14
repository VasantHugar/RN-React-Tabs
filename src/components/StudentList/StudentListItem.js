import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const studentListItem = (props) => (
    <TouchableOpacity onPress={props.onItemPressed}>

        <View style={styles.listItem}>
            <Image
                resizeMode="contain"
                source={require('../StudentList/Assets/place_holder_icon.png')}
                style={styles.image} />
            <View style={{ flex: 1 }}>
                <Text style={styles.nameText}>{props.name}</Text>
                <Text style={styles.otherText}>{props.name}</Text>
                <Text style={styles.otherText}>{props.name}</Text>
                <Text style={styles.otherText}>{props.name}</Text>
                <Text style={styles.otherText}>{props.name}</Text>
            </View>
            <View style={{ width: 40 }}>

                <Image
                    resizeMode="contain"
                    source={require('../StudentList/Assets/star_selected_icon.png')}
                    style={styles.buttonImage} />

                <Image
                    resizeMode="contain"
                    source={require('../StudentList/Assets/star_unselected_icon.png')}
                    style={styles.buttonImage} />

            </View>
        </View>
        <View style={styles.seperator} />
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    listItem: {
        width: "100%",
        padding: 10,
        flexDirection: "row",
    },
    image: {
        marginRight: 8,
        height: 50,
        width: 50
    },
    buttonImage: {
        height: 40,
        width: 40
    },
    seperator: {
        backgroundColor: '#EBEBEB',
        width: '100%',
        height: 1
    },
    nameText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    otherText: {
        fontSize: 14,
    },
});

export default studentListItem;