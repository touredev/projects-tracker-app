import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import NotFound from "./NotFound";

const Container = styled.div`
  margin: 0 auto;
  max-width: 70%;
  padding-left: 5rem;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;

  a {
    text-decoration: none;
  }
  ul {
    padding: 0;
    list-style-type: none;
    list-style: none;
  }
  li {
    margin-bottom: 1em;
  }
  li span {
    width: 120px;
    float: left;
    font-weight: 700;
  }

  li .data,
  .tags {
    text-transform: capitalize;
  }

  li .tags {
    color: #357edd;
  }

  li p.description {
    margin-left: 120px;
    text-align: justify;
    text-justify: inter-word;
  }
`;

const Title = styled.p`
  color: rgba(51, 51, 51, 1);
  margin-bottom: 0.75rem;
  font-size: 1.875rem;
  line-height: 2.25rem;
  letter-spacing: -0.025em;
  cursor: pointer;
`;

const Buttons = styled.div`
  max-width: 18%;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  text-align: center;
`;

const ButtonElt = styled.button`
  border: none;
  border-radius: 0.5rem;
  display: inline-block;
  padding: 0.5rem 0.8rem;
  font-size: 0.9em;
  line-height: 1;
  font-weight: 600;
  color: #ffffff;
  background-color: ${(props) => props.bgColor || "rgba(51, 51, 51, 1)"};
  cursor: pointer;
`;

const StatusBadge = styled.p`
  margin-left: 7rem;
  width: ${(props) => props.widthValue || "4rem"};
  text-transform: uppercase;
  font-weight: 700;
  color: ${(props) => props.textColor || "black"};
  background-color: ${(props) => props.bgColor || "white"};
`;

const badgeStyle = {
  "in-progress": { bgColor: "yellow", widthValue: "8rem" },
  done: { textColor: "white", bgColor: "green" },
  "to-do": { bgColor: "red", textColor: "white", widthValue: "5rem" },
};

const ProjectDetails = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState({});
  console.log(projectId);

  useEffect(() => {
    const getProject = async () => {
      const currentProject = await fetchProject(projectId);
      setProject(currentProject);
    };

    getProject();
  }, []);

  // Fetch Project by ID
  const fetchProject = async (id) => {
    const res = await fetch(`http://localhost:5000/projects/${id}`);
    const data = await res.json();
    console.log(data);
    return data;
  };

  if (!project?.id) {
    return <NotFound />;
  }

  return (
    <Container>
      <Title>{project.title}</Title>
      <ul>
        <li>
          <span>Status:</span>
          <StatusBadge {...badgeStyle[project.status]}>
            {project.status}
          </StatusBadge>
        </li>
        <li>
          <span>Start date:</span> <p className="data">December 24, 2020</p>
        </li>
        <li>
          <span>End date:</span> <p className="data">January 31, 2021</p>
        </li>
        <li>
          <span>Tags:</span> <p className="tags">{project.tags}</p>
        </li>
        <li>
          <span>Description:</span>
          <p className="description">{project.description}</p>
        </li>
      </ul>
      <Buttons>
        <ButtonElt type="button" bgColor="#357edd">
          Edit
        </ButtonElt>
        <Link to="/">
          <ButtonElt type="button">Go back</ButtonElt>
        </Link>
      </Buttons>
    </Container>
  );
};

export default ProjectDetails;
