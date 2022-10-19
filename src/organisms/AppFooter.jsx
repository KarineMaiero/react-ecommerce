import React from "react";
import github from "../images/github.svg";

export default function AppFooter() {
  return (
    <div>
      <footer id="footer">
        <div className="footer-texto">
          <p>Feito por:</p>
        </div>
        <div className="gits">
          <p className="pfooter">Karine Maiero</p>
          <a href="https://github.com/KarineMaiero">
            <img className="img-footer" src={github} alt="GitHub" />
          </a>
        </div>
        <div className="gits">
          <p className="pfooter">Felipe de Lima Rosa</p>
          <a href="https://github.com/fenguel">
            <img className="img-footer" src={github} alt="GitHub" />
          </a>
        </div>
      </footer>
    </div>
  );
}
