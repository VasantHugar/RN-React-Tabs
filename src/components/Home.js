import React from 'react';
import { StyleSheet, View } from 'react-native';
import HorizontalButtons from './HorizontalButtons';

export default class Home extends React.Component {

    static navigationOptions = () => {
        return {
            title: 'List of Enquiries',
        };
    };
  
    render() {
      return (
        <View style={styles.container}>
          <HorizontalButtons
            onPressFirst={() => {
              console.log("onPressFirst");
            }}
            onPressSecond={() => {
              console.log("onPressSecond");
            }} />
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
  });