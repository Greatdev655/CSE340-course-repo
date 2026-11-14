import db from "./db.js";

export const getAllCategories = async () => {
  const query = `SELECT category_id, category_name FROM categories`;

  const result = await db.query(query);
  return result.rows;
};

export const getCategoryById = async (id) => {
  const query = `
        SELECT category_id, category_name
        FROM categories
        WHERE category_id = $1;
    `;
  const result = await db.query(query, [id]);
  return result.rows[0];
};

export const getCategoriesByProjectId = async (projectId) => {
  const query = `
        SELECT c.category_id, c.category_name
        FROM categories c
        JOIN project_categories pc ON c.category_id = pc.category_category_id 
        WHERE pc.projects_project_id = $1
        ORDER BY c.category_name;
    `;
  const queryParams = [projectId];
  const result = await db.query(query, queryParams);
  return result.rows;
};

export const getProjectsByCategoryId = async (categoryId) => {
  const query = `
  SELECT p.project_id, p.title, p.locations,p.project_date 
  FROM projects p
  JOIN project_categories pc ON p.project_id = pc.projects_project_id
  WHERE pc.category_category_id = $1
  ORDER BY p.title;

  
  `;
  const queryParams = [categoryId];
  const result = await db.query(query, queryParams);
  return result.rows
};
