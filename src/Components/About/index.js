import React, { Fragment } from "react";

export default (props) => {
  const { t } = props;
  return (
    <Fragment>
      <section id="about">
        <div>
          <div>
            {/* <h2>{t("bioTitle")}</h2> */}
            {t("bioDescription")
              .split("/n")
              .map((text, i) => (
                <p dangerouslySetInnerHTML={{ __html: text }} key={i}></p>
              ))}

            {t("bioDescriptionMore")
              .split("/n")
              .map((text, i) => (
                <p dangerouslySetInnerHTML={{ __html: text }} key={i}></p>
              ))}

            <a
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.researchgate.net/profile/Matheus_Pereira4"
            >
              Research Gate Profile
            </a>
          </div>
          <figure>
            <img src="/assets/profilepic.jpg" alt="Matheus Pereira Profile" />
          </figure>
        </div>
      </section>
    </Fragment>
  );
};
