export const homepageInfo = [
    {
        courseName: "computer engineering.",
        courseDefinition: "Computer Engineering is a discipline that integrates electrical engineering and computer science to develop hardware and software solutions, with a focus on building and improving computing systems.",
        undergradsal: "$80,000",
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
  undergradsal: `84,882`,
  jobavail : "151,700",
  emprate: "97%",
  },]
  
  //MALAYSIA
  export const homepageInfo2 = [ {
    undergradsal: `67,000`,
    jobavail : "39,700",
    emprate: "79%",
    },]

    import salaryData from '/Users/mvsterjeffrey/Desktop/FYP-OFFICIAL-PROJECT/server/data/salary-data.json'; // Adjust path accordingly
    import salaryData2 from '/Users/mvsterjeffrey/Desktop/FYP-OFFICIAL-PROJECT/server/data/salary-dataMY.json'; // Adjust path accordingly
    
    export const countries = 
    [{"flag":"🇺🇸","file":salaryData,"currency":"$",id:1},
    {"flag":"🇲🇾","file":salaryData2,"currency":"MYR",id:2}];


    export const getTopCourses = (salaryData) => {
    
      const jobData = salaryData.data.find(job => job.title === 'Computer Science');

      const currency = jobData ? jobData.currency : null;
      console.log(currency );
      


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





export const prerequisites = [
    "Strong foundation in mathematics and physics",
    "Proficiency in programming languages (C, C++, Python)",
    "Knowledge of computer hardware and software systems",
    "Problem-solving and analytical thinking",
    "Team collaboration and communication skills"
];

export const coreAreasOfStudy = [
    "Digital Logic Design",
    "Microprocessors and Microcontrollers",
    "Computer Networks",
    "Operating Systems",
    "Software Engineering",
    "Embedded Systems",
    "VLSI Design",
    "Cybersecurity"
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


export const topspecializations = [
    "Embedded Systems",
    "VLSI Design",
    "Cybersecurity",
    "Computer Architecture",
    "Robotics",
    "Artificial Intelligence"
];

export const trend = [
    "AI-Powered Systems",
    "Quantum Computing",
    "Edge Computing",
    "5G Networks",
    "Autonomous Systems"
];

export const skills = [
    "Proficiency in hardware-software integration",
    "Strong coding skills (C++, Python, Verilog)",
    "Knowledge of networking protocols",
    "Experience with simulation tools (MATLAB, Simulink)",
    "Project management and leadership",
    "Critical thinking and problem-solving"
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
  
  