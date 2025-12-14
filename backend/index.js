const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Product Lifecycle Management (PLM) System Backend');
});

// Products
app.get('/api/products', async (req, res) => {
    try {
        const { rows } = await db.query('SELECT * FROM products');
        res.json(rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// BOMs
app.get('/api/boms', async (req, res) => {
    try {
        const { rows } = await db.query('SELECT * FROM boms');
        res.json(rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Documents
app.get('/api/documents', async (req, res) => {
    try {
        const { rows } = await db.query('SELECT * FROM documents');
        res.json(rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Engineering Changes
app.get('/api/engineering-changes', async (req, res) => {
    try {
        const { rows } = await db.query('SELECT * FROM engineering_changes');
        res.json(rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// NPI Processes
app.get('/api/npi-processes', async (req, res) => {
    try {
        const { rows } = await db.query('SELECT * FROM npi_processes');
        res.json(rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Quality Issues
app.get('/api/quality-issues', async (req, res) => {
    try {
        const { rows } = await db.query('SELECT * FROM quality_issues');
        res.json(rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Requirements
app.get('/api/requirements', async (req, res) => {
    try {
        const { rows } = await db.query('SELECT * FROM requirements');
        res.json(rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Users
app.get('/api/users', async (req, res) => {
    try {
        const { rows } = await db.query('SELECT * FROM users');
        res.json(rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});