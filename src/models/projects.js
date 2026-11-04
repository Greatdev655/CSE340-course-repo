import db from "./db.js";

const getAllProjects = async () => {
  const query = `
        SELECT projects.project_id, projects.organization_id, projects.title, projects.description, projects.locations, projects.project_date
      FROM public.projects
      JOIN organizations ON projects.organization_id = organizations.organization_id 
      ORDER BY projects.project_date ;
    `;

  const result = await db.query(query);
  return result.rows;
};

export{ getAllProjects }

