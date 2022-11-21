import Link from 'next/link'
import styleBotao from '../../styles/botao.module.css'
import styleEstilo from '../../styles/estilo.module.css'
import styleTabela from '../../styles/tabela.module.css'

export default function aulas() {
    return (
        <div>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Prof Gustavo Ferreira" />
        <meta name="descripion" content="Playlist das aulas de programação web." />
        <title>Curso de Desenvolvimento Web</title>
        <link rel="icon" href="/icon.png" type="image/x-icon" />
        <div className={styleEstilo.container}>
          <div className={[styleEstilo.cinza, styleEstilo.container, styleEstilo.arredondar].join(" ")}>
            <Link href="microcamp.com.br" className={styleEstilo.cinza}>
              <img src="/logo.jpg" alt="Logo Microcamp" className={[styleEstilo.img, styleEstilo.cinza, styleEstilo.arredondar]}/>
            </Link>
            <h1 className={[styleEstilo.cinza, styleEstilo.h1].join(" ")}>Bem vindo ao Curso de Programação! 💻</h1>
            <p className={[styleEstilo.cinzaEscuro, styleEstilo.p].join(" ")}>Clique na aula que deseja:</p>
            <table className={styleTabela.tabela}>
              <tbody><tr>
                  <th>Aula</th>
                  <th>Modulo</th>
                  <th>Conteúdo</th>
                </tr>
                <tr>
                  <td>
                    <Link href="/pages/aulas/aula01">
                    <div className={styleBotao.botao}>01</div>
                    </Link>
                  </td>
                  <td>HTML</td>
                  <td>Git com HTML e CSS</td>
                </tr>
                <tr>
                  <td>
                    <Link href="/pages/aulas/aula02">
                      <div className={styleBotao.botao}>02</div>
                      </Link>
                  </td>
                  <td>CSS3</td>
                  <td>Seletores CSS 3</td>
                </tr>
                <tr>
                  <td>
                    <Link href="/pages/aulas/aula03">
                    <div className={styleBotao.botao}>03</div>
                    </Link>
                  </td>
                  <td>JavaScript</td>
                  <td>Introdução ao JavaScript</td>
                </tr>
                <tr>
                  <td>
                    <Link href="/pages/aulas/aula04" >
                    <div className={styleBotao.botao}>04</div>  
                    </Link>
                  </td>
                  <td>BootStrap</td>
                  <td>Implementando Bootstrap</td>
                </tr>
                <tr>
                  <td>
                    <Link href="/pages/aulas/aula05" >
                      <div className={styleBotao.botao}>05</div>
                    </Link>
                  </td>
                  <td>JavaScript</td>
                  <td>Operadores em JavaScript</td>
                </tr>
                <tr>
                  <td>
                    <Link href="/pages/aulas/aula06" >
                    <div className={styleBotao.botao}>06</div>
                    </Link>
                  </td>
                  <td>JavaScript</td>
                  <td>Portas Lógicas em JavaScript</td>
                </tr>
              </tbody></table>
          </div>
        </div>
      </div>
    );
  }
  