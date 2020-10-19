import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export default (props) => {
  const { t } = props;
  return (
    <Fragment>
      <section id="home">
        <h2>{t("homeTitle")}</h2>
        <h3>{t("homeDescription")}</h3>
        {/* <p>{t("homeFreelance")}</p> */}

        {/* <div id="presentation"> */}
        {t("homeFreelance")
          .split("/n")
          .map((text, i) => (
            <p dangerouslySetInnerHTML={{ __html: text }} key={i}></p>
          ))}
        {/* </div> */}

        <div>
          <Link to="/bio" className="btn btn-primary">
            {t("buttonBio")}
          </Link>
          <Link to="/publications" className="btn btn-secondary">
            {t("buttonPublications")}
          </Link>
        </div>
      </section>
    </Fragment>
  );
};
