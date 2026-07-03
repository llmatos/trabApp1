import { View, Image, Text, Dimensions, StyleSheet } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

type CategoriesProps = {
    nomeCategoria: any;
    icone: string;
}

export function CategoriesCard({
    nomeCategoria,
    icone
}: CategoriesProps){
    return (
        <View style={styles.container}>
            <View style={styles.iconCircle}>
                <MaterialCommunityIcons name={icone} size={24} color="white" />
            </View>
            <View>
                <Text style={styles.categoryText}>{nomeCategoria}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center', 
        width: 85, 
        marginHorizontal: 5,
        marginTop: 15,
        marginBottom: 20,
    },
    iconCircle: {
        width: 60,
        height: 60,
        borderRadius: 30, 
        backgroundColor: '#0060B1',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 8,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    categoryText: {
        fontSize: 12,
        color: '#424242',
        textAlign: 'center',
        fontWeight: '600',
        lineHeight: 14,
    }
});