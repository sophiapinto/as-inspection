import './checklist.css';

function Checklist () {
    return (

        <div className="container-forms">
        <h2>CHECK-LIST DE VISTORIA DE IMÓVEL NOVO</h2>

          <form action="">
  
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
  
            <h3>Ambiente Vistoriado</h3>

            <h4>Sala de Estar</h4>
            <p>Área construída</p>
            <input className="item-form" type="number" placeholder="Insira área (metros quadrados)" />
            
            <p>Pisos e Azulejos</p>

            <label> Aprovado
              <input className="item-form-c" type="checkbox" value="Aprovado"/>
            </label>

            <label> Reprovado
              <input className="item-form-c" type="checkbox" value="Reprovado"/>
            </label>

            <p>Portas e janelas</p>

            <label> Aprovado
              <input className="item-form-c" type="checkbox" value="Aprovado"/>
            </label>

            <label> Reprovado
              <input className="item-form-c" type="checkbox" value="Reprovado"/>
            </label>

            <p>Elétrica</p>

            <label> Aprovado
              <input className="item-form-c" type="checkbox" value="Aprovado"/>
            </label>

            <label> Reprovado
              <input className="item-form-c" type="checkbox" value="Reprovado"/>
            </label>

            <p>Pintura, textura e gesso</p>

            <label> Aprovado
              <input className="item-form-c" type="checkbox" value="Aprovado"/>
            </label>

            <label> Reprovado
              <input className="item-form-c" type="checkbox" value="Reprovado"/>
            </label>

            <h4>Sala de Jantar</h4>
            <p>Área construída</p>
            <input className="item-form" type="number" placeholder="Insira área (metros quadrados)" />

            <p>Pisos e Azulejos</p>

            <label> Aprovado
              <input className="item-form-c" type="checkbox" value="Aprovado"/>
            </label>

            <label> Reprovado
              <input className="item-form-c" type="checkbox" value="Reprovado"/>
            </label>

            <p>Portas e janelas</p>

            <label> Aprovado
              <input className="item-form-c" type="checkbox" value="Aprovado"/>
            </label>

            <label> Reprovado
              <input className="item-form-c" type="checkbox" value="Reprovado"/>
            </label>

            <p>Elétrica</p>

            <label> Aprovado
              <input className="item-form-c" type="checkbox" value="Aprovado"/>
            </label>

            <label> Reprovado
              <input className="item-form-c" type="checkbox" value="Reprovado"/>
            </label>

            <p>Pintura, textura e gesso</p>

            <label> Aprovado
              <input className="item-form-c" type="checkbox" value="Aprovado"/>
            </label>

            <label> Reprovado
              <input className="item-form-c" type="checkbox" value="Reprovado"/>
            </label>

            <h4>Cozinha</h4>
            <p>Área construída</p>
            <input className="item-form" type="number" placeholder="Insira área (metros quadrados)" />

            <p>Pisos e Azulejos</p>

            <label> Aprovado
              <input className="item-form-c" type="checkbox" value="Aprovado"/>
            </label>

            <label> Reprovado
              <input className="item-form-c" type="checkbox" value="Reprovado"/>
            </label>

            <p>Portas e janelas</p>

            <label> Aprovado
              <input className="item-form-c" type="checkbox" value="Aprovado"/>
            </label>

            <label> Reprovado
              <input className="item-form-c" type="checkbox" value="Reprovado"/>
            </label>

            <p>Elétrica</p>

            <label> Aprovado
              <input className="item-form-c" type="checkbox" value="Aprovado"/>
            </label>

            <label> Reprovado
              <input className="item-form-c" type="checkbox" value="Reprovado"/>
            </label>

            <p>Pintura, textura e gesso</p>

            <label> Aprovado
              <input className="item-form-c" type="checkbox" value="Aprovado"/>
            </label>

            <label> Reprovado
              <input className="item-form-c" type="checkbox" value="Reprovado"/>
            </label>

            <p>Pisos e Azulejos</p>

            <label> Aprovado
              <input className="item-form-c" type="checkbox" value="Aprovado"/>
            </label>

            <label> Reprovado
              <input className="item-form-c" type="checkbox" value="Reprovado"/>
            </label>

            <h3>Banheiro Social</h3>
            <p>Área construída</p>
            <input className="item-form" type="number" placeholder="Insira área (metros quadrados)" />

            <label> Aprovado
              <input className="item-form-c" type="checkbox" value="Aprovado"/>
            </label>

            <label> Reprovado
              <input className="item-form-c" type="checkbox" value="Reprovado"/>
            </label>

            <p>Elétrica</p>

            <label> Aprovado
              <input className="item-form-c" type="checkbox" value="Aprovado"/>
            </label>

            <label> Reprovado
              <input className="item-form-c" type="checkbox" value="Reprovado"/>
            </label>

            <p>Pintura, textura e gesso</p>

            <label> Aprovado
              <input className="item-form-c" type="checkbox" value="Aprovado"/>
            </label>

            <label> Reprovado
              <input className="item-form-c" type="checkbox" value="Reprovado"/>
            </label>

            <h4>Quarto</h4>
            <p>Área construída</p>
            <input className="item-form" type="number" placeholder="Insira área (metros quadrados)" />

            <p>Pisos e Azulejos</p>

            <label> Aprovado
              <input className="item-form-c" type="checkbox" value="Aprovado"/>
            </label>

            <label> Reprovado
              <input className="item-form-c" type="checkbox" value="Reprovado"/>
            </label>

            <p>Portas e janelas</p>

            <label> Aprovado
              <input className="item-form-c" type="checkbox" value="Aprovado"/>
            </label>

            <label> Reprovado
              <input className="item-form-c" type="checkbox" value="Reprovado"/>
            </label>

            <p>Elétrica</p>

            <label> Aprovado
              <input className="item-form-c" type="checkbox" value="Aprovado"/>
            </label>

            <label> Reprovado
              <input className="item-form-c" type="checkbox" value="Reprovado"/>
            </label>

            <p>Pintura, textura e gesso</p>

            <label> Aprovado
              <input className="item-form-c" type="checkbox" value="Aprovado"/>
            </label>

            <label> Reprovado
              <input className="item-form-c" type="checkbox" value="Reprovado"/>
            </label>

            <h4>Suite</h4>
            <p>Área construída</p>
            <input className="item-form" type="number" placeholder="Insira área (metros quadrados)" />

            <p>Pisos e Azulejos</p>

            <label> Aprovado
              <input className="item-form-c" type="checkbox" value="Aprovado"/>
            </label>

            <label> Reprovado
              <input className="item-form-c" type="checkbox" value="Reprovado"/>
            </label>

            <p>Portas e janelas</p>

            <label> Aprovado
              <input className="item-form-c" type="checkbox" value="Aprovado"/>
            </label>

            <label> Reprovado
              <input className="item-form-c" type="checkbox" value="Reprovado"/>
            </label>

            <p>Elétrica</p>

            <label> Aprovado
              <input className="item-form-c" type="checkbox" value="Aprovado"/>
            </label>

            <label> Reprovado
              <input className="item-form-c" type="checkbox" value="Reprovado"/>
            </label>

            <p>Pintura, textura e gesso</p>

            <label> Aprovado
              <input className="item-form-c" type="checkbox" value="Aprovado"/>
            </label>

            <label> Reprovado
              <input className="item-form-c" type="checkbox" value="Reprovado"/>
            </label>
            
            <h4>Banheiro Suíte</h4>
            <p>Área construída</p>
            <input className="item-form" type="number" placeholder="Insira área (metros quadrados)" />

            <p>Pisos e Azulejos</p>

            <label> Aprovado
              <input className="item-form-c" type="checkbox" value="Aprovado"/>
            </label>

            <label> Reprovado
              <input className="item-form-c" type="checkbox" value="Reprovado"/>
            </label>

            <p>Portas e janelas</p>

            <label> Aprovado
              <input className="item-form-c" type="checkbox" value="Aprovado"/>
            </label>

            <label> Reprovado
              <input className="item-form-c" type="checkbox" value="Reprovado"/>
            </label>

            <p>Elétrica</p>

            <label> Aprovado
              <input className="item-form-c" type="checkbox" value="Aprovado"/>
            </label>

            <label> Reprovado
              <input className="item-form-c" type="checkbox" value="Reprovado"/>
            </label>

            <p>Pintura, textura e gesso</p>

            <label> Aprovado
              <input className="item-form-c" type="checkbox" value="Aprovado"/>
            </label>

            <label> Reprovado
              <input className="item-form-c" type="checkbox" value="Reprovado"/>
            </label>

            <h4>Varanda</h4>
            <p>Área construída</p>
            <input className="item-form" type="number" placeholder="Insira área (metros quadrados)" />

            <p>Pisos e Azulejos</p>

            <label> Aprovado
              <input className="item-form-c" type="checkbox" value="Aprovado"/>
            </label>

            <label> Reprovado
              <input className="item-form-c" type="checkbox" value="Reprovado"/>
            </label>

            <p>Portas e janelas</p>

            <label> Aprovado
              <input className="item-form-c" type="checkbox" value="Aprovado"/>
            </label>

            <label> Reprovado
              <input className="item-form-c" type="checkbox" value="Reprovado"/>
            </label>

            <p>Elétrica</p>

            <label> Aprovado
              <input className="item-form-c" type="checkbox" value="Aprovado"/>
            </label>

            <label> Reprovado
              <input className="item-form-c" type="checkbox" value="Reprovado"/>
            </label>

            <p>Pintura, textura e gesso</p>

            <label> Aprovado
              <input className="item-form-c" type="checkbox" value="Aprovado"/>
            </label>

            <label> Reprovado
              <input className="item-form-c" type="checkbox" value="Reprovado"/>
            </label>

            <h2>Status da Vistoria</h2>

            <label> Aprovado
              <input className="item-form-c" type="checkbox" value="Aprovado"/>
            </label>

            <label> Reprovado
              <input className="item-form-c" type="checkbox" value="Reprovado"/>
            </label>

            <button type="button" className="item-form" > enviar </button>
          </form>
        </div>
  
    );
}

export default Checklist;