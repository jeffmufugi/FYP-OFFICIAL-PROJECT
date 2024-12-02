export const homepageInfo = [
    {
        courseName: "robotics.",
        courseDefinition: "Robotics is an interdisciplinary field focused on the design, construction, operation, and use of robots, combining mechanical engineering, electrical engineering, and computer science.",
        undergradsal: "$80,000",
        jobavail: "50,000",
        emprate: "92%",
    },
    
    {
        description: `Robotics involves developing systems that can perform a wide range of tasks, from manufacturing to healthcare, driven by advances in AI, sensor technology, and machine learning.`,
        backgroundColor1:"#E3ECFD",
        backgroundColor2:"#DBE5F9",
        backgroundColor3:"#D1E0F7",
        fontColor: "#364F64",
        popupcolor1 : "#063866",
        popupcolor2 : "#E3ECFD",
    }
];

export const homepageInfo1 = [ {
  undergradsal: `70,000`,
  jobavail : "15,700",
  emprate: "47%",
  },]
  
  //MALAYSIA
  export const homepageInfo2 = [ {
    undergradsal: `41,000`,
    jobavail : "3,700",
    emprate: "79%",
    },]

    import salaryData from '/../server/data/salary-data.json';
    import salaryData2 from '/../server/data/salary-dataMY.json';
    
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
            name: "ROBOTIC SYSTEM DESIGN",
            salaryRange: `${currency}90,000 - ${currency}120,000`,
            description: `Focuses on the engineering principles behind creating functional robots, integrating mechanical components, electronics, and control systems.`
        },
        {
            name: "AI FOR ROBOTICS",
            salaryRange: `${currency}95,000 - ${currency}130,000`,
            description: `Explores how artificial intelligence is applied to make robots autonomous, enabling decision-making and learning from their environment.`
        },
        {
            name: "AUTONOMOUS SYSTEMS",
            salaryRange: `${currency}100,000 - ${currency}140,000`,
            description: `Focuses on developing robots and systems that can perform tasks without human intervention, using sensors, AI, and algorithms.`
        },
        {
            name: "ROBOTIC SENSORS AND ACTUATORS",
            salaryRange: `${currency}85,000 - ${currency}115,000`,
            description: `Covers the technology behind sensors and actuators that give robots the ability to interact with and perceive their environment.`
        },
        {
            name: "CONTROL SYSTEMS ENGINEERING",
            salaryRange: `${currency}85,000 - ${currency}110,000`,
            description: `Involves designing systems that control the behavior of dynamic robots, ensuring precise movements and accurate task execution.`
        },
        {
            name: "HUMAN-ROBOT INTERACTION",
            salaryRange: `${currency}90,000 - ${currency}125,000`,
            description: `Explores how robots interact with humans in environments such as healthcare, manufacturing, and service industries.`
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
    "Strong foundation in mechanical and electrical engineering",
    "Proficiency in programming languages like C++, Python, and MATLAB",
    "Understanding of control systems and sensor technology",
    "Experience with AI and machine learning",
    "Knowledge of computer vision and real-time processing"
];

export const coreAreasOfStudy = [
    "Mechanical Design",
    "Control Systems",
    "Artificial Intelligence for Robotics",
    "Computer Vision",
    "Robotic Sensors and Actuators",
    "Human-Robot Interaction",
    "Autonomous Systems"
];

export const jobGrowthFields = [
    "Autonomous Vehicles",
    "Healthcare Robotics",
    "Industrial Automation",
    "Service Robotics",
    "Space Exploration"
];

export const experienceSalary = [
    { experience: "0-1 YEARS EXPERIENCE", salaryRange: "$70,000 - $85,000" },
    { experience: "1-3 YEARS EXPERIENCE", salaryRange: "$85,000 - $100,000" },
    { experience: "4-6 YEARS EXPERIENCE", salaryRange: "$100,000 - $120,000" },
    { experience: "7-9 YEARS EXPERIENCE", salaryRange: "$120,000 - $140,000" }
];


export const topspecializations = [
    "Autonomous Robotics",
    "Artificial Intelligence for Robotics",
    "Control Systems Engineering",
    "Robotic Perception",
    "Medical Robotics",
    "Human-Robot Interaction"
];

export const trend = [
    "Advancements in AI-powered robots",
    "Growth in autonomous vehicles",
    "Use of robots in healthcare and surgery",
    "Collaborative robots in manufacturing",
    "Innovations in space exploration robotics"
];

export const skills = [
    "Strong mechanical and electrical engineering skills",
    "Proficiency in programming (C++, Python, MATLAB)",
    "Understanding of control theory and systems",
    "Experience with AI and machine learning frameworks",
    "Knowledge of real-time systems and embedded software",
    "Familiarity with robotic sensors and actuators",
    "Problem-solving and critical thinking skills"
];

export const challengesArray = [
    "UNDERGRADUATE CHALLENGES",
    {
        heading: "Complex integration of systems.",
        description: `Integrating hardware and software components seamlessly is a key challenge in robotics projects.`
    },
    {
        heading: "Real-time processing.",
        description: `Ensuring robots can make decisions and react in real-time requires efficient computing and control algorithms.`
    },
    {
        heading: "Safety and reliability.",
        description: `Developing robots that can operate safely around humans and in unpredictable environments is crucial.`
    },
    {
        heading: "Cost of development.",
        description: `Building and testing robotic systems can be expensive, especially when prototyping and testing new designs.`
    }
];

export const issuesArray = [
    "CURRENT JOB ISSUES IN THE FIELD",
    {
        heading: "Ethics of autonomous systems.",
        description: `The rise of autonomous robots raises ethical concerns around job displacement, decision-making in critical situations, and safety.`
    },
    {
        heading: "Security and hacking risks.",
        description: `As robots become more connected, the risk of cyber-attacks targeting their control systems and data increases.`
    },
    {
        heading: "Maintenance and durability.",
        description: `Ensuring that robots can function reliably over time, especially in harsh or unpredictable environments, is a challenge.`
    },
    {
        heading: "Regulatory standards.",
        description: `The field of robotics is evolving rapidly, but regulatory frameworks around their use, especially in autonomous roles, are still catching up.`
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
  
  