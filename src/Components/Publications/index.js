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
              <h3 className="date">Acoustic behavior of porous concrete.</h3>
              <p className="desc">Conference: INTERNOISE 2019.</p>
              <a
                href="https://www.researchgate.net/publication/336344419_Acoustic_behavior_of_porous_concrete_Characterization_by_experimental_and_inversion_methods"
                rel="noopener noreferrer"
                target="_blank"
              >
                Read More
              </a>
            </li>

            <li>
              <h3 className="date">
                Study of analytical and numerical models.
              </h3>
              <p className="desc">Conference: INTERNOISE 2019.</p>
              <a
                href="https://www.researchgate.net/publication/333918419_Study_of_analytical_and_numerical_models_for_diffuse_field_sound_absorption_prediction_according_to_the_porous_panel_dimensions"
                rel="noopener noreferrer"
                target="_blank"
              >
                Read More
              </a>
            </li>

            <li>
              <h3 className="date">Tuning Locally Resonant Structures.</h3>
              <p className="desc">Conference: INTERNOISE 2019</p>
              <a
                href="https://www.researchgate.net/publication/333929733_Overcoming_the_Coincidence_Effect_of_a_Single_Panel_by_Introducing_and_Tuning_Locally_Resonant_Structures"
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
