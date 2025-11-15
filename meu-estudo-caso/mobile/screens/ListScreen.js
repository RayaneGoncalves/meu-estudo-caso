import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

// Definindo as cores base do seu tema escuro
const COLORS = {
  background: '#983ba0ff',
  primary: '#6e3b6eff',
  text: '#e0e1dd',
  highlight: '#380f2aff', 
  link: '#9e387cff',
};

const produtos = [
    { id: 1, name: "Placa de Vídeo" },
    { id: 2, name: "Processador" },
    { id: 3, name: "Processador High-End" },
    { id: 4, name: "Memória RAM" },
    { id: 5, name: "Armazenamento SSD NVMe" },
    { id: 6, name: "Placa-Mãe" },
    { id: 7, name: "Fonte de Alimentação" },
    { id: 8, name: "Notebook para Trabalho (Geral)" },
    { id: 9, name: "Notebook Avançado (Profissional)" },
    { id: 10, name: "Notebook Gamer (Custo-Benefício)" },
    { id: 11, name: "PC Desktop (Montagem Customizada)" },
    { id: 12, name: "Mini PC / Thin Client" },
    { id: 13, name: "Monitor Profissional" },
    { id: 14, name: "Monitor Gamer" },
    { id: 15, name: "Kit Teclado e Mouse Sem Fio" },
    { id: 16, name: "Teclado Mecânico (Gamer/Programador)" },
    { id: 17, name: "Webcam Full HD" },
    { id: 18, name: "Headset Gamer" },
    { id: 19, name: "Roteador Wi-Fi" },
    { id: 20, name: "Nobreak" },
];


const ProdutoItem = ({ produto, navigation }) => (
    <TouchableOpacity
        style={styles.listItem}
        onPress={() => navigation.navigate('Details', { itemId: produto.id })} 
    >
        <Text style={styles.itemName}>{produto.name}</Text>
        <Text style={styles.itemArrow}>→</Text>
    </TouchableOpacity>
);


export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lead Tech Store</Text>
      <Text style={styles.subtitle}>Lista de Produtos</Text>
      
      {/* 🚨 FLATLIST: Otimizado para renderizar listas em Mobile */}
      <FlatList
        data={produtos}
        renderItem={({ item }) => <ProdutoItem produto={item} navigation={navigation} />}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: COLORS.background, // Fundo escuro principal
    padding: 20
  },
  title: { 
    fontSize: 28, 
    color: COLORS.highlight, // Título em cor de destaque
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: COLORS.text, // Texto em cor clara
    textAlign: 'center',
    marginBottom: 20,
  },
  list: {
      paddingBottom: 20, // Espaço no final da lista
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.07)', // Simula o seu li:hover
    marginVertical: 6,
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 12, // Borda arredondada
    // Simula a sombra no Android/iOS
    elevation: 3, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  itemName: {
      color: COLORS.text,
      fontSize: 16,
      fontWeight: '600',
      flex: 1, // Permite que o nome ocupe a maior parte do espaço
  },
  itemArrow: {
      color: COLORS.link, // Seta em cor de link
      fontSize: 16,
      fontWeight: 'bold',
  }
});