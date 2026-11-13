import { getAllProjects,getProjectDetails,getUpcomingProjects } from "../models/projects.js";

const NUMBER_OF_UPCOMING_PROJECTS = 5;

const projectPage = async (req, res) => {
  const projects = await getAllProjects();
  console.log(projects);

  const title = "Service Projects";
  res.render("projects", { title, projects });
};

const showProjectPage = async (req,res)=>{
  const upcomingProjects = await getUpcomingProjects(NUMBER_OF_UPCOMING_PROJECTS);
  console.log(upcomingProjects);

  const title = "Up Coming Service projects"
  res.render("projects", {title, upcomingProjects})
  
}

const showProjectDetailsPage = async (req, res) => {
    const projectId = req.params.id;
    const project = await getProjectDetails(projectId);
    const title = 'Project Details';
    res.render('project', { title, project });
};

export { projectPage, showProjectDetailsPage, showProjectPage }


