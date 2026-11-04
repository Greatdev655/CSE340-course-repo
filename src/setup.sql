DROP TABLE IF EXISTS projects ;
DROP TABLE IF EXISTS  organizations ; 

-- organization table
CREATE TABLE organizations(
organization_id SERIAL  PRIMARY KEY,
organization_name VARCHAR(150) NOT NULL,
description TEXT NOT NULL,
organization_email VARCHAR(225)  NOT NULL,
logo_filename VARCHAR(225) NOT NULL
)


-- INSERTING DATA INTO MY DATABASE 
INSERT INTO organizations(organization_id, organization_name, description, organization_email, logo_filename )
VALUES(1,'BrightFuture Builders', 'A nonprofit focused on improving community infrastructure through sustainable construction projects.',
'info@brightfuturebuilders.org', 'brightfuture-logo.png' ),
(2,'GreenHarvest Growers', 'An urban farming collective promoting food sustainability and education in local neighborhoods.', 
'contact@greenharvest.org', 'greenharvest-logo.png'), 
(3,'UnityServe Volunteers', 'A volunteer coordination group supporting local charities and service initiatives.', 
'hello@unityserve.org', 'unityserve-logo.png');


-- projects table 
CREATE TABLE projects(
project_id SERIAL PRIMARY KEY,
organization_id INT NOT NULL, 
title VARCHAR(255) NOT NULL, 
description TEXT NOT NULL,
locations VARCHAR(255) NOT NULL, 
project_date DATE NOT NULL,
  CONSTRAINT organization_id
  FOREIGN KEY(organization_id)
  REFERENCES organizations(organization_id)
  ON DELETE CASCADE
);


-- INSERTING SERVICE PROJECTS (5 per organization)
-- project_id is left out because SERIAL generates it automatically
INSERT INTO projects (organization_id, title, description, locations, project_date)
VALUES
-- 1: BrightFuture Builders (community infrastructure)
(1, 'Community Playground Rebuild',
    'Volunteers replace worn equipment and install safe rubber surfacing at the neighborhood playground.',
    'Riverside Park', '2026-11-14'),
(1, 'Bus Stop Shelter Construction',
    'Build and install weatherproof shelters at three busy bus stops using recycled materials.',
    'Main Street Transit Hub', '2026-12-05'),
(1, 'Community Center Roof Repair',
    'Repair leaks and replace damaged shingles on the roof of the local community center.',
    'Oakwood Community Center', '2027-01-16'),
(1, 'Accessible Ramp Installation',
    'Construct wheelchair-accessible ramps for homes of elderly and disabled residents.',
    'Maple Heights Neighborhood', '2027-02-20'),
(1, 'Sustainable Footbridge Project',
    'Build a footbridge from reclaimed timber to connect two sides of the nature trail.',
    'Willow Creek Trail', '2027-03-27'),

-- 2: GreenHarvest Growers (urban farming and food education)
(2, 'Rooftop Garden Setup',
    'Prepare raised beds and plant seasonal vegetables on a donated rooftop space.',
    'Downtown Market Building', '2026-11-21'),
(2, 'Composting Workshop for Families',
    'A hands-on class teaching families how to turn kitchen scraps into garden compost.',
    'Greenfield Library', '2026-12-12'),
(2, 'School Garden Launch',
    'Help students plant and label a vegetable garden, and learn where food comes from.',
    'Sunrise Elementary School', '2027-01-23'),
(2, 'Neighborhood Seed Swap',
    'Residents trade seeds and gardening tips, with free starter packs for first-time growers.',
    'Central Community Square', '2027-02-27'),
(2, 'Fresh Harvest Food Drive',
    'Harvest and package fresh produce from urban plots for local families in need.',
    'Eastside Food Pantry', '2027-04-10'),

-- 3: UnityServe Volunteers (volunteer coordination for charities)
(3, 'Charity Volunteer Fair',
    'Local charities meet residents and sign up volunteers for upcoming service projects.',
    'City Convention Hall', '2026-11-28'),
(3, 'Winter Coat Collection Drive',
    'Collect, sort, and distribute warm coats and blankets to shelters before winter peaks.',
    'Unity Hall Gymnasium', '2026-12-19'),
(3, 'Meals for Seniors Delivery',
    'Volunteers prepare and deliver hot meals to homebound seniors across the district.',
    'Westside Senior Center', '2027-01-30'),
(3, 'Neighborhood Cleanup Day',
    'Teams clear litter and debris from streets, parks, and drainage areas.',
    'Lakeview District', '2027-03-06'),
(3, 'Back-to-School Supply Drive',
    'Gather and distribute backpacks and school supplies to students from low-income families.',
    'Northgate Community Church', '2027-04-24');