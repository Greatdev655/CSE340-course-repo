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

const getProjectsByOrganizationId = async (organizationId) => {
      const query = `
        SELECT
          project_id,
          organization_id,
          title,
          description,
          location,
          date
        FROM project
        WHERE organization_id = $1
        ORDER BY date;
      `;
      
      const queryParams = [organizationId];
      const result = await db.query(query, queryParams);

      return result.rows;
};

export{ getAllProjects, getProjectsByOrganizationId }

