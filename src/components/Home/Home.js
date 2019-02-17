import React from 'react';
import { StyleSheet, View } from 'react-native';
import HorizontalButtons from './HorizontalButtons';

import ItemList from '../ItemList/ItemList';
import { NetworkHandler } from '../../helper/NetworkHandler';

import { Color } from '../../helper/Constants';

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

    onPressItemHandler = (item) => {
        this.props.navigation.push("Details", { item: item, enquiries: this.state.isSelectedEnquiries });
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
                <ItemList
                    dataList={this.state.isSelectedEnquiries ? this.state.enquiries : this.state.students}
                    enquiries={this.state.isSelectedEnquiries}
                    onItemPressed={this.onPressItemHandler} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    seperator: {
        backgroundColor: Color.seperator,
        width: '100%',
        height: 1
    },
});