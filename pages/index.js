import Link from 'next/link'
import StyleEstilo from "style/estilo.css"
import StyleBotao from 'Style/botao.css'

export default function Home() {
  return (
    <div>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Prof Gustavo Ferreira" />
        <meta name="descripion" content="Página inicial de Desenvolvimento WEB" />
        <title>Curso de Desenvolvimento WEB</title> 
        <link rel="stylesheet" href="css/botao.css" type="text/css" />
        <link rel="icon" href="./icon.png" type="image/x-icon" />
        <div className={StyleEstilo.container}>
          <div className= {[StyleEstilo.conteudo, StyleEstilo.cinza] .join(" ")} id="arredondar">
            <Link href="microcamp.com.br" className={StyleEstilo.cinza}>
              <img className= {StyleEstilo.cinza} id="arredondar" src="/logo.jpg" type="jpg" alt="Logo Microcamp" />
            </Link>
            <h1 className= {StyleEstilo.cinza} >Seja Bem-Vindo</h1>
            <p className= {StyleEstilo.cinza-escuro} id="altera">Clique em começar para aprender! 👇</p>
            <Link className={StyleBotao.botao} href="pages/aulas.js">Começar</Link>
          </div>
        </div>
      </div>
  );
}
