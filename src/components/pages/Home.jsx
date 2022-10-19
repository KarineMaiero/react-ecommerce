import React from "react";
// import Default from "../../templates/Default";

export default function Home() {
  return (
    <div id="main">
      <div id="myModal" class="modal fade" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">
                Essa página não é adequada para menores de 18 anos.
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div class="modal-body">
              <p>Você tem mais de 18 anos?</p>
              <p class="text-secondary">
                <small>
                  Para continuar na pagina, clique no botão "sim" apenas se
                  tiver mais de 18 anos.
                </small>
              </p>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Sim
              </button>
              <a
                href="https://www.google.com/"
                class="btn btn-secondary active"
                role="button"
                aria-pressed="true"
              >
                Não
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="geral">
        <div class="produtos">
          <h3>BEBIDAS</h3>
          <div class="row row-cols-1 row-cols-md-3">
            <div class="card text-center m-3 p-1" id="card-text-center">
              <img
                src="./images/cerveja-original-pilsen-350ml.jpg"
                class="card-img-top"
                alt="Lata de cerveja Original branca com logo azul e amarelo, tamanho 350ml"
              />
              <div class="card-body">
                <h6 class="card-title">Cerveja Original 350ml</h6>
                <p>R$ 3,29</p>
                <div id="counter">
                  <button
                    class="btn btn-warning btn-sm btn-custm m-1"
                    name="subtrair"
                    onclick="decrement('counterprod1')"
                  >
                    {" "}
                    -{" "}
                  </button>
                  <span id="counterprod1">0</span>
                  <button
                    class="btn btn-warning btn-sm btn-custm m-1"
                    name="adicionar"
                    onclick="increment('counterprod1')"
                  >
                    +
                  </button>
                  <button
                    type="button"
                    class="btn btn-warning p-1"
                    id="button1"
                    onclick="incrementShop1('shopcar')"
                  >
                    Comprar
                  </button>
                </div>
              </div>
            </div>
            <div class="card text-center m-3 p-1" id="card-text-center">
              <img
                src="./images/cerveja_budweiser_lata_269ml_1e927d59-7383-4321-b6cb-d5b0e6d83e85.jpg"
                class="card-img-top"
                alt="Lata de cerveja Buddweiser vermelha com logo branco e azul, tamanho 350ml"
              />
              <div class="card-body">
                <h6 class="card-title">Cerveja Buddweiser 350ml</h6>
                <p>R$ 3,79</p>
                <div id="counter">
                  <button
                    class="btn btn-warning btn-sm btn-custm m-1"
                    name="subtrair"
                    onclick="decrement('counterprod2')"
                  >
                    {" "}
                    -{" "}
                  </button>
                  <span id="counterprod2">0</span>
                  <button
                    class="btn btn-warning btn-sm btn-custm m-1"
                    name="adicionar"
                    onclick="increment('counterprod2')"
                  >
                    +
                  </button>
                  <button
                    type="button"
                    class="btn btn-warning p-1"
                    id="button1"
                    onclick="incrementShop2('shopcar')"
                  >
                    Comprar
                  </button>
                </div>
              </div>
            </div>
            <div class="card text-center m-3 p-1" id="card-text-center">
              <img
                src="./images/cerveja-eisenbahn_350.jpg"
                class="card-img-top"
                alt="Lata de cerveja Eisenbahn amarela com logo preta e vermelha, tamanho 350ml"
              />
              <div class="card-body">
                <h6 class="card-title">Cerveja Eisenbahn 350ml</h6>
                <p>R$ 3,99</p>
                <div id="counter">
                  <button
                    class="btn btn-warning btn-sm btn-custm m-1"
                    name="subtrair"
                    onclick="decrement('counterprod3')"
                  >
                    {" "}
                    -{" "}
                  </button>
                  <span id="counterprod3">0</span>
                  <button
                    class="btn btn-warning btn-sm btn-custm m-1"
                    name="adicionar"
                    onclick="increment('counterprod3')"
                  >
                    +
                  </button>
                  <button
                    type="button"
                    class="btn btn-warning p-1"
                    id="button1"
                    onclick="incrementShop3('shopcar')"
                  >
                    Comprar
                  </button>
                </div>
              </div>
            </div>
            <div class="card text-center m-3 p-1" id="card-text-center">
              <img
                src="./images/cerveja-imperio-269ml.jpg"
                class="card-img-top"
                alt="Lata de Cerveja Império branca com logo dourada, tamanho 269ml"
              />
              <div class="card-body">
                <h6 class="card-title">Cerveja Império 269ml</h6>
                <p>R$ 2,39</p>
                <div id="counter">
                  <button
                    class="btn btn-warning btn-sm btn-custm m-1"
                    name="subtrair"
                    onclick="decrement('counterprod4')"
                  >
                    {" "}
                    -{" "}
                  </button>
                  <span id="counterprod4">0</span>
                  <button
                    class="btn btn-warning btn-sm btn-custm m-1"
                    name="adicionar"
                    onclick="increment('counterprod4')"
                  >
                    +
                  </button>
                  <button
                    type="button"
                    class="btn btn-warning p-1"
                    id="button1"
                    onclick="incrementShop4('shopcar')"
                  >
                    Comprar
                  </button>
                </div>
              </div>
            </div>
            <div class="card text-center m-3 p-1" id="card-text-center">
              <img
                src="./images/cerveja-heineken-premium-quality-250ml-garrafa.jpg"
                class="card-img-top"
                alt="Garrafa longneck de cerveja Heineken verde com logo branca e preta, tamanho 250ml"
              />
              <div class="card-body">
                <h6 class="card-title">Cerveja Heineken 250ml</h6>
                <p>R$ 4,49</p>
                <div id="counter">
                  <button
                    class="btn btn-warning btn-sm btn-custm m-1"
                    name="subtrair"
                    onclick="decrement('counterprod5')"
                  >
                    {" "}
                    -{" "}
                  </button>
                  <span id="counterprod5">0</span>
                  <button
                    class="btn btn-warning btn-sm btn-custm m-1"
                    name="adicionar"
                    onclick="increment('counterprod5')"
                  >
                    +
                  </button>
                  <button
                    type="button"
                    class="btn btn-warning p-1"
                    id="button1"
                    onclick="incrementShop5('shopcar')"
                  >
                    Comprar
                  </button>
                </div>
              </div>
            </div>
            <div class="card text-center m-3 p-1" id="card-text-center">
              <img
                src="./images/colorado-appia.jpg"
                class="card-img-top"
                alt="Garrafa de vidro de Cerveja Colorado marrom com logo colorido impresso, tamanho 600ml"
              />
              <div class="card-body">
                <h6 class="card-title">Cerveja Colorado 600ml</h6>
                <p>R$ 8,99</p>
                <div id="counter">
                  <button
                    class="btn btn-warning btn-sm btn-custm m-1"
                    name="subtrair"
                    onclick="decrement('counterprod6')"
                  >
                    {" "}
                    -{" "}
                  </button>
                  <span id="counterprod6">0</span>
                  <button
                    class="btn btn-warning btn-sm btn-custm m-1"
                    name="adicionar"
                    onclick="increment('counterprod6')"
                  >
                    +
                  </button>
                  <button
                    type="button"
                    class="btn btn-warning p-1"
                    id="button1"
                    onclick="incrementShop6('shopcar')"
                  >
                    Comprar
                  </button>
                </div>
              </div>
            </div>
            <div class="card text-center m-3 p-1" id="card-text-center">
              <img
                src="./images/coca.jpg"
                class="card-img-top"
                alt="Garrafa plástica de Coca-Cola, tamanho 2L, com líquido preto, tampa vermelha e etiqueta vermelha com a marca impressa"
              />
              <div class="card-body">
                <h6 class="card-title">Refrigerante Coca-Cola 2l</h6>
                <p>R$ 6,99</p>
                <div id="counter">
                  <button
                    class="btn btn-warning btn-sm btn-custm m-1"
                    name="subtrair"
                    onclick="decrement('counterprod7')"
                  >
                    {" "}
                    -{" "}
                  </button>
                  <span id="counterprod7">0</span>
                  <button
                    class="btn btn-warning btn-sm btn-custm m-1"
                    name="adicionar"
                    onclick="increment('counterprod7')"
                  >
                    +
                  </button>
                  <button
                    type="button"
                    class="btn btn-warning p-1"
                    id="button1"
                    onclick="incrementShop7('shopcar')"
                  >
                    Comprar
                  </button>
                </div>
              </div>
            </div>
            <div class="card text-center m-3 p-1" id="card-text-center">
              <img
                src="./images/refrigerante-guarana-antarctica-2l.jpg"
                class="card-img-top"
                alt="Garrafa plástica de Guaraná Antártica com líquido verde, rótulo verde com a marca impressa e tampa vermelha, tamanho 2 litros"
              />
              <div class="card-body">
                <h6 class="card-title">Guaraná Antártica 2l</h6>
                <p>R$ 6,99</p>
                <div id="counter">
                  <button
                    class="btn btn-warning btn-sm btn-custm m-1"
                    name="subtrair"
                    onclick="decrement('counterprod8')"
                  >
                    {" "}
                    -{" "}
                  </button>
                  <span id="counterprod8">0</span>
                  <button
                    class="btn btn-warning btn-sm btn-custm m-1"
                    name="adicionar"
                    onclick="increment('counterprod8')"
                  >
                    +
                  </button>
                  <button
                    type="button"
                    class="btn btn-warning p-1"
                    id="button1"
                    onclick="incrementShop8('shopcar')"
                  >
                    Comprar
                  </button>
                </div>
              </div>
            </div>
            <div class="card text-center m-3 p-1" id="card-text-center">
              <img
                src="./images/agua.jpg"
                class="card-img-top"
                alt="Garrafa plástica de água mineiras com rótulo impresso com a marca Crystal em branco e azul, com tampa azul clara e tamanho de 500ml"
              />
              <div class="card-body">
                <h6 class="card-title">Água Mineral 500ml</h6>
                <p>R$ 2,99</p>
                <div id="counter">
                  <button
                    class="btn btn-warning btn-sm btn-custm m-1"
                    name="subtrair"
                    onclick="decrement('counterprod9')"
                  >
                    {" "}
                    -{" "}
                  </button>
                  <span id="counterprod9">0</span>
                  <button
                    class="btn btn-warning btn-sm btn-custm m-1"
                    name="adicionar"
                    onclick="increment('counterprod9')"
                  >
                    +
                  </button>
                  <button
                    type="button"
                    class="btn btn-warning p-1"
                    id="button1"
                    onclick="incrementShop9('shopcar')"
                  >
                    Comprar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="geral">
          <div class="produtos">
            <h3>CONVENIÊNCIA</h3>
            <div class="row row-cols-1 row-cols-md-3">
              <div class="card text-center m-3 p-1" id="card-text-center">
                <img
                  src="./images/amendoim.jpg"
                  class="card-img-top"
                  alt="Pacote de amendoim torrado da marca Dori, com imagem de amendoim, logo da marca, tamanho 320gr"
                />
                <div class="card-body">
                  <h6 class="card-title">Amendoim Dori 320gr</h6>
                  <p>R$ 5,50</p>
                  <div id="counter">
                    <button
                      class="btn btn-warning btn-sm btn-custm m-1"
                      name="subtrair"
                      onclick="decrement('counterprod10')"
                    >
                      {" "}
                      -{" "}
                    </button>
                    <span id="counterprod10">0</span>
                    <button
                      class="btn btn-warning btn-sm btn-custm m-1"
                      name="adicionar"
                      onclick="increment('counterprod10')"
                    >
                      +
                    </button>
                    <button
                      type="button"
                      class="btn btn-warning p-1"
                      id="button1"
                      onclick="incrementShop10('shopcar')"
                    >
                      Comprar
                    </button>
                  </div>
                </div>
              </div>
              <div class="card text-center m-3 p-1" id="card-text-center">
                <img
                  src="./images/cheetos.jpg"
                  class="card-img-top"
                  alt="Pacote de salgadinho Cheetos na cor laranja com logo da marca e tamanho de 57gr"
                />
                <div class="card-body">
                  <h6 class="card-title">Salgadinho Cheetos 57gr</h6>
                  <p>R$ 5,89</p>
                  <div id="counter">
                    <button
                      class="btn btn-warning btn-sm btn-custm m-1"
                      name="subtrair"
                      onclick="decrement('counterprod11')"
                    >
                      {" "}
                      -{" "}
                    </button>
                    <span id="counterprod11">0</span>
                    <button
                      class="btn btn-warning btn-sm btn-custm m-1"
                      name="adicionar"
                      onclick="increment('counterprod11')"
                    >
                      +
                    </button>
                    <button
                      type="button"
                      class="btn btn-warning p-1"
                      id="button1"
                      onclick="incrementShop11('shopcar')"
                    >
                      Comprar
                    </button>
                  </div>
                </div>
              </div>
              <div class="card text-center m-3 p-1" id="card-text-center">
                <img
                  src="./images/ruffles.jpg"
                  class="card-img-top"
                  alt=".Pacote de salgadinho Ruffles na cor Azul com logo da marca e tamanho de 57gr"
                />
                <div class="card-body">
                  <h6 class="card-title">Salgadinho Ruffles 57gr</h6>
                  <p>R$ 5,89</p>
                  <div id="counter">
                    <button
                      class="btn btn-warning btn-sm btn-custm m-1"
                      name="subtrair"
                      onclick="decrement('counterprod12')"
                    >
                      {" "}
                      -{" "}
                    </button>
                    <span id="counterprod12">0</span>
                    <button
                      class="btn btn-warning btn-sm btn-custm m-1"
                      name="adicionar"
                      onclick="increment('counterprod12')"
                    >
                      +
                    </button>
                    <button
                      type="button"
                      class="btn btn-warning p-1"
                      id="button1"
                      onclick="incrementShop12('shopcar')"
                    >
                      Comprar
                    </button>
                  </div>
                </div>
              </div>
              <div class="card text-center m-3 p-1" id="card-text-center">
                <img
                  src="./images/doritos.png"
                  class="card-img-top"
                  alt="Pacote de salgadinho Doritos na cor vermelha com logo da marca e tamanho de 276gr"
                />
                <div class="card-body">
                  <h6 class="card-title">Salgadinho Doritos 276gr</h6>
                  <p>R$ 7,95</p>
                  <div id="counter">
                    <button
                      class="btn btn-warning btn-sm btn-custm m-1"
                      name="subtrair"
                      onclick="decrement('counterprod13')"
                    >
                      {" "}
                      -{" "}
                    </button>
                    <span id="counterprod13">0</span>
                    <button
                      class="btn btn-warning btn-sm btn-custm m-1"
                      name="adicionar"
                      onclick="increment('counterprod13')"
                    >
                      +
                    </button>
                    <button
                      type="button"
                      class="btn btn-warning p-1"
                      id="button1"
                      onclick="incrementShop13('shopcar')"
                    >
                      Comprar
                    </button>
                  </div>
                </div>
              </div>
              <div class="card text-center m-3 p-1" id="card-text-center">
                <img
                  src="./images/engov-after.jpg"
                  class="card-img-top"
                  alt="imagem de três garrafas de Engov, na cor laranja, com a marca e instrussões impressos no rótulos, tamanho 250ml cada"
                />
                <div class="card-body">
                  <h6 class="card-title">Engov After Tangerina 250ml</h6>
                  <p>R$ 6,99</p>
                  <div id="counter">
                    <button
                      class="btn btn-warning btn-sm btn-custm m-1"
                      name="subtrair"
                      onclick="decrement('counterprod14')"
                    >
                      {" "}
                      -{" "}
                    </button>
                    <span id="counterprod14">0</span>
                    <button
                      class="btn btn-warning btn-sm btn-custm m-1"
                      name="adicionar"
                      onclick="increment('counterprod14')"
                    >
                      +
                    </button>
                    <button
                      type="button"
                      class="btn btn-warning p-1"
                      id="button1"
                      onclick="incrementShop14('shopcar')"
                    >
                      Comprar
                    </button>
                  </div>
                </div>
              </div>
              <div class="card text-center m-3 p-1" id="card-text-center">
                <img
                  src="./images/bis_Branco_Lacta_126G.png"
                  class="card-img-top"
                  alt="Imagem de um pacote de chocholate Bis Branco, com embalagem na cor azul e branco com marca impressa, tamanho 126gr"
                />
                <div class="card-body">
                  <h6 class="card-title">Chocolate Bis Branco 126gr</h6>
                  <p>R$ 5,29</p>
                  <div id="counter">
                    <button
                      class="btn btn-warning btn-sm btn-custm m-1"
                      name="subtrair"
                      onclick="decrement('counterprod15')"
                    >
                      {" "}
                      -{" "}
                    </button>
                    <span id="counterprod15">0</span>
                    <button
                      class="btn btn-warning btn-sm btn-custm m-1"
                      name="adicionar"
                      onclick="increment('counterprod15')"
                    >
                      +
                    </button>
                    <button
                      type="button"
                      class="btn btn-warning p-1"
                      id="button1"
                      onclick="incrementShop15('shopcar')"
                    >
                      Comprar
                    </button>
                  </div>
                </div>
              </div>
              <div class="card text-center m-3 p-1" id="card-text-center">
                <img
                  src="./images/gelo_cubo_800g_ac2bab6e-04d4-42a1-a536-c7496b293b05.jpg"
                  class="card-img-top"
                  alt="Pacote plástico de Gelo, transparente, com logo e marca impressas na embalagem, tamanho 800gr"
                />
                <div class="card-body">
                  <h6 class="card-title">Saco de Gelo 800gr</h6>
                  <p>R$ 7,95</p>
                  <div id="counter">
                    <button
                      class="btn btn-warning btn-sm btn-custm m-1"
                      name="subtrair"
                      onclick="decrement('counterprod16')"
                    >
                      {" "}
                      -{" "}
                    </button>
                    <span id="counterprod16">0</span>
                    <button
                      class="btn btn-warning btn-sm btn-custm m-1"
                      name="adicionar"
                      onclick="increment('counterprod16')"
                    >
                      +
                    </button>
                    <button
                      type="button"
                      class="btn btn-warning p-1"
                      id="button1"
                      onclick="incrementShop16('shopcar')"
                    >
                      Comprar
                    </button>
                  </div>
                </div>
              </div>
              <div class="card text-center m-3 p-1" id="card-text-center">
                <img
                  src="./images/isqueiro-bic-maxi-j6.jpg"
                  class="card-img-top"
                  alt="Imagem de um isqueiro vermelho da marca Bic"
                />
                <div class="card-body">
                  <h6 class="card-title">Isqueiro Bic Grande Vermelho</h6>
                  <p>R$ 4,50</p>
                  <div id="counter">
                    <button
                      class="btn btn-warning btn-sm btn-custm m-1"
                      name="subtrair"
                      onclick="decrement('counterprod17')"
                    >
                      {" "}
                      -{" "}
                    </button>
                    <span id="counterprod17">0</span>
                    <button
                      class="btn btn-warning btn-sm btn-custm m-1"
                      name="adicionar"
                      onclick="increment('counterprod17')"
                    >
                      +
                    </button>
                    <button
                      type="button"
                      class="btn btn-warning p-1"
                      id="button1"
                      onclick="incrementShop17('shopcar')"
                    >
                      Comprar
                    </button>
                  </div>
                </div>
              </div>
              <div class="card text-center m-3 p-1" id="card-text-center">
                <img
                  src="./images/baralho-copag-139.jpg"
                  class="card-img-top"
                  alt="Imagem de um baralho branco e vermelho da marca Copag com 54 cartas"
                />
                <div class="card-body">
                  <h6 class="card-title">Baralho Copag com 54 cartas</h6>
                  <p>R$ 14,95</p>
                  <div id="counter">
                    <button
                      class="btn btn-warning btn-sm btn-custm m-1"
                      name="subtrair"
                      onclick="decrement('counterprod18')"
                    >
                      {" "}
                      -{" "}
                    </button>
                    <span id="counterprod18">0</span>
                    <button
                      class="btn btn-warning btn-sm btn-custm m-1"
                      name="adicionar"
                      onclick="increment('counterprod18')"
                    >
                      +
                    </button>
                    <button
                      type="button"
                      class="btn btn-warning p-1"
                      id="button1"
                      onclick="incrementShop18('shopcar')"
                    >
                      Comprar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
