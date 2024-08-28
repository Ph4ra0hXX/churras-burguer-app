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
          nome: "Sopa de Feijão",
          preco: 8.00,
          quantidade: 0,
          diasSemana: ["segunda-feira"],
        },
        {
          nome: "Sopa de Costela",
          preco: 8.00,
          quantidade: 0,
          diasSemana: ["sexta-feira"],
        },
      ],
    });

    function deveExibir(item) {
      const hoje = new Date().toLocaleDateString("pt-BR", {
        weekday: "long",
      });

      return item.diasSemana.includes(hoje);
    }

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

    function updateQuantities(selectedItem) { }

    return {
      Burger,
      salvarPedido,
      updateQuantities,
      voltar,
      deveExibir,
    };
  },
};
</script>

<template>
  <div id="cardapio">
    <div id="listar">
      <div class="dotted-line">
        <hr />
        <span id="textDividers">Sopas</span>
        <hr />
      </div>
      <div v-for="(item, index) in Burger.Pao" :key="item">
        <div v-if="deveExibir(item)">
          <button class="botao1" @click="item.quantidade++, updateQuantities(item)">
            +
          </button>

          <button v-if="item.quantidade > 0" class="botao2" @click="item.quantidade--">
            -
          </button>

          <label style="pointer-events: none" id="nomeItem" for="adicional"><span id="quantidadeDiv">{{ item.quantidade
              }}x</span>
            {{ item.nome }}</label>
          <label id="preco">R$: {{ item.preco.toFixed(2) }}</label>
          <p id="itens"></p>
          <br />
        </div>
      </div>

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
