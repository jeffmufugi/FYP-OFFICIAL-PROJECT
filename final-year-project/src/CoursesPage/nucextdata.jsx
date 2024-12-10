export const homepageInfo = [
    {
        courseName: "nuclear engineering.",
        courseDefinition: "Nuclear Engineering focuses on the application of nuclear processes for energy production, medical purposes, and the development of nuclear technologies.",
        undergradsal: "$89,368",
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
  undergradsal: `89,368`,
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


export const prerequisites = [
    {
      skill: "Strong foundation in physics and mathematics",
      description: "A solid understanding of physics and math is essential to grasp the principles behind nuclear processes and engineering designs."
    },
    {
      skill: "Understanding of thermodynamics and fluid mechanics",
      description: "These are fundamental to the design and operation of nuclear reactors and energy systems."
    },
    {
      skill: "Knowledge of nuclear processes",
      description: "Understanding of fission, fusion, and radioactive decay is key for working in the nuclear field."
    },
    {
      skill: "Critical thinking and problem-solving skills",
      description: "Required for analyzing complex systems and resolving safety, operational, and environmental challenges in nuclear engineering."
    },
    {
      skill: "Attention to safety and detail",
      description: "Given the potential risks associated with nuclear energy, safety and precision are paramount in all aspects of nuclear engineering."
    }
  ];
  export const coreAreasOfStudy = [
    {
      area: "Nuclear Reactor Theory",
      description: "Study of how nuclear reactors operate, including chain reactions, energy production, and reactor physics."
    },
    {
      area: "Radiation Protection",
      description: "Focus on safeguarding people and the environment from harmful radiation through shielding, monitoring, and safety procedures."
    },
    {
      area: "Nuclear Power Plant Design",
      description: "Study of the engineering and design of nuclear power plants, ensuring efficient, safe, and sustainable energy production."
    },
    {
      area: "Fusion Energy",
      description: "Research and development in harnessing nuclear fusion as a clean and virtually limitless energy source."
    },
    {
      area: "Nuclear Materials",
      description: "Study of materials used in nuclear reactors, including their properties, behavior under radiation, and resistance to corrosion and wear."
    },
    {
      area: "Radiological Engineering",
      description: "Focus on the application of radiation in engineering, including medical imaging, industrial processes, and safety in radiation environments."
    },
    {
      area: "Thermodynamics and Fluid Flow",
      description: "Essential for understanding the heat transfer and fluid dynamics within nuclear reactors, power plants, and cooling systems."
    },
    {
      area: "Nuclear Waste Management",
      description: "Study of how to safely handle, store, and dispose of nuclear waste, minimizing its impact on the environment."
    }
  ];

  export const topspecializations = [
    {
      specialization: "Nuclear Reactor Design",
      description: "Designing and optimizing reactors for maximum efficiency, safety, and sustainability."
    },
    {
      specialization: "Radiation Protection",
      description: "Focus on protecting individuals, communities, and the environment from the harmful effects of ionizing radiation."
    },
    {
      specialization: "Nuclear Medicine",
      description: "Application of radioactive substances in medical treatments and diagnostic imaging, such as cancer treatment and PET scans."
    },
    {
      specialization: "Fusion Energy",
      description: "Research into harnessing fusion reactions as a clean, abundant source of energy."
    },
    {
      specialization: "Nuclear Materials Engineering",
      description: "Study of materials used in nuclear reactors, including fuel and structural materials, to optimize performance and safety."
    },
    {
      specialization: "Nuclear Weapons Technology",
      description: "Focus on the development, management, and non-proliferation of nuclear weapons technology."
    },
    {
      specialization: "Nuclear Waste Management",
      description: "Study of the safe disposal, recycling, and long-term storage of radioactive waste."
    }
  ];
  export const trend = [
    {
      trend: "Small Modular Reactors",
      description: "Development of smaller, more flexible nuclear reactors that can be deployed in various locations and are easier to manage."
    },
    {
      trend: "Fusion Energy Research",
      description: "Continued advancements in fusion technology with the goal of creating a sustainable and clean energy source."
    },
    {
      trend: "Radiation Therapy Advancements",
      description: "Improving the effectiveness and precision of radiation therapy used in the treatment of cancer and other diseases."
    },
    {
      trend: "Nuclear Energy Storage",
      description: "Research into methods of storing nuclear energy efficiently, such as through advanced battery technologies and thermal energy storage."
    },
    {
      trend: "Advanced Reactor Safety Systems",
      description: "Development of new safety systems for reactors, focusing on passive safety mechanisms and reducing the risk of accidents."
    }
  ];
  export const skills = [
    {
      skill: "Understanding of nuclear fission and fusion processes",
      description: "Essential knowledge for designing and managing nuclear reactors and understanding the core principles of nuclear energy production."
    },
    {
      skill: "Knowledge of radiation safety and shielding",
      description: "Key for ensuring the safe operation of nuclear reactors and facilities, protecting workers and the environment from harmful radiation."
    },
    {
      skill: "Expertise in nuclear reactor design and operation",
      description: "Required for designing and optimizing nuclear reactors to ensure efficiency, safety, and regulatory compliance."
    },
    {
      skill: "Proficiency in thermodynamics and fluid mechanics",
      description: "Critical for understanding heat transfer and fluid flow within nuclear reactors and associated power plant systems."
    },
    {
      skill: "Problem-solving and risk assessment",
      description: "Skills needed to assess and mitigate risks associated with nuclear systems and develop solutions for complex engineering challenges."
    },
    {
      skill: "Project management in nuclear facilities",
      description: "Ability to manage large-scale projects in nuclear energy production, ensuring timelines, budgets, and safety standards are met."
    },
    {
      skill: "Analysis of nuclear waste and disposal strategies",
      description: "Required for designing strategies for the safe handling, storage, and disposal of radioactive materials and waste."
    }
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
