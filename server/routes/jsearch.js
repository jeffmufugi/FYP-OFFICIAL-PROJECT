const express = require('express');
const router = express.Router();
const https = require('https');
const fs = require('fs').promises;
const path = require('path');

// API configuration
const RAPIDAPI_KEY = 'c661e58881msh6d54e90e065ed20p1f5acbjsn83b5606b6fb7';
const RAPIDAPI_HOST = 'job-salary-data.p.rapidapi.com';

// File path for storing salary data
const SALARY_DATA_FILE = path.join(__dirname, '../data/salary-dataCSTmy.json');

// List of high-paying occupations
{/*-----------------------cst--------------------------- */}
const occupations = [
    { title: 'Computer Science' },
    { title: 'Ai Engineer' },
    { title: 'Cyber Security' },
    { title: 'Cloud Architecture' },
    { title: 'Data Science' },
    { title: 'Software Development' },
    { title: 'Mobile Development' },
    { title: 'Game Development' },
    { title: 'Dev Ops Engineer' },
    { title: 'Full Stack Engineer' },
    { title: 'UI/UX' }
];
{/*-----------------------chem--------------------------- */}
// const occupations = [

//     { title: 'Pharmaceutical Engineering' },
//     { title: 'Renewable Energy' },
//     { title: 'Process Safety Management' },
//     { title: 'Petroleum Engineering' },
//     { title: 'Water Treatment Engineering' },
//     { title: 'Polymer Engineering' },
//     { title: 'Biochemical Engineering' },
//     { title: 'Nanotechnology' },
//     { title: 'Food Processing Engineering' },
//     { title: 'Green Process Engineering' }
// ];

{/*-----------------------physics--------------------------- */}
// const occupations = [
//     { title: 'Quantum computing' },
//     { title: 'Medical Physics' },
//     { title: 'Particle physics' },
//     { title: 'Condensed matter physics' },
//     { title: 'Astrophysics' },
//     { title: 'Computational physics' },
//     { title: 'Plasma physics' },
//     { title: 'Optics and photonics' },
//     { title: 'Biophysics' },
//     { title: 'Nuclear physics' }
// ];
// Function to fetch salary data for a specific occupation

{/*-----------------------math--------------------------- */}
// const occupations = [
//     { title: 'Applied Mathematics' },
//     { title: 'Statistics' },
//     { title: 'Actuarial Science' },
//     { title: 'Computational Mathematics' },
//     { title: 'Operations Research' },
//     { title: 'Financial Mathematics' },
//     { title: 'Number Theory' },
//     { title: 'Topology' }
// ];

{/*-----------------------MECHANICAL ENG--------------------------- */}
// const occupations = [
//     { title: 'Aerospace/Defense' },
//     { title: 'Oil & Gas/Energy' },
//     { title: 'Robotics & Automation' },
//     { title: 'Medical Devices' },
//     { title: 'Research & Development' },
//     { title: 'Automotive Advanced Systems' },
//     { title: 'Nuclear Engineering' },
//     { title: 'Patents & Intellectual Property' },
//     { title: 'Data Center Infrastructure' },
//     { title: 'Semiconductor Manufacturing' }
// ];

const fetchSalaryData = (jobTitle) => {
    return new Promise((resolve, reject) => {
        const options = {
            method: 'GET',
            hostname: 'job-salary-data.p.rapidapi.com',
            port: null,
            path: `/job-salary?job_title=${encodeURIComponent(jobTitle)}&location=malaysia&radius=500`,
            headers: {
                'x-rapidapi-key': RAPIDAPI_KEY,
                'x-rapidapi-host': RAPIDAPI_HOST
            }
        };

        const req = https.request(options, (res) => {
            const chunks = [];

            res.on('data', (chunk) => {
                chunks.push(chunk);
            });

            res.on('end', () => {
                try {
                    const body = Buffer.concat(chunks);
                    const data = JSON.parse(body.toString());
                    resolve({
                        title: jobTitle,
                        ...data
                    });
                } catch (error) {
                    reject(error);
                }
            });
        });

        req.on('error', (error) => {
            reject(error);
        });

        req.end();
    });
};

// Function to save data to file
const saveSalaryData = async (data) => {
    try {
        // Create data directory if it doesn't exist
        const dataDir = path.dirname(SALARY_DATA_FILE);
        await fs.mkdir(dataDir, { recursive: true });

        // Save data with timestamp
        const dataToSave = {
            lastUpdated: new Date().toISOString(),
            data: data
        };
        
        await fs.writeFile(
            SALARY_DATA_FILE, 
            JSON.stringify(dataToSave, null, 2)
        );
        
        console.log('Salary data saved successfully');
        return true;
    } catch (error) {
        console.error('Error saving salary data:', error);
        return false;
    }
};

// Function to read saved data
const readSavedData = async () => {
    try {
        const data = await fs.readFile(SALARY_DATA_FILE, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading saved data:', error);
        return null;
    }
};

// Route to get salary data with caching
router.get('/salary-data1', async (req, res) => {
    try {
        // Check if we should use cached data
        // const useCache = req.query.cache !== 'false';
        // const savedData = await readSavedData();

        // Fetch fresh data
        const salaryDataPromises = occupations.map(occ => 
            fetchSalaryData(occ.title)
        );
        const salaryData = await Promise.all(salaryDataPromises);

        // Save the new data
        await saveSalaryData(salaryData);

        res.json({
            status: 'success',
            source: 'api',
            lastUpdated: new Date().toISOString(),
            data: salaryData
        });

    } catch (error) {
        console.error('Error fetching salary data:', error.message);
        
        // Try to return cached data if available
        const savedData = await readSavedData();
        if (savedData) {
            return res.json({
                status: 'success',
                source: 'cache',
                error: error.message,
                lastUpdated: savedData.lastUpdated,
                data: savedData.data
            });
        }

        res.status(500).json({
            error: 'Failed to fetch salary data',
            message: error.message
        });
    }
});

module.exports = router;