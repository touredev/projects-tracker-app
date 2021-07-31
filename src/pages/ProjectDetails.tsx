import React, { useState, useEffect, useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import NotFound from "./NotFound";
import ProjectForm from "../components/ProjectForm";
import { IProjectItem } from "../types/projectTypes";
import { get, put } from "../services/http";

const URL = "http://localhost:5000/projects";

const Container = styled.div`
  margin: 0 auto;
  max-width: 75%;
  padding-left: 4rem;
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

  li .data {
    text-transform: capitalize;
  }

  li p.description {
    margin-left: 120px;
    text-align: justify;
    text-justify: inter-word;
  }
`;

const FormContainer = styled.div`
  padding-left: 6rem;
  padding-top: 1rem;
`;

const badgeStyle = {
  "in-progress": "is-warning",
  done: "is-success",
  "to-do": "is-danger",
};

const ProjectDetails = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const [project, setProject] = useState<IProjectItem | undefined>(
    {} as IProjectItem
  );
  const [isLoading, setLoading] = useState(true);
  const [isEditing, setEditing] = useState(false);

  useEffect(() => {
    const getProject = async () => {
      const currentProject = await fetchProject(projectId);
      setProject(currentProject);
      setLoading(false);
    }

    getProject();
  }, []);

  // Fetch Project by ID
  const fetchProject = useCallback(async (id: string) => {
    const res = await get<IProjectItem>(URL + `/${id}`);
    return res.parsedBody;
  }, []);

  const updateProject = async (data: IProjectItem) => {
    const res = await put<IProjectItem>(URL + `/${data.id}`, { ...data });
    setProject(res.parsedBody);
    setEditing(false);
  }

  if (isLoading) {
    return null;
  }

  if (!project?.id) {
    return <NotFound />;
  }

  return (
    <>
      {isEditing ? (
        <FormContainer>
          <ProjectForm
            project={project}
            formAction={updateProject}
            setEditing={setEditing}
          />
        </FormContainer>
          ) : (
        <Container>
          <h3 className="title is-3">{project.title}</h3>
          <ul>
            <li>
              <span>Status:</span>
              <p
                className={`tag is-medium ${badgeStyle[project.status]}`}
                style={{ fontWeight: 500, textTransform: "uppercase" }}
              >
                {project.status}
              </p>
            </li>
            <li>
              <span>Start date:</span> <p className="data">December 24, 2020</p>
            </li>
            <li>
              <span>End date:</span> <p className="data">January 31, 2021</p>
            </li>
            <li>
              <span>Tags:</span>
              <p
                style={{
                  color: "rgba(0, 0, 238, 1)",
                  textTransform: "capitalize",
                }}
              >
                {project.tags.map((tag) => `#${tag}`).join(", ")}
              </p>
            </li>
            <li>
              <span>Description:</span>
              <p className="description">{project.description}</p>
            </li>
          </ul>
          <div className="buttons">
            <button
              className="button is-link mr-2"
              onClick={() => setEditing(true)}
            >
              Edit
            </button>
            <Link to="/" className="button is-link is-light">
              Go back
            </Link>
          </div>
        </Container>
          )}
    </>
  );
}

export default ProjectDetails;
