import Link from 'next/link'
import styleEstilo from '../../../styles/estilo.module.css'
import styleBotao from '../../../styles/botao.module.css'
import styleLista from '../../../styles/lista.module.css'
import styleTab from '../../../styles/tabela-clara.module.css'


export default function aula05(){
    
        <div>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Prof Gustavo Ferreira" />
        <meta name="descripion" content="Página de introdução ao Desenvolviemento web - Aula 05" />
        <title>Aula 05 - Operadores em JavaScript</title>
        <link rel="icon" href="/icon.png" type="image/x-icon" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet"/>
        <header>
          <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <div className="container-fluid">
              <ul className="navbar-nav container">
                <li className="nav-item">
                  <Link className="navbar-brand" href="http://microcamp.com">
                    <img src="/logo.jpg" style={{width: '60px'}} alt="Logo Microcamp" className="styleEstilo.arredondar" />
                  </Link>
                </li>
                <li className="nav-item text-white">
                  <h4>Aula 05 - Operadores em JavaScript</h4>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <section className="row">
          <div className="col-lg-3 bg-purple">
          <nav className={styleLista.nav}>
            <ul className="navbar-nav m-3">
              <div className="nav-item">
                  <li className={styleLista.li}>
                    <Link href="/pages/aulas//aula01">
                      <div className={styleBotao.botaoLista}>
                        Aula 01 - Git com HTML e CSS
                      </div>
                    </Link>
                  </li>
              </div>
              <div className="nav-item">
                  <li className={styleLista.li}>
                    <Link href="/pages/aulas//aula02">
                      <div className={styleBotao.botaoLista}>
                        Aula 02 - Seletores CSS 3
                      </div>
                    </Link>
                  </li>
              </div>
              <div className="nav-item">
                  <li className={styleLista.li}>
                    <Link href="/pages/aulas//aula03">
                      <div className={styleBotao.botaoLista}>
                        Aula 03 - Introdução ao JavaScript
                      </div>
                    </Link>
                  </li>
              </div>
              <div className="nav-item">
              <li className={styleLista.li}>
                <Link href="/pages/aulas//aula04">
                  <div className={styleBotao.botaoLista}>
                    Aula 04 - Implementando BootStrap
                  </div>
                </Link>
              </li>
              </div>
              <div className="nav-item">
                  <li className={styleLista.li}>
                    <Link href="/pages/aulas//aula05">
                      <div className={styleBotao.botaoLista}>
                        Aula 05 - Operadores em JavaScript
                      </div>
                    </Link>
                  </li>
              </div>
              <div className="nav-item">
                  <li className={styleLista.li}>
                    <Link href="/pages/aulas//aula06">
                      <div className={styleBotao.botaoLista}>
                        Aula 06 - Portas Lógicas em JavaScript
                      </div>
                    </Link>
                  </li>
              </div>
            </ul>
          </nav>
          </div>
          <div className="col-lg-9">
              <article className={styleLista.article}>
              <h3 className="cinza-escuro text-center text-white p-2 m-3">Operadoes aritméticos</h3>
        <div className="row">
          <div className="col-lg-6">
            <div className="p-2 mt-3 bg-white m-3">
              <h4 className="cinza-claro p-2 m-3">01 Adição com JavaScript</h4>
              <div className="card m-3">
                <div className="card-body">
                  <p className>Exemplo de uma soma de 2+2= <strong id="resultado">Mostrando o resultado...
                    </strong>
                  </p>
                </div>
              </div>
              <div className="text-center">
                <a className="botao" id="confirmado-ad" href="#" onclick="soma()">resultado</a>
              </div>
            </div>
            <div className="p-2 mt-3 bg-white m-3">
              <h3 className="cinza-claro p-2 m-3">02 Multiplicação com JavaScript</h3>
              <div className="card m-3">
                <div className="card-body">
                  <p>Exemplo de uma multiplicacao de 2*2= <strong id="resultado2">Mostrando o
                      resultado...</strong></p>
                </div>
              </div>
              <div className="text-center">
                <a className="botao" id="confirmado-mu" href="#" onclick="multiplicacao()">resultado</a>
              </div>
            </div>
            <div className="p-2 mt-3 bg-white m-3">
              <div className="card">
                <div className="card-body">
                  <h3>03 Subtração com JavaScript</h3>
                  <p>Exemplo de uma subtração de 5-3= <strong id="resultado3">Mostrando o
                      resultado...</strong>
                  </p>
                </div>
              </div>
              <div className="text-center">
                <a className="botao" id="confirmado-sub" href="#" onclick="subtracao()">resultado</a>
              </div>
            </div>
            <div className="p-2 mt-3 bg-white m-3">
              <h3>04 Divisão com JavaScript</h3>
              <div className="card">
                <div className="card-body">
                  <p>Exemplo de uma divisão de 8/2= <strong id="resultado4">Mostrando o
                      resultado...</strong></p>
                </div>
              </div>
              <div className="text-center">
                <a className="botao" id="confirmado-div" href="#" onclick="divisao()">resultado</a>
              </div>
            </div> 
          </div>
          <div className="col-lg-6">
            <div className="p-2 mt-3 bg-white m-3">
              <h3>05 Exponenciação com JavaScript</h3>
              <div className="card">
                <div className="card-body">
                  <p>Exemplo de uma soma de 2**3= <strong id="resultado-ex">Mostrando o resultado...
                    </strong></p>
                </div>
              </div>
              <div className="text-center">
                <a className="botao" id="confirmado-ex" href="#" onclick="exponenciacao()">resultado</a>
              </div>
            </div>
            <div className="p-2 mt-3 bg-white m-3">
              <h3>06 Resto com JavaScript</h3>
              <div className="card">
                <div className="card-body">
                  <p>Exemplo de uma multiplicacao de 5%2= <strong id="resultado-res">Mostrando o
                      resultado...</strong></p>
                </div>
              </div>
              <div className="text-center">
                <a className="botao" id="confirmado-res" href="#" onclick="resto()">resultado</a>
              </div>                    
              <div className="p-2 mt-3 bg-white">
                <h3>07 Incrementação com JavaScript</h3>
                <div className="card">
                  <div className="card-body">
                    <p>Exemplo de uma subtração de 5-3= <strong id="resultado-inc">Mostrando o
                        resultado...</strong>
                    </p></div>
                </div>
                <p />
                <div className="text-center">
                  <a className="botao" id="confirmado-inc" href="#" onclick="incrementacao()">resultado</a>
                </div>
              </div>
              <div className="p-2 mt-3 bg-white m-3">
                <h3>08 Decrementação com JavaScript</h3>
                <div className="card">
                  <div className="card-body">
                    <p>Exemplo de uma divisão de 8/2= <strong id="resultado-dec">Mostrando o
                        resultado...</strong>
                    </p>
                  </div>
                </div>
                <div className="text-center">
                  <a className="botao" id="confirmado-dec" href="#" onclick="decrementacao()">resultado</a>
                </div>
              </div>
            </div>
          </div> 
          </div>
              </article>
          </div>
        </section>
    <footer className="text-center p-2 bg-dark text-white">
  <p>Desenvolvido por Gabriel Oliveira</p>
</footer>
</div>

}