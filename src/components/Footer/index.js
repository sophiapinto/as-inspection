import "./footer.css";

function Footer (){
    return(
      <footer class="main-footer">
      <div class="main-container">
        <div class="main-footer__upper">
          <div class="main-footer__row main-footer__row-1">
            <h2 class="heading-sm">
              <span>Conheça</span>
            </h2>
            <div class="main-footer__social-cont">
              <a href="https://www.linkedin.com/in/alison-maciel-6a3525242/">
                <img
                  class="main-footer__icon"
                  src="./linkedin-ico.png"
                  alt="icon"
                />
              </a>
              <a href="https://www.instagram.com/acm.engenharia_/">
                <img
                  alt="icon"
                  class="main-footer__icon main-footer__icon--mr-none"
                  src="./insta-ico.png"
                />
              </a>
            </div>
          </div>
          <div class="main-footer__row main-footer__row-2">
            <h4 class="heading-sm">AS Inspection</h4>
            <p class="main-footer__short-desc">
              Alison Costa Maciel <br></br>
              Engenheiro responsável
            </p>
          </div>
        </div>

        <div class="main-footer__lower">
          &copy; Copyright 2024. Desevolvido por
          <a href="https://yllion.com.br">
            Sarah Sophia Pinto
            </a>
        </div>
      </div>
    </footer>

);
}

export default Footer;