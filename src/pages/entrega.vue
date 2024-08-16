<script>
import { ref } from "vue";
import { useToast } from "vue-toastification";
import { carrinhoStore } from "../store/produtos";

import { useRouter } from "vue-router";

export default {
  setup() {
    const carrinho = carrinhoStore();
    const toast = useToast();

    const router = useRouter();

    const pedidoMontado = ref("");

    const apesoEscolhido = ref(0);

    const taxaLocalidade = ref([{ "nome": "Boa Fé", "preco": "3.00" },
      { "nome": "Bom Nome", "preco": "3.00" },
      { "nome": "Pitombeira", "preco": "3.00" },
      { "nome": "Luiz Alves", "preco": "4.00" },
      { "nome": "Brotolândia", "preco": "4.00" },
      { "nome": "São Raimundo", "preco": "4.00" },
      { "nome": "Estrada das Flores", "preco": "5.00" },
      { "nome": "Centro", "preco": "5.00" },
      { "nome": "Sítio Ilha", "preco": "5.00" },
      { "nome": "João 23", "preco": "6.00" },
      { "nome": "Limoeirinho", "preco": "6.00" },
      { "nome": "Populares", "preco": "6.00" },
      { "nome": "Santa Luzia", "preco": "7.00" },
      { "nome": "Sítio Socorro", "preco": "7.00" },
      { "nome": "Sítio Milagres", "preco": "8.00" },
      { "nome": "Conviver", "preco": "8.00" },
      { "nome": "Cidade Alta", "preco": "20.00" },
      { "nome": "Bom Fim", "preco": "20.00" },
      { "nome": "Arraial", "preco": "20.00" },
      { "nome": "Várzea do Cobra", "preco": "20.00" },
      { "nome": "Hospital Regional", "preco": "20.00" }]);

    function copyToClipboard() {
      navigator.clipboard
        .writeText("00495355364")
        .then(() => {
          toast.success("Pix copiado!", {
            timeout: 2000,
            position: "top-right",
            icon: false,
            showCloseButtonOnHover: true,
          });
        })
        .catch((error) => console.error("Erro ao copiar: " + error));
    }

    function finalizarPedido() {
      this.pedidoMontado = "";

      var dados = this.carrinho.burgers;

      if (dados.length > 0) {
        //this.pedidoMontado += "*Burger*\n\n";

        const resultado = dados
          .map((categoria) => {
            return Object.keys(categoria)
              .map((chave) => {
                const itensComQuantidade = categoria[chave].filter(
                  (item) => item.quantidade > 0
                );

                if (itensComQuantidade.length > 0) {
                  const categoriaFormatada = `${itensComQuantidade
                    .map((item) => ` *${item.quantidade}x* ${item.nome}`)
                    .join("\n")}`;
                  return `${categoriaFormatada}\n`;
                } else {
                  return null;
                }
              })
              .filter((categoria) => categoria !== null)
              .join("\n");
          })
          .filter((categoria) => categoria !== null)
          .join(`\n${"-".repeat(30)}\n\n`);

        this.pedidoMontado += resultado;
      }

      var numeroDoPedido = 1;

      if (dados.length > 0) {
        this.pedidoMontado += `\n${"-".repeat(31)}\n`;
      }

      var dados2 = this.carrinho.macarronadas;

      if (dados2.length > 0) {
        //this.pedidoMontado += "\n*Macarronada*\n\n";

        const resultado2 = dados2
          .map((categoria) => {
            return Object.keys(categoria)
              .map((chave) => {
                const itensComQuantidade = categoria[chave].filter(
                  (item) => item.quantidade > 0
                );

                if (itensComQuantidade.length > 0) {
                  const categoriaFormatada = `${itensComQuantidade
                    .map((item) => ` *${item.quantidade}x* ${item.nome}`)
                    .join("\n")}`;
                  return `${categoriaFormatada}\n`;
                } else {
                  return null;
                }
              })
              .filter((categoria) => categoria !== null)
              .join("\n");
          })
          .filter((categoria) => categoria !== null)
          .join(`\n${"-".repeat(30)}\n\n`);

        this.pedidoMontado += resultado2;
      }

      var dados3 = this.carrinho.batatas;

      if (dados3.length > 0) {
        //this.pedidoMontado += "\n*Batata Frita*\n\n";

        const resultado3 = dados3
          .map((categoria) => {
            return Object.keys(categoria)
              .map((chave) => {
                const itensComQuantidade = categoria[chave].filter(
                  (item) => item.quantidade > 0
                );

                if (itensComQuantidade.length > 0) {
                  const categoriaFormatada = `${itensComQuantidade
                    .map((item) => ` *${item.quantidade}x* ${item.nome}`)
                    .join("\n")}`;
                  return `${categoriaFormatada}\n`;
                } else {
                  return null;
                }
              })
              .filter((categoria) => categoria !== null)
              .join("\n");
          })
          .filter((categoria) => categoria !== null)
          .join(`\n${"-".repeat(30)}\n\n`);

        this.pedidoMontado += resultado3;
      }

      var dados6 = this.carrinho.sobremesas;

      if (dados6.length > 0) {
        //this.pedidoMontado += "\n*Sobremesas*\n\n";

        const resultado6 = dados6
          .map((categoria) => {
            return Object.keys(categoria)
              .map((chave) => {
                const itensComQuantidade = categoria[chave].filter(
                  (item) => item.quantidade > 0
                );

                if (itensComQuantidade.length > 0) {
                  const categoriaFormatada = `${itensComQuantidade
                    .map((item) => ` *${item.quantidade}x* ${item.nome}`)
                    .join("\n")}`;
                  return `${categoriaFormatada}\n`;
                } else {
                  return null;
                }
              })
              .filter((categoria) => categoria !== null)
              .join("\n");
          })
          .filter((categoria) => categoria !== null)
          .join(`\n${"-".repeat(30)}\n\n`);

        this.pedidoMontado += resultado6;
      }

      var dados4 = this.carrinho.bebidas;

      if (dados4.length > 0) {
        //this.pedidoMontado += "\n*Bebidas*\n\n";

        const resultado4 = dados4
          .map((categoria) => {
            return Object.keys(categoria)
              .map((chave) => {
                const itensComQuantidade = categoria[chave].filter(
                  (item) => item.quantidade > 0
                );

                if (itensComQuantidade.length > 0) {
                  const categoriaFormatada = `${itensComQuantidade
                    .map((item) => ` *${item.quantidade}x* ${item.nome}`)
                    .join("\n")}`;
                  return `${categoriaFormatada}\n`;
                } else {
                  return null;
                }
              })
              .filter((categoria) => categoria !== null)
              .join("\n");
          })
          .filter((categoria) => categoria !== null)
          .join(`\n${"-".repeat(30)}\n\n`);

        this.pedidoMontado += resultado4;
      }

      if (dados4.length > 0) {
        this.pedidoMontado += `\n${"-".repeat(30)}\n\n`;
      }

      var dados5 = this.carrinho.combos;

      if (dados5.length > 0) {
        //this.pedidoMontado += "\n*Combo*\n\n";

        const resultado5 = dados5
          .map((categoria) => {
            return Object.keys(categoria)
              .map((chave) => {
                const itensComQuantidade = categoria[chave].filter(
                  (item) => item.quantidade > 0
                );

                if (itensComQuantidade.length > 0) {
                  const categoriaFormatada = `${itensComQuantidade
                    .map((item) => ` *${item.quantidade}x* ${item.nome}`)
                    .join("\n")}`;
                  return `${categoriaFormatada}\n`;
                } else {
                  return null;
                }
              })
              .filter((categoria) => categoria !== null)
              .join("\n");
          })
          .filter((categoria) => categoria !== null)
          .join(`\n${"-".repeat(30)}\n\n`);

        this.pedidoMontado += resultado5;
      }

      if (dados5.length > 0) {
        this.pedidoMontado += `\n${"-".repeat(30)}\n\n`;
      }

      this.pedidoMontado += `\n*Observações:*\n - ${this.carrinho.observacao}\n`;

      if (this.carrinho.dadosPessoais.formaDeEntrega == "Vou buscar") {
        if (this.carrinho.dadosPessoais.nome != "") {
          this.pedidoMontado += `\n*Nome:*\n - ${this.carrinho.dadosPessoais.nome}\n`;
          this.pedidoMontado += `\n*Forma de entrega:*\n - ${this.carrinho.dadosPessoais.formaDeEntrega}\n`;
          this.pedidoMontado += `\n*Forma de Pagamento:*\n - ${this.carrinho.dadosPessoais.formaDePagamento}\n`;
          if (this.carrinho.dadosPessoais.formaDePagamento == "Dinheiro") {
            this.pedidoMontado += `\n*Troco para:*\n - ${this.carrinho.dadosPessoais.troco}\n`;
          }
          this.pedidoMontado += `\n${"-".repeat(30)}\n`;
          this.pedidoMontado += `\n*Total:* _${this.carrinho.getValorTotal}_\n`;

          this.pedidoMontado = encodeURIComponent(this.pedidoMontado);

          carrinho.pedidos = [];

          window.location.href = `https://wa.me/5588994634270?text=${this.pedidoMontado}`;
        } else {
          toast.warning("✏️ Preencha todos os campos", {
            timeout: 2000,
            position: "top-right",
            icon: false,
            showCloseButtonOnHover: true,
          });
        }
      }

      if (this.carrinho.dadosPessoais.formaDeEntrega == "Quero entrega") {
        if (
          this.carrinho.dadosPessoais.nome != "" &&
          this.carrinho.dadosPessoais.rua != "" &&
          this.carrinho.dadosPessoais.bairro.nome != "" &&
          this.carrinho.dadosPessoais.numero != "" &&
          this.carrinho.dadosPessoais.formaDePagamento != ""
        ) {
          this.pedidoMontado += `\n*Nome:*\n - ${this.carrinho.dadosPessoais.nome}\n`;
          this.pedidoMontado += `\n*Rua:*\n - ${this.carrinho.dadosPessoais.rua}\n`;
          this.pedidoMontado += `\n*Bairro:*\n - ${this.carrinho.dadosPessoais.bairro.nome}\n`;
          this.pedidoMontado += `\n*Número:*\n - ${this.carrinho.dadosPessoais.numero}\n`;
          this.pedidoMontado += `\n*Ponto de referência:*\n - ${this.carrinho.dadosPessoais.referencia}\n`;
          this.pedidoMontado += `\n*Forma de entrega:*\n - ${this.carrinho.dadosPessoais.formaDeEntrega}\n`;
          this.pedidoMontado += `\n*Forma de Pagamento:*\n - ${this.carrinho.dadosPessoais.formaDePagamento}\n`;
          if (this.carrinho.dadosPessoais.formaDePagamento == "Dinheiro") {
            this.pedidoMontado += `\n*Troco para:*\n - ${this.carrinho.dadosPessoais.troco}\n`;
          }
          this.pedidoMontado += `\n${"-".repeat(30)}\n`;
          this.pedidoMontado += `\n*Total:* _${(
            Number(this.carrinho.getValorTotal) + Number(this.carrinho.dadosPessoais.bairro.preco)
          ).toFixed(2)}_\n`;

          this.pedidoMontado = encodeURIComponent(this.pedidoMontado);

          carrinho.pedidos = [];

          window.location.href = `https://wa.me/5588994634270?text=${this.pedidoMontado}`;
        } else {
          toast.warning("✏️ Preencha todos os campos", {
            timeout: 2000,
            position: "top-right",
            icon: false,
            showCloseButtonOnHover: true,
          });
        }
      }
    }

    return {
      carrinho,
      finalizarPedido,
      apesoEscolhido,
      copyToClipboard,
      taxaLocalidade,
    };
  },
};
</script>

<template>
  <div class="container">
    <div class="checkout-card">
      <div class="title">
        <p>
          <span>Como deseja receber</span> <br />
          seu pedido?
        </p>
      </div>
      <div class="payment-container">
        <div class="price-card">
          <input v-model="carrinho.dadosPessoais.formaDeEntrega" value="Vou buscar" type="radio" name="Vou buscar"
            id="Vou buscar" />
          <div class="content">
            Vou buscar
            <span>grátis</span>
          </div>
          <label for="Vou buscar"></label>
        </div>
        <div class="price-card">
          <input v-model="carrinho.dadosPessoais.formaDeEntrega" value="Quero entrega" name="Quero entrega" type="radio"
            id="Quero entrega" />
          <div class="content">
            Quero entega
            <span>taxa de entrega</span>
          </div>
          <label for="Quero entrega"></label>
        </div>
      </div>

      <div class="detail-info">
        <div v-if="carrinho.dadosPessoais.formaDeEntrega == 'Vou buscar'">
          <div class="info">
            <h3>Seu Nome:</h3>
          </div>
          <div class="input-field">
            <input v-model="carrinho.dadosPessoais.nome" type="text" id="card_number" placeholder="" />
          </div>
          <br />
        </div>

        <div v-if="carrinho.dadosPessoais.formaDeEntrega == 'Quero entrega'">
          <div class="info">
            <h3>Seu Nome:</h3>
          </div>
          <div class="input-field">
            <input v-model="carrinho.dadosPessoais.nome" type="text" id="card_number" placeholder="" />
          </div>
          <br />
          <div class="info">
            <h3>Rua:</h3>
          </div>
          <div class="input-field">
            <input v-model="carrinho.dadosPessoais.rua" type="text" id="card_number" placeholder="" />
          </div>
          <br />
          <div class="info">
            <h3>Bairro:</h3>
          </div>

          <div class="input-field">
            <select id="card_bairro" v-model="carrinho.dadosPessoais.bairro" name="select">
              <option v-for="(local, index) in taxaLocalidade" :key="index" :value="local">
                {{ local.nome }} - {{ local.preco }}
              </option>
            </select>
          </div>

          <br />
          <div class="info">
            <h3>Número da Casa:</h3>
          </div>
          <div class="input-field">
            <input v-model="carrinho.dadosPessoais.numero" type="number" id="card_number" placeholder="" />
          </div>
          <br />
          <div class="info">
            <h3>Ponto de Referência:</h3>
          </div>
          <div class="input-field">
            <input v-model="carrinho.dadosPessoais.referencia" type="text" id="card_number" placeholder="" />
          </div>
          <br />
        </div>
        <div class="info">
          <h3>Formas de Pagamento:</h3>
        </div>
        <div class="payment-container">
          <div class="price-card">
            <input v-model="carrinho.dadosPessoais.formaDePagamento" value="Pix" name="price" type="radio" id="pix" />
            <div class="content">PIX</div>
            <label for="pix"></label>
          </div>
          <div class="price-card">
            <input v-model="carrinho.dadosPessoais.formaDePagamento" value="Cartão" name="price" type="radio"
              id="cartao" />
            <div class="content">Cartão</div>
            <label for="cartao"></label>
          </div>
          <div class="price-card">
            <input v-model="carrinho.dadosPessoais.formaDePagamento" value="Dinheiro" name="price" type="radio"
              id="dinheiro" />
            <div class="content">Dinheiro</div>
            <label for="dinheiro"></label>
          </div>
        </div>
        <br />
        <div v-if="carrinho.dadosPessoais.formaDePagamento == 'Pix'" class="input-field">
          <button id="butCopiarPix" @click="copyToClipboard">Copiar PIX</button>
          <p id="beneficiario">Beneficiário: José Rudney</p>
        </div>
        <div v-if="carrinho.dadosPessoais.formaDePagamento == 'Dinheiro'" class="info">
          <h3>Troco?</h3>
        </div>
        <div v-if="carrinho.dadosPessoais.formaDePagamento == 'Dinheiro'" class="input-field">
          <input v-model="carrinho.dadosPessoais.troco" type="number" id="card_number"
            placeholder="troco para 50 reais" />
        </div>


        <button @click="finalizarPedido()" class="btn">finalizar</button>
      </div>
    </div>
  </div>
</template>

<style scoped>


#card_bairro{
  height: 45px;
}

#beneficiario{
  text-align: center;
  margin-top: 5px;
  margin-bottom: 5px;
  color: #9ea0a9;
  font-size: 15px;
}
#textDescritivo {
  margin-top: 10px;
}

#butCopiarPix {
  background-color: #aff63c;
  height: 40px;
  border: 0;
  color: #fff;
  border-radius: 15px;
  cursor: pointer;
}

#formaDePagamento {
  display: flex;
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-bottom: 45px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 100%;
  font-family: Barlow-SemiBold;
}

.checkout-card {
  background: #fff;
  max-width: 450px;
  padding: 2rem;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.2);
  margin-left: 10px;
  margin-right: 10px;
}

.checkout-card .title span {
  color: #F25430;
}

.checkout-card .title p {
  font-size: 1.3rem;
  font-family: Barlow-SemiBold;
  text-align: center;
  padding: 1rem;
}

.price-container {
  display: flex;
  gap: 0.95rem;
  justify-content: space-evenly;
}

.payment-container {
  display: flex;
  gap: 0.3rem;
  justify-content: space-evenly;
}

.price-card {
  position: relative;
  /*   border:1px solid #bcbcbc; */
  padding: 1rem;
  border-radius: 3px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  outline: none;
  transition: 0.3s ease-in;
}

.price-card label {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  border-radius: 3px;
  border: 1px solid #bcbcbc;
  cursor: pointer;
}

.price-card input[type="radio"]:checked~label {
  border: 1px solid #F25430;
  background: #e4ec0d23;
  color: #F25430;
  outline: none;
  border-width: 2px;
}

.price-card input[type="radio"] {
  width: 30px;
  height: auto;
  border: 0;

  accent-color: #F25430;
  transform: scale(1.5);
}

.price-card .content {
  display: flex;
  flex-direction: column;
}

.price-card .content span {
  font-size: 0.7rem;
  font-family: Barlow-SemiBold;
}

.detail-info {
  padding-top: 2rem;
}

.info {
  margin-bottom: 10px;
}

.info h3 {
  letter-spacing: 1px;
}

.info small {
  font-size: 0.74rem;
  font-family: Barlow-SemiBold;
}

.input-field {
  display: flex;
  flex-direction: column;
}

.input-field label {
  font-size: 0.7rem;
  font-family: Barlow-SemiBold;
  padding-bottom: 5px;
  font-weight: 500;
}

.input-field input {
  padding: 0.75rem;
  border-radius: 3px;
  width: 100%;
  border: 1px solid #9ea0a9;
}

.input-field input:focus {
  border: 1px solid #F25430;
  outline: none;
}

.grid {
  display: flex;
  gap: 10px;
  margin-top: 0.5rem;
  justify-content: space-evenly;
}

.detail-info p {
  font-size: 0.7rem;
  font-family: Barlow-SemiBold;
  text-align: center;
  margin-top: 1.8rem;
}

.btn {
  font-size: 13px;
  margin-top: 0.7rem;
  width: 100%;
  padding: 1rem;
  letter-spacing: 0.8px;
  background: #F25430;
  border: none;
  color: #fff;
  border-radius: 3px;
  cursor: pointer;
  transition: 0.2s ease-in-out;
}
</style>
