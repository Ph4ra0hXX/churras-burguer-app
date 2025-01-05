<script>
import { ref, watch, onUpdated } from "vue";
import { carrinhoStore } from "../store/produtos";
import { useToast } from "vue-toastification";
import router from "../router/index";

export default {
  setup() {
    const toast = useToast();

    const carrinho = carrinhoStore();

    const Burger = ref({
      Pao: [
        {
          nome: "Filé de Frango Trinchado",
          preco: 20.0,
          quantidade: 0,
          descricao: "Acompanha: batata frita e arroz.",
        },
        {
          nome: "Boi Trinchado",
          preco: 28.0,
          quantidade: 0,
          descricao: "Acompanha: batata frita e arroz.",
        },
        {
          nome: "Batata Frita",
          preco: 12.0,
          quantidade: 0,
          descricao: "-",
        },
        {
          nome: "Batata Frita Especial",
          preco: 18.0,
          quantidade: 0,
          descricao: "(Cheddar e Bacon)",
        },
        {
          nome: "Calabresa com Fritas",
          preco: 22.0,
          quantidade: 0,
          descricao: "-",
        },
        {
          nome: "Arroz Branco",
          preco: 8.0,
          quantidade: 0,
          descricao: "-",
        },
        {
          nome: "Boi Trinchado Acebolado - 100g",
          preco: 11.0,
          quantidade: 0,
          descricao: "(Pedido mínimo: 200g)",
        },
        {
          nome: "Frango Trinchado Acebolado - 100g",
          preco: 8.0,
          quantidade: 0,
          descricao: "(Pedido mínimo: 200g)",
        },
      ],
      Adicionais: [
        { nome: "Filé de Frango Trinchado", preco: 5.0, quantidade: 0 },
        { nome: "Calabresa", preco: 3.0, quantidade: 0 },
        { nome: "Boi Trinchado", preco: 8.0, quantidade: 0 },
        { nome: "Presunto Peru", preco: 2.5, quantidade: 0 },
        { nome: "Carne de Sol Desfiada", preco: 5.0, quantidade: 0 },
        { nome: "Batata Palha", preco: 1.5, quantidade: 0 },
        { nome: "Queijo Mussarela", preco: 2.5, quantidade: 0 },
        { nome: "Milho Verde", preco: 1.0, quantidade: 0 },
        { nome: "Queijo Cheddar", preco: 3.0, quantidade: 0 },
        { nome: "Queijo Coalho", preco: 2.0, quantidade: 0 },
        { nome: "Bacon", preco: 3.0, quantidade: 0 },
      ],
    });

    function salvarPedido() {
      console.log(Burger.value);

      carrinho.burgers.push(Burger.value);

      router.push("/");

      toast.success("Adicionado com sucesso!", {
        timeout: 2000,
        position: "top-right",
        icon: false,
        showCloseButtonOnHover: true,
      });
    }

    function voltar() {
      router.push("/");
    }

    return {
      Burger,
      salvarPedido,
      voltar,
    };
  },
};
</script>

<template>
  <div id="cardapio">
    <div id="listar">
      <div class="dotted-line">
        <hr />
        <span id="textDividers">PORÇÕES</span>
        <hr />
      </div>
      <div v-for="(item, index) in Burger.Pao" :key="item">
        <button class="botao1" @click="item.quantidade++">+</button>

        <button
          v-if="item.quantidade > 0"
          class="botao2"
          @click="item.quantidade--"
        >
          -
        </button>

        <label style="pointer-events: none" id="nomeItem" for="adicional"
          ><span id="quantidadeDiv">{{ item.quantidade }}x</span>
          {{ item.nome }}</label
        >
        <label id="preco">R$: {{ item.preco.toFixed(2) }}</label>
        <p id="itens">{{ item.descricao }}</p>
        <br />
      </div>
      <!--     <div class="dotted-line">
        <hr />
        <span id="textDividers">Adicionais</span>
        <hr />
      </div>
      <div v-for="(item, index) in Burger.Adicionais" :key="item">
        <button class="botao1" @click="item.quantidade++">+</button>

        <button
          v-if="item.quantidade > 0"
          class="botao2"
          @click="item.quantidade--"
        >
          -
        </button>

        <label style="pointer-events: none" id="nomeItem" for="adicional"
          ><span id="quantidadeDiv">{{ item.quantidade }}x</span>
          {{ item.nome }}</label
        >
        <label id="preco">R$: {{ item.preco.toFixed(2) }}</label>
        <p id="itens"></p>
        <br />
      </div>
-->
      <!---------------------------->

      <button @click="salvarPedido" id="butOpcoes" type="submit" value="Submit">
        adicionar
      </button>

      <button id="butOpcoes2" @click="voltar()" type="submit" value="Submit">
        voltar
      </button>
    </div>
  </div>
</template>

<style>
#observacao {
  padding: 5px;
  margin-bottom: 20px;
  height: 60px;
}

#quantidadeDiv {
  font-weight: bold;
  color: #f25430;
  font-size: 20px;
}

#textDividers {
  color: #f25430;
  font-family: "Harrison-Rough";
  font-size: 40px;
  font-weight: lighter;
  text-transform: uppercase;
}

.dotted-line {
  display: flex;
  align-items: center;
  text-align: center;
  margin: 20px 0;
}

.dotted-line hr {
  flex: 1;
  border: none;
  border-top: 2px dashed white;
  margin: 0 10px;
}

.dotted-line span {
  font-size: 18px;
  font-weight: bold;
  color: #333;
}

.botao1 {
  background-color: #f25430;
  color: #000000;
  border: none;
  padding: 5px 10px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  border-bottom-left-radius: 20px;
  border-top-left-radius: 20px;
  width: 35px;
  margin-right: 2px;
}

.botao2 {
  background-color: #f25430;
  color: #000000;
  border: none;
  padding: 5px 10px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
  width: 35px;
  margin-left: 2px;
}

#nomeItem {
  font-size: 16px;
  margin-left: 7px;
}

#tituloRadio {
  display: flex;
  align-items: center;
}

#tituloDoRadio {
  margin-left: 3px;
}

input[type="radio"] {
  margin-left: -3px;
  border: 0px;
  width: 30px;
  height: 2em;
  accent-color: #f27141;
}
</style>
