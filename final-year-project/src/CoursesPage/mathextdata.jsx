//
export const homepageInfo = [
    {
        courseName: "mathematics.",
        courseDefinition: "Mathematics is the abstract science of numbers, quantity, and space, applied in many fields like physics, engineering, economics, and more.",
        undergradsal: "$72,340",
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


    import salaryData from '/../server/data/salary-dataMATusa.json';
    import salaryData2 from '/../server/data/salary-dataMATmy.json';
    
    export const countries = 
    [{"flag":"🇺🇸","file":salaryData,"currency":"$",id:1},
    {"flag":"🇲🇾","file":salaryData2,"currency":"MYR",id:2}];


    export const getTopCourses = (salaryData) => {
    
      const jobData = salaryData.data.find(job => job.title === 'Applied Mathematics');

      const currency = jobData ? jobData.currency : null;
      console.log(currency );
      


      const amJob = salaryData?.data?.find(job => job.title === 'Applied Mathematics');
      const stJob = salaryData?.data?.find(job => job.title === 'Statistics');
      const asJob = salaryData?.data?.find(job => job.title === 'Actuarial Science');
      const cmJob = salaryData?.data?.find(job => job.title === 'Computational Mathematics');
      const orJob = salaryData?.data?.find(job => job.title === 'Operations Research');
      const fmJob = salaryData?.data?.find(job => job.title === 'Financial Mathematics');
      const ntJob = salaryData?.data?.find(job => job.title === 'Number Theory');
      const tpJob = salaryData?.data?.find(job => job.title === 'Topology');
      
      const validJobs = [amJob, stJob, asJob, cmJob, orJob, fmJob, ntJob, tpJob];

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
                name: "APPLIED MATHEMATICS",
                salaryRange: `${currency}${salaryResults[0].minSalary} - ${currency}${salaryResults[0].maxSalary}`,
                description: `Use mathematical methods in practical applications in science, engineering, and other fields, focusing on real-world problem-solving.`,
                link: `${salaryResults[0].link}`
            },
            {
                name: "STATISTICS",
                salaryRange: `${currency}${salaryResults[1].minSalary} - ${currency}${salaryResults[1].maxSalary}`,
                description: `Analyze and interpret data using statistical models, supporting decision-making in business, healthcare, and social sciences.`,
                link: `${salaryResults[1].link}`
            },
            {
                name: "ACTUARIAL SCIENCE",
                salaryRange: `${currency}${salaryResults[2].minSalary} - ${currency}${salaryResults[2].maxSalary}`,
                description: `Assess and manage risk in the insurance and finance industries using mathematical models and statistical techniques.`,
                link: `${salaryResults[2].link}`
            },
            {
                name: "COMPUTATIONAL MATHEMATICS",
                salaryRange: `${currency}${salaryResults[3].minSalary} - ${currency}${salaryResults[3].maxSalary}`,
                description: `Develop algorithms and use computer simulations to solve complex problems in science, economics, and engineering.`,
                link: `${salaryResults[3].link}`
            },
            {
                name: "OPERATIONS RESEARCH",
                salaryRange: `${currency}${salaryResults[4].minSalary} - ${currency}${salaryResults[4].maxSalary}`,
                description: `Optimize processes and decision-making through mathematical modeling and analytical methods, used in logistics, manufacturing, and management.`,
                link: `${salaryResults[4].link}`
            },
            {
                name: "FINANCIAL MATHEMATICS",
                salaryRange: `${currency}${salaryResults[5].minSalary} - ${currency}${salaryResults[5].maxSalary}`,
                description: `Apply mathematics to model and solve problems in finance, focusing on pricing, risk management, and investment strategies.`,
                link: `${salaryResults[5].link}`
            },
            {
                name: "NUMBER THEORY",
                salaryRange: `${currency}${salaryResults[6].minSalary} - ${currency}${salaryResults[6].maxSalary}`,
                description: `Investigate the properties of integers and their relationships, with applications in cryptography and algorithm design.`,
                link: `${salaryResults[6].link}`
            },
            {
                name: "TOPOLOGY",
                salaryRange: `${currency}${salaryResults[7].minSalary} - ${currency}${salaryResults[7].maxSalary}`,
                description: `Study properties of space that are preserved under continuous deformations, with applications in robotics, physics, and data science.`,
                link: `${salaryResults[7].link}`
            }
        ];
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


export const prerequisites = [
  {
    skill: "Strong foundation in algebra, calculus, and geometry",
    description: "Essential for solving complex mathematical problems and understanding advanced topics."
  },
  {
    skill: "Analytical and logical reasoning skills",
    description: "Ability to think critically and approach problems systematically is crucial for mathematical success."
  },
  {
    skill: "Programming and computational skills",
    description: "Proficiency in programming languages like Python, R, and MATLAB is necessary for applying mathematical concepts computationally."
  },
  {
    skill: "Attention to detail and precision",
    description: "Mathematics requires a high level of accuracy in calculations and logical arguments."
  },
  {
    skill: "Problem-solving and critical thinking",
    description: "Ability to break down complex problems and approach them logically, developing innovative solutions."
  }
];

export const coreAreasOfStudy = [
  {
    area: "Algebra",
    description: "Study of mathematical symbols and rules for manipulating these symbols, fundamental for higher mathematics."
  },
  {
    area: "Calculus",
    description: "Focuses on rates of change and accumulation, essential for solving problems in physics, engineering, and economics."
  },
  {
    area: "Geometry",
    description: "Study of shapes, sizes, and the properties of space, critical for understanding spatial relationships and structures."
  },
  {
    area: "Number Theory",
    description: "Explores properties and relationships of numbers, especially integers, with applications in cryptography and computer science."
  },
  {
    area: "Topology",
    description: "Study of properties that are preserved through deformations, stretching, and bending, important for various branches of mathematics."
  },
  {
    area: "Probability and Statistics",
    description: "Key for understanding data and making informed predictions based on statistical analysis."
  },
  {
    area: "Differential Equations",
    description: "Focuses on equations involving derivatives, crucial for modeling real-world phenomena in science and engineering."
  },
  {
    area: "Linear Algebra",
    description: "Study of vectors, vector spaces, and linear transformations, with applications in engineering, physics, and computer science."
  }
];
export const topspecializations = [
  {
    specialization: "Applied Mathematics",
    description: "Application of mathematical techniques to solve real-world problems in various fields such as engineering, physics, and economics."
  },
  {
    specialization: "Statistics",
    description: "Focus on data analysis, statistical inference, and modeling, with applications in many industries including healthcare and finance."
  },
  {
    specialization: "Actuarial Science",
    description: "Study of risk and uncertainty, applying mathematical and statistical methods to assess and manage risk in insurance and finance."
  },
  {
    specialization: "Computational Mathematics",
    description: "Involves developing and applying numerical algorithms and simulations to solve complex mathematical problems."
  },
  {
    specialization: "Topology",
    description: "Deep dive into topological spaces and structures, with applications in geometry, analysis, and theoretical computer science."
  },
  {
    specialization: "Number Theory",
    description: "Focus on the properties of integers and their relationships, with critical applications in cryptography and security."
  },
  {
    specialization: "Operations Research",
    description: "Applies mathematical models and optimization techniques to decision-making in industries such as logistics, manufacturing, and healthcare."
  }
];
export const trend = [
  {
    trend: "Machine Learning",
    description: "Rapidly growing field that uses mathematical algorithms to allow computers to learn from data and make predictions."
  },
  {
    trend: "Blockchain Technology",
    description: "A distributed ledger technology underpinned by cryptography and mathematical structures, transforming industries like finance and supply chain."
  },
  {
    trend: "Data Analytics",
    description: "Growing demand for skills to analyze and interpret vast amounts of data for actionable insights across sectors."
  },
  {
    trend: "Quantum Computing",
    description: "A new frontier that leverages quantum mechanics and mathematics to solve problems beyond the capabilities of classical computing."
  },
  {
    trend: "Financial Modeling",
    description: "Mathematical modeling of financial markets and instruments, used extensively in investment banking and risk management."
  },
  {
    trend: "Cryptography",
    description: "The mathematical foundation of securing communication and transactions, with increasing importance in digital security and blockchain."
  }
];

export const skills = [
  {
    skill: "Advanced numerical methods",
    description: "Proficiency in using algorithms and numerical techniques to solve mathematical problems, particularly in computational environments."
  },
  {
    skill: "Data analysis and statistical modeling",
    description: "Ability to analyze and interpret large data sets using mathematical and statistical methods, essential for fields like finance and marketing."
  },
  {
    skill: "Scientific programming (Python, R, MATLAB)",
    description: "Ability to use programming languages to implement mathematical models and simulations, essential in applied mathematics and computational fields."
  },
  {
    skill: "Abstract and logical reasoning",
    description: "Critical for proving theorems and understanding complex mathematical concepts and structures."
  },
  {
    skill: "Mathematical modeling",
    description: "Ability to translate real-world problems into mathematical formulations, essential for industries such as engineering and economics."
  },
  {
    skill: "Problem-solving and critical thinking",
    description: "Key to approaching mathematical challenges, finding innovative solutions, and addressing complex issues."
  },
  {
    skill: "Research methodology",
    description: "Knowledge of research techniques to conduct mathematical studies, prove new theories, and contribute to academic or industrial knowledge."
  }
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
  
  