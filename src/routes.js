import express from "express";

import { organizationsPage,showOrganizationDetailsPage, showNewOrganizationForm } from "./controller/organization.js";
import { projectPage, showProjectDetailsPage } from "./controller/project.js";
import { homePage } from "./controller/home.js";
import { categoryPage, showCategoryDetailsPage } from "./controller/categories.js";
import { organizationValidation } from "./controller/organization.js";
import { testErrorPage } from "./controller/testError.js";
import { processNewOrganizationForm } from "./controller/organization.js";
;

const router = express.Router();

router.get("/", homePage);
router.get("/categories", categoryPage);
router.get("/projects", projectPage);
router.get("/organizations", organizationsPage);
router.get('/organization/:id', showOrganizationDetailsPage);

router.get('/project/:id', showProjectDetailsPage);
router.get('/category/:id', showCategoryDetailsPage);
// Route for new organization page
router.get('/new-organization', showNewOrganizationForm);
// router for handling post request. 
router.post('/new-organization', organizationValidation, processNewOrganizationForm);


// error handling routes
router.get("/test-error", testErrorPage);

export default router;
