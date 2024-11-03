
import salaryData from '/Users/mvsterjeffrey/Desktop/FYP-OFFICIAL-PROJECT/server/data/salary-data.json'; // Adjust path accordingly
import salaryData2 from '/Users/mvsterjeffrey/Desktop/FYP-OFFICIAL-PROJECT/server/data/salary-dataMY.json'; // Adjust path accordingly

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
                name: "AI & MACHINE LEARNING",
                salaryRange: `${currency}${salaryResults[0].minSalary} - ${currency}${salaryResults[0].maxSalary}`,
                description: `Lead the development of advanced AI systems using deep learning, neural networks, and natural language processing. Create innovative solutions for automation, prediction, and intelligent decision-making systems. Growing focus on ethical AI and large language models.`,
                id: 1
              },
              {
                name: "CYBERSECURITY",
                salaryRange: `${currency}${salaryResults[1].minSalary} - ${currency}${salaryResults[1].maxSalary}`,
                description: `Design and implement comprehensive security architectures to protect against evolving cyber threats. Specialize in cloud security, zero-trust frameworks, threat detection, and incident response. Growing emphasis on AI-powered security solutions and compliance.`
                ,id: 2
              },
              {
                name: "CLOUD ARCHITECTURE",
                salaryRange: `${currency}${salaryResults[2].minSalary} - ${currency}${salaryResults[2].maxSalary}`,
                description: `Architect and optimize multi-cloud solutions focusing on serverless computing, microservices, and container orchestration. Implement DevOps practices, ensure high availability, and optimize cloud costs while maintaining security and scalability.`
                ,id: 3
              },
              {
                name: "DATA SCIENCE",
                salaryRange: `${currency}${salaryResults[3].minSalary} - ${currency}${salaryResults[3].maxSalary}`,
                description: `Transform complex data into actionable insights using advanced analytics, machine learning, and predictive modeling. Specialize in big data technologies, real-time analytics, and developing AI-driven decision support systems.`
                ,id: 4
              },
              {
                name: "SOFTWARE DEVELOPMENT",
                salaryRange: `${currency}${salaryResults[4].minSalary} - ${currency}${salaryResults[4].maxSalary}`,
                description: `Build scalable, enterprise-level applications using modern frameworks and cloud-native technologies. Focus on microservices architecture, API development, and implementing CI/CD pipelines for rapid deployment and testing.`
                ,id: 5
              },
              {
                name: "DEVOPS & SRE",
                salaryRange: `${currency}${salaryResults[5].minSalary} - ${currency}${salaryResults[5].maxSalary}`,
                description: `Bridge development and operations through automation, monitoring, and infrastructure as code. Implement site reliability engineering practices to ensure system scalability, reliability, and performance optimization.`
                ,id: 6
              },
              {
                name: "MOBILE DEVELOPMENT",
                salaryRange: `${currency}${salaryResults[6].minSalary} - ${currency}${salaryResults[6].maxSalary}`,
                description: `Create native and cross-platform mobile applications with focus on performance and user experience. Implement advanced features like AR/VR, real-time data synchronization, and offline capabilities using modern frameworks.`
                ,id: 7
              },
              {
                name: "GAME DEVELOPMENT",
                salaryRange: `${currency}${salaryResults[7].minSalary} - ${currency}${salaryResults[7].maxSalary}`,
                description: `Develop immersive gaming experiences using advanced graphics engines and physics simulations. Implement multiplayer functionality, blockchain integration, and create engaging gameplay mechanics across various platforms.`
                ,id: 8
              },
              {
                name: "FULL-STACK DEVELOPMENT",
                salaryRange: `${currency}${salaryResults[5].minSalary} - ${currency}${salaryResults[5].maxSalary}`,
                description: `Build end-to-end web applications using modern JavaScript frameworks and cloud services. Focus on responsive design, progressive web apps, and implementing real-time features using WebSocket and serverless architectures.`
                ,id: 9
              },
              {
                name: "UI/UX DESIGN",
                salaryRange: `${currency}${salaryResults[9].minSalary} - ${currency}${salaryResults[9].maxSalary}`,
                description: `Create exceptional digital experiences through user research, interaction design, and accessibility-first approaches. Implement design systems, conduct usability testing, and utilize AI-powered design tools for rapid prototyping.`
                ,id: 10
              }
            ];
};

//USA 
export const homepageInfo1 = [ {
undergradsal: `122,000`,
jobavail : "356,700",
emprate: "67%",
},]

//MALAYSIA
export const homepageInfo2 = [ {
  undergradsal: `60,000`,
  jobavail : "16,700",
  emprate: "57%",
  },]


export const homepageInfo = [
    {courseName : "computer science.",
    courseDefinition: " Computer science is the study of algorithms, programming, computation, and data processing systems.",
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
