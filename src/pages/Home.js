import { useState, useEffect } from "react";
import Search from "../components/Search";
import ProjectsList from "../components/ProjectsList";

const Home = () => {
  const [projects, setProjects] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const getProjects = async () => {
      const projectsFromServer = await fetchProjects();
      setProjects(projectsFromServer);
    };

    getProjects();
  }, []);

  // Fetch Projects
  const fetchProjects = async () => {
    const res = await fetch("http://localhost:5000/projects");
    const data = await res.json();
    return data;
  };

  const changeSearchText = (textString) => {
    setSearchText(textString);
  };

  return (
    <>
      <Search searchText={searchText} onSearchTextChange={changeSearchText} />
      <ProjectsList projects={projects} filterText={searchText} />
    </>
  );
};

export default Home;
