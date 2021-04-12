import Project from "./Project";
import PropTypes from "prop-types";

const ProjectsList = ({ projects, filterText }) => {
  const itemsList = [];

  projects.forEach((project, i) => {
    if (project.title.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return;
    }

    itemsList.push(
      <div className="column is-one-third" key={i}>
        <Project {...project} />
      </div>
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

ProjectsList.defaultProps = {
  projects: [],
  filterText: "",
};

ProjectsList.propTypes = {
  projects: PropTypes.array,
  filterText: PropTypes.string,
};

export default ProjectsList;
