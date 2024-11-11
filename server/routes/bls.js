const express = require('express');
const axios = require('axios');
const router = express.Router();
const fs = require('fs').promises;
const path = require('path');

// RapidAPI configuration
const RAPIDAPI_KEY = '90caff2630msh787b7d18a701072p17d25cjsndc4e6106b587';
const RAPIDAPI_HOST = 'job-salary-data.p.rapidapi.com';

// File path for storing salary data
const SALARY_DATA_FILE = path.join(__dirname, '../data/salary-dataMYtest.json');

// List of high-paying occupations
const occupations = [
    { title: 'Computer Science' },
    { title: 'Artificial Intelligence' },
    { title: 'Cybersecurity' },
    { title: 'Cloud Architecture' },
    { title: 'Data Science' },
    { title: 'Software Development' },
    { title: 'Mobile Development' },
    { title: 'Game Development' },
    { title: 'Dev Ops' },
    { title: 'Full Stack Development' },
    { title: 'UI/UX Design' }
];

// Function to fetch salary data for a specific occupation
const fetchSalaryData = async (jobTitle) => {
    const options = {
        method: 'GET',
        url: 'https://job-salary-data.p.rapidapi.com/job-salary',
        params: {
            job_title: jobTitle,
            location: 'malaysia'
        },
        headers: {
            'x-rapidapi-key': RAPIDAPI_KEY,
            'x-rapidapi-host': RAPIDAPI_HOST
        }
    };

    try {
        const response = await axios.request(options);
        return {
            title: jobTitle,
            ...response.data
        };
    } catch (error) {
        console.error(`Error fetching salary data for ${jobTitle}:`, error.message);
        return { 
            title: jobTitle,
            error: error.message 
        };
    }
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
router.get('/salary-data', async (req, res) => {
    try {
        // Check if we should use cached data
        const useCache = req.query.cache !== 'false';
        const savedData = await readSavedData();
        
       // If cache is requested and we have saved data less than 24 hours old
        if (useCache && savedData) {
            const lastUpdate = new Date(savedData.lastUpdated);
            const hoursSinceUpdate = (new Date() - lastUpdate) / (1000 * 60 * 60);
            
            if (hoursSinceUpdate < 24) {
                return res.json({
                    status: 'success',
                    source: 'cache',
                    lastUpdated: savedData.lastUpdated,
                    data: savedData.data
                });
            }
        }

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