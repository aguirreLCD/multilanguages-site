import React, { Fragment } from "react";

export default (props) => {
  const { t } = props;
  return (
    <Fragment>
      <footer>
        <ul id="social">
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://pt.linkedin.com/in/matheus-pereira-1b9627104"
            >
              <i className="fa fa-linkedin-square" aria-hidden="true"></i>
              {/* <p>Linkedin</p> */}
            </a>
          </li>

          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.researchgate.net/profile/Matheus_Pereira4"
            >
              <i className="fab fa-researchgate    "></i>
              {/* <p>Research Gate</p> */}
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/math_pereiraa"
            >
              <i className="fa fa-twitter-square" aria-hidden="true"></i>
              {/* <p>Twitter</p> */}
            </a>
          </li>
          <li>
            <a href="mailto:matheus.pereira@eac.ufsm.br?subject=Message from matheus website">
              <i className="fa fa-envelope-square" aria-hidden="true"></i>
              {/* {t("footerEmail")} */}
              {/* <p>Email</p> */}
            </a>
          </li>
        </ul>

        {/* <p>
          <strong>{t("footerQuestion")}</strong>
          <a href="mailto:matheus.pereira@eac.ufsm.br?subject=Message from matheus website">
            <i className="fa fa-envelope-square" aria-hidden="true"></i>
            {t("footerEmail")}
          </a>
        </p> */}
      </footer>
    </Fragment>
  );
};
