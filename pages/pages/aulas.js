import Link from 'next/link'
import StyleEstilo from '../../styles/estilo.css'
import StyleBotao from '../../styles/botao.css'
import StyleTabela from '../../styles/tabela.css'

export default function Aulas() {
  return (
    <div>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Prof Gustavo Ferreira" />
        <meta name="descripion" content="Playlist das aulas de programação WEBs" />
        <title>
          Curso de Desenvolvimento WEB
        </title>
        <link rel="stylesheet" href="../css/estilo.css" type="text/css" />
        <link rel="stylesheet" href="../css/tabela.css" type="text/css" />
        <link rel="stylesheet" href="../css/botao.css" type="text/css" />
        <link rel="icon" href="./Icon.png" type="image/x-icon" />
        <div className="container">
          <div className= {[StyleEstilo.cinza, StyleEstilo.container].join(" ")} id="arredondar">
            <Link href="microcamp.com.br" className= {StyleEstilo.cinza}>
              <img src="/logo.jpg" alt="Logo Microcamp" className= {StyleEstilo.cinza}id="arredondar" />
            </Link>
            <h1 className= {StyleEstilo.cinza}>Bem vindo ao Curso de Programação! 💻</h1>
            <p className= {StyleEstilo.cinza-escuro}>Clique na aula que deseja:</p> 
            <table className= {StyleTabela.tabela} >
              <tbody><tr>
                  <th>Aula</th>
                  <th>Modulo</th>
                  <th>Conteúdo</th>
                </tr>
                <tr>
                  <td>
                    <Link className= {StyleBotao.botao} href="/aulas/aula-01">01</Link>
                  </td>
                  <td>HTML</td>
                  <td>Iniciando um Projeto WEB</td>
                </tr>
                <tr>
                  <td>
                    <Link className= {StyleBotao.botao} href="/aulas/aula-02">02</Link>
                  </td>
                  <td>CSS3</td>
                  <td>Vinculando o CSS3 Externo</td>
                </tr>
                <tr>
                  <td>
                    <Link className= {StyleBotao.botao} href="/aulas/aula-03">03</Link>
                  </td>
                  <td>JavaScript</td>
                  <td>Alterando template com CSS3</td>
                </tr>
                <tr>
                  <td>
                    <Link className= {StyleBotao.botao} href="/aulas/aula-04">04</Link>
                  </td>
                  <td>BootStrap</td>
                  <td>Implementando bootstrap</td>
                </tr>
                <tr>
                  <td>
                    <Link className= {StyleBotao.botao} href="/aulas/aula-05">05</Link>
                  </td>
                  <td>JavaScript</td>
                  <td>Operadores em JavaScript</td>
                </tr>
                <tr>
                  <td>
                    <Link className= {StyleBotao.botao} href="/aulas/aula-06">06</Link>
                  </td>
                  <td>JavaScript</td>
                  <td>Portas lógicas JavaScript</td>
                </tr>
              </tbody></table>
          </div>
        </div>
      </div>
     ); 
}
