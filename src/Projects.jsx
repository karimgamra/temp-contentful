import React from "react";
import { useFetchProjects } from "./FetchProjets";
import { projects } from "./data";

const Projects = () => {
  const { loading, project } = useFetchProjects();

  return (
    <section className="projects">
      <div className="center">
        {project.map((item) => {
          const { project, url, id, img } = item;

          return (
            <div className="single-project" key={id}>
              <img src={img} alt="" />
              <div className="link">
                <li>
                  <a target="_blank" href={url}>
                    {project}
                  </a>
                </li>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
