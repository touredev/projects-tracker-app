import { useState, useEffect } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import ProjectsList from "./components/ProjectsList";
import styled from "styled-components";

const Container = styled.div`
  margin: 0;
`;

function App() {
  const [projects, setProjects] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    setProjects([
      {
        title: "Project 1",
        tags: "#Web, #JavaScript, #React",
        description: `A bit of Background Kids spending time on phones, tablets, computers is not very unnatural nowadays. Indeed lots to learn from online resources, apps, books, etc. The problem at my home was a bit different, though. My daughter felt it quite dull 🙄 t...
  `,
      },
      {
        title: "Project 2",
        tags: "#API, #NodeJs, #PostgreSQL",
        description: `Today the world is fast, hectic, and demanding. Everyone is in a rush to meet deadlines, making decisions, accomplishing goals, receiving rewards. From getting things done in seconds using smartphones to e-shops delivering products using drones, spee...
  `,
      },
      {
        title: "Project 3",
        tags: "#Java, #Spring, #Microservices",
        description: `Gatsby is one of the most popular Static Site Generators available to create pre-built markups for Jamstack apps. It is a React-based framework that offers a plethora of plug-in ecosystems to make life comfortable for the developer community. I have ...
  `,
      },
    ]);
  }, []);

  function changeSearchText(textString) {
    setSearchText(textString);
  }

  return (
    <Container>
      <Header title="Projects Tracker App" />
      <>
        <Search searchText={searchText} onSearchTextChange={changeSearchText} />
        <ProjectsList projects={projects} filterText={searchText} />
      </>
    </Container>
  );
}

export default App;
