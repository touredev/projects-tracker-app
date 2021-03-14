import styled from "styled-components";
import Project from "./Project";
import PropTypes from "prop-types";

const Container = styled.div`
  margin: 0 auto;
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  padding: 2rem 10rem;
  p.no__result {
    text-align: center;
    font-size: 1.5rem;
    padding-left: 25rem;
    letter-spacing: 0.1rem;
  }
`;

const ProjectsList = ({ projects, filterText }) => {
  const itemsList = [];

  projects.forEach((item, index) => {
    if (item.title.toLowerCase().indexOf(filterText) === -1) {
      return;
    }

    itemsList.push(<Project key={index} {...item} />);
  });

  return (
    <Container>
      {itemsList.length > 0 ? (
        itemsList
      ) : (
        <p className="no__result">No match!</p>
      )}
    </Container>
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
