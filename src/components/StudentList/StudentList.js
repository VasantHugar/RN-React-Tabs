import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import StudentListItem from '../StudentList/StudentListItem';

const studentList = props => {
    return (
        <FlatList
            style={styles.listContainer}
            data={props.students}
            renderItem={(info) => (
                <StudentListItem name={info.item.name + " " + info.item.key}/>
            )}
        />
    );
};

const styles = StyleSheet.create({
    listContainer: {
        width: "100%",
        // backgroundColor: "#F8F8F8"
    }
});

export default studentList;