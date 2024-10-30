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
          id: 9,
          nome: "ASSUSTADORAMENTE",
          img: "food9.webp",
          descricao: "Delicioso",
          url: "/sopas",
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
          nome: "COMBO",
          img: "food6.webp",
          descricao: "Completo",
          url: "/combo",
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
          id: 2,
          nome: "PRATOS ESPECIAIS",
          img: "food12.webp",
          descricao: "Verificar disponibilidade",
          url: "/macarronada",
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
          id: 6,
          nome: "PORÇÕES",
          img: "food3.webp",
          descricao: "Disponível todos os dias",
          url: "/batata",
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
          id: 9,
          nome: "ASSUSTADORAMENTE",
          img: "food9.webp",
          descricao: "Delicioso",
          url: "/sopas",
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
          nome: "COMBO",
          img: "food6.webp",
          descricao: "Completo",
          url: "/combo",
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
          id: 2,
          nome: "PRATOS ESPECIAIS",
          img: "food12.webp",
          descricao: "Verificar disponibilidade",
          url: "/macarronada",
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
          id: 6,
          nome: "PORÇÕES",
          img: "food3.webp",
          descricao: "Disponível todos os dias",
          url: "/batata",
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
