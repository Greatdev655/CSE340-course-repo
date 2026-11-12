import { getAllProjects } from "../models/projects.js";

const projectPage = async (req, res) => {
  const projects = await getAllProjects();
  console.log(projects);

  const title = "Service Projects";
  res.render("projects", { title, projects });
};

export { projectPage }
