import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Color } from '../../helper/Constants';
import Styles from '../../components/ItemList/Item/Styles';

export default class DetailsScreen extends React.Component {

    static navigationOptions = () => {
        return {
            title: 'Details',
        };
    };

    state = {
        item: {},
        enquiries: false
    }

    componentWillMount() {
        const { navigation } = this.props;
        const item = navigation.getParam('item', undefined);
        const enquiries = navigation.getParam('enquiries', false);
        console.log('componentWillReceiveProps Item: ', item);
        console.log('enquiries: ', enquiries);
        this.setState({
            item: item,
            enquiries: enquiries
        })
    }

    renderContent() {

        if (this.state.enquiries) {
            return (
                <View style={styles.labelContainer}>

                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>Enquiry</Text>
                    </View>

                    <View style={Styles.titleLabelConainer}>
                        <Text style={Styles.nameText}>{this.state.item.name}</Text>
                        <Text style={Styles.platformTag}>New</Text>
                    </View>

                    <Text style={Styles.otherText}>{this.state.item.enquiryStatus}</Text>
                    <Text style={Styles.otherText}>{this.state.item.location}</Text>
                    <Text style={Styles.otherText}>{this.state.item.categoryName}</Text>
                    <Text style={Styles.otherText}>{this.state.item.tag}</Text>

                </View>
            );
        } else {
            return (
                <View style={styles.labelContainer}>

                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>Student</Text>
                    </View>

                    <View style={Styles.titleLabelConainer}>
                        <Text style={Styles.nameText}>{this.state.item.name}</Text>
                        <Text style={Styles.platformTag}>{this.state.item.platformTag}</Text>
                    </View>

                    <Text style={Styles.otherText}>{this.state.item.category}</Text>
                    <Text style={Styles.otherText}>{this.state.item.batchName}</Text>

                </View>
            );
        };
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderContent()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.seperator
    },
    labelContainer: {
        padding: 20,
        backgroundColor: "white",
        margin: 20
    },
    titleContainer: {
        alignItems: 'center',
        marginBottom: 10
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Color.theme
    },
});