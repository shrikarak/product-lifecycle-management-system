
INSERT INTO products (name, description, cad_model_path, drawings_path, parts_list_path) VALUES
('Drone A1', 'A quadcopter drone for aerial photography', '/cad/drone_a1.sldprt', '/drawings/drone_a1.pdf', '/parts/drone_a1.csv'),
('Electric Scooter X1', 'A foldable electric scooter for urban commuting', '/cad/scooter_x1.sldprt', '/drawings/scooter_x1.pdf', '/parts/scooter_x1.csv');

INSERT INTO boms (product_id, bom_type, bom_data) VALUES
(1, 'engineering', '{"components": [{"part_number": "M01", "quantity": 4}, {"part_number": "P01", "quantity": 1}]}'),
(2, 'manufacturing', '{"components": [{"part_number": "W01", "quantity": 2}, {"part_number": "B01", "quantity": 1}]}');

INSERT INTO documents (product_id, document_type, document_path) VALUES
(1, 'quality_assurance', '/docs/drone_a1_qa.pdf'),
(2, 'compliance_certificate', '/docs/scooter_x1_compliance.pdf');

INSERT INTO engineering_changes (product_id, change_description, status) VALUES
(1, 'Improve motor efficiency', 'Approved'),
(2, 'Change battery supplier', 'Proposed');

INSERT INTO npi_processes (product_id, process_name, status) VALUES
(1, 'Drone A1 Launch', 'Production'),
(2, 'Scooter X1 Launch', 'Prototyping');

INSERT INTO quality_issues (product_id, issue_description, status) VALUES
(1, 'Propeller vibration at high speed', 'Resolved'),
(2, 'Brake system noise', 'Open');

INSERT INTO requirements (product_id, requirement_description, status) VALUES
(1, 'Flight time of at least 20 minutes', 'Validated'),
(2, 'Top speed of 25 km/h', 'Pending');

INSERT INTO users (username, password_hash, role) VALUES
('admin', 'password_hash_admin', 'Administrator'),
('engineer', 'password_hash_engineer', 'Engineer'),
('manager', 'password_hash_manager', 'Manager');
