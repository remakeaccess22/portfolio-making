import { Header } from "./components/Header";
import { Container } from "./components/Container";
import { Background } from "./components/Background";

function App() {
  return (
    <>
      <Background>
        <Container>
          <Header />
        </Container>
      </Background>
    </>
  );
}

function Main() {
  return (
    <>
      <HeroPage />
    </>
  );
}

export default App;
