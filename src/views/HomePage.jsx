import "../App.css";

import Container_Geral from "../Components/Container/Container";
import Header from "../Components/Header/Header";
import RenderImage from "../Components/RenderImage/RenderImage";
import CustomCard from "../Components/CustomCard/CustomCard";
import List from "../Components/List/List";

import githubIcon from "../assets/github.png";
import linkedinIcon from "../assets/linkedin.png";
import whatsappIcon from "../assets/whatsapp.png";
import emailIcon from "../assets/o-email.png";
import faculdadeIcon from "../assets/faculdade.png";
import gpsIcon from "../assets/pin-de-localizacao.png";
function HomePage() {
  const desc = `Meu nome é Rai Heleno Machado Lamolha, nasci em 17/07/2004 e atualmente resido em Leopoldina - MG - Brasil. Gosto de tecnologia e estou em constante busca por aprendizado na área de TI. Comecei no curso técnico integrado de Informática no CEFET-MG, onde desenvolvi habilidades fundamentais a respeito de algoritmos, web e construção de projetos. Hoje, estou cursando Engenharia da Computação na mesma instituição, ampliando minha capacidade de resolver problemas e aprimorando meus conhecimentos técnicos.

Além do meu interesse profissional, sou um entusiasta de videogames competitivos. Também valorizo um estilo de vida equilibrado, mantendo uma rotina de treinos e alimentação saudável, que me ajuda a manter o foco e a energia para enfrentar as demandas do dia a dia. `;
  const items_contato = [
    {
      nome: "Email",
      descricao: "railamolha.profissional@gmail.com",
      icon: emailIcon,
    },
    { nome: "Telefone", descricao: "(32) 99836-5528", icon: whatsappIcon },
    {
      nome: "Linkedin",
      descricao: "linkedin.com/in/RaiHelenoMachadoLamolha",
      link: "https://www.linkedin.com/in/rai-heleno-machado-lamolha-22a354326/",
      icon: linkedinIcon,
    },
    {
      nome: "Github",
      descricao: "https://github.com/RaihDev",
      link: "https://github.com/RaihDev",
      icon: githubIcon,
    },
  ];
  const outros_Items = [
    {
      nome: "Localização",
      descricao: "Leopoldina - MG - Brasil",
      link: "https://maps.app.goo.gl/wruVU4TtKD17XfWm6",
      icon: gpsIcon,
    },
    {
      nome: "Instituição de Ensino",
      descricao: "CEFET/MG - Campus Leopoldina",
      link: "https://www.leopoldina.cefetmg.br",
      icon: faculdadeIcon,
    },
  ];
  return (
    <>
      <Container_Geral justifyContent="flex-start">
        <Header />
        <RenderImage />
        <CustomCard
          description={desc}
          title={"Sobre mim"}
          cardHeight="300px"
          cardWidth="1000px"
          position="bottomCenter"
          background="transparent"
        />
        <List items={items_contato} top="30%" left="80%" />
        <List items={outros_Items} top="30%" left="20%" />
      </Container_Geral>
    </>
  );
}

export default HomePage;
