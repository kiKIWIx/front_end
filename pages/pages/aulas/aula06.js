import Link from 'next/link'
import styleEstilo from '../../../styles/estilo.module.css'
import styleBotao from '../../../styles/botao.module.css'
import styleLista from '../../../styles/lista.module.css'
import styleTab from '../../../styles/tabela-clara.module.css'


export default function aula06(){
    return(
        <div>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Prof Gustavo Ferreira" />
        <meta name="descripion" content="Página de introdução ao Desenvolviemento web - Aula 06" />
        <title>Aula 06 - Portas Lógicas em javaScript</title>
        <link rel="icon" href="/icon.png" type="image/x-icon" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet"/>
        <script src="../../../js/operadores-lógicos.js"></script>
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
                  <h4>Aula 01 - Git com HTML e CSS</h4>
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
              <h4 className="cinza-escuro text-white p-2 text-center m-3">Portas lógicas JavaScript</h4>
        <div className="card m-3">
          <div className="card-body">
            <div className="row p-2">
              <div className="col-lg-8">
                <h4 className="cinza-claro p-2">Definição de portas lógicas</h4>
                <p style={{textAlign: 'justify'}} className="p-3 m-3">Portas lógicas ou operadores lógicos são
                  formas de
                  resultantes entre
                  duas ou mais comparações entre expressões comparativas, onde o resultado
                  deverá ser booleana (verdadeiro ou falso). Iremos conhecer as principais portas
                  e qual os seus respectivos resultados para as específicas expressões comparativa.
                  Veja alguns exemplos definidos abaixo.
                </p>
              </div>
              <div className="col-lg-4">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a href="#1">
                      <div className="botao-lista">
                        E - Porta And (&amp;&amp;)
                      </div>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#2">
                      <div className="botao-lista">
                        Ou - Porta Or (||)
                      </div>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#3">
                      <div className="botao-lista">
                        Não - Porta Not (!)
                      </div>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#4">
                      <div className="botao-lista">
                        Exclusivo - Porta Xor (^)
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-6">
            <div className="card m-3">
              <div className="card-body">
                <h4 className="cinza p-2 text-white text-center" id={1}>Porta lógica And (E)</h4>
                <p className="m-3" style={{textAlign: 'justify'}}>Essa porta retorna verdadeiro
                  somente quando todas as entradas forem verdadeiras. Segue exemplo
                  das entradas A e B e suas respectivas saídas R:</p>
                <div className="container">
                  <table id="tabela-claro">
                    <tbody><tr>
                        <th>
                          A
                        </th>
                        <th>
                          B
                        </th>
                        <th>
                          R
                        </th>
                      </tr>
                      <tr>
                        <td>V</td>
                        <td>V</td>
                        <td>V</td>
                      </tr>
                      <tr>
                        <td>V</td>
                        <td>F</td>
                        <td>V</td>
                      </tr>
                      <tr>
                        <td>F</td>
                        <td>V</td>
                        <td>F</td>
                      </tr>
                      <tr>
                        <td>F</td>
                        <td>F</td>
                        <td>F</td>
                      </tr>
                    </tbody></table>
                </div>
                <p className="m-3" style={{textAlign: 'justify'}}>
                  ((5&gt;=3) &amp;&amp; (3 != 2)) = <b id="res-and">Mostrando resultado...</b>
                </p><div className="text-center">
                  <a className="botao" id="conf-and" href="#2" onclick="and()">resultado</a>
                </div>
                <p />
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
);
}