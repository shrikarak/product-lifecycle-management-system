
# Product Lifecycle Management (PLM) System

This web application is designed to manage the entire lifecycle of a product from inception, through engineering design and manufacture, to service and disposal of manufactured products.

## Functionalities

### Core Data & Document Management
- **Product Data Management (PDM):** Centralizes all product-related data, including CAD models, drawings, parts lists, and documentation.
- **Bill of Materials (BOM) Management:** Creation, management, and tracking of various BOM views.
- **Document and Content Management:** Manages and secures all associated documentation.

### Process & Workflow Management
- **Engineering Change Management (ECM):** Structured workflows for proposing, reviewing, approving, and implementing changes.
- **New Product Introduction (NPI):** Guides teams through best-practice processes for launching new products.
- **Quality Management:** Manages quality assurance processes, including tracking issues and implementing corrective/preventive actions (CAPA).
- **Requirements and Test Management:** Captures, structures, and validates product requirements.

### Collaboration & Integration
- **Cross-functional and Supply Chain Collaboration:** Facilitates seamless interaction between internal teams and external partners.
- **System Integration:** Seamlessly integrates with other enterprise systems like ERP, MES, and CRM.
- **Multi-CAD and Data Exchange Support:** Accommodates data from various CAD systems.

### Analytics & Advanced Capabilities
- **Analytics and Reporting:** Dashboards and business intelligence (BI) tools for insights into KPIs.
- **Support for Emerging Technologies:** Integrates with technologies like IoT and AI.
- **Sustainability Tracking:** Features to track environmental impact and assess alternative materials.

## Deployment Guide

### Prerequisites
- Node.js
- Angular CLI
- PostgreSQL

### Backend Setup
1. Navigate to the `backend` directory.
2. Install dependencies: `npm install`
3. Create a `.env` file with your database credentials.
4. Start the server: `node index.js`

### Frontend Setup
1. Navigate to the `frontend` directory.
2. Install dependencies: `npm install`
3. Start the application: `ng serve`

### Database Setup
1. Create a PostgreSQL database.
2. Run the `database/schema.sql` script to create the tables.
3. Run the `database/data.sql` script to pre-fill the database with sample data.

## Copyright
Copyright 2025 Shrikara Kaudambady
