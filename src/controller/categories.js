import { getAllCategories, getProjectsByCategoryId, getCategoryById } from "../models/categories.js";

const categoryPage = async (req, res) => {
  const categories = await getAllCategories();
  console.log(categories);

  const title = "Service Project Categories";
  res.render("categories", { title, categories });
};

const showCategoryDetailsPage = async (req, res, next) => {
    const categoryId = req.params.id;
    const category = await getCategoryById(categoryId);

    if (!category) {
        const err = new Error('Category Not Found');
        err.status = 404;
        return next(err);
    }

    const projects = await getProjectsByCategoryId(categoryId);
    const title = category.category_name;
    res.render('category', { title, category, projects });
};







export { categoryPage, getCategoryById, showCategoryDetailsPage }