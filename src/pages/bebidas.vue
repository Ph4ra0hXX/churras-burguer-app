<script>
import { ref, watch, onUpdated } from "vue";
import { carrinhoStore } from "../store/produtos";
import { useToast } from "vue-toastification";
import router from "../router/index";

export default {
  setup() {
    const toast = useToast();

    const carrinho = carrinhoStore();

    const Bebidas = ref({
      tipos: [
        {
          nome: "Água sem Gás 500ml",
          quantidade: 0,
          preco: 3.0,
        },
        {
          nome: "Água com Gás 500ml",
          quantidade: 0,
          preco: 4.0,
        },
        {
          nome: "Água sem Gás 1,5L",
          quantidade: 0,
          preco: 6.0,
        },
        {
          nome: "Coca Lata",
          quantidade: 0,
          preco: 5.0,
        },
        {
          nome: "Coca Zero Lata",
          quantidade: 0,
          preco: 5.0,
        },
        {
          nome: "Fanta Laranja Lata",
          quantidade: 0,
          preco: 5.0,
        },
        {
          nome: "Uva Lata",
          quantidade: 0,
          preco: 5.0,
        },
        {
          nome: "Guaraná Lata",
          quantidade: 0,
          preco: 5.0,
        },
        {
          nome: "Cajuína Lata",
          quantidade: 0,
          preco: 6.0,
        },
        {
          nome: "Coca Cola 600ml",
          quantidade: 0,
          preco: 7.0,
        },
        {
          nome: "Suco Acerola 300ml",
          quantidade: 0,
          preco: 4.0,
        },
        {
          nome: "Suco Goiaba 300ml",
          quantidade: 0,
          preco: 4.0,
        },
        {
          nome: "Suco Maracujá 300ml",
          quantidade: 0,
          preco: 5.0,
        },

        {
          nome: "Vitamina Maracujá 300ml",
          quantidade: 0,
          preco: 9.0,
        },
        {
          nome: "Vitamina Acerola 300ml",
          quantidade: 0,
          preco: 8.0,
        },
        {
          nome: "Vitamina Goiaba 300ml",
          quantidade: 0,
          preco: 8.0,
        },
        {
          nome: "Coca Cola 1L",
          quantidade: 0,
          preco: 9.0,
        },
        {
          nome: "Coca Cola Zero 1L",
          quantidade: 0,
          preco: 10.0,
        },
        {
          nome: "Guaraná 1L",
          quantidade: 0,
          preco: 8.0,
        },
        {
          nome: "Pepsi 1L",
          quantidade: 0,
          preco: 8.0,
        },
      ],
    });

    function salvarPedido() {
      carrinho.bebidas.push(Bebidas.value);

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
      Bebidas,
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
        <span id="textDividers">Bebidas</span>
        <hr />
      </div>
      <div v-for="(item, index) in Bebidas.tipos" :key="item">
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
  text-transform: uppercase;
  font-size: 40px;
  font-weight: lighter;
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
