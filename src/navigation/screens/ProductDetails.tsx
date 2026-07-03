import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export function ProductDetails() {
  const route = useRoute();
  const navigation = useNavigation<any>();
  
  
  const { produto } = route.params as any;

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.imageContainer}>
        
        <Image source={produto.imagem} style={styles.image} resizeMode="contain" />
      </View>
      
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{produto.descricao}</Text>
        
        <View style={styles.ratingContainer}>
          <FontAwesome name="star" size={16} color="#FFD700" />
          <Text style={styles.ratingText}>{produto.classificacao}</Text>
        </View>
        
        <Text style={styles.price}>{produto.preco}</Text>
        <Text style={styles.pixText}>À vista no PIX</Text>

        <TouchableOpacity 
          style={styles.buyButton} 
          onPress={() => navigation.navigate('Cart', { produto })}
        >
          <FontAwesome name="shopping-cart" size={20} color="#FFF" />
          <Text style={styles.buyButtonText}>COMPRAR</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  },
  imageContainer: {
    backgroundColor: '#FFF',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: 300,
  },
  detailsContainer: {
    backgroundColor: '#FFF',
    padding: 20,
    marginTop: 10,
  },
  title: {
    fontSize: 18,
    color: '#424242',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  ratingText: {
    marginLeft: 5,
    fontSize: 14,
    color: '#757575',
  },
  price: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FF6500', 
  },
  pixText: {
    fontSize: 14,
    color: '#757575',
    marginBottom: 20,
  },
  buyButton: {
    backgroundColor: '#FF6500',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 4,
  },
  buyButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  }
});