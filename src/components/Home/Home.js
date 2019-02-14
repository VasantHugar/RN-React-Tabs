import React from 'react';
import { StyleSheet, View } from 'react-native';
import HorizontalButtons from './HorizontalButtons';

import StudentList from '../StudentList/StudentList';

export default class Home extends React.Component {

    static navigationOptions = () => {
        return {
            title: 'List of Enquiries',
        };
    };

    state = {
        isSelectedEnquiries: true,
        enquiries: []
    }

    students = [
        { key: "10", name: "Student", activity: "Dance", address: "World Trade Centre", institute: "At the institude", response: "Be the first one to response" },
        { key: "11", name: "Student", activity: "Dance", address: "World Trade Centre", institute: "At the institude", response: "Be the first one to response" },
        { key: "12", name: "Student", activity: "Dance", address: "World Trade Centre", institute: "At the institude", response: "Be the first one to response" },
        { key: "13", name: "Student", activity: "Dance", address: "World Trade Centre", institute: "At the institude", response: "Be the first one to response" },
        { key: "14", name: "Student", activity: "Dance", address: "World Trade Centre", institute: "At the institude", response: "Be the first one to response" },
        { key: "15", name: "Student", activity: "Dance", address: "World Trade Centre", institute: "At the institude", response: "Be the first one to response" },
        { key: "14", name: "Student", activity: "Dance", address: "World Trade Centre", institute: "At the institude", response: "Be the first one to response" },
        { key: "15", name: "Student", activity: "Dance", address: "World Trade Centre", institute: "At the institude", response: "Be the first one to response" },
    ]

    onPressEnquiriesHandler = () => {
        this.setState({ isSelectedEnquiries: true });
        this.fetchEnquiries();
    }

    onPressStudentsHandler = () => {
        this.setState({ isSelectedEnquiries: false });
        this.fetchStudents();
    }

    fetchEnquiries = () => {

        const url = "http://www.mocky.io/v2/5c41920e0f0000543fe7b889";

        fetch(url)
            .then(res => res.json())
            .then(res => {
                console.log("Enquiries Res: ", res["dataList"]);
                this.setState({ enquiries: res["dataList"] })
            })
            .catch(error => {
                console.log("Enquiries Error: ", error);
            });
    };

    fetchStudents = () => {

        const url = "http://www.mocky.io/v2/5c41950b0f0000543fe7b8a2";

        fetch(url)
            .then(res => res.json())
            .then(res => {
                console.log("Students Res: ", res["dataList"]);
                this.setState({ students: res["dataList"] })
            })
            .catch(error => {
                console.log("Students Error: ", error);
            });
    };

    render() {
        return (
            <View style={styles.container}>
                <HorizontalButtons
                    isEnquiry={this.state.isSelectedEnquiries}
                    onPressFirst={this.onPressEnquiriesHandler}
                    onPressSecond={this.onPressStudentsHandler}
                />
                <View style={styles.seperator} />
                <StudentList
                    dataList={this.state.isSelectedEnquiries ? this.state.enquiries : this.state.students}
                    enquiries={this.state.isSelectedEnquiries} />
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