import React from 'react';
import { StyleSheet, View } from 'react-native';
import HorizontalButtons from './HorizontalButtons';

import StudentList from '../StudentList/StudentList';
import { NetworkHandler } from '../../Helper/NetworkHandler';

export default class Home extends React.Component {

    static navigationOptions = () => {
        return {
            title: 'List of Enquiries',
        };
    };

    state = {
        isSelectedEnquiries: true,
        enquiries: [],
        students: []
    }

    componentWillMount() {
        this.fetchEnquiries()
    }

    onPressEnquiriesHandler = () => {

        if (this.state.isSelectedEnquiries == false) {
            this.setState({ isSelectedEnquiries: true });
        }

        if (this.state.enquiries.length == 0) {
            this.fetchEnquiries();
        }
    }

    onPressStudentsHandler = () => {

        if (this.state.isSelectedEnquiries == true) {
            this.setState({ isSelectedEnquiries: false });
        }

        if (this.state.students.length == 0) {
            this.fetchStudents();
        }
    }

    fetchEnquiries = () => {
        NetworkHandler.fetchEnquiries((results, error) => {
            if (results.length != 0) {
                this.setState({ enquiries: results })
            }
        });
    };

    fetchStudents = () => {
        NetworkHandler.fetchStudents((results, error) => {
            if (results.length != 0) {
                this.setState({ students: results })
            }
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