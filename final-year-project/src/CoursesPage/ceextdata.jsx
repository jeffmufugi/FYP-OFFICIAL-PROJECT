export const homepageInfo = [
    {
        courseName: "computer engineering.",
        courseDefinition: "Computer Engineering is a discipline that integrates electrical engineering and computer science to develop hardware and software solutions, with a focus on building and improving computing systems.",
        undergradsal: "$77,525",
        jobavail: "400,000",
        emprate: "95%",
    },
    
    {
        description: `Computer Engineering covers the design, development, and testing of computer systems and networks, combining principles of hardware and software engineering for applications in areas like artificial intelligence, embedded systems, and telecommunications.`,
        backgroundColor1:"#D6EFFF",
        backgroundColor2:"#E5F5FF",
        backgroundColor3:"#EDFAFF",
        fontColor: "#104560",
        popupcolor1: "#104560",
        popupcolor2: "#E5F5FF",
    }
];

export const homepageInfo1 = [ {
  undergradsal: `77,525`,
  jobavail : "151,700",
  emprate: "97%",
  },]
  
  //MALAYSIA
  export const homepageInfo2 = [ {
    undergradsal: `67,000`,
    jobavail : "39,700",
    emprate: "79%",
    },]

    import salaryData from '/../server/data/salary-dataCE.json';
    import salaryData2 from '/../server/data/salary-dataCEMY.json';
    
    export const countries = 
    [{"flag":"🇺🇸","file":salaryData,"currency":"$",id:1},
    {"flag":"🇲🇾","file":salaryData2,"currency":"MYR",id:2}];


    export const getTopCourses = (salaryData) => {
    
      const jobData = salaryData.data.find(job => job.title === 'Chemical Engineer');

      const currency = jobData ? jobData.currency : null;
      console.log(currency );
      


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
            name: "EMBEDDED SYSTEMS",
            salaryRange: `${currency}90,000 - ${currency}125,000`,
            description: `Study the integration of software with hardware components in embedded systems used in industries like automotive, healthcare, and telecommunications.`
        },
        {
            name: "COMPUTER ARCHITECTURE",
            salaryRange: `${currency}85,000 - ${currency}120,000`,
            description: `Explore the design and organization of computer hardware and how different parts work together to optimize performance.`
        },
        {
            name: "NETWORKING",
            salaryRange: `${currency}80,000 - ${currency}110,000`,
            description: `Learn about the fundamentals of computer networks, data communication, and protocols that enable connectivity between devices.`
        },
        {
            name: "VLSI DESIGN",
            salaryRange: `${currency}100,000 - ${currency}140,000`,
            description: `Analyze very large-scale integration (VLSI) systems for developing microchips and processors used in modern electronics.`
        },
        {
            name: "CYBERSECURITY",
            salaryRange: `${currency}95,000 - ${currency}130,000`,
            description: `Examine the strategies and techniques used to protect computer systems and networks from cyber threats and attacks.`
        },
        {
            name: "ARTIFICIAL INTELLIGENCE",
            salaryRange: `${currency}100,000 - ${currency}150,000`,
            description: `Delve into machine learning algorithms, neural networks, and AI systems that enable computers to perform tasks intelligently.`
        },
        {
            name: "CONTROL SYSTEMS",
            salaryRange: `${currency}85,000 - ${currency}120,000`,
            description: `Focus on the design and implementation of control mechanisms in engineering systems to regulate and optimize their behavior.`
        },
        {
            name: "ROBOTICS",
            salaryRange: `${currency}90,000 - ${currency}135,000`,
            description: `Study robotics systems that integrate mechanical design with sensors and software to create intelligent, automated machines.`
        }
      ]
};

export const experienceSalary1 = [
  { id: 1, experience: "0-1 YEARS EXPERIENCE", salaryRange: "MYR29,000 - MYR50,000" },
  { id: 2, experience: "1-3 YEARS EXPERIENCE", salaryRange: "MYR50,000 - MYR59,000" },
  { id: 3, experience: "4-6 YEARS EXPERIENCE", salaryRange: "MYR60,000 - MYR90,000" },
  { id: 4, experience: "7-9 YEARS EXPERIENCE", salaryRange: "MYR90,000 - MYR200,000" }
];

export const experienceSalary2 = [
  { id: 1, experience: "0-1 YEARS EXPERIENCE", salaryRange: "$92,000 - $170,000" },
  { id: 2, experience: "1-3 YEARS EXPERIENCE", salaryRange: "$112,000 - $185,000" },
  { id: 3, experience: "4-6 YEARS EXPERIENCE", salaryRange: "$122,000 - $221,000" },
  { id: 4, experience: "7-9 YEARS EXPERIENCE", salaryRange: "$140,000 - $250,000" }
];



export const jobGrowthFields = [
    "Artificial Intelligence",
    "IoT and Embedded Systems",
    "Cybersecurity",
    "Cloud Computing",
    "Robotics and Automation"
];

export const experienceSalary = [
    { experience: "0-1 YEARS EXPERIENCE", salaryRange: "$65,000 - $80,000" },
    { experience: "1-3 YEARS EXPERIENCE", salaryRange: "$80,000 - $100,000" },
    { experience: "4-6 YEARS EXPERIENCE", salaryRange: "$95,000 - $120,000" },
    { experience: "7-9 YEARS EXPERIENCE", salaryRange: "$110,000 - $140,000" }
];

export const prerequisites = [
  {
    skill: "Strong foundation in mathematics and physics",
    description: "Provides the necessary analytical and logical base for understanding hardware and software systems."
  },
  {
    skill: "Proficiency in programming languages (C, C++, Python)",
    description: "Essential for designing, testing, and implementing computer systems and applications."
  },
  {
    skill: "Knowledge of computer hardware and software systems",
    description: "Understanding the fundamentals of computing devices and how they interact is crucial for development."
  },
  {
    skill: "Problem-solving and analytical thinking",
    description: "Critical for tackling complex engineering challenges in innovative ways."
  },
  {
    skill: "Team collaboration and communication skills",
    description: "Enables effective teamwork and the ability to convey technical concepts clearly."
  }
];
export const coreAreasOfStudy = [
  {
    area: "Digital Logic Design",
    description: "Focuses on designing and analyzing digital circuits and systems."
  },
  {
    area: "Microprocessors and Microcontrollers",
    description: "Covers the architecture, programming, and applications of these processing units."
  },
  {
    area: "Computer Networks",
    description: "Explores the principles of networking, data communication, and internet technologies."
  },
  {
    area: "Operating Systems",
    description: "Provides knowledge about managing computer hardware and software resources effectively."
  },
  {
    area: "Software Engineering",
    description: "Focuses on designing, developing, and maintaining software systems."
  },
  {
    area: "Embedded Systems",
    description: "Involves integrating hardware and software for dedicated functionality in devices."
  },
  {
    area: "VLSI Design",
    description: "Covers the design and development of integrated circuits and microchips."
  },
  {
    area: "Cybersecurity",
    description: "Focuses on protecting systems and networks from digital attacks and vulnerabilities."
  }
];
export const topspecializations = [
  {
    specialization: "Embedded Systems",
    description: "Designing integrated hardware-software systems for specialized applications."
  },
  {
    specialization: "VLSI Design",
    description: "Creating complex microchips and integrated circuits for various computing devices."
  },
  {
    specialization: "Cybersecurity",
    description: "Ensuring the security of systems and networks against cyber threats."
  },
  {
    specialization: "Computer Architecture",
    description: "Designing and optimizing the structural components of computing systems."
  },
  {
    specialization: "Robotics",
    description: "Developing intelligent machines that interact with the physical world."
  },
  {
    specialization: "Artificial Intelligence",
    description: "Creating smart systems capable of learning, reasoning, and decision-making."
  }
];
export const trend = [
  {
    trend: "AI-Powered Systems",
    description: "Integrating artificial intelligence into hardware and software for advanced functionality."
  },
  {
    trend: "Quantum Computing",
    description: "Revolutionizing computing with quantum principles for immense processing power."
  },
  {
    trend: "Edge Computing",
    description: "Bringing data processing closer to devices for faster and more efficient operations."
  },
  {
    trend: "5G Networks",
    description: "Transforming communication and connectivity with ultra-fast network speeds."
  },
  {
    trend: "Autonomous Systems",
    description: "Advancing self-sufficient technologies like drones and autonomous vehicles."
  }
];
export const skills = [
  {
    skill: "Proficiency in hardware-software integration",
    description: "Ensures seamless operation between physical devices and software systems."
  },
  {
    skill: "Strong coding skills (C++, Python, Verilog)",
    description: "Vital for programming, simulation, and system development."
  },
  {
    skill: "Knowledge of networking protocols",
    description: "Essential for designing and troubleshooting computer networks."
  },
  {
    skill: "Experience with simulation tools (MATLAB, Simulink)",
    description: "Helps in modeling and analyzing systems for performance and accuracy."
  },
  {
    skill: "Project management and leadership",
    description: "Crucial for leading teams and delivering successful engineering projects."
  },
  {
    skill: "Critical thinking and problem-solving",
    description: "Key for addressing challenges and developing innovative solutions."
  }
];
export const challengesArray = [
    "UNDERGRADUATE CHALLENGES",
    {
        heading: "Balancing hardware and software knowledge.",
        description: `Computer Engineering students must develop expertise in both hardware and software, which can be a challenging task requiring cross-disciplinary knowledge.`
    },
    {
        heading: "Keeping pace with rapid technology shifts.",
        description: `The rapid evolution of computer technologies means students need to stay updated with the latest advancements in the field.`
    },
    {
        heading: "Designing efficient systems.",
        description: `Balancing performance, cost, and power efficiency is crucial in designing modern computing systems, which requires both creativity and technical skills.`
    },
    {
        heading: "Interdisciplinary collaboration.",
        description: `Computer engineers often collaborate with professionals from other fields, such as mechanical engineers or data scientists, requiring strong teamwork and communication skills.`
    }
];

export const issuesArray = [
    "CURRENT JOB ISSUES IN THE FIELD",
    {
        heading: "Talent shortage in cybersecurity.",
        description: `The demand for computer engineers with cybersecurity expertise is outpacing the available workforce, creating a significant skills gap.`
    },
    {
        heading: "Evolving technologies.",
        description: `As technologies such as AI and quantum computing rapidly evolve, computer engineers must constantly upskill to stay relevant.`
    },
    {
        heading: "Global competition.",
        description: `Computer engineering is a highly competitive field, with companies across the globe vying for top talent and market leadership.`
    },
    {
        heading: "Ethical concerns.",
        description: `The rise of AI and data-driven technologies has brought new ethical challenges related to privacy, bias, and accountability in computer engineering.`
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
  
  