import "./Footer.css";
import { Button } from "../Button/Button";

export const Footer = () => `

<h2>Contact</h2>
<div>
${Button("/icons/twitter.jpeg", "Twitter")}
${Button("/icons/github.jpeg", "GitHub")}
${Button("/icons/linkedin.jpeg", "LinkedIn")}
${Button("/icons/telegram.jpeg", "Telegram")}
</div>
`;