import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export function Cart() {
  const route = useRoute();
  
  
  const produto = route.params?.produto; 

  const cartItems = produto ? [produto] : [];

  return (
    <View style={styles.container}>
      {cartItems.length > 0 ? (
        <>
          <FlatList
            data={cartItems}
            keyExtractor={(item, index) => String(index)}
            renderItem={({ item }) => (
              <View style={styles.cartItem}>
                <Image source={item.imagem} style={styles.itemImage} resizeMode="contain" />
                <View style={styles.itemInfo}>
                  <Text style={styles.itemTitle} numberOfLines={2}>{item.descricao}</Text>
                  <Text style={styles.itemPrice}>{item.preco}</Text>
                </View>
                <TouchableOpacity style={styles.deleteButton}>
                  <FontAwesome name="trash" size={24} color="#999" />
                </TouchableOpacity>
              </View>
            )}
          />
          <View style={styles.footer}>
            <View style={styles.totalContainer}>
              <Text style={styles.totalLabel}>Total no PIX:</Text>
              <Text style={styles.totalValue}>{produto?.preco}</Text>
            </View>
            <TouchableOpacity style={styles.checkoutButton}>
              <Text style={styles.checkoutButtonText}>FINALIZAR COMPRA</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <View style={styles.emptyContainer}>
          <FontAwesome name="shopping-cart" size={80} color="#E0E0E0" />
          <Text style={styles.emptyText}>O seu carrinho está vazio.</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  },
  cartItem: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    padding: 15,
    marginHorizontal: 15,
    marginTop: 15,
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  itemImage: {
    width: 80,
    height: 80,
    marginRight: 15,
  },
  itemInfo: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 14,
    color: '#424242',
    marginBottom: 5,
  },
  itemPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF6500',
  },
  deleteButton: {
    padding: 10,
  },
  footer: {
    backgroundColor: '#FFF',
    padding: 20,
    borderTopWidth: 1,
    borderColor: '#E0E0E0',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  totalLabel: {
    fontSize: 16,
    color: '#757575',
  },
  totalValue: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FF6500',
  },
  checkoutButton: {
    backgroundColor: '#FF6500',
    padding: 15,
    borderRadius: 4,
    alignItems: 'center',
  },
  checkoutButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    marginTop: 20,
    fontSize: 18,
    color: '#757575',
  }
});