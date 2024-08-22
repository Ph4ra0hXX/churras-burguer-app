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
          nome: "BURGUER",
          img: "food1.webp",
          descricao: "Monte do seu jeito",
          url: "/burger",
          diasSemana: [
            "segunda-feira",
            "terça-feira",
            "quarta-feira",
            "quinta-feira",
            "sexta-feira",
            "sábado",
            "domingo",
          ],
        },
        {
          id: 8,
          nome: "BATATA RECHEADA",
          img: "food14.webp",
          descricao: "No ponto certo",
          url: "/combo",
          diasSemana: ["terça-feira"],
        },
        {
          id: 2,
          nome: "CUSCUZ RECHEADO",
          img: "food15.webp",
          descricao: "Recheado de verdade",
          url: "/macarronada",
          diasSemana: ["quinta-feira"],
        },
        {
          id: 6,
          nome: "VATAPÁ",
          img: "food12.webp",
          descricao: "Bem cremoso",
          url: "/batata",
          diasSemana: ["sábado"],
        },
        {
          id: 7,
          nome: "BURGUERES MONTADOS",
          img: "food11.webp",
          descricao: "Escolha seu favorito",
          url: "/sobremesas",
          diasSemana: [
            "segunda-feira",
            "terça-feira",
            "quarta-feira",
            "quinta-feira",
            "sexta-feira",
            "sábado",
            "domingo",
          ],
        },
        {
          id: 9,
          nome: "SOPAS",
          img: "food9.webp",
          descricao: "Quentinhas",
          url: "/sopas",
          diasSemana: ["segunda-feira", "quarta-feira", "sexta-feira"],
        },
        {
          id: 4,
          nome: "BEBIDAS",
          img: "food4.webp",
          descricao: "Refrescantes",
          url: "/bebidas",
          diasSemana: [
            "segunda-feira",
            "terça-feira",
            "quarta-feira",
            "quinta-feira",
            "sexta-feira",
            "sábado",
            "domingo",
          ],
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
          nome: "BURGUER",
          img: "food1.webp",
          descricao: "Monte do seu jeito",
          url: "/burger",
          diasSemana: [
            "segunda-feira",
            "terça-feira",
            "quarta-feira",
            "quinta-feira",
            "sexta-feira",
            "sábado",
            "domingo",
          ],
        },
        {
          id: 8,
          nome: "BATATA RECHEADA",
          img: "food14.webp",
          descricao: "No ponto certo",
          url: "/combo",
          diasSemana: ["terça-feira"],
        },
        {
          id: 2,
          nome: "CUSCUZ RECHEADO",
          img: "food15.webp",
          descricao: "Recheado de verdade",
          url: "/macarronada",
          diasSemana: ["quinta-feira"],
        },
        {
          id: 6,
          nome: "VATAPÁ",
          img: "food12.webp",
          descricao: "Bem cremoso",
          url: "/batata",
          diasSemana: ["sábado"],
        },
        {
          id: 7,
          nome: "BURGUERES MONTADOS",
          img: "food11.webp",
          descricao: "Escolha seu favorito",
          url: "/sobremesas",
          diasSemana: [
            "segunda-feira",
            "terça-feira",
            "quarta-feira",
            "quinta-feira",
            "sexta-feira",
            "sábado",
            "domingo",
          ],
        },
        {
          id: 9,
          nome: "SOPAS",
          img: "food9.webp",
          descricao: "Quentinhas",
          url: "/sopas",
          diasSemana: ["segunda-feira", "quarta-feira", "sexta-feira"],
        },
        {
          id: 4,
          nome: "BEBIDAS",
          img: "food4.webp",
          descricao: "Refrescantes",
          url: "/bebidas",
          diasSemana: [
            "segunda-feira",
            "terça-feira",
            "quarta-feira",
            "quinta-feira",
            "sexta-feira",
            "sábado",
            "domingo",
          ],
        },
      ],
    };
  },
});
