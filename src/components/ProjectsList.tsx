import * as React from "react";
import Project from "./Project";
import { IProjectItem } from "../types/projectTypes";

interface ProjectItem extends IProjectItem {
  id: number
};

type ProjectsListProps = {
  projects: ProjectItem[],
  filterText?: string
};

const ProjectElement = ({project}: {project: ProjectItem}) => {
  return (<div className="column is-one-third" key={project.id}>
          <Project {...project} />
        </div>);
};


const ProjectsList = ({ projects, filterText="" }: ProjectsListProps) => {
  const itemsList: Array<React.ReactElement> = [];

  projects.forEach((project, i) => {
    if (project.title.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return;
    }

    itemsList.push(
      <ProjectElement project={project} />
    );
  });

  return (
    <div className="container columns is-multiline is-flex is-flex-wrap-wrap is-flex-direction-row">
      {itemsList.length > 0 ? (
        itemsList
      ) : (
        <div
          className="content is-flex is-justify-content-center is-align-content-center pl-6 pt-5"
          style={{ width: "80%", textAlign: "center" }}
        >
          <p>No match!</p>
        </div>
      )}
    </div>
  );
};

export default ProjectsList;
