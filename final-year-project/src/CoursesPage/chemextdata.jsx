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
  undergradsal: `85,000`,
  jobavail : "16,700",
  emprate: "57%",
  },]
  
  //MALAYSIA
  export const homepageInfo2 = [ {
    undergradsal: `45,000`,
    jobavail : "4,700",
    emprate: "77%",
    },]

    import salaryData from '/../server/data/salary-dataCE.json';
    import salaryData2 from '/../server/data/salary-dataCEMY.json';
    export const countries = 
    [{"flag":"🇺🇸","file":salaryData,"currency":"$",id:1},
    {"flag":"🇲🇾","file":salaryData2,"currency":"MYR",id:2}];


    export const getTopCourses = (salaryData) => {
    
      const jobData = salaryData.data.find(job => job.title === 'Pharmaceutical Engineering');

      const currency = jobData ? jobData.currency : null;
      console.log(currency);

      const phJob = salaryData?.data?.find(job => job.title === 'Pharmaceutical Engineering');
      const reJob = salaryData?.data?.find(job => job.title === 'Renewable Energy');
      const psJob = salaryData?.data?.find(job => job.title === 'Process Safety Management');
      const peJob = salaryData?.data?.find(job => job.title === 'Petroleum Engineering');
      const wtJob = salaryData?.data?.find(job => job.title === 'Water Treatment Engineering');
      const poJob = salaryData?.data?.find(job => job.title === 'Polymer Engineering');
      const biJob = salaryData?.data?.find(job => job.title === 'Biochemical Engineering');
      const naJob = salaryData?.data?.find(job => job.title === 'Nanotechnology');
      const fpJob = salaryData?.data?.find(job => job.title === 'Food Processing Engineering');
      const gpJob = salaryData?.data?.find(job => job.title === 'Green Process Engineering');


      const validJobs = [phJob, reJob, psJob, peJob, wtJob, poJob, biJob, naJob, fpJob, gpJob];

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
            salaryRange: `${currency}${salaryResults[0].minSalary} - ${currency}${salaryResults[0].maxSalary}`,
            description: `Engineers focus on designing and optimizing processes to manufacture drugs and treatments. This includes research, scale-up, and quality control in drug production.`
        },
        {
            name: "RENEWABLE ENERGY",
            salaryRange: `${currency}${salaryResults[1].minSalary} - ${currency}${salaryResults[1].maxSalary}`,
            description: `Design and optimize processes to convert renewable resources into energy. This includes working with biofuels, hydrogen, and solar technologies to create sustainable energy solutions.`
        },
        {
            name: "PROCESS SAFETY MANAGEMENT",
            salaryRange: `${currency}${salaryResults[2].minSalary} - ${currency}${salaryResults[2].maxSalary}`,
            description: `Focus on the identification, prevention, and control of potential hazards in industrial processes to ensure safe and efficient production.`
        },
        {
            name: "PETROLEUM ENGINEERING",
            salaryRange: `${currency}${salaryResults[3].minSalary} - ${currency}${salaryResults[3].maxSalary}`,
            description: `Develop methods for extracting oil and gas from deposits below the Earth's surface, focusing on improving extraction techniques and resource management.`
        },
        {
            name: "WATER TREATMENT ENGINEERING",
            salaryRange: `${currency}${salaryResults[4].minSalary} - ${currency}${salaryResults[4].maxSalary}`,
            description: `Design and manage systems that treat wastewater to ensure that it is safe for discharge or reuse, playing a crucial role in environmental protection.`
        },
        {
            name: "POLYMER ENGINEERING",
            salaryRange: `${currency}${salaryResults[5].minSalary} - ${currency}${salaryResults[5].maxSalary}`,
            description: `Specialize in the development and production of polymers and plastics, including new materials design, processing techniques, and recycling technologies.`
        },
        {
            name: "BIOCHEMICAL ENGINEERING",
            salaryRange: `${currency}${salaryResults[6].minSalary} - ${currency}${salaryResults[6].maxSalary}`,
            description: `Apply engineering principles to biological processes for producing valuable products, including fermentation, cell culture, and enzyme technology.`
        },
        {
            name: "NANOTECHNOLOGY",
            salaryRange: `${currency}${salaryResults[7].minSalary} - ${currency}${salaryResults[7].maxSalary}`,
            description: `Focus on manipulating matter at the molecular scale to develop new materials and processes with applications in electronics, medicine, and energy.`
        },
        {
            name: "FOOD PROCESSING ENGINEERING",
            salaryRange: `${currency}${salaryResults[8].minSalary} - ${currency}${salaryResults[8].maxSalary}`,
            description: `Design and optimize processes for food production, preservation, and packaging while ensuring safety and quality standards are met.`
        },
        {
            name: "GREEN PROCESS ENGINEERING",
            salaryRange: `${currency}${salaryResults[9].minSalary} - ${currency}${salaryResults[9].maxSalary}`,
            description: `Develop sustainable manufacturing processes that minimize environmental impact through waste reduction, energy efficiency, and clean technology implementation.`
        }
      ]
};
export const jobGrowthFields = [
    "BIO PHARMACEUTIC",
    "RENEWABLE ENERGY",
    "NANO TECHNOLOGY",
    "SUSTAINABLE PROCESSES",
    "WATER TREATMENT"
];
export const coreAreasOfStudy = [
    {
      area: "Chemical Process Design",
      description: "Developing efficient and sustainable processes for producing chemicals and materials."
    },
    {
      area: "Thermodynamics",
      description: "Studying energy transformations to design and analyze chemical processes."
    },
    {
      area: "Fluid Mechanics",
      description: "Understanding fluid behavior to design transport systems and optimize industrial processes."
    },
    {
      area: "Heat and Mass Transfer",
      description: "Analyzing the movement of heat and mass in chemical systems for process optimization."
    },
    {
      area: "Reaction Engineering",
      description: "Designing chemical reactors to maximize efficiency and yield."
    },
    {
      area: "Process Control",
      description: "Implementing control systems to maintain safety and efficiency in chemical operations."
    },
    {
      area: "Biochemical Engineering",
      description: "Applying biological principles to develop bioprocesses and bio-based products."
    },
    {
      area: "Environmental Engineering",
      description: "Focusing on sustainable solutions for pollution control and resource management."
    }
  ];

  export const topspecializations = [
    {
      specialization: "Pharmaceutical Engineering",
      description: "Designing and optimizing processes for producing drugs and medical products."
    },
    {
      specialization: "Renewable Energy Systems",
      description: "Developing technologies for sustainable energy production and storage."
    },
    {
      specialization: "Nanotechnology",
      description: "Engineering materials at the nanoscale for advanced applications in medicine, energy, and materials science."
    },
    {
      specialization: "Environmental and Water Treatment Engineering",
      description: "Creating systems to purify water and mitigate environmental pollution."
    },
    {
      specialization: "Process Control and Safety",
      description: "Implementing systems to ensure safe and efficient chemical operations."
    },
    {
      specialization: "Sustainable Chemical Processes",
      description: "Focusing on eco-friendly methods for producing chemicals and materials."
    },
    {
      specialization: "Biochemical Engineering",
      description: "Integrating biological systems into chemical processes to produce bio-based products."
    },
    {
      specialization: "Polymer Science",
      description: "Studying polymers to develop advanced materials for diverse applications."
    }
  ];

  export const trend = [
    {
      trend: "Sustainable Chemical Processes",
      description: "Developing eco-friendly methods to reduce waste and minimize environmental impact."
    },
    {
      trend: "Advanced Manufacturing",
      description: "Using cutting-edge technologies like 3D printing and automation in chemical production."
    },
    {
      trend: "Green Chemistry",
      description: "Creating processes that minimize the use of hazardous substances and reduce waste."
    },
    {
      trend: "Circular Economy",
      description: "Designing systems to recycle and reuse materials, reducing dependency on finite resources."
    },
    {
      trend: "Carbon Capture Technologies",
      description: "Innovating methods to capture and store carbon emissions to combat climate change."
    },
    {
      trend: "Artificial Intelligence in Process Engineering",
      description: "Using AI and machine learning to optimize chemical processes and predict system performance."
    }
  ];

  export const skills = [
    {
      skill: "Strong knowledge of chemistry and physics",
      description: "Understanding core scientific principles to design and analyze chemical processes."
    },
    {
      skill: "Process simulation and optimization",
      description: "Using software tools to simulate, model, and enhance chemical systems."
    },
    {
      skill: "Safety protocols in chemical processes",
      description: "Ensuring safety in industrial environments by understanding and implementing proper protocols."
    },
    {
      skill: "Material science",
      description: "Studying material properties to select the best materials for chemical applications."
    },
    {
      skill: "Environmental impact assessment",
      description: "Evaluating and mitigating the environmental effects of chemical processes."
    },
    {
      skill: "Problem-solving under pressure",
      description: "Developing solutions to urgent issues in dynamic and high-stakes environments."
    },
    {
      skill: "Project management and teamwork",
      description: "Coordinating and collaborating effectively to ensure project success."
    },
    {
      skill: "Effective communication",
      description: "Clearly conveying technical information to stakeholders from diverse backgrounds."
    }
  ];



export const prerequisites = [
    {
      skill: "Strong foundation in chemistry, physics, and mathematics",
      description: "A deep understanding of scientific and mathematical principles is essential for designing and optimizing chemical processes."
    },
    {
        skill: "Understanding of thermodynamics and material science",
      description: "Knowledge of energy systems and material properties is crucial for analyzing and creating efficient chemical systems."
    },
    {
        skill: "Problem-solving and analytical thinking skills",
      description: "The ability to address complex engineering challenges with innovative and data-driven solutions."
    },
    {
        skill: "Communication and teamwork skills",
      description: "Effective collaboration and clear communication are critical for working in interdisciplinary teams."
    },
    {
        skill: "Self-discipline and attention to detail",
      description: "A meticulous approach is vital for ensuring safety, accuracy, and reliability in chemical engineering projects."
    }
  ];

export const experienceSalary = [
    { experience: "0-1 YEARS EXPERIENCE", salaryRange: "$64,000 - $115,000" },
    { experience: "1-3 YEARS EXPERIENCE", salaryRange: "$75,000 - $135,000" },
    { experience: "4-6 YEARS EXPERIENCE", salaryRange: "$83,000 - $153,000" },
    { experience: "7-9 YEARS EXPERIENCE", salaryRange: "$90,000 - $167,000" }
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

