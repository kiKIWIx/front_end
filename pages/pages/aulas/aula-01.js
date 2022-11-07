export default function Aula01(){
    return(
        <div>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Prof Gustavo Ferreira" />
        <meta name="descripion" content="Página de introdução ao Desenvolviemento web - Aula 0" />
        <title>Aula 01 - Git com HTML e CSS</title>
        <link rel="stylesheet" href="../../css/estilo.css" type="text/css" />
        <link rel="stylesheet" href="../../css/botao.css" type="text/css" />
        <link rel="stylesheet" href="../../css/lista.css" type="text/css" />
        <link rel="stylesheet" href="../../css/bootstrap/style.css" type="text/css" />
        <link rel="stylesheet" href="../../css/tabela-claro.css" type="text/css" />
        <link rel="icon" href="../../img/Microcamp.png" type="image/x-icon" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <header className>
          <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <div className="container-fluid">
              <ul className="navbar-nav container">
                <li className="nav-item">
                  <a className="navbar-brand" href="http:microcamp.com">
                    <img src="../../img/logo.jpg" style={{width: '60px'}} alt="Logo Microcamp" id="arredondar" />
                  </a>
                </li>
                <li className="nav-item text-white">
                  <h3>01 - Git com HTML e CSS</h3>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <section className="row">
          <nav className="col-lg-3 bg-purple">
            <ul className="navbar-nav m-3">
              <li className="nav-item">
                <a href="aula-01.html">
                  <div className="botao-lista">
                    Aula 01 - Git com HTML e CSS
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a href="aula-02.html">
                  <div className="botao-lista">
                    Aula 02 - Seletores CSS 3
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a href="aula-03.html">
                  <div className="botao-lista">
                    Aula 03 - Introdução a JS
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a href="aula-04.html">
                  <div className="botao-lista">
                    Aula 04 - BootStrap
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a href="aula-05.html">
                  <div className="botao-lista">
                    Aula 05 - Operadores em JavaScript
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a href="aula-06.html">
                  <div className="botao-lista">
                    Aula 06 - portas lógicas
                  </div>
                </a>
              </li>
            </ul>
          </nav>
          <article className="col-lg-9">

        </article>
        </section>
        <footer className="text-center p-2 bg-dark text-white">
          <p>Desenvolvido por Gabriel Oliveira</p>
        </footer>
      </div>
    );
}           
