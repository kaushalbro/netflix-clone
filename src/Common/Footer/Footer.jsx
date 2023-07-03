import React from "react";
import "./Footer.scss";
import LanguageIcon from "@mui/icons-material/Language";

function Footer() {
  const links = [
    { link_for: "FAQ", link: "#" },
    { link_for: "Help Center", link: "#" },
    { link_for: "Account", link: "#" },
    { link_for: "Media Center", link: "#" },
    { link_for: "Investor Relations", link: "#" },
    { link_for: "Jobs", link: "#" },
    { link_for: "Ways to Watch", link: "#" },
    { link_for: "Terms of Use", link: "#" },
    { link_for: "Privacy", link: "#" },
    { link_for: "Cookie Preferences", link: "#" },
    { link_for: "Corporate Information", link: "#" },
    { link_for: "Contact Us", link: "#" },
    { link_for: "Speed Test", link: "#" },
    { link_for: "Legal Notices", link: "#" },
    { link_for: "Only on Netflix", link: "#" },
  ];
  return (
    <footer>
      <div className="footer_row_1">
        <a href="#">Questions? Contact us</a>
      </div>
      <div className="footer_row_2">
        {links.map((s) => {
          return (
            <li key={s.link}>
              <a href={s.link}>{s.link_for}</a>
            </li>
          );
        })}
        {/* <ul>
          <li><a href="#"></a>hello</li>
        </ul> */}
      </div>
      <div className="footer_row_3">
      <LanguageIcon className="lang_icon" />
        <select name="lang" id="lang"> 
          <option value="en">
            English
          </option>
          <option value="es">Español</option>
          <option value="fr">Français</option>
          <option value="de">Deutsch</option>
          <option value="it">Italiano</option>
          <option value="pt">Português</option>
          <option value="ru">Русский</option>
          <option value="nl">Nederlands</option>
          <option value="pl">Polski</option>
          <option value="zh-CN">简体中文</option>
          <option value="zh-TW">繁體中文</option>
        </select>
        <p>Netflix Nepal</p>
      </div>
    </footer>
  );
}

export default Footer;
