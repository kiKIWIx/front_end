import Link from 'next/link'
import styleEstilo from '../../../styles/estilo.module.css'
import styleBotao from '../../../styles/botao.module.css'
import styleLista from '../../../styles/lista.module.css'
import styleTab from '../../../styles/tabela-clara.module.css'


export default function aula04(){
    return(
        <div>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Prof Gustavo Ferreira" />
        <meta name="descripion" content="Página de introdução ao Desenvolviemento web - Aula 04" />
        <title>Aula 04 - Implementando BootStrap</title>
        <link rel="icon" href="/icon.png" type="image/x-icon" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet"/>
        <script src="../../../js/bootstrap/program.js"/>
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
                  <h4>Aula 04 - Implementando BootStrap</h4>
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
              <h3 className="cinza-escuro text-white p-2 text-center m-3">
          Definição de BootStrap
        </h3>
        <div className="card m-3">
          <div className="card-body">
            <p>
              Bootstrap é um framework front-end que fornece estruturas de CSS para a criação de sites e
              aplicações responsivas de forma rápida e simples. Além disso, pode lidar com sites de desktop e
              páginas de dispositivos móveis da mesma forma.
            </p>
          </div>
        </div>
        <h3 className="cinza-escuro text-white p-2 text-center m-3">
          Versões do Bootstrap
        </h3>
        <div className="container mt-5">
          <div className="row">
            <div className="col-sm-4">
              <h4 className="cinza-claro p-2 m-3">
                BootStrap 3
              </h4>
              <div className="card m-3">
                <div className="card-body">
                  <ul>
                    <li>
                      é baseado em um sistema de grade de 4 camadas (xs, sm, md, lg).
                    </li>
                    <li>
                      no bootstrap 3, a classe .responsive-table adicionada ao elemento &lt; div&gt;.
                    </li>
                    <li>
                      cores limitadas estão disponíveis, ele suporta barras de navegação inversas, mas
                      não outras classes.
                    </li>
                    <li>
                      a classe .row não é necessária usando grade em formulários.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <h4 className="cinza-claro p-2 m-3">
                BootStrap 4
              </h4>
              <div className="card m-3">
                <div className="card-body">
                  <ul>
                    <li>
                      é baseado em um sistema de grade de 5 camadas (xs, sm, md, lg, xl).
                    </li>
                    <li>
                      no bootstrap 4, a classe .responsive-table adicionada usando o elemento &lt; table&gt;
                      .
                    </li>
                    <li>
                      existem muitas opções de cores .bg-dass ou .navbar-light, .navbar-dark classes
                    </li>
                    <li>
                      a classe .row é necessária ao usar a grade no formulário.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <h4 className="cinza-claro p-2 m-3">
                BootStrap 5
              </h4>
              <div className="card m-3">
                <div className="card-body">
                  <ul>
                    <li>
                      uma aparência diferente em diferentes sistemas operacionais e navegadores. A
                      aparência dos elementos do formulário não mudará em sistemas operacionais ou
                      navegadores diferentes.
                    </li>
                    <li>
                      Bootstrap 5 deu liberdade para modificar e também criar nosso próprio utilitário
                    </li>
                    <li>
                      A propriedade Inline-block foi removida e teremos um menu suspenso preto como
                      padrão para a classe dropdown-menu-dark.
                    </li>
                    <li>
                      Cores extras adicionadas aos looks ,, Uma paleta de cores aprimorada.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col
        ">
          <h4 className="cinza-claro p-2 m-3">
            Implementando BootStrap</h4>
          <div className="card m-3">
            <div className="card-body">
              <p>
                Para o desenvolvimento de templates com Bootstrap externo, é necessário a sua vinculação pelo link CSS. Para aplica-lo de forma offline devemos baixar todo o seu 
                conteudo e colormos em um documento CSS, declarando seu endereço de referência. Tanto seu sdocumento CSS como JS deve ser aplicados da mesma formas
              </p>
            </div></div></div>
              </article>
          </div>
        </section>
    <footer className="text-center p-2 bg-dark text-white">
  <p>Desenvolvido por Gabriel Oliveira</p>
</footer>
</div>
);
}