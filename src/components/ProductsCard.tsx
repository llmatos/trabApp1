import { View, Image, Text, Dimensions, StyleSheet } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';

type ProductProps = {
    classificacao: number;
    imagem: any;
    descricao: string;
    preco: string;
}

export function ProductsCard({
    classificacao,
    imagem,
    descricao,
    preco
}: ProductProps) {
    return (
        <View style={styles.cardContainer}>
            <View style={styles.ratingContainer}>
                <FontAwesome name="star" size={24} color="black" />
                <Text style={styles.ratingText}>{classificacao}</Text>
            </View>
            <View style={styles.contentContainer}>
                <Image source={imagem}
                    style={styles.image}
                    resizeMode="contain" />
                <View>
                    <Text style={styles.description} numberOfLines={2}>{descricao}</Text>
                    <Text style={styles.price}>{preco}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#FFFFFF',
        width: 160, 
        borderRadius: 8,
        padding: 10,
        marginRight: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3, 
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start', 
        marginBottom: 5,
    },
    ratingText: {
        fontSize: 12,
        color: '#FF7000', 
        fontWeight: 'bold',
        marginLeft: 4, 
    },
    contentContainer: {
        alignItems: 'center', 
    },
    image: {
        width: 120,
        height: 120,
        marginBottom: 10,
    },
    textContainer: {
        width: '100%',
        alignItems: 'flex-start', 
    },
    description: {
        fontSize: 13,
        color: '#424242', 
        marginBottom: 8,
        lineHeight: 18,
    },
    price: {
        fontSize: 16,
        color: '#FF6500', 
        fontWeight: '900',
    }
});