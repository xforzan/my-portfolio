import "./Footer.css";
import { Button } from "../Button/Button";

export const Footer = () => `

<h2>Contact</h2>
<div>
${Button("/icons/x.svg", "X")}
${Button("/icons/github.jpeg", "GitHub", "https://github.com/xforzan")}
${Button("/icons/linkedin.jpeg", "LinkedIn")}
${Button("/icons/link.jpeg", "Link")}
</div>
`;