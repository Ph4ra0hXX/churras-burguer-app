<script>
import { ref, onUpdated, onMounted } from "vue";
import router from "../router/index";
import { useToast } from "vue-toastification";
import { carrinhoStore } from "../store/produtos";

export default {
  setup() {
    const toast = useToast();

    const carrinho = carrinhoStore();

    const burgers = ref([...carrinho.burgers]);
    const macarronadas = ref([...carrinho.macarronadas]);
    const batatas = ref([...carrinho.batatas]);
    const combos = ref([...carrinho.combos]);

    const bebidas = ref([...carrinho.bebidas]);

    const pedidos = ref([
      ...carrinho.burgers,
      ...carrinho.macarronadas,
      ...carrinho.batatas,
      ...carrinho.combos,
      ...carrinho.sobremesas,
      ...carrinho.bebidas,
    ]);

    function mensagemDeRemover() {
      toast.success("✅ Item removido com sucesso!", {
        timeout: 2000,
        position: "top-right",
        icon: false,
        showCloseButtonOnHover: true,
      });
    }

    function checarSeCarrinhoNaoEstaVazio() {
      if (carrinho.getTotalPedidos > 0) {
        router.push("/entrega");
      } else {
        toast.warning("🛒 Carrinho vazio!", {
          timeout: 2000,
          position: "top-right",
          icon: false,
          showCloseButtonOnHover: true,
        });
      }
    }

    function notificacaoAdicionarPedido() {
      toast.success("Adicionado com sucesso!", {
        timeout: 2000,
        position: "top-right",
        icon: false,
        showCloseButtonOnHover: true,
      });
    }

    function notificacaoRemoverPedido() {
      toast.info("Removido com sucesso!", {
        timeout: 2000,
        position: "top-right",
        icon: false,
        showCloseButtonOnHover: true,
      });
    }

    function removerPedidoBurgers(index) {
      this.carrinho.burgers.splice(index, 1);
      this.notificacaoRemoverPedido();
    }

    function removerItemBurgers(pedidoIndex, secao, itemIndex) {
      this.carrinho.burgers[pedidoIndex][secao].splice(itemIndex, 1);
    }

    function aumentarQuantidadeBurgers(pedidoIndex, secao, itemIndex) {
      this.carrinho.burgers[pedidoIndex][secao][itemIndex].quantidade++;
    }

    function diminuirQuantidadeBurgers(pedidoIndex, secao, itemIndex) {
      if (this.carrinho.burgers[pedidoIndex][secao][itemIndex].quantidade > 0) {
        this.carrinho.burgers[pedidoIndex][secao][itemIndex].quantidade--;
      }

      this.carrinho.burgers = removeObjetosSeQuantidadeZero(
        this.carrinho.burgers
      );
    }

    /*-------------------------------------------*/

    function removerPedidoMacarronada(index) {
      this.carrinho.macarronadas.splice(index, 1);
      this.notificacaoRemoverPedido();
    }

    function removerItemMacarronada(pedidoIndex, secao, itemIndex) {
      this.carrinho.macarronadas[pedidoIndex][secao].splice(itemIndex, 1);
    }

    function aumentarQuantidadeMacarronada(pedidoIndex, secao, itemIndex) {
      this.carrinho.macarronadas[pedidoIndex][secao][itemIndex].quantidade++;
    }

    function diminuirQuantidadeMacarronada(pedidoIndex, secao, itemIndex) {
      if (
        this.carrinho.macarronadas[pedidoIndex][secao][itemIndex].quantidade > 0
      ) {
        this.carrinho.macarronadas[pedidoIndex][secao][itemIndex].quantidade--;
      }

      this.carrinho.macarronadas = removeObjetosSeQuantidadeZero(
        this.carrinho.macarronadas
      );
    }

    /*-------------------------------------------*/

    function removerPedidoBatata(index) {
      this.carrinho.batatas.splice(index, 1);
      this.notificacaoRemoverPedido();
    }

    function removerItemBatata(pedidoIndex, secao, itemIndex) {
      this.carrinho.batatas[pedidoIndex][secao].splice(itemIndex, 1);
    }

    function aumentarQuantidadeBatata(pedidoIndex, secao, itemIndex) {
      this.carrinho.batatas[pedidoIndex][secao][itemIndex].quantidade++;
    }

    function diminuirQuantidadeBatata(pedidoIndex, secao, itemIndex) {
      if (this.carrinho.batatas[pedidoIndex][secao][itemIndex].quantidade > 0) {
        this.carrinho.batatas[pedidoIndex][secao][itemIndex].quantidade--;
      }

      this.carrinho.batatas = removeObjetosSeQuantidadeZero(
        this.carrinho.batatas
      );
    }

    /*-------------------------------------------*/

    function removerPedidoCombo(index) {
      this.carrinho.combos.splice(index, 1);
      this.notificacaoRemoverPedido();
    }

    function removerItemCombo(pedidoIndex, secao, itemIndex) {
      this.carrinho.combos[pedidoIndex][secao].splice(itemIndex, 1);
    }

    function aumentarQuantidadeCombo(pedidoIndex, secao, itemIndex) {
      this.carrinho.combos[pedidoIndex][secao][itemIndex].quantidade++;
    }

    function diminuirQuantidadeCombo(pedidoIndex, secao, itemIndex) {
      if (this.carrinho.combos[pedidoIndex][secao][itemIndex].quantidade > 0) {
        this.carrinho.combos[pedidoIndex][secao][itemIndex].quantidade--;
      }

      this.carrinho.combos = removeObjetosSeQuantidadeZero(
        this.carrinho.combos
      );
    }

    /*-------------------------------------------*/

    function removerPedidoSobremesa(index) {
      this.carrinho.sobremesas.splice(index, 1);
      this.notificacaoRemoverPedido();
    }

    function removerItemSobremesa(pedidoIndex, secao, itemIndex) {
      this.carrinho.sobremesas[pedidoIndex][secao].splice(itemIndex, 1);
    }

    function aumentarQuantidadeSobremesa(pedidoIndex, secao, itemIndex) {
      this.carrinho.sobremesas[pedidoIndex][secao][itemIndex].quantidade++;
    }

    function diminuirQuantidadeSobremesa(pedidoIndex, secao, itemIndex) {
      if (
        this.carrinho.sobremesas[pedidoIndex][secao][itemIndex].quantidade > 0
      ) {
        this.carrinho.sobremesas[pedidoIndex][secao][itemIndex].quantidade--;
      }

      this.carrinho.sobremesas = removeObjetosSeQuantidadeZero(
        this.carrinho.sobremesas
      );
    }

    /*-------------------------------------------*/

    function removerPedidoBebida(index) {
      this.carrinho.bebidas.splice(index, 1);
      this.notificacaoRemoverPedido();
    }

    function removerItemBebida(pedidoIndex, secao, itemIndex) {
      this.carrinho.bebidas[pedidoIndex][secao].splice(itemIndex, 1);
    }

    function aumentarQuantidadeBebida(pedidoIndex, secao, itemIndex) {
      this.carrinho.bebidas[pedidoIndex][secao][itemIndex].quantidade++;
    }

    function diminuirQuantidadeBebida(pedidoIndex, secao, itemIndex) {
      if (this.carrinho.bebidas[pedidoIndex][secao][itemIndex].quantidade > 0) {
        this.carrinho.bebidas[pedidoIndex][secao][itemIndex].quantidade--;
      }

      this.carrinho.bebidas = removeObjetosSeQuantidadeZero(
        this.carrinho.bebidas
      );
    }

    function removeObjetosSeQuantidadeZero(array) {
      return array.filter((objeto) => {
        return Object.values(objeto).some((categoriaItens) => {
          return categoriaItens.some((item) => item.quantidade > 0);
        });
      });
    }

    return {
      burgers,
      pedidos,
      macarronadas,
      bebidas,
      batatas,
      carrinho,
      notificacaoAdicionarPedido,
      notificacaoRemoverPedido,
      checarSeCarrinhoNaoEstaVazio,
      mensagemDeRemover,
      removerPedidoBurgers,
      removerItemBurgers,
      aumentarQuantidadeBurgers,
      diminuirQuantidadeBurgers,
      removerPedidoMacarronada,
      removerItemMacarronada,
      aumentarQuantidadeMacarronada,
      diminuirQuantidadeMacarronada,
      removerPedidoBatata,
      removerItemBatata,
      aumentarQuantidadeBatata,
      diminuirQuantidadeBatata,
      removerPedidoBebida,
      removerItemBebida,
      aumentarQuantidadeBebida,
      diminuirQuantidadeBebida,
      removerPedidoSobremesa,
      removerItemSobremesa,
      aumentarQuantidadeSobremesa,
      diminuirQuantidadeSobremesa,
      removerPedidoCombo,
      removerItemCombo,
      aumentarQuantidadeCombo,
      diminuirQuantidadeCombo,
    };
  },
};
</script>

<template>
  <div class="paypal">
    <div class="paypal__subheader-wrapper">
      <div class="paypal__subheader">
        <h1 class="paypal__username">Olá 👋</h1>
        <span class="paypal__help-text"
          >Você selecionou {{ carrinho.getTotalPedidos }} item!</span
        >
      </div>
    </div>
    <div class="paypal__cart">
      <hr />
      <div
        id="pedidoFundo"
        v-for="(pedido, pedidoIndex) in carrinho.burgers"
        :key="pedidoIndex"
      >
        <!-- <p id="posicaoPedido">Pedido N° {{ pedidoIndex + 1 }}</p>-->

        <div v-for="(secaoItens, secao) in pedido" :key="secao">
          <p v-for="(item, itemIndex) in secaoItens" :key="itemIndex">
            <template v-if="item.quantidade > 0">
              <div id="priceAndDiv">
                <div id="priceAndName">
                  <div>
                    <span id="quantidadeDiv">{{ item.quantidade }}x</span>
                    {{ item.nome }}
                  </div>
                </div>
                <div>
                  <button
                    @click="
                      aumentarQuantidadeBurgers(pedidoIndex, secao, itemIndex)
                    "
                    class="botao1"
                  >
                    +
                  </button>

                  <button
                    @click="
                      diminuirQuantidadeBurgers(pedidoIndex, secao, itemIndex)
                    "
                    class="botao2"
                  >
                    -
                  </button>
                </div>
              </div>
            </template>
          </p>
        </div>
        <br />

        <button id="butDelete" @click="removerPedidoBurgers(pedidoIndex)">
          Remover Pedido
        </button>
        <br />
        <br />
        <hr />
      </div>
      <div
        id="pedidoFundo"
        v-for="(pedido, pedidoIndex) in carrinho.macarronadas"
        :key="pedidoIndex"
      >
        <!-- <p id="posicaoPedido">Pedido N° {{ pedidoIndex + 1 }}</p>-->

        <div v-for="(secaoItens, secao) in pedido" :key="secao">
          <p v-for="(item, itemIndex) in secaoItens" :key="itemIndex">
            <template v-if="item.quantidade > 0">
              <div id="priceAndDiv">
                <div id="priceAndName">
                  <div>
                    <span id="quantidadeDiv">{{ item.quantidade }}x</span>
                    {{ item.nome }}
                  </div>
                </div>
                <div>
                  <button
                    @click="
                      aumentarQuantidadeMacarronada(
                        pedidoIndex,
                        secao,
                        itemIndex
                      )
                    "
                    class="botao1"
                  >
                    +
                  </button>

                  <button
                    @click="
                      diminuirQuantidadeMacarronada(
                        pedidoIndex,
                        secao,
                        itemIndex
                      )
                    "
                    class="botao2"
                  >
                    -
                  </button>
                </div>
              </div>
            </template>
          </p>
        </div>
        <br />

        <button id="butDelete" @click="removerPedidoMacarronada(pedidoIndex)">
          Remover Pedido
        </button>
        <br />
        <br />
        <hr />
      </div>
      <div
        id="pedidoFundo"
        v-for="(pedido, pedidoIndex) in carrinho.batatas"
        :key="pedidoIndex"
      >
        <!-- <p id="posicaoPedido">Pedido N° {{ pedidoIndex + 1 }}</p>-->

        <div v-for="(secaoItens, secao) in pedido" :key="secao">
          <p v-for="(item, itemIndex) in secaoItens" :key="itemIndex">
            <template v-if="item.quantidade > 0">
              <div id="priceAndDiv">
                <div id="priceAndName">
                  <div>
                    <span id="quantidadeDiv">{{ item.quantidade }}x</span>
                    {{ item.nome }}
                  </div>
                </div>
                <div>
                  <button
                    @click="
                      aumentarQuantidadeBatata(pedidoIndex, secao, itemIndex)
                    "
                    class="botao1"
                  >
                    +
                  </button>

                  <button
                    @click="
                      diminuirQuantidadeBatata(pedidoIndex, secao, itemIndex)
                    "
                    class="botao2"
                  >
                    -
                  </button>
                </div>
              </div>
            </template>
          </p>
        </div>
        <br />

        <button id="butDelete" @click="removerPedidoBatata(pedidoIndex)">
          Remover Pedido
        </button>
        <br />
        <br />
        <hr />
      </div>
      <div
        id="pedidoFundo"
        v-for="(pedido, pedidoIndex) in carrinho.combos"
        :key="pedidoIndex"
      >
        <!-- <p id="posicaoPedido">Pedido N° {{ pedidoIndex + 1 }}</p>-->

        <div v-for="(secaoItens, secao) in pedido" :key="secao">
          <p v-for="(item, itemIndex) in secaoItens" :key="itemIndex">
            <template v-if="item.quantidade > 0">
              <div id="priceAndDiv">
                <div id="priceAndName">
                  <div>
                    <span id="quantidadeDiv">{{ item.quantidade }}x</span>
                    {{ item.nome }}
                  </div>
                </div>
                <div>
                  <button
                    @click="
                      aumentarQuantidadeCombo(pedidoIndex, secao, itemIndex)
                    "
                    class="botao1"
                  >
                    +
                  </button>

                  <button
                    @click="
                      diminuirQuantidadeCombo(pedidoIndex, secao, itemIndex)
                    "
                    class="botao2"
                  >
                    -
                  </button>
                </div>
              </div>
            </template>
          </p>
        </div>
        <br />

        <button id="butDelete" @click="removerPedidoCombo(pedidoIndex)">
          Remover Pedido
        </button>
        <br />
        <br />
        <hr />
      </div>
      <div
        id="pedidoFundo"
        v-for="(pedido, pedidoIndex) in carrinho.sobremesas"
        :key="pedidoIndex"
      >
        <!-- <p id="posicaoPedido">Pedido N° {{ pedidoIndex + 1 }}</p>-->

        <div v-for="(secaoItens, secao) in pedido" :key="secao">
          <p v-for="(item, itemIndex) in secaoItens" :key="itemIndex">
            <template v-if="item.quantidade > 0">
              <div id="priceAndDiv">
                <div id="priceAndName">
                  <div>
                    <span id="quantidadeDiv">{{ item.quantidade }}x</span>
                    {{ item.nome }}
                  </div>
                </div>
                <div>
                  <button
                    @click="
                      aumentarQuantidadeSobremesa(pedidoIndex, secao, itemIndex)
                    "
                    class="botao1"
                  >
                    +
                  </button>

                  <button
                    @click="
                      diminuirQuantidadeSobremesa(pedidoIndex, secao, itemIndex)
                    "
                    class="botao2"
                  >
                    -
                  </button>
                </div>
              </div>
            </template>
          </p>
        </div>
        <br />

        <button id="butDelete" @click="removerPedidoSobremesa(pedidoIndex)">
          Remover Pedido
        </button>
        <br />
        <br />
        <hr />
      </div>
      <div
        id="pedidoFundo"
        v-for="(pedido, pedidoIndex) in carrinho.bebidas"
        :key="pedidoIndex"
      >
        <!-- <p id="posicaoPedido">Pedido N° {{ pedidoIndex + 1 }}</p>-->

        <div v-for="(secaoItens, secao) in pedido" :key="secao">
          <p v-for="(item, itemIndex) in secaoItens" :key="itemIndex">
            <template v-if="item.quantidade > 0">
              <div id="priceAndDiv">
                <div id="priceAndName">
                  <div>
                    <span id="quantidadeDiv">{{ item.quantidade }}x</span>
                    {{ item.nome }}
                  </div>
                </div>
                <div>
                  <button
                    @click="
                      aumentarQuantidadeBebida(pedidoIndex, secao, itemIndex)
                    "
                    class="botao1"
                  >
                    +
                  </button>

                  <button
                    @click="
                      diminuirQuantidadeBebida(pedidoIndex, secao, itemIndex)
                    "
                    class="botao2"
                  >
                    -
                  </button>
                </div>
              </div>
            </template>
          </p>
        </div>
        <br />

        <button id="butDelete" @click="removerPedidoBebida(pedidoIndex)">
          Remover Pedido
        </button>
        <br />
        <br />
        <hr />
      </div>
    </div>
    <div class="paypal__footer">
      <div id="pricecheck">Total: {{ carrinho.getValorTotal }}</div>

      <div class="detail-info">
        <br />

        <div class="input-field">
          <textarea
            v-model="carrinho.observacao"
            type="text"
            id=""
            placeholder="Observações"
          ></textarea>
        </div>
      </div>

      <button @click="checarSeCarrinhoNaoEstaVazio()" class="btn">
        confirmar
      </button>
    </div>
  </div>
</template>

<style scoped>
#divisor {
  width: 250px;
  margin: 0 auto;
}

* {
  font-family: Barlow-SemiBold;
}

#posicaoPedido {
  font-size: 20px;
  text-align: center;
}

#pedidoFundo {
  border-radius: 5px;
}

#butDelete {
  width: 100%;
  padding: 10px 20px;
  border: 0;
  background-color: #f63c5bc0;
  color: #fff;
  cursor: pointer;
}

#pricecheck {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
}

#priceAndDiv {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

#priceAndName {
  display: flex;
  flex-direction: column;
}

#quantidadeDiv {
  font-weight: bold;
  font-size: 20px;
  margin-left: 10px;
  margin-right: 10px;
  color: #000;
}

.botao1 {
  background-color: #f2cb05;
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
  background-color: #f2cb05;
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
#quantidadeDePedidos {
  color: #000000;
  font-size: 22px;
}
.input-field {
  display: flex;
  flex-direction: column;
  margin-right: 6px;
}
.input-field label {
  font-size: 0.7rem;
  font-family: Barlow-SemiBold;
  padding-bottom: 5px;
  font-weight: 500;
}
.input-field input {
  border-radius: 3px;
  width: 100%;
  border: 1px solid #9ea0a9;
}
.input-field input:focus {
  border: 1px solid #f27141;
  outline: none;
}
textarea {
  margin: 0px auto;
  width: 100%;
  height: 70px;
}

.detail-info p {
  font-size: 0.7rem;
  font-family: Barlow-SemiBold;
  text-align: center;
  margin-top: 1.8rem;
}

.info {
  font-size: 1rem;
  font-family: Barlow-SemiBold;
}

#botaoExcluir {
  display: block;
  padding: 12px 16px;
  margin-top: -12px;
  cursor: pointer;
}

#carrinhoVazio {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 200px;
}

.btn2 {
  width: 100%;
  padding-left: 1em;
  margin-left: 2px;
  margin-right: 2px;
  padding-right: 1em;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  background: #000000;
  border: none;
  color: #fff;
  border-radius: 3px;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  font-family: Barlow-SemiBold;
}

.btn {
  margin-top: 0.7rem;
  width: 100%;
  padding: 1rem;
  letter-spacing: 0.8px;
  background: #fdd426;
  border: none;
  color: #fff;
  border-radius: 3px;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  font-family: Barlow-SemiBold;
}
.btn:hover {
  background: #fdd426;
  letter-spacing: 1px;
  box-shadow: 1px 4px 8px rgba(242, 113, 65, 0.2);
}
.inspired-by {
  display: block;
  position: relative;
  margin-bottom: 15px;
  text-align: center;
  color: #fff;
  font-size: 14px;
  font-family: Barlow-SemiBold;
}

.paypal {
  position: relative;
  left: 50%;
  display: inline-block;
  max-width: 100%;
  width: auto;
  max-width: 450px;
  min-width: 350px;
  padding: 0px 0;
  clear: both;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  -o-transform: translateX(-50%);
  transform: translateX(-50%);
  margin-bottom: 50px;
}

.paypal__header {
  display: flex;
  -ms-align-items: flex-start;
  align-items: flex-start;

  padding: 30px 30px 45px;
  background: #fbfbfb;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
}

.paypal__logo-wrapper {
  flex: 1 0 40%;
}

.paypal__logo {
  display: block;
  width: 50px;
  height: auto;
  margin-left: 15px;
}

.paypal__header-info {
  flex: 1 0 50%;
}

.paypal__date,
.paypal__ref {
  display: block;
  font-size: 19px;
  color: #aaa;
  font-weight: 300;
}

.paypal__date {
  margin-bottom: 5px;
}

.paypal__subheader-wrapper {
  margin-left: 10px;
  margin-right: 10px;
  background: #fbfbfb;
  padding-bottom: 10px;
  padding-top: 50px;
}

.paypal__subheader {
  padding: 0 45px 0 40px;
  border-left: 5px solid #fdd426;
}

.paypal__username {
  margin: 0 0 10px 0;
  font-size: 22px;
  font-weight: 600;
  font-family: Barlow-SemiBold;
}

.paypal__help-text {
  color: #aaa;
  font-weight: 300;
  font-family: Barlow-SemiBold;
}

.paypal__cart {
  display: block;
  padding: 25px 10px 25px;
  margin-left: 10px;
  margin-right: 10px;
}

.paypal__cart-title {
  display: block;
  margin-top: 0;
  margin-bottom: 25px;
  text-align: center;
  font-family: Barlow-bold;
}

.paypal__cart-list {
  margin: 0;
  padding: 0 10px;
  list-style: none;
  font-family: Barlow-SemiBold;
}

.paypal__cart-item {
  display: block;
  padding-top: 0px;
  margin-bottom: 20px;
  border-top: 2px dashed #aaa;
  font-size: 18px;
}

.paypal__cart-item:first-child {
  border-top: 0;
}

.paypal__cart-item:last-child {
  border-top: 2px solid #000;
  margin-bottom: 10px !important;
}

.paypal__index {
  padding-right: 15px;
  color: #aaa;
  font-weight: 300;
}

.paypal__item-descricao {
  color: #aaa;
  font-size: 15px;
}

.paypal__item-name {
  color: #201726;
  font-weight: 300;
}

.paypal__item-price2 {
  display: flex;
  flex-direction: row;
  float: right;
  letter-spacing: 1px;
}

.paypal__item-price {
  float: right;
  letter-spacing: 1px;
}

.paypal__cart-total {
  font-size: 20px;
  text-transform: uppercase;
}

.paypal__footer {
  position: relative;
  padding: 0px 15px 30px 15px;
  border-top: 2px dashed #ffffff;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  margin-left: 10px;
  margin-right: 10px;
}

/* .paypal__footer::before,
.paypal__footer::after {
  content: "";
  position: absolute;
  top: 0;
  border: 4px solid transparent;
  -webkit-transform: translateY(calc(-50% - 1px));
  -ms-transform: translateY(calc(-50% - 1px));
  -o-transform: translateY(calc(-50% - 1px));
  transform: translateY(calc(-50% - 1px));
} */
/*
.paypal__footer::before {
  left: 0;
  border-left: 7px solid #201726;
}

.paypal__footer::after {
  right: 0;
  border-right: 7px solid #201726;
} */

.paypal__barcode {
  display: block;
  margin: 0 auto;
  max-width: 300px;

  height: auto;
}

.paypal__cart {
  background-color: #fbfbfb;
}

.paypal__footer {
  background-color: #fbfbfb;
}
</style>
