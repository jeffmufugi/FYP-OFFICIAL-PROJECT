export const homepageInfo = [
    {
        courseName: "data science.",
        courseDefinition: "Data Science is the interdisciplinary field that uses scientific methods, algorithms, and systems to extract knowledge and insights from structured and unstructured data.",
        undergradsal: "$85,000",
        jobavail: "120,000",
        emprate: "95%",
    },
    
    {
        description: `Data Science involves the analysis of large data sets to uncover patterns, trends, and insights, driving decision-making in business, technology, and research fields.`,
        backgroundColor1:"#E3ECFD",
        backgroundColor2:"#DBE5F9",
        backgroundColor3:"#D1E0F7",
        fontColor: "#364F64",
        popupcolor1 : "#063866",
        popupcolor2 : "#E3ECFD",
    }
];


export const homepageInfo1 = [ {
  undergradsal: `74,800`,
  jobavail : "15,700",
  emprate: "47%",
  },]
  
  //MALAYSIA
  export const homepageInfo2 = [ {
    undergradsal: `40,000`,
    jobavail : "3,700",
    emprate: "79%",
    },]
    import salaryData2 from './data/data/salary-dataDATmy.json';
    import salaryData from './data/data/salary-dataDATusa.json';
    
    export const countries = 
    [{"flag":"🇺🇸","file":salaryData,"currency":"$",id:1},
    {"flag":"🇲🇾","file":salaryData2,"currency":"MYR",id:2}];


    export const getTopCourses = (salaryData) => {
    
      const jobData = salaryData.data.find(job => job.title === 'Machine Learning');

      const currency = jobData ? jobData.currency : null;
      console.log(currency );
      //
      


      const mlJob = salaryData?.data?.find(job => job.title === 'Machine Learning');
      const bdJob = salaryData?.data?.find(job => job.title === 'Big Data Analytics');
      const dmJob = salaryData?.data?.find(job => job.title === 'Data Mining');
      const aiJob = salaryData?.data?.find(job => job.title === 'Artificial Intelligence');
      const dvJob = salaryData?.data?.find(job => job.title === 'Data Visualization');
      const ccJob = salaryData?.data?.find(job => job.title === 'Cloud Computing');
      
      const validJobs = [mlJob, bdJob, dmJob, aiJob, dvJob, ccJob];

      const salaryResults = [];

      // Loop through each valid job entry
      for (let i = 0; i < validJobs.length; i++) {
          // Get Glassdoor data for each job title
          const glassdoorData = validJobs[i]?.data?.filter(job => job.publisher_name === 'Glassdoor');
          
          // Check if glassdoorData exists and has at least one entry
          if (glassdoorData && glassdoorData.length > 0) {
            // Destructure the first Glassdoor entry
            const { 
                min_salary, 
                max_salary, 
                median_salary, 
                publisher_link, 
                salary_period 
            } = glassdoorData[0];
        
            // Function to convert salary based on period
            const convertSalary = (salary, period) => {
                if (!salary) return null;
        
                switch(period?.toLowerCase()) {
                    case 'month':
                        return salary * 12; // Convert monthly to yearly
                    case 'hour':
                        // Assuming standard 2080 work hours per year (40 hours/week * 52 weeks)
                        return salary * 2080;
                    case 'year':
                    default:
                        return salary; // Already in yearly format
                }
            };
        
            // Convert min, max, and median salaries
            const convertedMinSalary = convertSalary(min_salary, salary_period);
            const convertedMaxSalary = convertSalary(max_salary, salary_period);
            const convertedMedianSalary = convertSalary(median_salary, salary_period);
        
            // Format salaries with commas and handle conversion
            const formattedMinSalary = convertedMinSalary ? convertedMinSalary.toLocaleString() : 'Data not available';
            const formattedMaxSalary = convertedMaxSalary ? convertedMaxSalary.toLocaleString() : 'Data not available';
            const formattedMedianSalary = convertedMedianSalary ? convertedMedianSalary.toLocaleString() : 'Data not available';
        
            const formattedLink = publisher_link ? publisher_link : 'Data not available';
            const formattedPeriod = salary_period ? salary_period : 'Data not available';
        
            // Store the job title and formatted salary data in the array
            salaryResults.push({
                jobTitle: validJobs[i].title,
                minSalary: formattedMinSalary,
                maxSalary: formattedMaxSalary,
                link: formattedLink,
                medianSalary: formattedMedianSalary,
                salaryPeriod: formattedPeriod
            });
        } else {
            // Store job title with "No data" message if Glassdoor data is unavailable
            salaryResults.push({
                jobTitle: validJobs[i]?.title,
                minSalary: 'xxx',
                maxSalary: 'xxx',
                medianSalary: 'No data available'
            });
        }
      }



        return [
          {
            name: "Machine Learning",
            salaryRange: `${currency}${salaryResults[0].minSalary} - ${currency}${salaryResults[0].maxSalary}`,
            description: `Focuses on algorithms that allow systems to learn from data and improve performance on tasks without being explicitly programmed.`,
            link: `${salaryResults[0].link}`,
            id: 1
          },
          {
            name: "Big Data Analytics",
            salaryRange: `${currency}${salaryResults[1].minSalary} - ${currency}${salaryResults[1].maxSalary}`,
            description: `Involves the study of massive datasets, leveraging tools to analyze, visualize, and derive actionable insights.`,
            link: `${salaryResults[1].link}`,
            id: 2
          },
          {
            name: "Data Mining",
            salaryRange: `${currency}${salaryResults[2].minSalary} - ${currency}${salaryResults[2].maxSalary}`,
            description: `Explores the process of discovering patterns and relationships in large data sets to make predictions and inform decisions.`,
            link: `${salaryResults[2].link}`,
            id: 3
          },
          {
            name: "Artificial Intelligence",
            salaryRange: `${currency}${salaryResults[3].minSalary} - ${currency}${salaryResults[3].maxSalary}`,
            description: `Studies systems that can perform tasks that normally require human intelligence, such as visual perception, speech recognition, and decision-making.`,
            link: `${salaryResults[3].link}`,
            id: 4
          },
          {
            name: "Data Visualization",
            salaryRange: `${currency}${salaryResults[4].minSalary} - ${currency}${salaryResults[4].maxSalary}`,
            description: `Involves creating graphical representations of data to communicate trends, outliers, and patterns effectively.`,
            link: `${salaryResults[4].link}`,
            id: 5
          },
          {
            name: "Cloud Computing",
            salaryRange: `${currency}${salaryResults[5].minSalary} - ${currency}${salaryResults[5].maxSalary}`,
            description: `Focuses on the use of cloud infrastructure to store, process, and analyze large-scale data sets for business intelligence and data science applications.`,
            link: `${salaryResults[5].link}`,
            id: 6
          }
        ];
};

export const experienceSalary1 = [
  { id: 1, experience: "0-1 YEARS EXPERIENCE", salaryRange: "MYR29,000 - MYR50,000" },
  { id: 2, experience: "1-3 YEARS EXPERIENCE", salaryRange: "MYR50,000 - MYR59,000" },
  { id: 3, experience: "4-6 YEARS EXPERIENCE", salaryRange: "MYR60,000 - MYR90,000" },
  { id: 4, experience: "7-9 YEARS EXPERIENCE", salaryRange: "MYR90,000 - MYR200,000" }
];

export const experienceSalary2 = [
  { id: 1, experience: "0-1 YEARS EXPERIENCE", salaryRange: "$92,000 - $170,000" },
  { id: 2, experience: "1-3 YEARS EXPERIENCE", salaryRange: "$112,000 - $185,000" },
  { id: 3, experience: "4-6 YEARS EXPERIENCE", salaryRange: "$122,000 - $221,000" },
  { id: 4, experience: "7-9 YEARS EXPERIENCE", salaryRange: "$140,000 - $250,000" }
];


export const jobGrowthFields = [
    "Machine Learning Engineering",
    "Data Science Consulting",
    "AI Research and Development",
    "Big Data Infrastructure",
    "Business Intelligence"
];

export const experienceSalary = [
    { experience: "0-1 YEARS EXPERIENCE", salaryRange: "$75,000 - $85,000" },
    { experience: "1-3 YEARS EXPERIENCE", salaryRange: "$90,000 - $110,000" },
    { experience: "4-6 YEARS EXPERIENCE", salaryRange: "$110,000 - $130,000" },
    { experience: "7-9 YEARS EXPERIENCE", salaryRange: "$130,000 - $150,000" }
];

export const topspecializations = [
  {
    specialization: "Machine Learning",
    description: "Focuses on building models that allow computers to learn and make decisions from data."
  },
  {
    specialization: "Artificial Intelligence",
    description: "Explores intelligent systems capable of performing tasks that typically require human intelligence."
  },
  {
    specialization: "Data Engineering",
    description: "Involves designing and building systems for collecting, storing, and analyzing data efficiently."
  },
  {
    specialization: "Data Visualization",
    description: "Focuses on creating graphical representations of data to communicate insights effectively."
  },
  {
    specialization: "Cloud Computing",
    description: "Uses remote servers hosted on the Internet to store, manage, and process data."
  },
  {
    specialization: "Natural Language Processing",
    description: "Deals with interactions between computers and human language to enable tasks like translation and sentiment analysis."
  }
];

export const trend = [
  {
    trend: "Advancements in AI and ML",
    description: "Continuous innovation in AI and machine learning techniques is driving new applications."
  },
  {
    trend: "Edge Computing",
    description: "Processing data closer to its source to reduce latency and improve real-time analytics."
  },
  {
    trend: "Data Democratization",
    description: "Making data accessible and usable for non-technical users across organizations."
  },
  {
    trend: "Explainable AI",
    description: "Focus on making AI decisions transparent and understandable to build trust and accountability."
  },
  {
    trend: "Real-time Data Analytics",
    description: "Analyzing and acting on data as it is generated to enable faster decision-making."
  }
];

export const skills = [
  {
    skill: "Proficiency in programming (Python, R)",
    description: "Essential for implementing algorithms and building data-driven applications."
  },
  {
    skill: "Strong understanding of statistics and probability",
    description: "Provides the foundation for analyzing data and building predictive models."
  },
  {
    skill: "Experience with machine learning frameworks (TensorFlow, PyTorch)",
    description: "Helps in building and deploying machine learning models efficiently."
  },
  {
    skill: "Data manipulation with SQL and NoSQL databases",
    description: "Critical for extracting, cleaning, and analyzing structured and unstructured data."
  },
  {
    skill: "Data visualization with tools like Tableau, Power BI",
    description: "Enables effective communication of data insights to stakeholders."
  },
  {
    skill: "Problem-solving and critical thinking skills",
    description: "Helps in identifying challenges and crafting innovative solutions."
  },
  {
    skill: "Knowledge of cloud platforms (AWS, Google Cloud)",
    description: "Facilitates scalable data storage and computation for big data projects."
  }
];

export const prerequisites = [
  {
    skill: "Strong foundation in mathematics and statistics",
    description: "Key to understanding data distributions, trends, and machine learning algorithms."
  },
  {
    skill: "Proficiency in programming languages such as Python and R",
    description: "Necessary for coding algorithms and handling data effectively."
  },
  {
    skill: "Understanding of machine learning algorithms and techniques",
    description: "Helps in building predictive models and solving complex problems."
  },
  {
    skill: "Experience with data manipulation and analysis",
    description: "Crucial for preparing data for analysis and ensuring quality insights."
  },
  {
    skill: "Knowledge of big data tools like Hadoop or Spark",
    description: "Enables handling large-scale data processing and analysis."
  }
];

export const coreAreasOfStudy = [
  {
    area: "Machine Learning",
    description: "Studies algorithms that allow computers to learn from and make predictions on data."
  },
  {
    area: "Big Data Analytics",
    description: "Focuses on analyzing and extracting insights from large datasets."
  },
  {
    area: "Data Mining",
    description: "Involves discovering patterns and extracting valuable information from data."
  },
  {
    area: "Artificial Intelligence",
    description: "Explores the creation of systems capable of performing human-like tasks."
  },
  {
    area: "Data Visualization",
    description: "Teaches techniques to visually represent data for better understanding."
  },
  {
    area: "Statistical Analysis",
    description: "Involves applying statistical techniques to interpret data and draw conclusions."
  },
  {
    area: "Cloud Computing",
    description: "Covers the use of cloud platforms for scalable data storage and computing."
  },
  {
    area: "Natural Language Processing",
    description: "Focuses on enabling computers to understand and respond to human language."
  }
];



export const challengesArray = [
    "UNDERGRADUATE CHALLENGES",
    {
        heading: "Handling large data sets.",
        description: `Working with large-scale data can be challenging due to storage, processing time, and computational power limitations.`
    },
    {
        heading: "Developing efficient algorithms.",
        description: `Finding the right algorithms to process data and deliver accurate predictions can be complex and require advanced expertise.`
    },
    {
        heading: "Maintaining data privacy.",
        description: `Ensuring that sensitive data remains secure and private while performing analyses is crucial in data science.`
    },
    {
        heading: "Interpreting complex data.",
        description: `Transforming raw data into actionable insights can be difficult, especially when dealing with complex, unstructured data.`
    }
];

export const issuesArray = [
    "CURRENT JOB ISSUES IN THE FIELD",
    {
        heading: "Data security and privacy.",
        description: `With increasing data breaches, ensuring that sensitive information is protected is a major challenge for data scientists.`
    },
    {
        heading: "Bias in AI models.",
        description: `Algorithms may unintentionally perpetuate biases if not properly monitored and adjusted, affecting decision-making.`
    },
    {
        heading: "Ethical concerns in AI.",
        description: `As AI systems become more autonomous, ethical questions around decision-making, job displacement, and fairness arise.`
    },
    {
        heading: "Keeping up with technology trends.",
        description: `Data science is an evolving field, and professionals must continually update their knowledge to stay competitive.`
    }
];

export const fadeInFromLeft = {
    left1: {
      initial: { x: -100, opacity: 0 },
      whileInView: { x: 0, opacity: 1 },
      transition: { duration: 0.1, delay: 0 },
      viewport: { once: true }
    },
    left2: {
      initial: { x: -100, opacity: 0 },
      whileInView: { x: 0, opacity: 1 },
      transition: { duration: 0.3, delay: 0 },
      viewport: { once: true }
    },
    left3: {
      initial: { x: -100, opacity: 0 },
      whileInView: { x: 0, opacity: 1 },
      transition: { duration: 0.4, delay: 0 },
      viewport: { once: true }
    },
    left4: {
      initial: { x: -100, opacity: 0 },
      whileInView: { x: 0, opacity: 1 },
      transition: { duration: 0.5, delay: 0 },
      viewport: { once: true }
    },
    left5: {
      initial: { x: -100, opacity: 0 },
      whileInView: { x: 0, opacity: 1 },
      transition: { duration: 0.6, delay: 0 },
      viewport: { once: true }
    }
  };
  
  export const fadeInFromLeft2 = {
    left1: {
      initial: { x: -50, opacity: 0 },
      whileInView: { x: 0, opacity: 1 },
      transition: { duration: 0.3, delay: 0.5 },
      viewport: { once: true }
    },
    left2: {
      initial: { x: -50, opacity: 0 },
      whileInView: { x: 0, opacity: 1 },
      transition: { duration: 0.4, delay: 0.4 },
      viewport: { once: true }
    },
    left3: {
      initial: { x: -50, opacity: 0 },
      whileInView: { x: 0, opacity: 1 },
      transition: { duration: 0.5, delay: 0.3 },
      viewport: { once: true }
    },
    left4: {
      initial: { x: -50, opacity: 0 },
      whileInView: { x: 0, opacity: 1 },
      transition: { duration: 0.6, delay: 0.2 },
      viewport: { once: true }
    },
    left5: {
      initial: { x: -50, opacity: 0 },
      whileInView: { x: 0, opacity: 1 },
      transition: { duration: 0.6, delay: 0.1 },
      viewport: { once: true }
    }
  };
  
  export const fadeInFromLeft3 = {
    left1: {
      initial: { x: -30, opacity: 0 },
      whileInView: { x: 0, opacity: 1 },
      transition: { duration: 0.3, delay: 0.5 },
      viewport: { once: true }
    },
    left2: {
      initial: { x: -30, opacity: 0 },
      whileInView: { x: 0, opacity: 1 },
      transition: { duration: 0.4, delay: 0.4 },
      viewport: { once: true }
    },
    left3: {
      initial: { x: -30, opacity: 0 },
      whileInView: { x: 0, opacity: 1 },
      transition: { duration: 0.5, delay: 0.3 },
      viewport: { once: true }
    },
    left4: {
      initial: { x: -30, opacity: 0 },
      whileInView: { x: 0, opacity: 1 },
      transition: { duration: 0.6, delay: 0.2 },
      viewport: { once: true }
    },
    left5: {
      initial: { x: -30, opacity: 0 },
      whileInView: { x: 0, opacity: 1 },
      transition: { duration: 0.6, delay: 0.1 },
      viewport: { once: true }
    },
    left6: {
      initial: { x: -30, opacity: 0 },
      whileInView: { x: 0, opacity: 1 },
      transition: { duration: 0.6, delay: 0.4 },
      viewport: { once: true }
    },
    left7: {
      initial: { y: -20, x: -10, opacity: 0 },
      whileInView: { y: 0, x: 0, opacity: 1 },
      transition: { duration: 0.6, delay: 0.4 },
      viewport: { once: true }
    }
  };
  
  