

export const homepageInfo = [
    {
        courseName: "civil engineering.",
        courseDefinition: "Civil Engineering focuses on the design, construction, and maintenance of infrastructure such as roads, bridges, buildings, and water supply systems.",
        undergradsal: "$70,000",
        jobavail: "300,000",
        emprate: "95%",
    },
    
    {
        description: `Civil Engineering is essential for developing the infrastructure that supports modern society, including transportation systems, water management, and structural engineering.`,
        backgroundColor1: "#FFE7E7",
        backgroundColor2: "#FFEEEE",
        backgroundColor3: "#FFF7F7",
        fontColor: "#450203",
        popupcolor1 : "#890000",
        popupcolor2 : "#FFE7E7",
    }
];
export const homepageInfo1 = [ {
  undergradsal: `90,000`,
  jobavail : "16,700",
  emprate: "57%",
  },]
  
  //MALAYSIA
  export const homepageInfo2 = [ {
    undergradsal: `45,000`,
    jobavail : "12,700",
    emprate: "77%",
    },]

    import salaryData from '/Users/mvsterjeffrey/Desktop/FYP-OFFICIAL-PROJECT/server/data/salary-data.json'; // Adjust path accordingly
    import salaryData2 from '/Users/mvsterjeffrey/Desktop/FYP-OFFICIAL-PROJECT/server/data/salary-dataMY.json'; // Adjust path accordingly
    
    export const countries = 
    [{"flag":"🇺🇸","file":salaryData,"currency":"$",id:1},
    {"flag":"🇲🇾","file":salaryData2,"currency":"MYR",id:2}];


    export const getTopCourses = (salaryData) => {
    
      const jobData = salaryData.data.find(job => job.title === 'Computer Science');

      const currency = jobData ? jobData.currency : null;
      console.log(currency);

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
            name: "STRUCTURAL ENGINEERING",
            salaryRange: `${currency}85,000 - ${currency}120,000`,
            description: `Focuses on the design and analysis of buildings, bridges, and other structures to ensure they can withstand environmental stresses.`
        },
        {
            name: "TRANSPORTATION ENGINEERING",
            salaryRange: `${currency}80,000 - ${currency}115,000`,
            description: `Specializes in planning, design, and maintenance of transportation systems including roads, highways, airports, and railways.`
        },
        {
            name: "GEOTECHNICAL ENGINEERING",
            salaryRange: `${currency}75,000 - ${currency}110,000`,
            description: `Involves the study of soil and rock mechanics to design foundations, tunnels, and retaining structures.`
        },
        {
            name: "WATER RESOURCES ENGINEERING",
            salaryRange: `${currency}70,000 - ${currency}105,000`,
            description: `Focuses on the management and distribution of water resources, including water treatment, flood control, and irrigation systems.`
        },
        {
            name: "ENVIRONMENTAL ENGINEERING",
            salaryRange: `${currency}75,000 - ${currency}115,000`,
            description: `Designs systems to protect the environment, such as water treatment facilities, pollution control, and waste management solutions.`
        },
        {
            name: "CONSTRUCTION ENGINEERING",
            salaryRange: `${currency}80,000 - ${currency}125,000`,
            description: `Specializes in the management and execution of construction projects, ensuring they are completed on time and within budget.`
        }


      ]
};

    

export const prerequisites = [
    "Strong foundation in mathematics and physics",
    "Knowledge of engineering principles",
    "Problem-solving skills",
    "Attention to detail",
    "Communication and teamwork skills"
];

export const coreAreasOfStudy = [
    "Structural Engineering",
    "Transportation Engineering",
    "Geotechnical Engineering",
    "Water Resources Engineering",
    "Environmental Engineering",
    "Construction Engineering",
    "Materials Science",
    "Surveying"
];

export const jobGrowthFields = [
    "Sustainable Infrastructure",
    "Smart Cities",
    "Green Construction",
    "Disaster Resilient Structures",
    "Urban Transportation Systems"
];

export const experienceSalary = [
    { experience: "0-1 YEARS EXPERIENCE", salaryRange: "$65,000 - $80,000" },
    { experience: "1-3 YEARS EXPERIENCE", salaryRange: "$75,000 - $95,000" },
    { experience: "4-6 YEARS EXPERIENCE", salaryRange: "$90,000 - $120,000" },
    { experience: "7-9 YEARS EXPERIENCE", salaryRange: "$110,000 - $140,000" }
];

export const experienceSalary1 = [
    { id: 1, experience: "0-1 YEARS EXPERIENCE", salaryRange: "MYR40,000 - MYR50,000" },
    { id: 2, experience: "1-3 YEARS EXPERIENCE", salaryRange: "MYR50,000 - MYR70,000" },
    { id: 3, experience: "4-6 YEARS EXPERIENCE", salaryRange: "MYR70,000 - MYR90,000" },
    { id: 4, experience: "7-9 YEARS EXPERIENCE", salaryRange: "MYR90,000 - MYR200,000" }
  ];
  

export const experienceSalary2 = [
  { id: 1, experience: "0-1 YEARS EXPERIENCE", salaryRange: "$92,000 - $170,000" },
  { id: 2, experience: "1-3 YEARS EXPERIENCE", salaryRange: "$102,000 - $185,000" },
  { id: 3, experience: "4-6 YEARS EXPERIENCE", salaryRange: "$122,000 - $221,000" },
  { id: 4, experience: "7-9 YEARS EXPERIENCE", salaryRange: "$140,000 - $250,000" }
];


export const topspecializations = [
    "Structural Engineering",
    "Transportation Engineering",
    "Geotechnical Engineering",
    "Water Resources Engineering",
    "Environmental Engineering",
    "Construction Engineering",
    "Materials Science"
];

export const trend = [
    "Sustainable Design",
    "Smart Infrastructure",
    "3D Printing in Construction",
    "Modular Construction",
    "Green Building Technologies"
];

export const skills = [
    "Design and analysis of structures",
    "Project management",
    "Knowledge of materials and construction methods",
    "Use of CAD and BIM software",
    "Environmental impact assessments",
    "Surveying and mapping",
    "Risk analysis for infrastructure projects"
];

export const challengesArray = [
    "UNDERGRADUATE CHALLENGES",
    {
        heading: "Complex problem-solving.",
        description: `Civil engineers face complex challenges, requiring a strong grasp of math and physics along with innovative problem-solving skills.`
    },
    {
        heading: "Balancing design and practicality.",
        description: `Students must balance creative engineering designs with real-world constraints such as budget, materials, and environmental factors.`
    },
    {
        heading: "Environmental and regulatory considerations.",
        description: `Adhering to environmental laws, building codes, and safety standards adds layers of complexity to civil engineering projects.`
    },
    {
        heading: "Project management skills.",
        description: `Civil engineers must develop strong project management skills, managing large teams, schedules, and budgets efficiently.`
    }
];

export const issuesArray = [
    "CURRENT JOB ISSUES IN THE FIELD",
    {
        heading: "Sustainability concerns.",
        description: `Engineers are increasingly focused on developing eco-friendly infrastructure and minimizing environmental impacts.`
    },
    {
        heading: "Aging infrastructure.",
        description: `Addressing and maintaining deteriorating infrastructure, such as roads and bridges, is a major challenge for civil engineers.`
    },
    {
        heading: "Urbanization.",
        description: `The rapid growth of urban populations demands the development of efficient transportation systems and sustainable city planning.`
    },
    {
        heading: "Technological advancements.",
        description: `Integrating modern technology, such as AI, BIM, and 3D printing, into traditional construction practices is both a challenge and an opportunity.`
    }
];

