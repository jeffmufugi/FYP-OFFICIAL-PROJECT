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

export const prerequisites = [
    "Strong foundation in physics, mathematics, and mechanics",
    "Understanding of thermodynamics and fluid dynamics",
    "Proficiency in computer-aided design (CAD) tools",
    "Problem-solving and analytical skills",
    "Teamwork and communication skills"
];

export const coreAreasOfStudy = [
    "Statics and Dynamics",
    "Thermodynamics",
    "Fluid Mechanics",
    "Materials Science",
    "Heat Transfer",
    "Control Systems",
    "Mechanical Design",
    "Manufacturing Processes"
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



export const topspecializations = [
    "Aerospace Engineering",
    "Automotive Engineering",
    "Robotics",
    "Energy Systems",
    "Mechatronics",
    "Manufacturing Processes",
    "Nanotechnology",
    "Biomechanics"
];

export const trend = [
    "Sustainable Energy Systems",
    "Autonomous Vehicles",
    "Additive Manufacturing (3D Printing)",
    "Robotics and Automation",
    "Artificial Intelligence in Engineering",
    "Advanced Materials Development"
];

export const skills = [
    "Strong understanding of mechanics and physics",
    "Computer-aided design (CAD) and simulation software",
    "Ability to analyze and interpret data",
    "Project management and teamwork",
    "Effective communication and presentation skills",
    "Knowledge of manufacturing processes",
    "Problem-solving in complex engineering systems"
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
  
  