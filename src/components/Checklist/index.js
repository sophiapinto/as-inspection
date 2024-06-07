import './checklist.css';

function Checklist() {

  return (

    <div className="container-forms">
      <h2>CHECK-LIST DE VISTORIA DE IMÓVEL NOVO</h2>

      <form action="">

        <section className='dados-iniciais'>

          <h3>Dados da Construtora</h3>

          <input className="item-form" type="text" placeholder="Insira nome da Construtora" />
          <input className="item-form" type="text" placeholder="Insira nome do Empreendimento" />
          <input className="item-form" type="number" placeholder="Insira telefone de contato" />

          <h3>Dados do Proprietário</h3>

          <input className="item-form" type="text" placeholder="Insira nome do Proprietário" />
          <input className="item-form" type="number" placeholder="Insira telefone de contato" />

          <h3>Dados do Responsável da Vistoria</h3>

          <input className="item-form" type="text" placeholder="Insira nome do Responsável da vistoria" />
          <input className="item-form" type="number" placeholder="Insira telefone de contato" />
          <input className="item-form" type="number" placeholder="Insira CREA" />

          <h3>Dados do Empreendimento</h3>

          <input className="item-form" type="data" placeholder="Insira data da vistoria" />
          <input className="item-form" type="text" placeholder="Insira localização do empreendimento" />
          <input className="item-form" type="text" placeholder="Insira unidade de vistoria" />
          <input className="item-form" type="text" placeholder="Insira área do empreendimento" />
          <input className="item-form" type="text" placeholder="Insira área medida in loco" />

        </section>

        <h3>Ambiente Vistoriado</h3>

        <section className='ambiente-saladeestar'>

          <h4>Sala de Estar</h4>

          <p>Área construída</p>

          <input className="item-form" type="number" placeholder="Insira área (metros quadrados)" />

          <ul id="repro-apro">
            <p>Pisos e Azulejos</p>

            <li>
              <label> Aprovado
                <input className="item-form-c" type="checkbox" value="Aprovado" />
              </label>
            </li>
            <li>
              <label> Reprovado
                <input className="item-form-c" type="checkbox" value="Reprovado" />
              </label>
            </li>
            <li>
              <label className='itens-observ'>
                <br></br>Itens observados:<br></br>
                □ Confira se os pisos e azulejos estão bem colocados, se não há peças trincadas e se o rejunte está bem feito. Use adesivos para marcar peças com defeito.<br></br>
                □ Observe se há peças ocas: dê também uma batidinha de leve na parede e caminhe sobre o piso com atenção.
              </label>
            </li>

            <p>Portas e janelas</p>

            <li>
              <label> Aprovado
                <input className="item-form-c" type="checkbox" value="Aprovado" />
              </label>
            </li>
            <li>
              <label> Reprovado
                <input className="item-form-c" type="checkbox" value="Reprovado" />
              </label>
            </li>

            <li>
              <label className='itens-observ'>
                <br></br>Itens observados:<br></br>
                □ Abra cada uma das portas e veja se ela não agarra no piso. Feche e teste as maçane- tas. Não se esqueça de testar o olho mágico da porta de
                entrada.<br></br>
                □ Teste as chaves<br></br>
                □ Verifique a pintura ou verniz das portas, bem como as fechaduras e dobradiças.<br></br>
                □ Abra e feche todas as janelas.<br></br>
              </label>
            </li>
            <p>Elétrica</p>

            <li>
              <label> Aprovado
                <input className="item-form-c" type="checkbox" value="Aprovado" />
              </label>
            </li>
            <li>
              <label> Reprovado
                <input className="item-form-c" type="checkbox" value="Reprovado" />
              </label>
            </li>
            <li>
              <label className='itens-observ'>
                <br></br>Itens observados:<br></br>
                □ Caso o imóvel esteja ainda sem energia elétrica, deixe isso claro no seu termo de vistoria.<br></br>
                □ Confira se todos os pontos de energia que estavam no projeto foram instalados.<br></br>
                □ Teste todas as tomadas com um carregador de celular que você levou.<br></br>
                □ Se os soquetes já tiverem instalados, teste também as lâmpadas.<br></br>
                □ Teste os interfones.<br></br>
                □ Abra o quadro de luz e veja os disjuntores. Eles devem estar identificados.<br></br>
              </label>
            </li>
            <p>Pintura, textura e gesso</p>

            <li>
              <label> Aprovado
                <input className="item-form-c" type="checkbox" value="Aprovado" />
              </label>
            </li>
            <li>
              <label> Reprovado
                <input className="item-form-c" type="checkbox" value="Reprovado" />
              </label>
            </li>
            <li>
              <label className='itens-observ'>
                <br></br>Itens observados:<br></br>
                □ Veja se a pintura está bem feita, se a parede está lisa, se não há manchas, nem tinta escorrendo.<br></br>
                □ Confira se não há nenhuma rachadura ou infiltração.<br></br>
              </label>
            </li>
            <label for="myfile">Anexar imagens</label><br></br>
            <input type="file" id="myfile" name="myfile" />
          </ul>
        </section>

        <section className='ambiente-saladejantar'>

          <h4>Sala de Jantar</h4>
          <p>Área construída</p>
          <input className="item-form" type="number" placeholder="Insira área (metros quadrados)" />

          <p>Pisos e Azulejos</p>
          <ul id="repro-apro">
            <li>
              <label> Aprovado
                <input className="item-form-c" type="checkbox" value="Aprovado" />
              </label>
            </li>
            <li>
              <label> Reprovado
                <input className="item-form-c" type="checkbox" value="Reprovado" />
              </label>
            </li>
            <li>
              <label className='itens-observ'>
                <br></br>Itens observados:<br></br>
                □ Confira se os pisos e azulejos estão bem colocados, se não há peças trincadas e se o rejunte está bem feito. Use adesivos para marcar peças com
                defeito.<br></br>
                □ Observe se há peças ocas: dê também uma batidinha de leve na parede e caminhe sobre o piso com atenção.<br></br>
              </label>
            </li>

            <p>Portas e janelas</p>

            <li>
              <label> Aprovado
                <input className="item-form-c" type="checkbox" value="Aprovado" />
              </label>
            </li>
            <li>
              <label> Reprovado
                <input className="item-form-c" type="checkbox" value="Reprovado" />
              </label>
            </li>
            <li>
              <label className='itens-observ'>
                <br></br>Itens observados:<br></br>
                □ Abra cada uma das portas e veja se ela não agarra no piso. Feche e teste as maçane- tas. Não se esqueça de testar o olho mágico da porta de
                entrada.<br></br>
                □ Teste as chaves.
                □ Verifique a pintura ou verniz das portas, bem como as fechaduras e dobradiças.<br></br>
                □ Abra e feche todas as janelas.<br></br>
                □ Observe se os vidros estão bem presos ou se ficam trepidando com o vento.<br></br>
                □ Verifique se não há nenhum ponto de ferrugem ou tinta descascando e se não há tinta grudada nos vidro ou se eles não estão riscados ou
                manchados.<br></br>
              </label>
            </li>
            <p>Elétrica</p>

            <li>
              <label> Aprovado
                <input className="item-form-c" type="checkbox" value="Aprovado" />
              </label>
            </li>
            <li>
              <label> Reprovado
                <input className="item-form-c" type="checkbox" value="Reprovado" />
              </label>
            </li>

            <li>
              <label className='itens-observ'>
                <br></br>Itens observados:<br></br>
                □ Caso o imóvel esteja ainda sem energia elétrica, deixe isso claro no seu termo de vistoria.<br></br>
                □ Confira se todos os pontos de energia que estavam no projeto foram instalados.<br></br>
                □ Teste todas as tomadas com um carregador de celular que você levou.<br></br>
                □ Se os soquetes já tiverem instalados, teste também as lâmpadas.<br></br>
                □ Teste os interfones.<br></br>
                □ Abra o quadro de luz e veja os disjuntores. Eles devem estar identificados.<br></br>
              </label>
            </li>

            <p>Pintura, textura e gesso</p>

            <li>
              <label> Aprovado
                <input className="item-form-c" type="checkbox" value="Aprovado" />
              </label>
            </li>
            <li>
              <label> Reprovado
                <input className="item-form-c" type="checkbox" value="Reprovado" />
              </label>
            </li>
            <li>
              <label className='itens-observ'>
                <br></br>Itens observados:<br></br>
                □ Veja se a pintura está bem feita, se a parede está lisa, se não há manchas, nem tinta escorrendo.<br></br>
                □ Confira se não há nenhuma rachadura ou infiltração.<br></br>
              </label>
            </li>
            <label for="myfile">Anexar imagens</label><br></br>
            <input type="file" id="myfile" name="myfile" />
          </ul>
        </section>

        <section className='ambiente-cozinha'>

          <h4>Cozinha</h4>
          <p>Área construída</p>
          <input className="item-form" type="number" placeholder="Insira área (metros quadrados)" />

          <p>Pia ou Tanque</p>
          <ul id="repro-apro">
            <li>
              <label> Aprovado
                <input className="item-form-c" type="checkbox" value="Aprovado" />
              </label>
            </li>
            <li>
              <label> Reprovado
                <input className="item-form-c" type="checkbox" value="Reprovado" />
              </label>
            </li>
            <li>
              <label className='itens-observ'>
                <br></br>Itens observados:<br></br>
                □ Confira se os pisos e azulejos estão bem colocados, se não há peças trincadas e se o rejunte está bem feito. Use adesivos para marcar peças com
                defeito.<br></br>
                □ Jogue água na cuba e veja se ela está entupida ou se escoa bem.<br></br>
                □ Com a torneira aberta, olhe embaixo da bancada: veja se não há vazamento no sifão nem nos flexíveis (que levam água para as torneiras).<br></br>
                □ Veja também se a bancada da pia foi instalada bem na horizontal ou se está torta e acumula água em algum canto.<br></br>
                □ Confira todas as torneiras, sifões, registros se não há arranhões, amassados ou descas- cados. Verifique se são das marcas que estão no memorial
                descritivo.<br></br>

              </label>
            </li>
            <p>Piso</p>

            <li>
              <label> Aprovado
                <input className="item-form-c" type="checkbox" value="Aprovado" />
              </label>
            </li>
            <li>
              <label> Reprovado
                <input className="item-form-c" type="checkbox" value="Reprovado" />
              </label>
            </li>
            <li>
              <label className='itens-observ'>
                <br></br>Itens observados:<br></br>
                □ Com o balde ou mangueira jogue água e observe se ela está indo em direção ao ralo.<br></br>
                □ Jogue água direto no ralo e veja se ele está entupido.<br></br>
              </label>
            </li>

          </ul>
          <label for="myfile">Anexar imagens</label><br></br>
          <input type="file" id="myfile" name="myfile" />

        </section>

        <section className='ambiente-banheirosocial'>

          <h3>Banheiro Social</h3>

          <p>Área construída</p>
          <input className="item-form" type="number" placeholder="Insira área (metros quadrados)" />
          <ul id="repro-apro">
            <li>
              <label> Aprovado
                <input className="item-form-c" type="checkbox" value="Aprovado" />
              </label>
            </li>
            <li>
              <label> Reprovado
                <input className="item-form-c" type="checkbox" value="Reprovado" />
              </label>
            </li>
            <p> Louças</p>

            <li>
              <label> Aprovado
                <input className="item-form-c" type="checkbox" value="Aprovado" />
              </label>
            </li>
            <li>
              <label> Reprovado
                <input className="item-form-c" type="checkbox" value="Reprovado" />
              </label>
            </li>
            <li>
              <label className='itens-observ'>
                <br></br>IAtens observados:<br></br>
                □ Confira se vaso sanitário e pias não estão trincados.<br></br>
                □ cione a descarga veja se tudo funciona bem e se há algum vazamento.<br></br>
                □ Jogue água na cuba e veja se ela está entupida ou se escoa bem.<br></br>
                □ Com a torneira aberta, olhe embaixo da bancada: veja se não há vazamento no sifão nem nos flexíveis (que levam água para as torneiras).<br></br>
              </label>
            </li>

            <p>Metais</p>

            <li>
              <label> Aprovado
                <input className="item-form-c" type="checkbox" value="Aprovado" />
              </label>
            </li>
            <li>
              <label> Reprovado
                <input className="item-form-c" type="checkbox" value="Reprovado" />
              </label>
            </li>
            <li>
              <label className='itens-observ'>
                <br></br>Itens observados:<br></br>
                □ Confira todas as torneiras, sifões, registros se não há arranhões, amassados ou descas- cados. Verifique se são das marcas que estão no memorial
                descritivo.<br></br>
              </label>
            </li>


            <p>Tubulaçõess</p>

            <li>
              <label> Aprovado
                <input className="item-form-c" type="checkbox" value="Aprovado" />
              </label>
            </li>
            <li>
              <label> Reprovado
                <input className="item-form-c" type="checkbox" value="Reprovado" />
              </label>
            </li>
            <li>
              <label className='itens-observ'>
                <br></br>Itens observados:<br></br>
                □ Com o balde ou mangueira jogue água e observe se ela está indo em direção ao ralo.<br></br>
                □ Jogue água direto no ralo e veja se ele está entupido.<br></br>
                □ Verifique a tubulação para o chuveiro, se o cano está visível e se a altura do cano não está muito perto do teto pois pode dificultar a instalação de
                um chuveiro.<br></br>
              </label>
            </li>


          </ul>
          <label for="myfile">Anexar imagens</label><br></br>
          <input type="file" id="myfile" name="myfile" />


        </section>

        <section className='ambiente-quarto'>

          <h4>Quarto</h4>
          <p>Área construída</p>
          <input className="item-form" type="number" placeholder="Insira área (metros quadrados)" />
          <ul id="repro-apro">
            <p>Pisos e Azulejos</p>

            <li>
              <label> Aprovado
                <input className="item-form-c" type="checkbox" value="Aprovado" />
              </label>
            </li>
            <li>
              <label> Reprovado
                <input className="item-form-c" type="checkbox" value="Reprovado" />
              </label>
            </li>
            <li>
              <label className='itens-observ'>
                <br></br>Itens observados:<br></br>
                □ Confira se os pisos e azulejos estão bem colocados, se não há peças trincadas e se o rejunte está bem feito. Use adesivos para marcar peças com
                defeito.<br></br>
                □ Observe se há peças ocas: dê também uma batidinha de leve na parede e caminhe sobre o piso com atenção.<br></br>
              </label>
            </li>
            <p>Portas e janelas</p>

            <li>
              <label> Aprovado
                <input className="item-form-c" type="checkbox" value="Aprovado" />
              </label>
            </li>
            <li>
              <label> Reprovado
                <input className="item-form-c" type="checkbox" value="Reprovado" />
              </label>
            </li>
            <li>
              <label className='itens-observ'>
                <br></br>Itens observados:<br></br>
                □ Abra cada uma das portas e veja se ela não agarra no piso. Feche e teste as maçane- tas. Não se esqueça de testar o olho mágico da porta de
                entrada.<br></br>
                □ Teste as chaves.<br></br>
                □ Verifique a pintura ou verniz das portas, bem como as fechaduras e dobradiças.<br></br>
                □ Abra e feche todas as janelas.<br></br>
                □ Observe se os vidros estão bem presos ou se ficam trepidando com o vento.<br></br>
                □ Verifique se não há nenhum ponto de ferrugem ou tinta descascando e se não há tinta grudada nos vidro ou se eles não estão riscados ou
                manchados.<br></br>
              </label>
            </li>
            <p>Elétrica</p>

            <li>
              <label> Aprovado
                <input className="item-form-c" type="checkbox" value="Aprovado" />
              </label>
            </li>
            <li>
              <label> Reprovado
                <input className="item-form-c" type="checkbox" value="Reprovado" />
              </label>
            </li>
            <li>
              <label className='itens-observ'>
                <br></br>Itens observados:<br></br>
                □ Caso o imóvel esteja ainda sem energia elétrica, deixe isso claro no seu termo de vistoria.<br></br>
                □ Confira se todos os pontos de energia que estavam no projeto foram instalados.<br></br>
                □ Teste todas as tomadas com um carregador de celular que você levou.<br></br>
                □ Se os soquetes já tiverem instalados, teste também as lâmpadas.<br></br>
                □ Teste os interfones.<br></br>
                □ Abra o quadro de luz e veja os disjuntores. Eles devem estar identificados.<br></br>

              </label>
            </li>
            <p>Pintura, textura e gesso</p>

            <li>
              <label> Aprovado
                <input className="item-form-c" type="checkbox" value="Aprovado" />
              </label>
            </li>
            <li>
              <label> Reprovado
                <input className="item-form-c" type="checkbox" value="Reprovado" />
              </label>
            </li>

            <li>
              <label className='itens-observ'>
                <br></br>Itens observados:<br></br>
                □ Veja se a pintura está bem feita, se a parede está lisa, se não há manchas, nem tinta escorrendo.<br></br>
                □ Confira se não há nenhuma rachadura ou infiltração.<br></br>
              </label>
            </li>
            <label for="myfile">Anexar imagens</label><br></br>
            <input type="file" id="myfile" name="myfile" />
          </ul>
        </section>

        <section className='ambiente-suite'>

          <h4>Suite</h4>
          <p>Área construída</p>
          <input className="item-form" type="number" placeholder="Insira área (metros quadrados)" />

          <p>Pisos e Azulejos</p>
          <ul id="repro-apro">
            <li>
              <label> Aprovado
                <input className="item-form-c" type="checkbox" value="Aprovado" />
              </label>
            </li>
            <li>
              <label> Reprovado
                <input className="item-form-c" type="checkbox" value="Reprovado" />
              </label>
            </li>
            <li>
              <label className='itens-observ'>
                <br></br>Itens observados:<br></br>
                □ Confira se os pisos e azulejos estão bem colocados, se não há peças trincadas e se o rejunte está bem feito. Use adesivos para marcar peças com
                defeito.<br></br>
                □ Observe se há peças ocas: dê também uma batidinha de leve na parede e caminhe sobre o piso com atenção.<br></br>
              </label>
            </li>
            <p>Portas e janelas</p>

            <li>
              <label> Aprovado
                <input className="item-form-c" type="checkbox" value="Aprovado" />
              </label>
            </li>
            <li>
              <label> Reprovado
                <input className="item-form-c" type="checkbox" value="Reprovado" />
              </label>
            </li>
            <li>
              <label className='itens-observ'>
                <br></br>Itens observados:<br></br>
                □ Abra cada uma das portas e veja se ela não agarra no piso. Feche e teste as maçane- tas. Não se esqueça de testar o olho mágico da porta de
                entrada.<br></br>
                □ Teste as chaves.<br></br>
                □ Verifique a pintura ou verniz das portas, bem como as fechaduras e dobradiças.<br></br>
                □ Abra e feche todas as janelas.<br></br>
                □ Observe se os vidros estão bem presos ou se ficam trepidando com o vento.<br></br>
                □ Verifique se não há nenhum ponto de ferrugem ou tinta descascando e se não há tinta grudada nos vidro ou se eles não estão riscados ou
                manchados.<br></br>
              </label>
            </li>
            <p>Elétrica</p>

            <li>
              <label> Aprovado
                <input className="item-form-c" type="checkbox" value="Aprovado" />
              </label>
            </li>
            <li>
              <label> Reprovado
                <input className="item-form-c" type="checkbox" value="Reprovado" />
              </label>
            </li>
            <li>
              <label className='itens-observ'>
                <br></br>Itens observados:<br></br>
                □ Caso o imóvel esteja ainda sem energia elétrica, deixe isso claro no seu termo de vistoria.<br></br>
                □ Confira se todos os pontos de energia que estavam no projeto foram instalados.<br></br>
                □ Se os soquetes já tiverem instalados, teste também as lâmpadas.<br></br>
                □ Teste os interfones.<br></br>
                □ Abra o quadro de luz e veja os disjuntores. Eles devem estar identificados.<br></br>

              </label>
            </li>
            <p>Pintura, textura e gesso</p>

            <li>
              <label> Aprovado
                <input className="item-form-c" type="checkbox" value="Aprovado" />
              </label>
            </li>
            <li>
              <label> Reprovado
                <input className="item-form-c" type="checkbox" value="Reprovado" />
              </label>
            </li>

            <li>
              <label className='itens-observ'>
                <br></br>Itens observados:<br></br>
                □ Veja se a pintura está bem feita, se a parede está lisa, se não há manchas, nem tinta escorrendo.<br></br>
                □ Confira se não há nenhuma rachadura ou infiltração.<br></br>

              </label>
            </li>
          </ul>
          <label for="myfile">Anexar imagens</label><br></br>
          <input type="file" id="myfile" name="myfile" />

        </section>

        <section className='ambiente-suite'>

          <h4>Banheiro Suíte</h4>
          <p>Área construída</p>
          <input className="item-form" type="number" placeholder="Insira área (metros quadrados)" />

          <p> Louças</p>
          <ul id="repro-apro">
            <li>
              <label> Aprovado
                <input className="item-form-c" type="checkbox" value="Aprovado" />
              </label>
            </li>
            <li>
              <label> Reprovado
                <input className="item-form-c" type="checkbox" value="Reprovado" />
              </label>
            </li>
            <li>
              <label className='itens-observ'>
                <br></br>Itens observados:<br></br>
                □ Confira se vaso sanitário e pias não estão trincados.<br></br>
                □ Acione a descarga veja se tudo funciona bem e se há algum vazamento.<br></br>
                □ Jogue água na cuba e veja se ela está entupida ou se escoa bem.<br></br>
                □ Com a torneira aberta, olhe embaixo da bancada: veja se não há vazamento no sifão nem nos flexíveis (que levam água para as torneiras).<br></br>
              </label>
            </li>
            <p>Metais</p>

            <li>
              <label> Aprovado
                <input className="item-form-c" type="checkbox" value="Aprovado" />
              </label>
            </li>
            <li>
              <label> Reprovado
                <input className="item-form-c" type="checkbox" value="Reprovado" />
              </label>
            </li>            <li>
              <label className='itens-observ'>
                <br></br>Itens observados:<br></br>
                □ Confira todas as torneiras, sifões, registros se não há arranhões, amassados ou descas- cados. Verifique se são das marcas que estão no memorial
                descritivo.<br></br>
              </label>
            </li>

            <p>Tubulaçõess</p>

            <li>
              <label> Aprovado
                <input className="item-form-c" type="checkbox" value="Aprovado" />
              </label>
            </li>
            <li>
              <label> Reprovado
                <input className="item-form-c" type="checkbox" value="Reprovado" />
              </label>
            </li>
            <li>
              <label className='itens-observ'>
                <br></br>Itens observados:<br></br>
                □ Com o balde ou mangueira jogue água e observe se ela está indo em direção ao ralo.<br></br>
                □ Jogue água direto no ralo e veja se ele está entupido.<br></br>
                □ Verifique a tubulação para o chuveiro, se o cano está visível e se a altura do cano não está muito perto do teto pois pode dificultar a instalação de
                um chuveiro.<br></br>
              </label>
            </li>

          </ul>
          <label for="myfile">Anexar imagens</label><br></br>
          <input type="file" id="myfile" name="myfile" />

        </section>

        <section className='ambiente-varanda'>

          <h4>Varanda</h4>
          <p>Área construída</p>
          <input className="item-form" type="number" placeholder="Insira área (metros quadrados)" />

          <p>Pisos e Azulejos</p>
          <ul id="repro-apro">
            <li>
              <label> Aprovado
                <input className="item-form-c" type="checkbox" value="Aprovado" />
              </label>
            </li>
            <li>
              <label> Reprovado
                <input className="item-form-c" type="checkbox" value="Reprovado" />
              </label>
            </li>
            <li>
              <label className='itens-observ'>
                <br></br>Itens observados:<br></br>
                □ Com o balde ou mangueira jogue água e observe se ela está indo em direção ao ralo.<br></br>
                □ Jogue água direto no ralo e veja se ele está entupido.<br></br>
                □ Verifique se o guarda corpo está firme e bem instalado.<br></br>
                □ Verifique a pintura do guarda-corpo, e se ele não está amassado ou empenado.<br></br>
                □ Em casos de guarda-corpo de vidro verifique se não há manchas ou trincas.<br></br>
              </label>
            </li>
          </ul>
        </section>

        <button type="button" className="item-form" > enviar </button>
      </form>
    </div>

  );
}

export default Checklist;