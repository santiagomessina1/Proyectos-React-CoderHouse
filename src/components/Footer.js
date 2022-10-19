import React from "react";
import { Menu } from "../assets/Menu";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import footerLogo from "../logo_without_bg.png";
const Footer = () => {
  return (
    <>
      <footer>
        <section className="footer">
          <div className="menu">
            <h2>SHOP</h2>
            <Menu />
          </div>
          <div className="content">
            <p>
              El contenido de esta pagina esta inspirado en la Tienda de H&M.
              Desarrollada para el curso de React en CoderHouse por Santiago
              Messina
            </p>
          </div>

          <img src={footerLogo} alt="" className="footerImg" />
        </section>

        <div className="links">
          <a
            href="https://www.linkedin.com/in/santiago-messina-a8924523b/"
            target="blank"
          >
            <FaLinkedin className="anchors" />
          </a>

          <a href="https://github.com/santiagomessina1" target="blank">
            <FaGithubSquare className="anchors" />
          </a>
        </div>
        <small>
          &copy;2022<b> Santiago Messina</b>
        </small>
      </footer>
    </>
  );
};
export default Footer;
