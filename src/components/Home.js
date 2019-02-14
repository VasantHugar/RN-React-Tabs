import React from 'react';
import { StyleSheet, View } from 'react-native';
import HorizontalButtons from './HorizontalButtons';

import StudentListItem from './StudentList/StudentList';

export default class Home extends React.Component {

    static navigationOptions = () => {
        return {
            title: 'List of Enquiries',
        };
    };

    state = {
        isSelectedEnquiries: true
    }

    enquiries = [
        { key: "0", name: "Enquiry" },
        { key: "1", name: "Enquiry" },
        { key: "2", name: "Enquiry" },
        { key: "3", name: "Enquiry" },
        { key: "4", name: "Enquiry" },
    ]

    students = [
        { key: "0", name: "Name" },
        { key: "1", name: "Name" },
        { key: "2", name: "Name" },
        { key: "3", name: "Name" },
        { key: "4", name: "Name" },
        { key: "5", name: "Name" },
        { key: "6", name: "Name" },
        { key: "7", name: "Name" },
    ]

    render() {
        return (
            <View style={styles.container}>
                <HorizontalButtons
                    isEnquiry={this.state.isSelectedEnquiries}
                    onPressFirst={() => {
                        console.log("onPressFirst");
                        this.setState({ isSelectedEnquiries: true })
                    }}
                    onPressSecond={() => {
                        console.log("onPressSecond");
                        this.setState({ isSelectedEnquiries: false })
                    }} />
                <View style={styles.seperator} />
                <StudentListItem students={this.state.isSelectedEnquiries ? this.enquiries : this.students} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'white',
    },
    seperator: {
        backgroundColor: '#EBEBEB',
        width: '100%',
        height: 1
    },
});