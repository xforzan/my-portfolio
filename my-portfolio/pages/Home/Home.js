import "./Home.css";
import { cleanPage } from "../../utils/cleanPage";

export const Home = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
    <section class="home">
    <p>Hola, soy</p>
    <h1>Achraf Nakhil</h1>
    <p>Soy un estudiante y desarrollador apasionado por crear cosas que vivan en Internet, ya sean sitios web, aplicaciones o cualquier cosa intermedia. Llevo un año trabajando como freelancer y he adquirido una gran experiencia y conocimientos valiosos en diversas áreas a través de mis proyectos y trabajos.</p>
    <a href="nakhila2024@gmail.com">Di Hola →</a>
    </section>`;
};