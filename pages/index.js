import Link from 'next/link'

export default function Home() {
  return (
    <div>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Prof Gustavo Ferreira" />
        <meta name="descripion" content="Página inicial de Desenvolvimento WEB" />
        <title>Curso de Desenvolvimento WEB</title> 
        <link rel="stylesheet" href="/botao.css" type="text/css" />
        <link rel="stylesheet" href="/estilo.css" />
        <link rel="icon" href="/icon.png" type="image/x-icon" />
        <div className="container">
          <div className= "conteudo, cinza"id="arredondar">
            <Link href="microcamp.com.br" className={cinza}>
              <img className="cinza" id="arredondar" src="/logo.jpg" type="jpg" alt="Logo Microcamp" />
            </Link>
            <h1 className= "cinza" >Seja Bem-Vindo</h1>
            <p className= "cinza-escuro"id="altera">Clique em começar para aprender! 👇</p>
            <Link className="botao" href="pages/aulas.js">Começar</Link>
          </div>
        </div>
      </div>
  );
}
