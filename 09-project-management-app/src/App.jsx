import { useState } from "react";
import NewProject from "./component/NewProject";
import ProjectSidebar from "./component/ProjectSidebar";
import NoProjectSelected from "./component/NoProjectSelected.jsx";
function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProject: undefined,
    project: [],
  });
  return (
    <main className="flex h-screen gap-8 my-8">
      {/* <h1 className="my-8 text-5xl font-bold text-center">Hello World</h1>
       */}
      <ProjectSidebar />
      <NoProjectSelected />
    </main>
  );
}

export default App;
