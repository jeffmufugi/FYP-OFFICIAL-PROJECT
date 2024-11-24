

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

          const aiJob = salaryData?.data?.find(job => job.title === 'AI');
          const cyJob = salaryData?.data?.find(job => job.title === 'Cyber Security');
          const clJob = salaryData?.data?.find(job => job.title === 'Cloud Architecture');
          const daJob = salaryData?.data?.find(job => job.title === 'Data Science');
          const swJob = salaryData?.data?.find(job => job.title === 'Software Development');
          const deJob = salaryData?.data?.find(job => job.title === 'Dev Ops Engineer');
          const moJob = salaryData?.data?.find(job => job.title === 'Mobile Development');
          const gaJob = salaryData?.data?.find(job => job.title === 'Game Development');
          const fuJob = salaryData?.data?.find(job => job.title === 'Web Development');
          const uiJob = salaryData?.data?.find(job => job.title === 'UI/UX');

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
                name: "ARTIFICIAL INTELLIGENCE",
                salaryRange: `${currency}${salaryResults[0].minSalary} - ${currency}${salaryResults[0].maxSalary}`,
                description: `An artificial intelligence engineer designs, builds, and deploys AI models to automate tasks, enhance decision-making, and solve real-world problems, 
                using machine learning, data processing, and programming skills.`,
                id: 1
              },
              {
                name: "CYBERSECURITY",
                salaryRange: `${currency}${salaryResults[1].minSalary} - ${currency}${salaryResults[1].maxSalary}`,
                description: `Cybersecurity safeguards computers and networks from unauthorized access and cyber threats, 
                protecting data privacy and preventing digital attacks on individuals and organizations.`
                ,id: 2
              },
              {
                name: "CLOUD ARCHITECTURE",
                salaryRange: `${currency}${salaryResults[2].minSalary} - ${currency}${salaryResults[2].maxSalary}`,
                description: `A cloud architect designs, implements, and manages cloud computing systems, ensuring scalability, security, and performance for organizations.`
                ,id: 3
              },
              {
                name: "DATA SCIENCE",
                salaryRange: `${currency}${salaryResults[3].minSalary} - ${currency}${salaryResults[3].maxSalary}`,
                description: `A data scientist analyzes and interprets complex data, develops models, and provides insights to drive decision-making and business solutions.`
                ,id: 4
              },
              {
                name: "SOFTWARE DEVELOPMENT",
                salaryRange: `${currency}${salaryResults[4].minSalary} - ${currency}${salaryResults[4].maxSalary}`,
                description: `A software developer designs, codes, tests, and maintains software applications, ensuring functionality, performance, and user experience meet requirements.`
                ,id: 5
              },
              {
                name: "DEVOPS",
                salaryRange: `${currency}${salaryResults[5].minSalary} - ${currency}${salaryResults[5].maxSalary}`,
                description: `DevOps automates and integrates development and IT operations, improving collaboration, efficiency, and the deployment of software systems.`
                ,id: 6
              },
              {
                name: "MOBILE DEVELOPMENT",
                salaryRange: `${currency}${salaryResults[6].minSalary} - ${currency}${salaryResults[6].maxSalary}`,
                description: `A mobile developer designs, develops, and maintains applications for mobile devices, ensuring functionality, usability, and performance across platforms.`
                ,id: 7
              },
              {
                name: "GAME DEVELOPMENT",
                salaryRange: `${currency}${salaryResults[7].minSalary} - ${currency}${salaryResults[7].maxSalary}`,
                description: `A game developer designs, codes, tests, and refines video games, focusing on gameplay mechanics, graphics, and user experience.`
                ,id: 8
              },
              {
                name: "FULL-STACK DEVELOPMENT",
                salaryRange: `${currency}${salaryResults[5].minSalary} - ${currency}${salaryResults[5].maxSalary}`,
                description: `A full-stack developer builds both front-end and back-end components of web applications, managing databases, servers, and user interfaces.`
                ,id: 9
              },
              {
                name: "UI/UX DESIGN",
                salaryRange: `${currency}${salaryResults[9].minSalary} - ${currency}${salaryResults[9].maxSalary}`,
                description: `A UI/UX developer designs and implements user interfaces and ensures a seamless, intuitive user experience across digital platforms.`
                ,id: 10
              }
            ];
};

//USA 
export const homepageInfo1 = [ {
undergradsal: `122,000`,
jobavail : "356,700",
emprate: "85%",
},]

//MALAYSIA
export const homepageInfo2 = [ {
  undergradsal: `60,000`,
  jobavail : "16,700",
  emprate: "57%",
  },]


export const homepageInfo = [
    {courseName : "computer science.",
    courseDefinition: "Computer science is the study of computers and algorithms, including their principles, hardware/software design, applications, and societal impact.",
    undergradsal: `122,000`,
    jobavail : "356,700",
    emprate: "67%",
    livestatscolor : "#1B046C",},
    
    {description: `Computer Science is the study of 
    computation, information processing, 
    and the design of computer systems. It encompasses both theoretical and 
    practical aspects of computation and information technology.`,
    backgroundColor1:"#DADAFF",
    backgroundColor2:"#E1E1FE",
    backgroundColor3:"#EEEEFF",
    fontColor: "#1B046C",
}
      ];
    
      export const prerequisites = [
        "Strong foundation in mathematics (algebra, calculus, discrete mathematics)",
        "Basic understanding of computer systems",
        "Logical thinking and analytical skills",
        "Good communication skills",
        "Self-motivation and ability to learn independently"
      ];
      
    //change THEME color from imports, FADE BG  

export const coreAreasOfStudy = [
  "Programming and Software Engineering",
  "Data Structures and Algorithms",
  "Computer Architecture and Organization",
  "Operating Systems",
  "Database Management Systems",
  "Computer Networks",
  "Artificial Intelligence and Machine Learning",
  "Cryptography",
  "Theory of Computation",
  "Computer Graphics and Visualization"
  ];

  export const jobGrowthFields = [
    "DATA SCIENCE",
    "CYBER SECURITY",
    "ARTIFICIAL INTELLIGENCE",
    "QUANTUM COMPUTING",
    "NEUROMETRIC COMPUTING"
  ];
  
  export const experienceSalary = [
    { id: 1, experience: "0-1 YEARS EXPERIENCE", salaryRange: "$92,000 - $170,000" },
    { id: 2, experience: "1-3 YEARS EXPERIENCE", salaryRange: "$102,000 - $185,000" },
    { id: 3, experience: "4-6 YEARS EXPERIENCE", salaryRange: "$122,000 - $221,000" },
    { id: 4, experience: "7-9 YEARS EXPERIENCE", salaryRange: "$140,000 - $250,000" }
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
    "Artificial Intelligence and Machine Learning",
    "Data Science and Big Data Analytics",
    "Cybersecurity and Information Assurance",
    "Cloud Computing and Distributed Systems",
    "Human-Computer Interaction",
    "Computer Vision and Image Processing",
    "Bioinformatics",
    "Quantum Computing",
    "Robotics",
    "Internet of Things (IoT)"
  ];
  
  export const trend = [
    "Quantum Computing",
    "Edge Computing",
    "Extended Reality (XR) - including AR and VR",
    "Blockchain and Cryptocurrency",
    "Green Computing and Sustainability",
    "Neuromorphic Computing"
  ];
  
  export const skills = [
    "Critical thinking and problem-solving",
    "Programming in multiple languages (e.g., Python, Java, C++, JavaScript)",
    "Data analysis and interpretation",
    "Algorithm design and optimization",
    "Software development methodologies",
    "System design and architecture",
    "Database management",
    "Network administration",
    "Cybersecurity practices",
    "Project management"
  ];
  
  export const challengesArray = [
    "UNDERGRADUATE CHALLENGES",
    {
      id: 1,
      heading: "Theory-heavy curriculum.",
      description: `Excessive focus on abstract concepts without sufficient practical application can leave students underprepared for industry-specific problem-solving scenarios.`
    },
    {
      id: 2,
      heading: "Intimidating topics for students lacking math background.",
      description: `Complex subjects like data structures and algorithms can be daunting without a solid foundation in discrete mathematics and logical reasoning.`
    },
    {
      id: 3,
      heading: "Burnout from Balancing Theoretical concepts and Practice",
      description: `Balancing theoretical concepts with hands-on projects can be overwhelming, potentially leading to mental fatigue and decreased productivity.`
    },
    {
      id: 4,
      heading: "Course requires stiff time management",
      description: `Efficiently allocating time between coding projects, theoretical study, and personal life is essential for maintaining academic performance and well-being.`
    },
    {
      id: 5,
      heading: "Insufficient/Improper mentorship guides",
      description: `Lack of guidance from experienced professionals can impede understanding of advanced concepts and industry best practices.`
    },
    {
      id: 6,
      heading: "Increased competition for internships/networking opportunities",
      description: `The growing popularity of computer science leads to fierce competition for valuable internships and networking events crucial for career development.`
    },
    {
      id: 7,
      heading: "Rapid tech evolution and advancements",
      description: `Keeping pace with rapidly evolving technologies and frameworks requires constant self-learning alongside formal education.`
    },
    {
      id: 8,
      heading: "Long hours of code troubleshooting",
      description: `Debugging complex issues can be time-consuming and frustrating, potentially impacting motivation and confidence in one's abilities.`
    },
    {
      id: 9,
      heading: "Peer comparison in coding environments fosters inadequacy",
      description: `Constant exposure to peers' work in collaborative coding environments can trigger imposter syndrome, affecting self-confidence and performance.`
    }
  ];
  
  export const issuesArray = [
    "CURRENT JOB ISSUES IN THE FIELD",
    {
      id: 1,
      heading: "Massive Tech Layoffs Impact.",
      description: "Recent waves of tech layoffs have shaken the industry, affecting thousands of workers across various companies. These job cuts have raised concerns about long-term stability and growth in the sector, as well as the impact on innovation and talent retention."
    },
    {
      id: 2,
      heading: "Intense competition for tech jobs",
      description: "The high demand for tech roles attracts a large talent pool, making it challenging to stand out in the job market."
    },
    {
      id: 3,
      heading: "Continuous upskilling is essential in the tech industry.",
      description: "Rapid technological advancements necessitate continuous learning and adaptation to new tools, languages, and frameworks to remain competitive."
    },
    {
      id: 4,
      heading: "Burnout from demanding workloads.",
      description: "High-pressure environments with demanding deadlines can lead to chronic stress, affecting both job performance and personal well-being."
    },
    {
      id: 5,
      heading: "Automation threatens job stability.",
      description: "Increasing automation in software development threatens job security, particularly for roles involving repetitive or rule-based tasks."
    },
    {
      id: 6,
      heading: "Job requirements demand experience.",
      description: "Many entry-level positions require prior experience, creating a challenging barrier for recent graduates entering the job market."
    },
    {
      id: 7,
      heading: "Freelance tech work creates income instability",
      description: "The gig economy in tech offers flexibility but can lead to unpredictable income streams and lack of traditional employment benefits."
    },
    {
      id: 8,
      heading: "Regional job opportunities and salaries vary greatly.",
      description: "Significant differences in job availability and compensation across regions can necessitate relocation for career growth and better opportunities."
    }
  ];
