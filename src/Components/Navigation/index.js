import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export default (props) => {
  const lang = window.location.pathname.split("/")[1];
  let flags = [
    { code: "en", label: "English", img: "/assets/flags/uk.svg" },
    { code: "es", label: "Spain", img: "/assets/flags/spain.svg" },
    { code: "pt", label: "Portuguese", img: "/assets/flags/brazil.svg" },
  ];
  const active = flags.find((flag) => flag["code"] === lang);
  const index = flags.indexOf(active);
  flags.splice(index, 1);

  const handleChange = (event) => {
    props.changeLanguage(event.target.value);
  };

  const { t } = props;
  return (
    <Fragment>
      <header className="scrolled">
        <Link className="brand" to="/">
          <span>Matheus </span> Pereira
        </Link>
        <nav>
          <Link to="/">{t("homeNav")}</Link>
          <Link to="/bio">{t("bioNav")}</Link>
          <Link to="/experiences">{t("experiencesNav")}</Link>
          <Link to="/publications">{t("publicationsNav")}</Link>
        </nav>

        <div id="lang">
          <div className="active">
            <img src={active.img} alt="flag" />
            {active.label}
            <div className="flags">
              {flags.map((flag, index) => (
                <button value={flag["code"]} key={index} onClick={handleChange}>
                  <img src={flag.img} alt="flag" />
                  {flag.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
};
