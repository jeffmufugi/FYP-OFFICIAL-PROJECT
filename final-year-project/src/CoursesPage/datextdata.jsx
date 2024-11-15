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
        backgroundColor1:"#F3F4F6",
        backgroundColor2:"#E5E7EB",
        backgroundColor3:"#D1D5DB",
        fontColor: "#364F64",
        popupcolor1 : "#1F2937",
        popupcolor2 : "#E5E7EB",
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

    import salaryData from '/../server/data/salary-data.json';
    import salaryData2 from '/../server/data/salary-dataMY.json';
    
    export const countries = 
    [{"flag":"🇺🇸","file":salaryData,"currency":"$",id:1},
    {"flag":"🇲🇾","file":salaryData2,"currency":"MYR",id:2}];


    export const getTopCourses = (salaryData) => {
    
      const jobData = salaryData.data.find(job => job.title === 'Computer Science');

      const currency = jobData ? jobData.currency : null;
      console.log(currency );
      


      const aiJob = salaryData?.data?.find(job => job.title === 'Artificial Intelligence');
      const cyJob = salaryData?.data?.find(job => job.title === 'Cybersecurity');
      const clJob = salaryData?.data?.find(job => job.title === 'Cloud Architecture');
      const daJob = salaryData?.data?.find(job => job.title === 'Data Science');
      const swJob = salaryData?.data?.find(job => job.title === 'Software Development');
      const deJob = salaryData?.data?.find(job => job.title === 'Dev Ops');
      const moJob = salaryData?.data?.find(job => job.title === 'Mobile Development');
      const gaJob = salaryData?.data?.find(job => job.title === 'Game Development');
      const fuJob = salaryData?.data?.find(job => job.title === 'Web Development');
      const uiJob = salaryData?.data?.find(job => job.title === 'UI/UX Design');

      const validJobs = [aiJob,cyJob,clJob,daJob,swJob,deJob,moJob,gaJob,fuJob,uiJob];

      // Array to store the formatted salary data for each job
      const salaryResults = [];

      // Loop through each valid job entry
      for (let i = 0; i < validJobs.length; i++) {
          // Get Glassdoor data for each job title
          const glassdoorData = validJobs[i]?.data?.filter(job => job.publisher_name === 'Glassdoor');
          
          // Check if glassdoorData exists and has at least one entry
          if (glassdoorData && glassdoorData.length > 0) {
              // Get the min, max, and median salaries for Glassdoor entries
              const { min_salary, max_salary, median_salary } = glassdoorData[0]; // Assuming you want the first entry
              
              // Format salaries with commas
              const formattedMinSalary = min_salary ? min_salary.toLocaleString() : 'Data not available';
              const formattedMaxSalary = max_salary ? max_salary.toLocaleString() : 'Data not available';
              const formattedMedianSalary = median_salary ? median_salary.toLocaleString() : 'Data not available';

              // Store the job title and formatted salary data in the array
              salaryResults.push({
                  jobTitle: validJobs[i].title,
                  minSalary: formattedMinSalary,
                  maxSalary: formattedMaxSalary,
                  medianSalary: formattedMedianSalary
              });
          } else {
              // Store job title with "No data" message if Glassdoor data is unavailable
              salaryResults.push({
                  jobTitle: validJobs[i]?.title,
                  minSalary: 'No data available',
                  maxSalary: 'No data available',
                  medianSalary: 'No data available'
              });
          }
        }


        return [
          {
            name: "MACHINE LEARNING",
            salaryRange: `${currency}100,000 - ${currency}140,000`,
            description: `Focuses on algorithms that allow systems to learn from data and improve performance on tasks without being explicitly programmed.`
        },
        {
            name: "BIG DATA ANALYTICS",
            salaryRange: `${currency}95,000 - ${currency}130,000`,
            description: `Involves the study of massive datasets, leveraging tools to analyze, visualize, and derive actionable insights.`
        },
        {
            name: "DATA MINING",
            salaryRange: `${currency}90,000 - ${currency}125,000`,
            description: `Explores the process of discovering patterns and relationships in large data sets to make predictions and inform decisions.`
        },
        {
            name: "ARTIFICIAL INTELLIGENCE",
            salaryRange: `${currency}110,000 - ${currency}150,000`,
            description: `Studies systems that can perform tasks that normally require human intelligence, such as visual perception, speech recognition, and decision-making.`
        },
        {
            name: "DATA VISUALIZATION",
            salaryRange: `${currency}85,000 - ${currency}115,000`,
            description: `Involves creating graphical representations of data to communicate trends, outliers, and patterns effectively.`
        },
        {
            name: "CLOUD COMPUTING",
            salaryRange: `${currency}90,000 - ${currency}125,000`,
            description: `Focuses on the use of cloud infrastructure to store, process, and analyze large-scale data sets for business intelligence and data science applications.`
        }
      ]
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



export const prerequisites = [
    "Strong foundation in mathematics and statistics",
    "Proficiency in programming languages such as Python and R",
    "Understanding of machine learning algorithms and techniques",
    "Experience with data manipulation and analysis",
    "Knowledge of big data tools like Hadoop or Spark"
];

export const coreAreasOfStudy = [
    "Machine Learning",
    "Big Data Analytics",
    "Data Mining",
    "Artificial Intelligence",
    "Data Visualization",
    "Statistical Analysis",
    "Cloud Computing",
    "Natural Language Processing"
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
    "Machine Learning",
    "Artificial Intelligence",
    "Data Engineering",
    "Data Visualization",
    "Cloud Computing",
    "Natural Language Processing"
];

export const trend = [
    "Advancements in AI and ML",
    "Edge Computing",
    "Data Democratization",
    "Explainable AI",
    "Real-time Data Analytics"
];

export const skills = [
    "Proficiency in programming (Python, R)",
    "Strong understanding of statistics and probability",
    "Experience with machine learning frameworks (TensorFlow, PyTorch)",
    "Data manipulation with SQL and NoSQL databases",
    "Data visualization with tools like Tableau, Power BI",
    "Problem-solving and critical thinking skills",
    "Knowledge of cloud platforms (AWS, Google Cloud)"
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
  
  