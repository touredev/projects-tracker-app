import React, { useState, useEffect, useCallback } from "react";
import { IProjectItem } from "../types/projectTypes";
import Search from "../components/Search";
import ProjectsList from "../components/ProjectsList";
import { get } from "../services/http";

const URL = "http://localhost:5000/projects";

interface ProjectItem extends IProjectItem {
  id: number;
}

const Home = (): React.ReactElement => {
  const [projects, setProjects] = useState<ProjectItem[] | undefined>([]);
  const [searchText, setSearchText] = useState<string>("");

  // Fetch Projects
  const fetchProjects = useCallback(async () => {
    const res = await get<ProjectItem[]>(URL);
    return res.parsedBody;
  }, []);

  const changeSearchText = (textString: string): void => {
    setSearchText(textString);
  };

  useEffect(() => {
    const getProjects = async (): Promise<void> => {
      const projectsFromServer = await fetchProjects();
      setProjects(projectsFromServer);
    };

    getProjects();
  }, [fetchProjects]);

  return (
    <>
      <Search searchText={searchText} onSearchTextChange={changeSearchText} />
      <ProjectsList projects={projects} filterText={searchText} />
    </>
  );
};

export default Home;
