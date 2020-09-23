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
              <h3 className="date">University of Coimbra - Portugal</h3>
              <p className="date">
                PhD Student - Department of Civil Engineering.
              </p>

              <p className="desc">February 2017 - present</p>
              <p className="desc">Development of meta and smart- materials.</p>

              <a
                href="https://www.researchgate.net/publication/336344419_Acoustic_behavior_of_porous_concrete_Characterization_by_experimental_and_inversion_methods"
                rel="noopener noreferrer"
                target="_blank"
              >
                Read More
              </a>
            </li>

            <li>
              <h3 className="date">University of Coimbra - Portugal</h3>
              <p className="date">
                PhD Student - Department of Civil Engineering.
              </p>

              <p className="desc">February 2017 - present</p>
              <p className="desc">Development of meta and smart- materials.</p>

              <a
                href="https://www.researchgate.net/publication/336344419_Acoustic_behavior_of_porous_concrete_Characterization_by_experimental_and_inversion_methods"
                rel="noopener noreferrer"
                target="_blank"
              >
                Read More
              </a>
            </li>

            <li>
              <h3 className="date">University of Coimbra - Portugal</h3>
              <p className="date">
                PhD Student - Department of Civil Engineering.
              </p>

              <p className="desc">February 2017 - present</p>
              <p className="desc">Development of meta and smart- materials.</p>

              <a
                href="https://www.researchgate.net/publication/336344419_Acoustic_behavior_of_porous_concrete_Characterization_by_experimental_and_inversion_methods"
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
