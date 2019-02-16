import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import ImageButton from "../../Helper/ImageButton";
import CircularLabel from "./CircularLabel";
import Styles from "./Styles";
import styles from "./Styles";

const studentListItem = (props) => (
    <TouchableOpacity onPress={props.onItemPressed}>

        <View style={Styles.listItem}>
            <CircularLabel text={props.item.name.charAt(0).toUpperCase()} />

            <View style={Styles.labelContainer}>
                <View style={styles.titleLabelConainer}>
                    <Text style={Styles.nameText}>{props.item.name}</Text>
                    <Text style={Styles.platformTag}>{props.item.platformTag}</Text>
                </View>
                <Text style={Styles.otherText}>{props.item.category}</Text>
                <Text style={Styles.otherText}>{props.item.batchName}</Text>
            </View>

            <View style={Styles.buttonContainer}>
                <ImageButton
                    image={require('../../assets/dot_menu_icon.png')}
                    onPress={() => {
                        console.log("On press star");
                    }} />

                <ImageButton
                    image={require('../../assets/telephone_icon.png')}
                    onPress={() => {
                        alert("Coming soon!");
                    }} />
            </View>
        </View>
        <View style={Styles.seperator} />
    </TouchableOpacity>
);

export default studentListItem;