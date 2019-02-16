
import { StyleSheet } from "react-native";
import * as Constant from '../../Helper/Constants';

const styles = StyleSheet.create({
    listItem: {
        width: "100%",
        paddingLeft: 15,
        paddingTop: 15,
        paddingBottom: 15,
        paddingRight: 0, // Because Button asset itself got spacing
        flexDirection: "row",
    },
    labelContainer: {
        flex: 1,
    },
    titleLabelConainer: {
        flexDirection: 'row', 
        alignItems: 'center'
    },
    buttonContainer: {
        width: 40
    },
    nameText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    otherText: {
        fontSize: 12,
        marginTop: 7
    },
    platformTag: {
        fontSize: 14,
        color: 'red',
        marginLeft: 3
    },
    seperator: {
        backgroundColor: Constant.Color.seperator,
        width: '100%',
        height: 1
    },
});

export default styles;