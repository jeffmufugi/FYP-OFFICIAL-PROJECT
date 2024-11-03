export const homepageInfo = [
    {
        courseName: "chemical engineering.",
        courseDefinition: "Chemical engineering focuses on the design, optimization, and operation of chemical processes.",
        undergradsal: "$85,000",
        jobavail: "32,700",
        emprate: "76%",

    },
    
    {
        description: `Chemical engineering combines principles of chemistry, physics, mathematics, and economics to efficiently use, produce, design, transport, and transform energy and materials.`,
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
            name: "PHARMACEUTICAL ENGINEERING",
            salaryRange: `${currency}110,000 - ${currency}150,000`,
            description: `Engineers focus on designing and optimizing processes to manufacture drugs and treatments. This includes research, scale-up, and quality control in drug production.`
        },
        {
            name: "RENEWABLE ENERGY",
            salaryRange: `${currency}105,000 - ${currency}140,000`,
            description: `Design and optimize processes to convert renewable resources into energy. This includes working with biofuels, hydrogen, and solar technologies to create sustainable energy solutions.`
        },
        {
            name: "PROCESS SAFETY MANAGEMENT",
            salaryRange: `${currency}95,000 - ${currency}130,000`,
            description: `Focus on the identification, prevention, and control of potential hazards in industrial processes to ensure safe and efficient production.`
        },
        {
            name: "PETROLEUM ENGINEERING",
            salaryRange: `${currency}100,000 - ${currency}145,000`,
            description: `Develop methods for extracting oil and gas from deposits below the Earth's surface, focusing on improving extraction techniques and resource management.`
        },
        {
            name: "WATER TREATMENT ENGINEERING",
            salaryRange: `${currency}90,000 - ${currency}130,000`,
            description: `Design and manage systems that treat wastewater to ensure that it is safe for discharge or reuse, playing a crucial role in environmental protection.`
        },
        {
            name: "POLYMER ENGINEERING",
            salaryRange: `${currency}95,000 - ${currency}135,000`,
            description: `Specialize in the development and production of polymers and plastics, including new materials design, processing techniques, and recycling technologies.`
        },
        {
            name: "BIOCHEMICAL ENGINEERING",
            salaryRange: `${currency}100,000 - ${currency}140,000`,
            description: `Apply engineering principles to biological processes for producing valuable products, including fermentation, cell culture, and enzyme technology.`
        },
        {
            name: "NANOTECHNOLOGY",
            salaryRange: `${currency}115,000 - ${currency}155,000`,
            description: `Focus on manipulating matter at the molecular scale to develop new materials and processes with applications in electronics, medicine, and energy.`
        },
        {
            name: "FOOD PROCESSING ENGINEERING",
            salaryRange: `${currency}85,000 - ${currency}125,000`,
            description: `Design and optimize processes for food production, preservation, and packaging while ensuring safety and quality standards are met.`
        },
        {
            name: "GREEN PROCESS ENGINEERING",
            salaryRange: `${currency}95,000 - ${currency}135,000`,
            description: `Develop sustainable manufacturing processes that minimize environmental impact through waste reduction, energy efficiency, and clean technology implementation.`
        }
      ]
};



export const prerequisites = [
    "Strong foundation in chemistry, physics, and mathematics",
    "Understanding of thermodynamics and material science",
    "Problem-solving and analytical thinking skills",
    "Communication and teamwork skills",
    "Self-discipline and attention to detail"
];

export const coreAreasOfStudy = [
    "Chemical Process Design",
    "Thermodynamics",
    "Fluid Mechanics",
    "Heat and Mass Transfer",
    "Reaction Engineering",
    "Process Control",
    "Biochemical Engineering",
    "Environmental Engineering"
];

export const jobGrowthFields = [
    "BIO PHARMACEUTIC",
    "RENEWABLE ENERGY",
    "NANO TECHNOLOGY",
    "SUSTAINABLE PROCESSES",
    "WATER TREATMENT"
];

export const experienceSalary = [
    { experience: "0-1 YEARS EXPERIENCE", salaryRange: "$65,000 - $85,000" },
    { experience: "1-3 YEARS EXPERIENCE", salaryRange: "$75,000 - $95,000" },
    { experience: "4-6 YEARS EXPERIENCE", salaryRange: "$90,000 - $115,000" },
    { experience: "7-9 YEARS EXPERIENCE", salaryRange: "$100,000 - $125,000" }
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
    "Pharmaceutical Engineering",
    "Renewable Energy Systems",
    "Nanotechnology",
    "Environmental and Water Treatment Engineering",
    "Process Control and Safety",
    "Sustainable Chemical Processes",
    "Biochemical Engineering",
    "Polymer Science"
];

export const trend = [
    "Sustainable Chemical Processes",
    "Advanced Manufacturing",
    "Green Chemistry",
    "Circular Economy",
    "Carbon Capture Technologies",
    "Artificial Intelligence in Process Engineering"
];

export const skills = [
    "Strong knowledge of chemistry and physics",
    "Process simulation and optimization",
    "Safety protocols in chemical processes",
    "Material science",
    "Environmental impact assessment",
    "Problem-solving under pressure",
    "Project management and teamwork",
    "Effective communication"
];

export const challengesArray = [
    "UNDERGRADUATE CHALLENGES",
    {
        heading: "Highly technical coursework.",
        description: `Theoretical concepts in thermodynamics, fluid mechanics, and kinetics can be challenging without a solid foundation in chemistry and physics.`
    },
    {
        heading: "Balancing practical labs with theory.",
        description: `Integrating hands-on laboratory work with heavy theoretical material can be overwhelming, requiring strong time management skills.`
    },
    {
        heading: "Adapting to evolving technologies.",
        description: `The rapid evolution of process engineering tools and techniques demands constant learning and adaptation to new technologies.`
    },
    {
        heading: "Strenuous safety regulations.",
        description: `Understanding and adhering to stringent safety regulations is essential in the chemical industry, adding complexity to project execution.`
    },
    {
        heading: "High competition for internships and job placements.",
        description: `Securing a position in the most desired fields (like pharmaceuticals and renewable energy) often requires a competitive edge.`
    }
];

export const issuesArray = [
    "CURRENT JOB ISSUES IN THE FIELD",
    {
        heading: "Impact of automation on process control roles.",
        description: `Automation in chemical processes is reducing the demand for traditional process control roles, pushing engineers to upskill in newer technologies.`
    },
    {
        heading: "Environmental regulations tightening.",
        description: `Increasingly strict environmental regulations are creating new challenges for industries, requiring innovative solutions for sustainable production.`
    },
    {
        heading: "Rising demand for renewable energy expertise.",
        description: `There is a growing demand for engineers with expertise in renewable energy, shifting focus from traditional sectors like oil and gas.`
    },
    {
        heading: "Global competition in pharmaceuticals.",
        description: `The global nature of the pharmaceutical industry has heightened competition, requiring engineers to keep up with international standards and regulations.`
    },
    {
        heading: "Long-term job stability concerns.",
        description: `Economic downturns and changing political landscapes can affect the chemical industry, leading to concerns about long-term job security.`
    }
];

