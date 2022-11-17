import Link from 'next/link'
import styleEstilo from '../../../styles/estilo.module.css'
import styleBotao from '../../../styles/botao.module.css'
import styleLista from '../../../styles/lista.module.css'


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
        <script src="../../../js/operadores-aritmeticos.js"></script>
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
              <h3 className="cinza-escuro text-center text-white p-2 m-3">Operadores Comparativos JavaScript</h3>
        <div className="row">
          <div className="col-lg-6">
            <div className="p-2 bg-white m-3">
              <p className="cinza-claro p-2 m-3" id={1}>01 - Realizando Comparação com Javascript</p>
              <div className="card m-3">
                <div className="card-body">
                  <p className>Exemplo de uma comparação de 2 == 2 = <strong id="resultado-igual">Mostrando
                      o
                      resultado...
                    </strong>
                  </p>
                  <div className="text-center">
                    <a className={styleBotao.botao} id="confirmado-igual" href="#1" onclick="igual()">Resultado</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-2 bg-white m-3">
              <div className={styleEstilo.cinzaClaro}>
              <p className="p-2 m-3" id={2}>02 - Realizando Diferença com Javascript</p>
              </div>
              <div className="card m-3">
                <div className="card-body">
                  <p className>Exemplo de uma diferença de 4 != 2 = <strong id="resultado-diferente">Mostrando o
                      resultado...
                    </strong></p>
                  <div className="text-center">
                    <a className={styleBotao.botao} id="confirmado-diferente" href="#2" onclick="diferente()">Resultado</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-2 bg-white m-3">
              <div className={styleEstilo.cinzaClaro}>
              <p className=" p-2 m-3" id={3}>03 - Realizando Maior com Javascript</p>
              </div>
              <div className="card m-3">
                <div className="card-body">
                  <p className>Exemplo de uma comparação maior de 3 &gt; 1 = <strong id="resultado-maior">Mostrando o resultado...
                    </strong>
                  </p>
                  <div className="text-center">
                    <a className={styleBotao.botao} id="confirmado-maior" href="#3" onclick="maior()">Resultado</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="p-2 bg-white m-3">
              <div className={styleEstilo.cinzaClaro}>
              <p className=" p-2 m-3" id={4}>04 - Realizando Menor com Javascript</p>
              </div>
              <div className="card m-3">
                <div className="card-body">
                  <p className>Exemplo de uma comparação menor de 2 &lt; 9 = <strong id="resultado-menor">
                      Mostrando o
                      resultado...
                    </strong>
                  </p>
                  <div className="text-center">
                    <a className={styleBotao.botao} id="confirmado-menor" href="#4" onclick="menor()">Resultado</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-2 bg-white m-3">
              <div className={styleEstilo.cinzaClaro}>
              <p className=" p-2 m-3" id={5}>05 - Realizando Maior Igual com Javascript</p>
              </div>
              <div className="card m-3">
                <div className="card-body">
                  <p className>Exemplo de uma comparação maior ou igual de 3 &gt;= 1 = <strong id="resultado-maiorIgual">Mostrando o
                      resultado...
                    </strong>
                  </p>
                  <div className="text-center">
                    <a className={styleBotao.botao} id="confirmado-maiorIgual" href="#5" onclick="maiorIgual()">Resultado</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-2 bg-white m-3">
              <div className={styleEstilo.cinzaClaro}>
              <p className=" p-2 m-3" id={6}>06 - Realizando Menor Igual com Javascript</p>
              </div>
              <div className="card m-3">
                <div className="card-body">
                  <p className>Exemplo de uma comparação menor de 2 &lt; 9 = <strong id="resultado-menorIgual">
                      Mostrando o
                      resultado...
                    </strong></p>
                  <div className="text-center">
                    <a className={styleBotao.botao} id="confirmado-menorIgual" href="#6" onclick="menorIgual()">Resultado</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h3 className="cinza-escuro text-center text-white p-2 m-3">Operadores de Atribuição JavaScript</h3>
        <div className="row">
          <div className="col-lg-6">
            <div className="p-2 bg-white m-3" id={7}>
              <div className={styleEstilo.cinzaClaro}>
              <p className="p-2 m-3">01 - Realizando Adição com Atribuição em Javascript</p>
              </div>
              <div className="card m-3">
                <div className="card-body">
                  <p className>Exemplo de uma adição com atribuição de 2 += 4 = <strong id="res-atAd">
                      Mostrando o
                      resultado...
                    </strong></p>
                  <div className="text-center">
                    <a className={styleBotao.botao} id="conf-atAd" href="#7" onclick="atAd()">Resultado</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-2 bg-white m-3">
              <div className={styleEstilo.cinzaClaro}>
              <p className=" p-2 m-3" id={8}>02 - Realizando Subtração com Atribuição em Javascript</p>
              </div>
              <div className="card m-3">
                <div className="card-body">
                  <p className>Exemplo de uma subtração com atribuição de 5 -= 2 = <strong id="res-atSub">
                      Mostrando o
                      resultado...
                    </strong></p>
                  <div className="text-center">
                    <a className={styleBotao.botao} id="conf-atSub" href="#8" onclick="atSub()">Resultado</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-2 bg-white m-3">
              <div className={styleEstilo.cinzaClaro}>
              <p className=" p-2 m-3" id={9}>03 - Realizando Multiplicação com Atribuição em Javascript</p>
              </div>
              <div className="card m-3">
                <div className="card-body">
                  <p className>Exemplo de uma multiplicação com atribuição de 2 *= 2 = <strong id="res-atMult">
                      Mostrando o
                      resultado...
                    </strong></p>
                  <div className="text-center">
                    <a className={styleBotao.botao} id="conf-atMult" href="#9" onclick="atMult()">Resultado</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="p-2 mt-3 bg-white m-3">
              <div className={styleEstilo.cinzaClaro}>
              <p className="p-2 m-3" id={10}>04 - Realizando Divisão com Atribuição em Javascript</p>
              </div>
              <div className="card m-3">
                <div className="card-body">
                  <p className>Exemplo de uma divisão com atribuição de 10 /= 2 = <strong id="res-atDiv">
                      Mostrando o
                      resultado...
                    </strong></p>
                  <div className="text-center">
                    <a className={styleBotao.botao} id="conf-atDiv" href="#10" onclick="atDiv()">Resultado</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-2 mt-3 bg-white m-3">
              <div className={styleEstilo.cinzaClaro}>
              <p className="p-2 m-3" id={11}>05 - Realizando Potenciação com Atribuição em Javascript</p>
              </div>
              <div className="card m-3">
                <div className="card-body">
                  <p className>Exemplo de uma potenciação com atribuição de 5 **= 2 = <strong id="res-atPot">
                      Mostrando o
                      resultado...
                    </strong></p>
                  <div className="text-center">
                    <a className={styleBotao.botao} id="conf-atPot" href="#11" onclick="atPot()">Resultado</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-2 mt-3 bg-white m-3">
              <div className={styleEstilo.cinzaClaro}>
              <p className=" p-2 m-3" id={12}>01 - Realizando Resto com Atribuição em Javascript</p>
              </div>
              <div className="card m-3">
                <div className="card-body">
                  <p className>Exemplo de um resto com atribuição de 7 %= 2 = <strong id="res-atRes">
                      Mostrando o
                      resultado...
                    </strong></p>
                  <div className="text-center">
                    <a className={styleBotao.botao} id="conf-atRes" href="#12" onclick="atRes()">Resultado</a>
                  </div>
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