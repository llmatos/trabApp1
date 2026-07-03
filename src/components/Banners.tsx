import { View, Image, StyleSheet } from "react-native";

export function Banner({ imagesBanner }) {
    return (
        <View>
            <Image source={imagesBanner} style={styles.cardContainer} />
        </View>
    );
}



const styles = StyleSheet.create({
    cardContainer: {
        width: 300,
        height:130, 
        borderRadius: 8,
        padding: 10,
        marginRight: 15,
        
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    }
});