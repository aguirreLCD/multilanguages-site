import React, { Fragment } from "react";
export default (props) => {
  const { t } = props;
  return (
    <Fragment>
      <section id="publications">
        <div>
          <h2>{t("publicationsTitle")}</h2>
          <p>{t("publicationsDescription")}</p>

          <ul>
            <li>
              <h3 className="date">{t("publication1.title")}</h3>
              <p className="desc">{t("publication1.category")}</p>
              <a
                href={t("publication1.url")}
                rel="noopener noreferrer"
                target="_blank"
              >
                Read More
              </a>
            </li>

            <li>
              <h3 className="date">{t("publication2.title")}</h3>
              <p className="desc">{t("publication2.category")}</p>
              <a
                href={t("publication2.url")}
                rel="noopener noreferrer"
                target="_blank"
              >
                Read More
              </a>
            </li>

            <li>
              <h3 className="date">{t("publication3.title")}</h3>
              <p className="desc">{t("publication3.category")}</p>
              <a
                href={t("publication3.url")}
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
