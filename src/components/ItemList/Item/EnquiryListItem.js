import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import ImageButton from "../../../helper/ImageButton";
import CircularLabel from "./CircularLabel";
import Styles from "./Styles";
import { call } from "../../../helper/Call";

const enquiryListItem = (props) => (

    <TouchableOpacity onPress={() => props.onItemPressed(props.item)}>

        <View style={Styles.listItem}>

            <CircularLabel text={props.item.name.charAt(0).toUpperCase()} />

            <View style={Styles.labelContainer}>
                <View style={Styles.titleLabelConainer}>
                    <Text style={Styles.nameText}>{props.item.name}</Text>
                    <Text style={Styles.platformTag}>New</Text>
                </View>
                <Text style={Styles.otherText}>{props.item.enquiryStatus}</Text>
                <Text style={Styles.otherText}>{props.item.location}</Text>
                <Text style={Styles.otherText}>{props.item.categoryName}</Text>
                <Text style={Styles.otherText}>{props.item.tag}</Text>
            </View>

            <View style={Styles.buttonContainer}>
                <ImageButton
                    image={props.item.isFavourite ? require('../../../assets/star_selected_icon.png') : require('../../../assets/star_unselected_icon.png')}
                    onPress={() => {
                        console.log("On press star");
                        props.item.isFavourite = !props.item.isFavourite;
                    }} />

                <ImageButton
                    image={require('../../../assets/telephone_icon.png')}
                    onPress={() => {
                        call(props.item.phoneNumber);
                    }} />
            </View>
        </View>
        <View style={Styles.seperator} />
    </TouchableOpacity>
);

export default enquiryListItem;