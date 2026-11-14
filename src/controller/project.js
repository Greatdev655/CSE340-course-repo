import { getCategoriesByProjectId } from "../models/categories.js";
import {
  getAllProjects,
  getProjectDetails,
  getUpcomingProjects,
} from "../models/projects.js";

const NUMBER_OF_UPCOMING_PROJECTS = 5;

const projectPage = async (req, res) => {
  const projects = await getAllProjects();
  console.log(projects);

  const title = "Service Projects";
  res.render("projects", { title, projects });
};

const showProjectPage = async (req, res) => {
  const upcomingProjects = await getUpcomingProjects(
    NUMBER_OF_UPCOMING_PROJECTS,
  );
  console.log(upcomingProjects);

  const title = "Up Coming Service projects";
  res.render("projects", { title, upcomingProjects });
};

const showProjectDetailsPage = async (req, res, next) => {
  const projectId = req.params.id;
  const project = await getProjectDetails(projectId);

  if (!project) {
    const err = new Error("Project Not Found");
    err.status = 404;
    return next(err);
  }

  const categories = await getCategoriesByProjectId(projectId);
  const title = "Project Details";
  res.render("project", { title, project, categories });
};

export { projectPage, showProjectDetailsPage, showProjectPage };
