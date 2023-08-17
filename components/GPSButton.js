import { IconButton } from "react-native-paper"
import { StyleSheet } from "react-native"
// Geolocation library.
// import Geolocation from '@react-native-community/geolocation';
// Geolocation.getCurrentPosition(info => console.log(info));

export default function GPSButton() {
    return (
        <IconButton 
        mode="contained"
        icon="crosshairs-gps"
        iconColor="black"
        containerColor="white"
        size={44}
        style={styles.button}
        onPress={() => console.log('gogo')} />
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 15,
        height: 72,
        width: 72,
    }
})