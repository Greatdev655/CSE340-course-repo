DROP TABLE IF EXISTS  organizations ; 

-- organization table
CREATE TABLE organizations(
organization_id INT PRIMARY KEY,
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