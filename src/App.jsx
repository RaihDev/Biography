import "./App.css";
import Container_Geral from "./Components/Container";
import Header from "./Components/Header";
import RenderImage from "./Components/RenderImage";
import CustomCard from "./Components/CustomCard";
function App() {
  return (
    <>
      <Container_Geral color="#c0e8fc" justifyContent="flex-start">
        <Header />
        <RenderImage />
        <CustomCard description={"Teste"} title={"Teste"} image={""} />
      </Container_Geral>
    </>
  );
}

export default App;
