import { defineStore } from "pinia";

export const carrinhoStore = defineStore("carrinho", {
  state: () => {
    return {
      burgers: [],
      macarronadas: [],
      batatas: [],
      combos: [],
      bebidas: [],
      sobremesas: [],
      dadosPessoais: {
        nome: "",
        rua: "",
        bairro: "",
        numero: "",
        referencia: "",
        formaDeEntrega: "",
        formaDePagamento: "",
        troco: "",
      },
      pedidos: [],
      valorTotal: 0,
      quantidadeDeItens: 0,
      observacao: "",
    };
  },
  getters: {
    getValorTotal() {
      let total = 0;

      var pedidos = [
        ...this.burgers,
        ...this.macarronadas,
        ...this.batatas,
        ...this.combos,
        ...this.sobremesas,
        ...this.bebidas,
      ];

      pedidos.forEach((categoria) => {
        for (const chave in categoria) {
          categoria[chave].forEach((item) => {
            total += item.preco * item.quantidade;
          });
        }
      });

      return total.toFixed(2);
    },
    getTotalPedidos() {
      return (
        this.burgers.length +
        this.macarronadas.length +
        this.batatas.length +
        this.combos.length +
        this.sobremesas.length +
        this.bebidas.length
      );
    },
  },
});

export const produtosStore = defineStore("produto", {
  state: () => {
    return {
      cardDataStore: [
        {
          id: 1,
          nome: "BURGER",
          img: "food1.webp",
          descricao: "Monte do seu jeito",
          url: "/burger",
        },
        {
          id: 8,
          nome: "CUSCUZ RECHEADO",
          img: "food3.webp",
          descricao: "No ponto certo",
          url: "/combo",
        },
        {
          id: 2,
          nome: "CUSCUZ RECHEADO",
          img: "food2.webp",
          descricao: "Monte do seu jeito",
          url: "/macarronada",
        },
        {
          id: 6,
          nome: "VATAPÁ",
          img: "food3.webp",
          descricao: "No ponto certo",
          url: "/batata",
        },
        {
          id: 7,
          nome: "BURGERS MONTADOS",
          img: "food5.webp",
          descricao: "Para adoçar",
          url: "/sobremesas",
        },
        {
          id: 4,
          nome: "BEBIDAS",
          img: "food4.webp",
          descricao: "Refrescantes",
          url: "/bebidas",
        },
        {
          id: 9,
          nome: "SOPAS",
          img: "food4.webp",
          descricao: "Refrescantes",
          url: "/sopas",
        },
      ],
    };
  },
});

export const produtosStore2 = defineStore("produto2", {
  state: () => {
    return {
      cardDataStore: [
        {
          id: 1,
          nome: "BURGER",
          img: "food1.webp",
          descricao: "Monte do seu jeito",
          url: "/burger",
        },
        {
          id: 8,
          nome: "CUSCUZ RECHEADO",
          img: "food3.webp",
          descricao: "No ponto certo",
          url: "/combo",
        },
        {
          id: 2,
          nome: "CUSCUZ RECHEADO",
          img: "food2.webp",
          descricao: "Monte do seu jeito",
          url: "/macarronada",
        },
        {
          id: 6,
          nome: "VATAPÁ",
          img: "food3.webp",
          descricao: "No ponto certo",
          url: "/batata",
        },
        {
          id: 7,
          nome: "BURGERS MONTADOS",
          img: "food5.webp",
          descricao: "Para adoçar",
          url: "/sobremesas",
        },
        {
          id: 4,
          nome: "BEBIDAS",
          img: "food4.webp",
          descricao: "Refrescantes",
          url: "/bebidas",
        },
        {
          id: 9,
          nome: "SOPAS",
          img: "food4.webp",
          descricao: "Refrescantes",
          url: "/sopas",
        },
      ],
    };
  },
});
