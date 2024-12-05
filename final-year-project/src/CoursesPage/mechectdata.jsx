export const homepageInfo = [
    {
        courseName: "mechanical engineering.",
        courseDefinition: "Mechanical engineering involves the design, analysis, manufacturing, and maintenance of mechanical systems.",
        undergradsal: "$97,000",
        jobavail: "316,300",
        emprate: "85%",
    },
    
    {
        description: `Mechanical engineering combines principles of physics, mathematics, and materials science to design, develop, and improve mechanical systems for various industries, including automotive, aerospace, and energy.`,
        backgroundColor1: "#E1FEF6",
        backgroundColor2: "#EEFFF9",
        backgroundColor3: "#F6FFFC",
        fontColor: "#00423C",
        popupcolor1 : "#00423C",
        popupcolor2 : "#EEFFF9",
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

    import salaryData from '/../server/data/salary-dataMEC.json';
    import salaryData2 from '/../server/data/salary-dataMECMY.json';
    
    export const countries = 
    [{"flag":"🇺🇸","file":salaryData,"currency":"$",id:1},
    {"flag":"🇲🇾","file":salaryData2,"currency":"MYR",id:2}];


    export const getTopCourses = (salaryData) => {
    
      const jobData = salaryData.data.find(job => job.title === 'Aerospace/Defense');

      const currency = jobData ? jobData.currency : null;
      console.log(currency );
      
      const aiJob = salaryData?.data?.find(job => job.title === 'Aerospace/Defense');
      const cyJob = salaryData?.data?.find(job => job.title === 'Oil & Gas/Energy');
      const clJob = salaryData?.data?.find(job => job.title === 'Robotics & Automation');
      const daJob = salaryData?.data?.find(job => job.title === 'Medical Devices');
      const swJob = salaryData?.data?.find(job => job.title === 'Research & Development');
      const deJob = salaryData?.data?.find(job => job.title === 'Nuclear Engineering');
      const moJob = salaryData?.data?.find(job => job.title === 'Automotive Advanced Systems');
      const gaJob = salaryData?.data?.find(job => job.title === 'Patents & Intellectual Property');
      const fuJob = salaryData?.data?.find(job => job.title === 'Data Center Infrastructure');
      const uiJob = salaryData?.data?.find(job => job.title === 'Semiconductor Manufacturing');

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
                  minSalary: '0',
                  maxSalary: '0',
                  medianSalary: 'No data available'
              });
          }
        }


        return [
          {
            name: 'Aerospace/Defense',
            salaryRange: `${currency}${salaryResults[0].minSalary} - ${currency}${salaryResults[0].maxSalary}`,
            description: `Design and develop military systems, aircraft, spacecraft, and related technologies while ensuring compliance with safety regulations and performance standards.`
        },
        {
          name:'Oil & Gas/Energy',
            salaryRange: `${currency}${salaryResults[1].minSalary} - ${currency}${salaryResults[1].maxSalary}`,
            description: `Design, maintain, and optimize energy production equipment, focusing on efficiency, safety, and environmental compliance in the energy sector.`
        },
        {
          name: 'Robotics & Automation',
            salaryRange: `${currency}${salaryResults[2].minSalary} - ${currency}${salaryResults[2].maxSalary}`,
            description: `Develop and implement automated systems and industrial robots, integrating mechanical design with control systems and artificial intelligence.`
        },
        {
          name: 'Medical Devices',
            salaryRange: `${currency}${salaryResults[3].minSalary} - ${currency}${salaryResults[3].maxSalary}`,
            description: `Design and develop medical equipment, prosthetics, and diagnostic devices while ensuring compliance with healthcare regulations and patient safety standards.`
        },
        {
          name: 'Research & Development',
            salaryRange: `${currency}${salaryResults[4].minSalary} - ${currency}${salaryResults[4].maxSalary}`,
            description: `Lead innovation in mechanical engineering, developing new technologies, products, and solutions across various industries.`
        },
        {
          name: 'Automotive Advanced Systems',
            salaryRange: `${currency}${salaryResults[5].minSalary} - ${currency}${salaryResults[5].maxSalary}`,
            description: `Design and develop electric vehicles, autonomous systems, and advanced automotive technologies, focusing on innovation and sustainability.`
        },
        {
          name: 'Nuclear Engineering',
            salaryRange: `${currency}${salaryResults[6].minSalary} - ${currency}${salaryResults[6].maxSalary}`,
            description: `Design, maintain, and optimize nuclear power plant systems while ensuring safety, compliance, and efficient power generation.`
        },
        {
          name: 'Patents & Intellectual Property',
            salaryRange: `${currency}${salaryResults[7].minSalary} - ${currency}${salaryResults[7].maxSalary}`,
            description: `Analyze and consult on technical patents, providing expertise in mechanical engineering innovations and intellectual property rights.`
        },
        {
          name: 'Data Center Infrastructure',
            salaryRange: `${currency}${salaryResults[8].minSalary} - ${currency}${salaryResults[8].maxSalary}`,
            description: `Design and optimize cooling systems, power distribution, and mechanical infrastructure for large-scale data centers.`
        },
        {
          name: 'Semiconductor Manufacturing',
            salaryRange: `${currency}${salaryResults[9].minSalary} - ${currency}${salaryResults[9].maxSalary}`,
            description: `Develop and optimize manufacturing processes and equipment for semiconductor production, ensuring quality and efficiency.`
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


export const jobGrowthFields = [
    "AEROSPACE ENGINEERING",
    "AUTOMOTIVE ENGINEERING",
    "ROBOTICS ENGINEERING",
    "RENEWABLE ENERGY",
    "ADVANCED MANUFACTURING"
];

export const experienceSalary = [
    { experience: "0-1 YEARS EXPERIENCE", salaryRange: "$65,000 - $80,000" },
    { experience: "1-3 YEARS EXPERIENCE", salaryRange: "$70,000 - $90,000" },
    { experience: "4-6 YEARS EXPERIENCE", salaryRange: "$85,000 - $110,000" },
    { experience: "7-9 YEARS EXPERIENCE", salaryRange: "$95,000 - $125,000" }
];


export const prerequisites = [
  {
    skill: "Strong foundation in physics, mathematics, and mechanics",
    description: "Essential for understanding the principles behind mechanical systems and solving complex engineering problems."
  },
  {
    skill: "Understanding of thermodynamics and fluid dynamics",
    description: "Critical for designing systems that involve energy transfer, heat, and fluid flow, such as engines and HVAC systems."
  },
  {
    skill: "Proficiency in computer-aided design (CAD) tools",
    description: "CAD software is indispensable for designing and modeling mechanical systems and components in engineering."
  },
  {
    skill: "Problem-solving and analytical skills",
    description: "Ability to think critically, analyze systems, and develop innovative solutions to engineering challenges."
  },
  {
    skill: "Teamwork and communication skills",
    description: "Effective communication and collaboration with multidisciplinary teams are crucial in engineering projects."
  }
];

export const coreAreasOfStudy = [
  {
    area: "Statics and Dynamics",
    description: "Study of forces and their effects on motion and equilibrium in physical systems, essential for designing stable structures."
  },
  {
    area: "Thermodynamics",
    description: "Study of heat and energy transfer, foundational for systems such as engines, refrigeration, and power generation."
  },
  {
    area: "Fluid Mechanics",
    description: "Focus on the behavior of fluids (liquids and gases), important for applications such as pump design, air conditioning, and propulsion."
  },
  {
    area: "Materials Science",
    description: "Study of the properties and behavior of materials, critical for selecting the right materials in engineering designs."
  },
  {
    area: "Heat Transfer",
    description: "Understanding of how heat moves through materials and systems, crucial for efficient energy systems and product design."
  },
  {
    area: "Control Systems",
    description: "Design and analysis of systems that control physical processes, key to robotics, automation, and aerospace systems."
  },
  {
    area: "Mechanical Design",
    description: "Focus on the process of designing mechanical systems and products, integrating principles from all core areas."
  },
  {
    area: "Manufacturing Processes",
    description: "Study of techniques used to produce mechanical components and systems, such as machining, casting, and additive manufacturing."
  }
];
export const topspecializations = [
  {
    specialization: "Aerospace Engineering",
    description: "Focus on the design and development of aircraft, spacecraft, and related systems, combining principles from thermodynamics, fluid dynamics, and control systems."
  },
  {
    specialization: "Automotive Engineering",
    description: "Design and development of vehicles, including propulsion systems, structural components, and safety features."
  },
  {
    specialization: "Robotics",
    description: "Study of robotic systems, integrating mechanical design, control systems, and automation technologies."
  },
  {
    specialization: "Energy Systems",
    description: "Focus on the design and management of energy systems, including renewable energy and power generation."
  },
  {
    specialization: "Mechatronics",
    description: "A multidisciplinary field combining mechanical engineering, electronics, and computing to create smart systems and products."
  },
  {
    specialization: "Manufacturing Processes",
    description: "Focus on the techniques and technologies used in the production of mechanical parts, including automation, robotics, and additive manufacturing."
  },
  {
    specialization: "Nanotechnology",
    description: "Study and application of mechanical engineering at the nanoscale, with applications in materials science, medicine, and electronics."
  },
  {
    specialization: "Biomechanics",
    description: "Application of mechanical engineering principles to biological systems, including prosthetics, medical devices, and human performance."
  }
];

export const trend = [
  {
    trend: "Sustainable Energy Systems",
    description: "Growing emphasis on renewable energy technologies and sustainable practices in energy production, including wind, solar, and biofuels."
  },
  {
    trend: "Autonomous Vehicles",
    description: "Development of self-driving cars, integrating robotics, control systems, and AI to create safer and more efficient transportation."
  },
  {
    trend: "Additive Manufacturing (3D Printing)",
    description: "Revolutionizing manufacturing processes with 3D printing, allowing for customized, efficient, and cost-effective production of complex parts."
  },
  {
    trend: "Robotics and Automation",
    description: "Increasing use of robots and automated systems in industries such as manufacturing, healthcare, and service industries to improve efficiency."
  },
  {
    trend: "Artificial Intelligence in Engineering",
    description: "Integration of AI in engineering processes, including design optimization, predictive maintenance, and process automation."
  },
  {
    trend: "Advanced Materials Development",
    description: "Research and development of new materials with unique properties for applications in aerospace, automotive, and biomedical engineering."
  }
];
export const skills = [
  {
    skill: "Strong understanding of mechanics and physics",
    description: "Fundamental knowledge in mechanics, including force analysis and motion principles, is essential for designing functional systems."
  },
  {
    skill: "Computer-aided design (CAD) and simulation software",
    description: "Proficiency in CAD tools like AutoCAD and simulation software is crucial for modeling and testing mechanical components before production."
  },
  {
    skill: "Ability to analyze and interpret data",
    description: "Essential for making data-driven decisions during the design, testing, and optimization of mechanical systems."
  },
  {
    skill: "Project management and teamwork",
    description: "Ability to manage projects, work within multidisciplinary teams, and coordinate tasks is critical for successful engineering outcomes."
  },
  {
    skill: "Effective communication and presentation skills",
    description: "Clear communication is vital for explaining design concepts, technical reports, and collaborating with stakeholders."
  },
  {
    skill: "Knowledge of manufacturing processes",
    description: "Understanding of various manufacturing techniques like machining, casting, and welding helps in choosing appropriate methods for production."
  },
  {
    skill: "Problem-solving in complex engineering systems",
    description: "Strong problem-solving abilities to address issues that arise during the design, testing, and operation of mechanical systems."
  }
];


export const challengesArray = [
    "UNDERGRADUATE CHALLENGES",
    {
        heading: "Challenging technical coursework.",
        description: `Courses like dynamics, thermodynamics, and fluid mechanics can be difficult without a solid grasp of mathematics and physics.`
    },
    {
        heading: "Practical design and project-based work.",
        description: `Balancing theoretical concepts with hands-on design projects can be demanding, requiring strong time management skills.`
    },
    {
        heading: "Evolving technology.",
        description: `Keeping up with the rapid advancement in technologies like robotics, automation, and materials science can be challenging but necessary for success.`
    },
    {
        heading: "High competition for internships and jobs.",
        description: `Getting placement in top fields such as aerospace or automotive engineering requires strong technical skills and relevant project experience.`
    }
];

export const issuesArray = [
    "CURRENT JOB ISSUES IN THE FIELD",
    {
        heading: "Automation affecting manufacturing roles.",
        description: `The rise of automation in manufacturing is reducing traditional mechanical roles, pushing engineers to adapt to newer, tech-focused jobs.`
    },
    {
        heading: "Increased focus on sustainability.",
        description: `New environmental regulations are pushing industries to focus on sustainability, requiring engineers to design systems that minimize waste and energy consumption.`
    },
    {
        heading: "Demand for AI and robotics expertise.",
        description: `Engineers with expertise in AI and robotics are in high demand, particularly in sectors like automotive and manufacturing where smart systems are rapidly being adopted.`
    },
    {
        heading: "Global competition in manufacturing.",
        description: `The global nature of the manufacturing industry is increasing competition, pushing engineers to innovate and improve efficiency in production processes.`
    },
    {
        heading: "Job stability concerns in traditional sectors.",
        description: `With the transition to renewable energy and automation, traditional sectors like oil and gas or automotive manufacturing are experiencing job uncertainty.`
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
  
  