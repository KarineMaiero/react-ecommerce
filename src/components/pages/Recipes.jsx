import React from "react";

import cosmopolitan from "../../images/cosmopolitan.jpg";
import caipirinha from "../../images/caipirinha.jpg";
import sexonthebeach from "../../images/sexonthebeach.jpg";
import mojito from "../../images/mojito.jpg";

export default function Home() {
  return (
    <div id="main" className="container-fluid overflow-hidden px-5 text-center">
      <div className="row gx-5">
        <div className="col align-items-start">
          <img
            id="main-img"
            className="card-img-top"
            src={cosmopolitan}
            alt="Imagem do drink Cosmopolitan em cima de um balcão de madeira com um fundo desfocado de prateleiras de bebidas. O drink está servido em uma taça de martini de vidro com uma rodela de limão presa na borda."
          />
          <div className="text-center">
            <h2>Cosmopolitan</h2>
            <h3>Ingredientes</h3>
            <ul className="lists">
              <li>1 dose de vodka</li>
              <li>1 limão (suco)</li>
              <li>50ml suco de cranberry</li>
              <li>1 dose de licor de laranja</li>
              <li>Gelo</li>
            </ul>
            <h3>Modo de Preparo</h3>
            <ol className="lists">
              <li>Misture tudo em uma coqueteleira.</li>
              <li>
                Sirva num copo bem gelado sem deixar cair gelo da coqueteleira
                no copo.
              </li>
              <li>Decore com a casca do limão na borda.</li>
            </ol>
          </div>
        </div>

        <aside id="aside" className="aside col-sm-4 align-items-start">
          <div>
            <a href="caipirinha.html">
              <img
                className="sec-img card-img-top"
                src={caipirinha}
                alt="Imagem de dois drinks em uma mesa de mandeira com 4 limões, sendo um deles cortado ao meio. Os drinks são capirinhas feitos em copo de vidro, com liquido, gelo, folhas de hortelã dentro, com uma rodela de hortelã presa na borda e dois canudos curtos."
              />
            </a>
            <h2>Caipirinha</h2>
          </div>
          <div className="boxdrinks">
            <a href="sexonthebeach.html">
              <img
                className="sec-img card-img-top"
                src={sexonthebeach}
                alt="Imagem de dois drinks Sex on The Beach em um balcão com limões fatiados e gelos espalhados e com fundo desfocado de garrafas. Os drinks estão servidos em taças de vidro com cerejas presas na borda e dois canudos."
              />
            </a>
            <h2>Sex on the beach</h2>
          </div>
          <div className="boxdrinks">
            <a href="mojito.html">
              <img
                className="sec-img card-img-top"
                src={mojito}
                alt="Imagem de dois drinks Mojito em uma bandeija em cima de uma mesa de madeira. Na bandeija há um limão inteiro, a metade de outro e duas estrelas de 5 pontas feita a partir de uma fruta. Os drinks estão dentro de um copo de vidro com gelo e na borda do copo há uma rodela de limão e duas folhas de hortelã, e também um canudo."
              />
            </a>
            <h2>Mojito</h2>
          </div>
        </aside>
      </div>
    </div>
  );
}
