import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import StudentListItem from './Item/StudentListItem';
import EnquiryListItem from './Item/EnquiryListItem';

const studentList = props => {
    return (
        <FlatList
            style={styles.listContainer}
            data={props.dataList}
            keyExtractor={(item, index) => item + index}
            renderItem={(info) => (
                props.enquiries ? <EnquiryListItem item={info.item} onItemPressed={props.onItemPressed} /> : <StudentListItem item={info.item} onItemPressed={props.onItemPressed}/>
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