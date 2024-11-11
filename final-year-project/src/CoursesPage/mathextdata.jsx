
export const homepageInfo = [
    {
        courseName: "mathematics.",
        courseDefinition: "Mathematics is the abstract science of numbers, quantity, and space, applied in many fields like physics, engineering, economics, and more.",
        undergradsal: "$65,000",
        jobavail: "250,000",
        emprate: "90%",
    },
    
    {
        description: `Mathematics involves the development and application of abstract and logical reasoning, numerical computation, and problem-solving techniques to a wide range of fields, from natural sciences to economics.`,
        backgroundColor1:"#DDF0FF",
        backgroundColor2:"#E4F3FF",
        backgroundColor3:"#E9F4FD",
        fontColor: "#364F64",
        popupcolor1 : "#364F64",
        popupcolor2 : "#E4F3FF",
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

    // import salaryData from '/../server/data/salary-dataMAT.json';
    // import salaryData2 from '/../server/data/salary-dataMATMY.json';


    import salaryData from '/../server/data/salary-data.json';
    import salaryData2 from '/../server/data/salary-dataMY.json';
    
    export const countries = 
    [{"flag":"🇺🇸","file":salaryData,"currency":"$",id:1},
    {"flag":"🇲🇾","file":salaryData2,"currency":"MYR",id:2}];


    export const getTopCourses = (salaryData) => {
    
      const jobData = salaryData.data.find(job => job.title === 'Computer Science');

      const currency = jobData ? jobData.currency : null;
      console.log(currency );
      


      const aiJob = salaryData?.data?.find(job => job.title === 'AI');
      const cyJob = salaryData?.data?.find(job => job.title === 'Cyber Security');
      const clJob = salaryData?.data?.find(job => job.title === 'Cloud Architecture');
      const daJob = salaryData?.data?.find(job => job.title === 'Data Science');
      const swJob = salaryData?.data?.find(job => job.title === 'Software Development');
      const deJob = salaryData?.data?.find(job => job.title === 'Dev Ops Engineer');
      const moJob = salaryData?.data?.find(job => job.title === 'Mobile Development');
      const gaJob = salaryData?.data?.find(job => job.title === 'Game Development');
      const fuJob = salaryData?.data?.find(job => job.title === 'Web Development');
      const uiJob = salaryData?.data?.find(job => job.title === 'UI/UX');

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
            name: "APPLIED MATHEMATICS",
            salaryRange: `${currency}${salaryResults[0].minSalary} - ${currency}${salaryResults[0].maxSalary}`,
            description: `Use mathematical methods in practical applications in science, engineering, and other fields, focusing on real-world problem-solving.`
        },
        {
            name: "STATISTICS",
            salaryRange: `${currency}${salaryResults[1].minSalary} - ${currency}${salaryResults[1].maxSalary}`,
            description: `Analyze and interpret data using statistical models, supporting decision-making in business, healthcare, and social sciences.`
        },
        {
            name: "ACTUARIAL SCIENCE",
            salaryRange: `${currency}${salaryResults[2].minSalary} - ${currency}${salaryResults[2].maxSalary}`,
            description: `Assess and manage risk in the insurance and finance industries using mathematical models and statistical techniques.`
        },
        {
            name: "COMPUTATIONAL MATHEMATICS",
            salaryRange: `${currency}${salaryResults[3].minSalary} - ${currency}${salaryResults[3].maxSalary}`,
            description: `Develop algorithms and use computer simulations to solve complex problems in science, economics, and engineering.`
        },
        {
            name: "OPERATIONS RESEARCH",
            salaryRange: `${currency}${salaryResults[4].minSalary} - ${currency}${salaryResults[4].maxSalary}`,
            description: `Optimize processes and decision-making through mathematical modeling and analytical methods, used in logistics, manufacturing, and management.`
        },
        {
            name: "FINANCIAL MATHEMATICS",
            salaryRange: `${currency}${salaryResults[5].minSalary} - ${currency}${salaryResults[5].maxSalary}`,
            description: `Apply mathematics to model and solve problems in finance, focusing on pricing, risk management, and investment strategies.`
        },
        {
            name: "NUMBER THEORY",
            salaryRange: `${currency}${salaryResults[6].minSalary} - ${currency}${salaryResults[6].maxSalary}`,
            description: `Investigate the properties of integers and their relationships, with applications in cryptography and algorithm design.`
        },
        {
            name: "TOPOLOGY",
            salaryRange: `${currency}${salaryResults[7].minSalary} - ${currency}${salaryResults[7].maxSalary}`,
            description: `Study properties of space that are preserved under continuous deformations, with applications in robotics, physics, and data science.`
        }

      ]
};

export const experienceSalary1 = [
  { id: 1, experience: "0-1 YEARS EXPERIENCE", salaryRange: "MYR29,000 - MYR50,000" },
  { id: 2, experience: "1-3 YEARS EXPERIENCE", salaryRange: "MYR50,000 - MYR59,000" },
  { id: 3, experience: "4-6 YEARS EXPERIENCE", salaryRange: "MYR70,000 - MYR90,000" },
  { id: 4, experience: "7-9 YEARS EXPERIENCE", salaryRange: "MYR90,000 - MYR200,000" }
];

export const experienceSalary2 = [
  { id: 1, experience: "0-1 YEARS EXPERIENCE", salaryRange: "$92,000 - $170,000" },
  { id: 2, experience: "1-3 YEARS EXPERIENCE", salaryRange: "$102,000 - $185,000" },
  { id: 3, experience: "4-6 YEARS EXPERIENCE", salaryRange: "$122,000 - $221,000" },
  { id: 4, experience: "7-9 YEARS EXPERIENCE", salaryRange: "$140,000 - $250,000" }
];


export const topcourses = [
    {
        name: "APPLIED MATHEMATICS",
        salaryRange: "$100,000 - $150,000",
        description: `Use mathematical methods in practical applications in science, engineering, and other fields, focusing on real-world problem-solving.`
    },
    {
        name: "STATISTICS",
        salaryRange: "$85,000 - $140,000",
        description: `Analyze and interpret data using statistical models, supporting decision-making in business, healthcare, and social sciences.`
    },
    {
        name: "ACTUARIAL SCIENCE",
        salaryRange: "$90,000 - $160,000",
        description: `Assess and manage risk in the insurance and finance industries using mathematical models and statistical techniques.`
    },
    {
        name: "COMPUTATIONAL MATHEMATICS",
        salaryRange: "$95,000 - $145,000",
        description: `Develop algorithms and use computer simulations to solve complex problems in science, economics, and engineering.`
    },
    {
        name: "OPERATIONS RESEARCH",
        salaryRange: "$85,000 - $135,000",
        description: `Optimize processes and decision-making through mathematical modeling and analytical methods, used in logistics, manufacturing, and management.`
    },
    {
        name: "FINANCIAL MATHEMATICS",
        salaryRange: "$110,000 - $170,000",
        description: `Apply mathematics to model and solve problems in finance, focusing on pricing, risk management, and investment strategies.`
    },
    {
        name: "NUMBER THEORY",
        salaryRange: "$80,000 - $130,000",
        description: `Investigate the properties of integers and their relationships, with applications in cryptography and algorithm design.`
    },
    {
        name: "TOPOLOGY",
        salaryRange: "$95,000 - $140,000",
        description: `Study properties of space that are preserved under continuous deformations, with applications in robotics, physics, and data science.`
    }
];

export const prerequisites = [
    "Strong foundation in algebra, calculus, and geometry",
    "Analytical and logical reasoning skills",
    "Programming and computational skills",
    "Attention to detail and precision",
    "Problem-solving and critical thinking"
];

export const coreAreasOfStudy = [
    "Algebra",
    "Calculus",
    "Geometry",
    "Number Theory",
    "Topology",
    "Probability and Statistics",
    "Differential Equations",
    "Linear Algebra"
];

export const jobGrowthFields = [
    "Data Science",
    "Quantitative Finance",
    "Machine Learning",
    "Operations Research",
    "Actuarial Science"
];

export const experienceSalary = [
    { experience: "0-1 YEARS EXPERIENCE", salaryRange: "$55,000 - $70,000" },
    { experience: "1-3 YEARS EXPERIENCE", salaryRange: "$70,000 - $90,000" },
    { experience: "4-6 YEARS EXPERIENCE", salaryRange: "$85,000 - $110,000" },
    { experience: "7-9 YEARS EXPERIENCE", salaryRange: "$100,000 - $130,000" }
];


export const topspecializations = [
    "Applied Mathematics",
    "Statistics",
    "Actuarial Science",
    "Computational Mathematics",
    "Topology",
    "Number Theory",
    "Operations Research"
];

export const trend = [
    "Machine Learning",
    "Blockchain Technology",
    "Data Analytics",
    "Quantum Computing",
    "Financial Modeling",
    "Cryptography"
];

export const skills = [
    "Advanced numerical methods",
    "Data analysis and statistical modeling",
    "Scientific programming (Python, R, MATLAB)",
    "Abstract and logical reasoning",
    "Mathematical modeling",
    "Problem-solving and critical thinking",
    "Research methodology"
];

export const challengesArray = [
    "UNDERGRADUATE CHALLENGES",
    {
        heading: "Abstract reasoning and theory.",
        description: `Mastering abstract mathematical concepts such as proofs, number theory, and higher-level calculus requires strong analytical skills.`
    },
    {
        heading: "Complex problem-solving.",
        description: `Developing the ability to tackle complex problems and mathematical models, often with no straightforward solution, is intellectually challenging.`
    },
    {
        heading: "Computational skills.",
        description: `Mastering computational tools and programming languages for mathematical modeling and data analysis requires significant effort for students without prior experience.`
    },
    {
        heading: "Balancing theory and application.",
        description: `Finding a balance between theoretical understanding and practical application in real-world scenarios can be difficult in advanced courses.`
    }
];

export const issuesArray = [
    "CURRENT JOB ISSUES IN THE FIELD",
    {
        heading: "Rapid changes in technology.",
        description: `Keeping pace with advancements in fields like machine learning and data science requires continuous skill development and learning.`
    },
    {
        heading: "Limited academic positions.",
        description: `Academic roles in pure mathematics are highly competitive, requiring an extensive publication record and research background.`
    },
    {
        heading: "Industry transition challenges.",
        description: `Mathematics graduates may face challenges transitioning to industry roles, requiring additional training in programming and applied methods.`
    },
    {
        heading: "Geographic limitations.",
        description: `Job opportunities in specialized fields like actuarial science or operations research may be concentrated in certain regions, requiring relocation.`
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
  
  