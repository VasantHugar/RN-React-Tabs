import React from 'react'
import { TouchableOpacity, View, Image, Text, StyleSheet } from 'react-native'

export default class ImageButton extends React.Component {
    render() {
        return (
            <TouchableOpacity style={styles.touchable} onPress={this.props.onPress}>
                <Image source={this.props.image} style={styles.image} />
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        alignSelf: 'stretch',
        width: 34,
        height: 34,
        margin: 0
    },
    touchable: {
        alignItems: 'center',
        justifyContent: 'center',
    }
})
