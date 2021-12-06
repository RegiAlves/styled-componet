import { Container, Head, BemVindo } from './style.js';
function App() {
  return (
    <Container >
      <Head>  
        <a href>Projeto Styled</a>
      </Head>
      <BemVindo cor="00FF00" tamanho={35} >Bem vindo ao sistema</BemVindo>
    </Container>
  );
}

export default App;
