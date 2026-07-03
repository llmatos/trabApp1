import { Platform, StyleSheet, View, ScrollView, Text, TextInput, FlatList, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import React from 'react';
import { Banner } from '../../components/Banners';
import { produtosMock } from '../../../produtosMock';
import { categoriasMock } from '../../../categoriasMock'
import { ProductsCard } from '../../components/ProductsCard';
import { CategoriesCard } from '../../components/Categories';
import { useNavigation } from '@react-navigation/native';

const imagesMock = [
  { id: '1', titulo: 'banner01', fotoLocal: require('../../assets/banner01.png') },
  { id: '2', titulo: 'banner02', fotoLocal: require('../../assets/banner02.png') },
  { id: '3', titulo: 'banner03', fotoLocal: require('../../assets/banner03.png') },
  { id: '4', titulo: 'banner04', fotoLocal: require('../../assets/banner04.png') },
  { id: '5', titulo: 'banner05', fotoLocal: require('../../assets/banner05.png') }
];

export function Home() {
  const navigation = useNavigation<any>();
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <View style={styles.searchContainer}>
          <Ionicons name="search-outline" size={20} color="#0060B1" />
          <TextInput
            style={styles.input}
            placeholder="Aperte o K e busque aqui"
            placeholderTextColor="#999"
          />
        </View>
        <View style={styles.cartContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
            <FontAwesome name="shopping-cart" size={24} color="#FFF" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.sectionBanner}>
        <FlatList
          data={imagesMock}
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <Banner imagesBanner={item.fotoLocal} />
          )}
        />
      </View>

      <View style={styles.section}>
        <FlatList
          data={categoriasMock}
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <CategoriesCard
              nomeCategoria={item.nomeCategoria}
              icone={item.icone}
            />
          )}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recomendados para você</Text>
        <FlatList
          data={produtosMock}
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingLeft: 15 }}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate('ProductDetails', { produto: item })}>
              <ProductsCard
                classificacao={item.classificacao}
                imagem={item.imagem}
                descricao={item.descricao}
                preco={item.preco}
              />
            </TouchableOpacity>
          )}

        />
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2', 
  },
  header: {
    backgroundColor: '#0060B1',
    paddingTop: Platform.OS === 'ios' ? 50 : 40, 
    paddingBottom: 15,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 4,
    alignItems: 'center',
    height: 40,
    paddingHorizontal: 10,
    marginRight: 15,
  },
  input: {
    flex: 1,
    height: 40,
    marginLeft: 8,
    color: '#424242',
  },
  cartContainer: {
    padding: 5,
  },
  sectionBanner: {
    marginTop: 10,
  },
  section: {
    marginTop: 20,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#424242',
    marginLeft: 15,
    marginBottom: 15,
  }
});
