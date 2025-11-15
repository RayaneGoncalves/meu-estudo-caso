import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';

// Definindo as cores base do seu tema escuro
const COLORS = {
  background: '#0d1b2a',
  primary: '#1b263b', // Cor de fundo do Card
  text: '#e0e1dd',
  highlight: '#ffb703', // Cor do Valor (Preço)
  button: '#f77f00', // Cor do Botão
  label: '#f77f00', // Cor do Rótulo
};

const getDetalheProduto = (id) => {
    const numericId = parseInt(id); 
    const detalhes = {
      1: {
        id: 1,
        name: "Placa de Vídeo",
        price: 3200.00,
        description: "Placa de vídeo de gama média alta (ex: RTX 4060) para jogos em Full HD/QHD e tarefas de renderização com excelente desempenho."
      },
      2: {
            id: 2,
            name: "Processador",
            price: 850.00,
            description: "CPU de performance intermediária (ex: Ryzen 5 ou Core i5) para multitarefas e jogos, oferecendo um bom equilíbrio entre custo e performance."
        },
        3: {
            id: 3,
            name: "Processador High-End",
            price: 3500.00,
            description: "CPU de alto desempenho (ex: Ryzen 9 ou Core i9) com múltiplos núcleos para aplicações profissionais, renderização pesada e jogos em 4K."
        },
        4: {
            id: 4,
            name: "Memória RAM",
            price: 400.00,
            description: "Módulo de memória RAM de 16GB (2x8GB) DDR4 ou DDR5 com alta frequência para garantir fluidez e velocidade no sistema e em jogos."
        },
        5: {
            id: 5,
            name: "Armazenamento SSD NVMe",
            price: 550.00,
            description: "SSD M.2 NVMe de 1TB, essencial para boot ultrarrápido do sistema operacional e carregamento instantâneo de programas e jogos."
        },
        6: {
            id: 6,
            name: "Placa-Mãe",
            price: 700.00,
            description: "Placa-mãe de nível intermediário com suporte a recursos atuais (PCIe 4.0/5.0) e compatível com os processadores mais recentes."
        },
        7: {
            id: 7,
            name: "Fonte de Alimentação",
            price: 450.00,
            description: "Fonte de 650W com certificação 80 Plus Bronze ou Gold, garantindo eficiência e segurança para o fornecimento de energia ao PC."
        },
        8: {
            id: 8,
            name: "Notebook para Trabalho (Geral)",
            price: 2800.00,
            description: "Notebook com Core i3/i5 ou Ryzen 3/5, 8GB de RAM e SSD de 256GB, ideal para navegação, estudo e tarefas de escritório."
        },
        9: {
            id: 9,
            name: "Notebook Avançado (Profissional)",
            price: 6500.00,
            description: "Notebook com Core i7/Ryzen 7, 16GB RAM e placa de vídeo dedicada (ex: RTX 4050), voltado para edição de vídeo/foto e programação."
        },
        10: {
            id: 10,
            name: "Notebook Gamer (Custo-Benefício)",
            price: 4800.00,
            description: "Notebook com Core i5 ou Ryzen 5, 8GB/16GB RAM e placa de vídeo básica para jogos (ex: RTX 3050), com tela de 144Hz."
        },
        11: {
            id: 11,
            name: "PC Desktop (Montagem Customizada)",
            price: 400.00,
            description: "Serviço de montagem e configuração personalizada de um PC desktop, otimizando componentes para o uso específico do cliente."
        },
        12: {
            id: 12,
            name: "Mini PC / Thin Client",
            price: 1500.00,
            description: "Computador compacto e de baixo consumo, ideal para tarefas simples, home office básico ou como terminal de acesso a servidores."
        },
        13: {
            id: 13,
            name: "Monitor Profissional",
            price: 1300.00,
            description: "Monitor de 24''/27'' com painel IPS, resolução 2K ou 4K e alta fidelidade de cores (sRGB/Adobe RGB) para designers e editores."
        },
        14: {
            id: 14,
            name: "Monitor Gamer",
            price: 1400.00,
            description: "Monitor de 24''/27'' com alta taxa de atualização (144Hz ou superior) e baixo tempo de resposta (1ms), essencial para jogos competitivos."
        },
        15: {
            id: 15,
            name: "Kit Teclado e Mouse Sem Fio",
            price: 150.00,
            description: "Conjunto básico sem fio, ideal para uso em escritório ou casa, oferecendo praticidade e organização na mesa."
        },
        16: {
            id: 16,
            name: "Teclado Mecânico (Gamer/Programador)",
            price: 350.00,
            description: "Teclado com switches mecânicos de alta durabilidade e resposta tátil, preferido por gamers e programadores que buscam precisão."
        },
        17: {
            id: 17,
            name: "Webcam Full HD",
            price: 180.00,
            description: "Webcam com resolução 1080p, ideal para videoconferências nítidas, aulas online e streaming casual."
        },
        18: {
            id: 18,
            name: "Headset Gamer",
            price: 250.00,
            description: "Headset com microfone de qualidade e áudio imersivo (geralmente surround), focado em conforto para longas sessões de jogo."
        },
        19: {
            id: 19,
            name: "Roteador Wi-Fi",
            price: 300.00,
            description: "Roteador Dual Band (2.4GHz e 5GHz) com tecnologia Wi-Fi 6 (802.11ax), melhorando a velocidade e o alcance da rede doméstica."
        },
        20: {
            id: 20,
            name: "Nobreak",
            price: 600.00,
            description: "Nobreak de 700VA/1000VA com bateria, fornecendo energia temporária para desligamento seguro do equipamento em caso de queda de luz."
        }
    };

    return detalhes[numericId];
}


export default function DetailsScreen({ route, navigation }) {
  const { itemId } = route.params;
  const prod = getDetalheProduto(itemId);

  if (!prod) {
    return (
      <View style={[styles.container, styles.center]}>
        <Text style={styles.title}>Produto Não Encontrado</Text>
        <Button 
            title="← Voltar à Lista" 
            color={COLORS.button}
            onPress={() => navigation.goBack()}
        />
      </View>
    );
  }
    
  const precoFormatado = prod.price.toLocaleString('pt-BR', { 
    style: 'currency', 
    currency: 'BRL' 
  });


  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      <Text style={styles.headerTitle}>{prod.name}</Text>
      
      <View style={styles.card}>
          
          <View style={styles.infoRow}>
              <Text style={styles.label}>Número:</Text>
              <Text style={styles.value}>{prod.id}</Text>
          </View>

          <View style={styles.infoRow}>
              <Text style={styles.label}>Preço:</Text>
              <Text style={styles.priceValue}>{precoFormatado}</Text>
          </View>
          
          <View style={styles.descriptionContainer}>
              <Text style={styles.label}>Descrição:</Text>
              <Text style={styles.descriptionText}>{prod.description}</Text>
          </View>

      </View>
      
      <Button 
        title="Voltar" 
        color={COLORS.button}
        onPress={() => navigation.goBack()} 
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1, // Permite que a view cresça dentro do ScrollView
    padding: 20,
    backgroundColor: COLORS.background, // Fundo escuro principal
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 26,
    color: COLORS.highlight,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: COLORS.primary, // Cor escura secundária
    borderRadius: 12,
    padding: 20,
    width: '100%',
    maxWidth: 600,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  infoRow: {
    flexDirection: 'row', // Alinha label e valor lado a lado
    justifyContent: 'flex-start',
    marginBottom: 10,
    alignItems: 'center',
  },
  label: {
    color: COLORS.label, // Cor de destaque para o rótulo
    fontWeight: '600',
    fontSize: 16,
    marginRight: 10, // Espaço entre label e valor
  },
  value: {
    color: COLORS.text,
    fontSize: 16,
  },
  priceValue: {
    color: COLORS.highlight, // Preço em cor de destaque
    fontSize: 20,
    fontWeight: '700',
  },
  descriptionContainer: {
    marginTop: 15,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.1)',
    paddingTop: 15,
  },
  descriptionText: {
    color: COLORS.text,
    fontSize: 15,
    lineHeight: 22,
    marginTop: 5,
  },
});