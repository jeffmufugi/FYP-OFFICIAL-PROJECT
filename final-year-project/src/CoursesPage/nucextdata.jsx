export const homepageInfo = [
    {
        courseName: "nuclear engineering.",
        courseDefinition: "Nuclear Engineering focuses on the application of nuclear processes for energy production, medical purposes, and the development of nuclear technologies.",
        undergradsal: "$75,000",
        jobavail: "20,000",
        emprate: "93%",
    },
    
    {
        description: `Nuclear Engineering plays a critical role in the development of safe and efficient nuclear energy, nuclear reactors, and radiation technologies used in medical and industrial applications.`,
        backgroundColor1:"#DADAFF",
        backgroundColor2:"#E1E1FE",
        backgroundColor3:"#EEEEFF",
        fontColor: "#1B046C",
        popupcolor1 : "#1B046C",
        popupcolor2 : "#DADAFF",
    }
];
//ADD HOMEPAGE INFOS, 
//USA 
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
  

    import salaryData from '/../server/data/salary-data.json';
    import salaryData2 from '/../server/data/salary-dataMY.json';
    
    export const countries = 
    [{"flag":"🇺🇸","file":salaryData,"currency":"$",id:1},
    {"flag":"🇲🇾","file":salaryData2,"currency":"MYR",id:2}
    ];
    
 
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
            name: "NUCLEAR REACTOR DESIGN",
            salaryRange: `${currency}85,000 - ${currency}130,000`,
            description: `Focuses on the design, construction, and operation of nuclear reactors for energy production, emphasizing safety and efficiency.`
        },
        {
            name: "RADIATION SAFETY",
            salaryRange: `${currency}80,000 - ${currency}120,000`,
            description: `Specializes in protecting people and the environment from harmful effects of radiation through the development of safety protocols and equipment.`
        },
        {
            name: "NUCLEAR MEDICINE",
            salaryRange: `${currency}90,000 - ${currency}140,000`,
            description: `Involves using radiation to diagnose and treat diseases, particularly cancer, through the use of radioactive materials.`
        },
        {
            name: "FUSION ENERGY RESEARCH",
            salaryRange: `${currency}95,000 - ${currency}150,000`,
            description: `Focuses on developing nuclear fusion as a future energy source, involving advanced plasma physics and reactor design.`
        },
        {
            name: "NUCLEAR MATERIALS ENGINEERING",
            salaryRange: `${currency}80,000 - ${currency}120,000`,
            description: `Studies the behavior and management of nuclear materials in reactors, focusing on durability, waste disposal, and reprocessing.`
        },
        {
            name: "NUCLEAR WEAPONS TECHNOLOGY",
            salaryRange: `${currency}100,000 - ${currency}160,000`,
            description: `Deals with the design, production, and regulation of nuclear weapons and strategies for their safe management and reduction.`
        }
      ]
};




export const prerequisites = [
    "Strong foundation in physics and mathematics",
    "Understanding of thermodynamics and fluid mechanics",
    "Knowledge of nuclear processes",
    "Critical thinking and problem-solving skills",
    "Attention to safety and detail"
];

export const coreAreasOfStudy = [
    "Nuclear Reactor Theory",
    "Radiation Protection",
    "Nuclear Power Plant Design",
    "Fusion Energy",
    "Nuclear Materials",
    "Radiological Engineering",
    "Thermodynamics and Fluid Flow",
    "Nuclear Waste Management"
];

export const jobGrowthFields = [
    "Fusion Energy Research",
    "Advanced Nuclear Reactors",
    "Nuclear Medicine",
    "Radiation Therapy",
    "Nuclear Waste Management"
];

export const experienceSalary = [
    { experience: "0-1 YEARS EXPERIENCE", salaryRange: "$70,000 - $85,000" },
    { experience: "1-3 YEARS EXPERIENCE", salaryRange: "$85,000 - $105,000" },
    { experience: "4-6 YEARS EXPERIENCE", salaryRange: "$100,000 - $130,000" },
    { experience: "7-9 YEARS EXPERIENCE", salaryRange: "$120,000 - $150,000" }
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
    "Nuclear Reactor Design",
    "Radiation Protection",
    "Nuclear Medicine",
    "Fusion Energy",
    "Nuclear Materials Engineering",
    "Nuclear Weapons Technology",
    "Nuclear Waste Management"
];

export const trend = [
    "Small Modular Reactors",
    "Fusion Energy Research",
    "Radiation Therapy Advancements",
    "Nuclear Energy Storage",
    "Advanced Reactor Safety Systems"
];

export const skills = [
    "Understanding of nuclear fission and fusion processes",
    "Knowledge of radiation safety and shielding",
    "Expertise in nuclear reactor design and operation",
    "Proficiency in thermodynamics and fluid mechanics",
    "Problem-solving and risk assessment",
    "Project management in nuclear facilities",
    "Analysis of nuclear waste and disposal strategies"
];

export const challengesArray = [
    "UNDERGRADUATE CHALLENGES",
    {
        heading: "Mastering complex nuclear physics.",
        description: `Students must grasp advanced nuclear physics principles, such as fission, fusion, and radiation, which form the foundation of nuclear engineering.`
    },
    {
        heading: "Balancing safety with innovation.",
        description: `Nuclear engineers must innovate while maintaining strict safety protocols, requiring a deep understanding of both the science and regulatory requirements.`
    },
    {
        heading: "Environmental concerns.",
        description: `Dealing with nuclear waste disposal and ensuring the environmental sustainability of nuclear projects is a significant challenge.`
    },
    {
        heading: "Managing large-scale projects.",
        description: `Nuclear engineering projects, such as building reactors or implementing fusion research, involve managing large budgets, timelines, and teams.`
    }
];

export const issuesArray = [
    "CURRENT JOB ISSUES IN THE FIELD",
    {
        heading: "Nuclear waste disposal.",
        description: `Finding long-term solutions for nuclear waste storage and disposal remains one of the biggest challenges in nuclear engineering.`
    },
    {
        heading: "Public perception and safety.",
        description: `The safety concerns surrounding nuclear power often influence public opinion and policy, creating challenges for expansion of nuclear energy.`
    },
    {
        heading: "Regulatory hurdles.",
        description: `Nuclear engineers must navigate complex regulations and international agreements, which can slow down research and development.`
    },
    {
        heading: "Development of fusion energy.",
        description: `Fusion energy is seen as a promising future energy source, but the technical and financial hurdles for commercial viability remain significant.`
    }
];
