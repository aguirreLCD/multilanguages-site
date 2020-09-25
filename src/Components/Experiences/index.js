import React, { Fragment } from "react";
export default (props) => {
  const { t } = props;
  return (
    <Fragment>
      <section id="publications">
        <div>
          <h2>{t("experiencesTitle")}</h2>
          <p>{t("experiencesDescription")}</p>

          <ul>
            <li>
              <h3 className="date">{t("professionalExperience1.company")}</h3>
              <p className="date">{t("professionalExperience1.title")}</p>
              <p className="desc">{t("professionalExperience1.years")}</p>
              <p className="desc">{t("professionalExperience1.description")}</p>
              <a
                href={t("professionalExperience1.url")}
                rel="noopener noreferrer"
                target="_blank"
              >
                Read More
              </a>
            </li>

            <li>
              <h3 className="date">{t("professionalExperience2.company")}</h3>
              <p className="date">{t("professionalExperience2.title")}</p>
              <p className="desc">{t("professionalExperience2.years")}</p>
              <p className="desc">{t("professionalExperience2.description")}</p>
              <a
                href={t("professionalExperience2.url")}
                rel="noopener noreferrer"
                target="_blank"
              >
                Read More
              </a>
            </li>

            <li>
              <h3 className="date">{t("professionalExperience3.company")}</h3>
              <p className="date">{t("professionalExperience3.title")}</p>
              <p className="desc">{t("professionalExperience3.years")}</p>
              <p className="desc">{t("professionalExperience3.description")}</p>
              <a
                href={t("professionalExperience3.url")}
                rel="noopener noreferrer"
                target="_blank"
              >
                Read More
              </a>
            </li>
          </ul>
        </div>
      </section>
    </Fragment>
  );
};
