import styleEstilo from '../../../styles/estilo.module.css'
import styleBotao from '../../../styles/botao.module.css'
import styleLista from '../../../styles/lista.module.css'
import styleTab from '../../../styles/tabela-claro.module.css'

export default function aula06(){
    return(
        <div>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Prof Gustavo Ferreira" />
        <meta name="descripion" content="Página de introdução ao Desenvolviemento web - Aula 0" />
        <title>Aula 06 - Portas lógicas em JavaScript</title>
        <link rel="stylesheet" href="==/estilo.css" type="text/css" />
        <link rel="stylesheet" href="=/botao.css" type="text/css" />
        <link rel="stylesheet" href="=/lista.css" type="text/css" />
        <link rel="stylesheet" href="=/bootstrap/style.css" type="text/css" />
        <link rel="stylesheet" href="=/tabela-claro.css" type="text/css" />
        <link rel="icon" href="../../img/Microcamp.png" type="image/x-icon" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <header className>
          /**navbar navbar-expand-sm bg-dark navbar-dark */
          <nav className="">
            /**container-fluid */
            <div className="">
              /**navbar-nav container */
              <ul className="">
                /**nav-item */
                <li className="">
                  /**navbar-brand */
                  <a className="" href="http:microcamp.com">
                  <img src="/logo.jpg" style={{width: '60px'}} alt="Logo Microcamp" className={styleEstilo.arredondar} />
                  </a>
                </li>
                <li className="nav-item text-white">
                  <h3>01 - Git com HTML e CSS</h3>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        /**row */
        <section className="">
          /**col-lg-3 bg-purple */
          <nav className={styleLista.nav} >
            /**navbar-nav m-3 */
            <ul className="">
              /**nav-item */
              <li className={styleLista.li}>
                <link href="/pages/aulas/aula01">
                  <div className={styleEstilo.botaoLista} >
                    Aula 01 - Git com HTML e CSS
                  </div>
                </link>
              </li>
              /**nav-item */
              <li className={styleLista.li} >
                <link href="/pages/aulas/aula02">
                  <div className={styleEstilo.botaoLista} >
                    Aula 02 - Seletores CSS 3
                  </div>
                </link>
              </li>
              /**nav-item */
              <li className={styleLista.li} >
                <link href="/pages/aulas/aula03">
                  <div className={styleEstilo.botaoLista} >
                    Aula 03 - Introdução a JS
                  </div>
                </link>
              </li>
              /**nav-item */
              <li className={styleLista.li} >
                <link href="/pages/aulas/aula04">
                  <div className={styleEstilo.botaoLista} >
                    Aula 04 - BootStrap
                  </div>
                </link>
              </li>
              /**nav-item */
              <li className={styleLista.li} >
                <link href="/pages/aulas/aula05">
                  <div className={styleEstilo.botaoLista} >
                    Aula 05 - Operadores em JavaScript
                  </div>
                </link>
              </li>
              /**nav-item */
              <li className={styleLista.li} >
                <link href="/pages/aulas/aula06">
                  <div className={styleEstilo.botaoLista} >
                    Aula 06 - portas lógicas
                  </div>
                </link>
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
