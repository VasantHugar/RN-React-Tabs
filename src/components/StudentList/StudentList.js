import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import StudentListItem from '../StudentList/StudentListItem';
import EnquiryListItem from '../StudentList/EnquiryListItem';

const studentList = props => {
    return (
        <FlatList
            style={styles.listContainer}
            data={props.dataList}
            keyExtractor={(item, index) => item + index}
            renderItem={(info) => (
                props.enquiries ? <EnquiryListItem item={info.item} /> : <StudentListItem item={info.item} />
            )}
        />
    );
};

const styles = StyleSheet.create({
    listContainer: {
        width: "100%",
    }
});

export default studentList;