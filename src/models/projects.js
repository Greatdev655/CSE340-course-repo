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
        ORDER BY project_date;
      `;

  const queryParams = [organizationId];
  const result = await db.query(query, queryParams);

  return result.rows;
};

const getUpcomingProjects = async (number_of_projects) => {
  const query = `
        SELECT
            p.project_id, p.title, p.description, p.project_date, locations,
            p.organization_id, o.organization_name AS organization_name
        FROM projects p
        JOIN organizations o ON p.organization_id = o.organization_id
        WHERE p.project_date >= CURRENT_DATE
        ORDER BY p.project_date ASC
        LIMIT $1;
    `;
  const queryParams = [number_of_projects];
  const result = await db.query(query, queryParams);
  return result.rows;
};

const getProjectDetails = async (id) => {
  const query = `
        SELECT
            p.project_id, p.title, p.description, p.project_date, p.locations,
            p.organization_id, o.organization_name AS organization_name
        FROM projects p
        JOIN organizations o ON p.organization_id = o.organization_id
        WHERE p.project_id = $1;
    `;
  const queryParams = [id];
  const result = await db.query(query, queryParams);
  return result.rows[0]; // one project, not an array
};

export {
  getAllProjects,
  getProjectsByOrganizationId,
  getUpcomingProjects,
  getProjectDetails,
};
