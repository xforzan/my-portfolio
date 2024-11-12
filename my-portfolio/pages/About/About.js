import "./About.css";
import { cleanPage } from "../../utils/cleanPage";

export const About = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
    <section class="About">
    <h2>About</h2>
    <p>Soy un estudiante de desarrollo de aplicaciones web con una gran pasión por crear soluciones digitales que mejoren la experiencia del usuario. Me especializo en tecnologías como HTML, CSS, JavaScript, y frameworks modernos como React y Node.js. A lo largo de mis estudios y proyectos personales, he adquirido experiencia en el diseño, desarrollo y despliegue de aplicaciones web, y siempre estoy buscando aprender nuevas herramientas y mejorar mis habilidades. Me motiva resolver problemas complejos y colaborar en proyectos innovadores que tengan un impacto real.</p>
    <div class="img">
    <img class="html" src="data:image/svg+xml;utf8, <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 452 520'>%0A    <path fill='%23e34f26' d='M41 460L0 0h451l-41 460-185 52' />%0A    <path fill='%23ef652a' d='M226 472l149-41 35-394H226' />%0A    <path fill='%23ecedee' d='M226 208h-75l-5-58h80V94H84l15 171h127zm0 147l-64-17-4-45h-56l7 89 117 32z'/>%0A    <path fill='%23fff' d='M226 265h69l-7 73-62 17v59l115-32 16-174H226zm0-171v56h136l5-56z'/>%0A  </svg>">
    <img class="css" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/2048px-CSS3_logo.svg.png" alt="CSS3">
    <img class="javascript" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/900px-JavaScript-logo.png" alt="Javascript"> 
    </div>
    </section>`;
  };