export const produtosMock = [
  {
    id: '1',
    classificacao: 4.8,
    // Usando URI (link de internet) para testares rapidamente sem precisares de baixar fotos agora.
    // Se quiseres usar as tuas fotos locais, troca por: require('../../assets/placa-video.png')
    imagem: { uri: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=200&q=80' }, 
    descricao: 'Placa de Vídeo RTX 4060 Ti 8GB Asus Dual',
    preco: 'R$ 2.499,99'
  },
  {
    id: '2',
    classificacao: 5.0,
    imagem: { uri: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&w=200&q=80' },
    descricao: 'Processador AMD Ryzen 7 5800X, Cache 36MB, 3.8GHz',
    preco: 'R$ 1.349,90'
  },
  {
    id: '3',
    classificacao: 4.5,
    imagem: { uri: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=200&q=80' },
    descricao: 'Monitor Gamer LG UltraGear 24" IPS, 144Hz, 1ms',
    preco: 'R$ 989,00'
  },
  {
    id: '4',
    classificacao: 4.2,
    imagem: { uri: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=200&q=80' },
    descricao: 'Teclado Mecânico Gamer Redragon Kumara, Switch Outemu Brown',
    preco: 'R$ 199,90'
  },
  {
    id: '5',
    classificacao: 4.9,
    imagem: { uri: 'https://images.unsplash.com/photo-1605464315542-bda3e2f4e605?auto=format&fit=crop&w=200&q=80' },
    descricao: 'Headset Gamer HyperX Cloud Stinger Core',
    preco: 'R$ 259,99'
  },
  {
    id: '6',
    classificacao: 4.7,
    imagem: { uri: 'https://images.unsplash.com/photo-1616296425622-4560a2ad83de?q=80&w=1013&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    descricao: 'Mouse Gamer Logitech G203, RGB LIGHTSYNC, 6 Botões',
    preco: 'R$ 119,99'
  }
];