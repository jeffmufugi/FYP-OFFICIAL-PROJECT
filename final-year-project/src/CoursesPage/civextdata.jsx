

export const homepageInfo = [
    {
        courseName: "civil engineering.",
        courseDefinition: "Civil Engineering focuses on the design, construction, and maintenance of infrastructure such as roads, bridges, buildings, and water supply systems.",
        undergradsal: "$75,836",
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
  undergradsal: `75,836`,
  jobavail : "16,700",
  emprate: "57%",
  },]
  
  //MALAYSIA
  export const homepageInfo2 = [ {
    undergradsal: `45,000`,
    jobavail : "12,700",
    emprate: "77%",
    },]
    import salaryData from '/../server/data/salary-dataCIVusa.json';
    import salaryData2 from '/../server/data/salary-dataCIVmy.json';
    
    export const countries = 
    [{"flag":"🇺🇸","file":salaryData,"currency":"$",id:1},
    {"flag":"🇲🇾","file":salaryData2,"currency":"MYR",id:2}];


    export const getTopCourses = (salaryData) => {
    
      const jobData = salaryData.data.find(job => job.title === 'Structural Engineering');

      const currency = jobData ? jobData.currency : null;
      console.log(currency);

      const seJob = salaryData?.data?.find(job => job.title === 'Structural Engineering');
const teJob = salaryData?.data?.find(job => job.title === 'Transportation Engineering');
const geJob = salaryData?.data?.find(job => job.title === 'Geotechnical Engineering');
const wrJob = salaryData?.data?.find(job => job.title === 'Water Resources Engineering');
const eeJob = salaryData?.data?.find(job => job.title === 'Environmental Engineering');
const ceJob = salaryData?.data?.find(job => job.title === 'Construction Engineering');

const validJobs = [seJob, teJob, geJob, wrJob, eeJob, ceJob];

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
            name: "Structural Engineering",
            salaryRange: `${currency}${salaryResults[0].minSalary} - ${currency}${salaryResults[0].maxSalary}`,
            description: `Focuses on the design and analysis of buildings, bridges, and other structures to ensure they can withstand environmental stresses.`,
            link: `${salaryResults[0].link}`,
            id: 1
          },
          {
            name: "Transportation Engineering",
            salaryRange: `${currency}${salaryResults[1].minSalary} - ${currency}${salaryResults[1].maxSalary}`,
            description: `Specializes in planning, design, and maintenance of transportation systems including roads, highways, airports, and railways.`,
            link: `${salaryResults[1].link}`,
            id: 2
          },
          {
            name: "Geotechnical Engineering",
            salaryRange: `${currency}${salaryResults[2].minSalary} - ${currency}${salaryResults[2].maxSalary}`,
            description: `Involves the study of soil and rock mechanics to design foundations, tunnels, and retaining structures.`,
            link: `${salaryResults[2].link}`,
            id: 3
          },
          {
            name: "Water Resources Engineering",
            salaryRange: `${currency}${salaryResults[3].minSalary} - ${currency}${salaryResults[3].maxSalary}`,
            description: `Focuses on the management and distribution of water resources, including water treatment, flood control, and irrigation systems.`,
            link: `${salaryResults[3].link}`,
            id: 4
          },
          {
            name: "Environmental Engineering",
            salaryRange: `${currency}${salaryResults[4].minSalary} - ${currency}${salaryResults[4].maxSalary}`,
            description: `Designs systems to protect the environment, such as water treatment facilities, pollution control, and waste management solutions.`,
            link: `${salaryResults[4].link}`,
            id: 5
          },
          {
            name: "Construction Engineering",
            salaryRange: `${currency}${salaryResults[5].minSalary} - ${currency}${salaryResults[5].maxSalary}`,
            description: `Specializes in the management and execution of construction projects, ensuring they are completed on time and within budget.`,
            link: `${salaryResults[5].link}`,
            id: 6
          }
        ];
};

    



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

export const coreAreasOfStudy = [
    {
      area: "Structural Engineering",
      description: "Focuses on designing and analyzing safe and durable structures like buildings and bridges."
    },
    {
      area: "Transportation Engineering",
      description: "Involves planning and improving transportation systems for efficient mobility."
    },
    {
      area: "Geotechnical Engineering",
      description: "Examines soil and rock mechanics for foundation design and earthworks."
    },
    {
      area: "Water Resources Engineering",
      description: "Addresses the management and distribution of water resources for sustainable use."
    },
    {
      area: "Environmental Engineering",
      description: "Focuses on reducing environmental impact through sustainable practices and technologies."
    },
    {
      area: "Construction Engineering",
      description: "Involves project management, construction techniques, and on-site operations."
    },
    {
      area: "Materials Science",
      description: "Studies the properties and applications of construction materials for optimal use."
    },
    {
      area: "Surveying",
      description: "Involves measuring and mapping land for construction and development projects."
    }
  ];

export const topspecializations = [
    {
      specialization: "Structural Engineering",
      description: "Design and analysis of structures to ensure they are safe, efficient, and sustainable."
    },
    {
      specialization: "Transportation Engineering",
      description: "Development and optimization of transportation networks to meet growing demands."
    },
    {
      specialization: "Geotechnical Engineering",
      description: "Application of soil and rock mechanics in designing foundations and stabilizing slopes."
    },
    {
      specialization: "Water Resources Engineering",
      description: "Management of water supply, flood control, and irrigation systems."
    },
    {
      specialization: "Environmental Engineering",
      description: "Engineering solutions to mitigate environmental impacts and promote sustainability."
    },
    {
      specialization: "Construction Engineering",
      description: "Overseeing construction projects from conception to completion with efficiency and quality."
    },
    {
      specialization: "Materials Science",
      description: "Exploration of advanced materials for enhanced performance and durability in construction."
    }
  ];

export const trend = [
    {
      trend: "Sustainable Design",
      description: "Emphasizes eco-friendly building practices and energy-efficient structures."
    },
    {
      trend: "Smart Infrastructure",
      description: "Integration of IoT and data analytics for adaptive and intelligent infrastructure."
    },
    {
      trend: "3D Printing in Construction",
      description: "Revolutionizing construction with faster and cost-effective building techniques."
    },
    {
      trend: "Modular Construction",
      description: "Streamlined construction through prefabricated components for efficiency."
    },
    {
      trend: "Green Building Technologies",
      description: "Innovations aimed at reducing the carbon footprint of construction projects."
    }
  ];
export const skills = [
    {
      skill: "Design and analysis of structures",
      description: "Creating safe and efficient designs for buildings, bridges, and other infrastructures."
    },
    {
      skill: "Project management",
      description: "Coordinating and overseeing engineering projects from start to finish."
    },
    {
      skill: "Knowledge of materials and construction methods",
      description: "Understanding properties of materials and methods for efficient construction."
    },
    {
      skill: "Use of CAD and BIM software",
      description: "Employing advanced tools for designing and visualizing engineering projects."
    },
    {
      skill: "Environmental impact assessments",
      description: "Evaluating and mitigating the ecological effects of engineering projects."
    },
    {
      skill: "Surveying and mapping",
      description: "Measuring and documenting land and structures for development projects."
    },
    {
      skill: "Risk analysis for infrastructure projects",
      description: "Identifying and addressing potential risks to ensure project safety and success."
    }
  ];

export const prerequisites = [
    {
      skill: "Strong foundation in mathematics and physics",
      description: "Essential for understanding and applying engineering principles to real-world challenges."
    },
    {
      skill: "Knowledge of engineering principles",
      description: "Core concepts in mechanics, materials, and systems design are critical for success."
    },
    {
      skill: "Problem-solving skills",
      description: "The ability to analyze complex issues and devise innovative solutions."
    },
    {
      skill: "Attention to detail",
      description: "Ensures precision in design, analysis, and construction processes."
    },
    {
      skill: "Communication and teamwork skills",
      description: "Collaboration with multidisciplinary teams and clear communication are key in engineering projects."
    }
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

