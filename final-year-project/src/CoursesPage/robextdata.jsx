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
  undergradsal: `77,763`,
  jobavail : "15,700",
  emprate: "47%",
  },]
  
  //MALAYSIA
  export const homepageInfo2 = [ {
    undergradsal: `41,000`,
    jobavail : "3,700",
    emprate: "79%",
    },]
    import salaryData2 from './data/data/salary-dataROBmy.json';
    import salaryData from './data/data/salary-dataROBusa.json';
    
    export const countries = 
    [{"flag":"🇺🇸","file":salaryData,"currency":"$",id:1},
    {"flag":"🇲🇾","file":salaryData2,"currency":"MYR",id:2}];


    export const getTopCourses = (salaryData) => {
    
      const jobData = salaryData.data.find(job => job.title === 'Robotic System Design');

      const currency = jobData ? jobData.currency : null;
      console.log(currency );
      


      const rsJob = salaryData?.data?.find(job => job.title === 'Robotic System Design');
      const aiJob = salaryData?.data?.find(job => job.title === 'AI for Robotics');
      const asJob = salaryData?.data?.find(job => job.title === 'Autonomous Systems');
      const rsActJob = salaryData?.data?.find(job => job.title === 'Robotic Sensors and Actuators');
      const cseJob = salaryData?.data?.find(job => job.title === 'Control Systems Engineering');
      const hriJob = salaryData?.data?.find(job => job.title === 'Human-Robot Interaction');
     
      const validJobs = [rsJob,aiJob, asJob, rsActJob, cseJob, hriJob];
        // Array to store the formatted salary data for each job
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
            name: "Robotic System Design",
            salaryRange: `${currency}${salaryResults[0].minSalary} - ${currency}${salaryResults[0].maxSalary}`,
            description: `Focuses on the engineering principles behind creating functional robots, integrating mechanical components, electronics, and control systems.`,
            link: `${salaryResults[0].link}`,
            id: 1
          },
          {
            name: "AI for Robotics",
            salaryRange: `${currency}${salaryResults[1].minSalary} - ${currency}${salaryResults[1].maxSalary}`,
            description: `Explores how artificial intelligence is applied to make robots autonomous, enabling decision-making and learning from their environment.`,
            link: `${salaryResults[1].link}`,
            id: 2
          },
          {
            name: "Autonomous Systems",
            salaryRange: `${currency}${salaryResults[2].minSalary} - ${currency}${salaryResults[2].maxSalary}`,
            description: `Focuses on developing robots and systems that can perform tasks without human intervention, using sensors, AI, and algorithms.`,
            link: `${salaryResults[2].link}`,
            id: 3
          },
          {
            name: "Robotic Sensors and Actuators",
            salaryRange: `${currency}${salaryResults[3].minSalary} - ${currency}${salaryResults[3].maxSalary}`,
            description: `Covers the technology behind sensors and actuators that give robots the ability to interact with and perceive their environment.`,
            link: `${salaryResults[3].link}`,
            id: 4
          },
          {
            name: "Control Systems Engineering",
            salaryRange: `${currency}${salaryResults[4].minSalary} - ${currency}${salaryResults[4].maxSalary}`,
            description: `Involves designing systems that control the behavior of dynamic robots, ensuring precise movements and accurate task execution.`,
            link: `${salaryResults[4].link}`,
            id: 5
          },
          {
            name: "Human-Robot Interaction",
            salaryRange: `${currency}${salaryResults[5].minSalary} - ${currency}${salaryResults[5].maxSalary}`,
            description: `Explores how robots interact with humans in environments such as healthcare, manufacturing, and service industries.`,
            link: `${salaryResults[5].link}`,
            id: 6
          }
        ];
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
  {
    skill: "Strong foundation in mechanical and electrical engineering",
    description: "A comprehensive understanding of mechanical and electrical principles, including circuits, power systems, thermodynamics, and material properties, essential for designing and integrating complex systems."
  },
  {
    skill: "Proficiency in programming languages like C++, Python, and MATLAB",
    description: "Advanced programming skills to develop algorithms, simulations, and control systems, with a focus on languages widely used in engineering and AI applications."
  },
  {
    skill: "Understanding of control systems and sensor technology",
    description: "Knowledge of feedback control, signal processing, and the integration of various sensor technologies to enable precise monitoring and actuation in systems."
  },
  {
    skill: "Experience with Artificial Intelligence and machine learning",
    description: "Hands-on experience with machine learning models and AI algorithms to implement predictive analytics, autonomous decision-making, and optimization tasks."
  },
  {
    skill: "Knowledge of computer vision and real-time processing",
    description: "Familiarity with image processing, object detection, and video analysis technologies, along with real-time processing techniques for applications requiring rapid decision-making."
  }
];

export const coreAreasOfStudy = [
  {
    area: "Mechanical Design",
    description: "Focuses on the principles and methodologies of designing robotic systems, including structure, materials, and kinematics to ensure optimal performance and durability."
  },
  {
    area: "Control Systems",
    description: "Covers the design and analysis of feedback systems that govern the behavior and movement of robots, ensuring stability and precision in their operations."
  },
  {
    area: "Artificial Intelligence for Robotics",
    description: "Explores the integration of AI techniques such as machine learning, planning, and reasoning to enable robots to perform complex tasks autonomously."
  },
  {
    area: "Computer Vision",
    description: "Involves teaching robots to interpret and understand visual data from cameras, enabling tasks like object detection, navigation, and real-time environment analysis."
  },
  {
    area: "Robotic Sensors and Actuators",
    description: "Examines the use of sensors to gather environmental data and actuators to execute movements, ensuring robots can interact effectively with their surroundings."
  },
  {
    area: "Human-Robot Interaction",
    description: "Focuses on creating intuitive and safe interfaces for collaboration between humans and robots, including natural language processing and gesture recognition."
  },
  {
    area: "Autonomous Systems",
    description: "Explores the development of self-sufficient robots capable of operating independently in dynamic environments through decision-making and adaptive behaviors."
  }
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
  {
    specialization: "Autonomous Robotics",
    description: "Focuses on developing robots that can operate independently in dynamic environments, such as self-driving cars and drones."
  },
  {
    specialization: "Artificial Intelligence for Robotics",
    description: "Integrates AI techniques to enhance robot decision-making, learning capabilities, and adaptability in complex tasks."
  },
  {
    specialization: "Control Systems Engineering",
    description: "Covers the design and optimization of systems that control robot movements and behaviors, ensuring precision and stability."
  },
  {
    specialization: "Robotic Perception",
    description: "Focuses on enabling robots to sense and interpret their environment using technologies like computer vision and sensor fusion."
  },
  {
    specialization: "Medical Robotics",
    description: "Explores the design and application of robots in healthcare, including surgical robots and rehabilitation devices."
  },
  {
    specialization: "Human-Robot Interaction",
    description: "Examines the ways robots and humans can collaborate effectively, emphasizing usability, safety, and communication."
  }
];

export const trend = [
  {
    trend: "Advancements in AI-powered robots",
    description: "Rapid progress in AI is enabling robots to learn, adapt, and perform increasingly complex tasks in diverse industries."
  },
  {
    trend: "Growth in autonomous vehicles",
    description: "The development of self-driving cars, trucks, and drones is transforming transportation and logistics."
  },
  {
    trend: "Use of robots in healthcare and surgery",
    description: "Robots are being adopted for precision surgeries, patient monitoring, and automating healthcare processes."
  },
  {
    trend: "Collaborative robots in manufacturing",
    description: "Cobots are designed to work alongside humans, improving efficiency and safety in industrial settings."
  },
  {
    trend: "Innovations in space exploration robotics",
    description: "Robots are playing a critical role in exploring distant planets and performing tasks in extreme environments."
  }
];
export const skills = [
  {
    skill: "Strong mechanical and electrical engineering skills",
    description: "A deep understanding of mechanical design and electrical systems is essential for building and maintaining robots."
  },
  {
    skill: "Proficiency in programming (C++, Python, MATLAB)",
    description: "Expertise in these programming languages is critical for developing algorithms, simulations, and robotic control systems."
  },
  {
    skill: "Understanding of control theory and systems",
    description: "Knowledge of control theory ensures robots can achieve stability and precise operation in dynamic conditions."
  },
  {
    skill: "Experience with AI and machine learning frameworks",
    description: "Familiarity with frameworks like TensorFlow and PyTorch is vital for integrating AI capabilities into robots."
  },
  {
    skill: "Knowledge of real-time systems and embedded software",
    description: "Experience in designing software for real-time operations is crucial for ensuring seamless robot functionality."
  },
  {
    skill: "Familiarity with robotic sensors and actuators",
    description: "Understanding the integration and functionality of sensors and actuators is key for effective robot interaction with the environment."
  },
  {
    skill: "Problem-solving and critical thinking skills",
    description: "The ability to analyze complex challenges and devise innovative solutions is essential in robotics."
  }
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
  
  