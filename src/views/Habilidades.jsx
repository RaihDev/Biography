import "../App.css";
import Container_Geral from "../Components/Container/Container";
import Header from "../Components/Header/Header";
import Swiper from "../Components/swiper/swiper";
export default function Habilidades() {
  return (
    <>
      <Container_Geral justifyContent="flex-start">
        <Header />
        <Swiper>
          <h1 style={{ zIndex: 1 }}> Hello WOrld</h1>
        </Swiper>
      </Container_Geral>
    </>
  );
}
