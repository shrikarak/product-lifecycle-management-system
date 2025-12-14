
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    cad_model_path VARCHAR(255),
    drawings_path VARCHAR(255),
    parts_list_path VARCHAR(255)
);

CREATE TABLE boms (
    id SERIAL PRIMARY KEY,
    product_id INTEGER REFERENCES products(id),
    bom_type VARCHAR(100),
    bom_data JSONB
);

CREATE TABLE documents (
    id SERIAL PRIMARY KEY,
    product_id INTEGER REFERENCES products(id),
    document_type VARCHAR(100),
    document_path VARCHAR(255)
);

CREATE TABLE engineering_changes (
    id SERIAL PRIMARY KEY,
    product_id INTEGER REFERENCES products(id),
    change_description TEXT,
    status VARCHAR(50) DEFAULT 'Proposed'
);

CREATE TABLE npi_processes (
    id SERIAL PRIMARY KEY,
    product_id INTEGER REFERENCES products(id),
    process_name VARCHAR(255),
    status VARCHAR(50) DEFAULT 'Ideation'
);

CREATE TABLE quality_issues (
    id SERIAL PRIMARY KEY,
    product_id INTEGER REFERENCES products(id),
    issue_description TEXT,
    status VARCHAR(50) DEFAULT 'Open'
);

CREATE TABLE requirements (
    id SERIAL PRIMARY KEY,
    product_id INTEGER REFERENCES products(id),
    requirement_description TEXT,
    status VARCHAR(50) DEFAULT 'Pending'
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role VARCHAR(50) NOT NULL
);
