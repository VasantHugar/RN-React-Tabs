import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import ImageButton from "../../Helper/ImageButton";

const enquiryListItem = (props) => (
    <TouchableOpacity onPress={props.onItemPressed}>

        <View style={styles.listItem}>
            <Image
                resizeMode="contain"
                source={require('../../assets/place_holder_icon.png')}
                style={styles.image} />
            <View style={{ flex: 1 }}>
                <Text style={styles.nameText}>{props.item.name}</Text>
                <Text style={styles.otherText}>{props.item.enquiryStatus}</Text>
                <Text style={styles.otherText}>{props.item.location}</Text>
                <Text style={styles.otherText}>{props.item.categoryName}</Text>
                <Text style={styles.otherText}>{props.item.tag}</Text>
            </View>
            <View style={{ width: 40 }}>
                <ImageButton
                    image={require('../../assets/star_selected_icon.png')}
                    onPress={() => {
                        console.log("On press");
                    }} />
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
        height: 20,
        width: 20
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
        // fontWeight: 'bold',
        marginTop: 2
    },
    otherText: {
        fontSize: 12,
        marginTop: 5
    },
});

export default enquiryListItem;