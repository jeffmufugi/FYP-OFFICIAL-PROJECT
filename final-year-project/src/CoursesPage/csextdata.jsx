

import salaryData from '/../server/data/salary-dataCSTusa.json';
import salaryData2 from '/../server/data/salary-dataCSTmy.json';
export const countries = 
[{"flag":"🇺🇸","file":salaryData,"currency":"$",id:1},
{"flag":"🇲🇾","file":salaryData2,"currency":"MYR",id:2}
];

export const getTopCourses = (salaryData) => {

          const jobData = salaryData.data.find(job => job.title === 'Computer Science');

          const currency = jobData ? jobData.currency : null;
          console.log(currency);

          const aiJob = salaryData?.data?.find(job => job.title === 'Ai Engineer');
          const cyJob = salaryData?.data?.find(job => job.title === 'Cyber Security');
          const clJob = salaryData?.data?.find(job => job.title === 'Cloud Architecture');
          const daJob = salaryData?.data?.find(job => job.title === 'Data Science');
          const swJob = salaryData?.data?.find(job => job.title === 'Software Development');
          const deJob = salaryData?.data?.find(job => job.title === 'Dev Ops Engineer');
          const moJob = salaryData?.data?.find(job => job.title === 'Mobile Development');
          const gaJob = salaryData?.data?.find(job => job.title === 'Game Development');
          const fuJob = salaryData?.data?.find(job => job.title === 'Full Stack Engineer');
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
                name: "ARTIFICIAL INTELLIGENCE",
                salaryRange: `${currency}${salaryResults[0].minSalary} - ${currency}${salaryResults[0].maxSalary}`,
                description: `An artificial intelligence engineer designs, builds, and deploys AI models to automate tasks, enhance decision-making, and solve real-world problems, 
                using machine learning, data processing, and programming skills.`,
                link: `${salaryResults[0].link}`,
                id: 1
              },
              {
                name: "CYBERSECURITY",
                salaryRange: `${currency}${salaryResults[1].minSalary} - ${currency}${salaryResults[1].maxSalary}`,
                description: `Cybersecurity safeguards computers and networks from unauthorized access and cyber threats, 
                protecting data privacy and preventing digital attacks on individuals and organizations.`,
                link: `${salaryResults[1].link}`,
                id: 2
              },
              {
                name: "CLOUD ARCHITECTURE",
                salaryRange: `${currency}${salaryResults[2].minSalary} - ${currency}${salaryResults[2].maxSalary}`,
                description: `A cloud architect designs, implements, and manages cloud computing systems, ensuring scalability, security, and performance for organizations.`,
                link: `${salaryResults[2].link}`,
                id: 3
              },
              {
                name: "DATA SCIENCE",
                salaryRange: `${currency}${salaryResults[3].minSalary} - ${currency}${salaryResults[3].maxSalary}`,
                description: `A data scientist analyzes and interprets complex data, develops models, and provides insights to drive decision-making and business solutions.`,
                id: 4,
                link: `${salaryResults[3].link}`,
              },
              {
                name: "SOFTWARE DEVELOPMENT",
                salaryRange: `${currency}${salaryResults[4].minSalary} - ${currency}${salaryResults[4].maxSalary}`,
                description: `A software developer designs, codes, tests, and maintains software applications, ensuring functionality, performance, and user experience meet requirements.`,
                link: `${salaryResults[4].link}`,
                id: 5
              },
              {
                name: "DEVOPS",
                salaryRange: `${currency}${salaryResults[5].minSalary} - ${currency}${salaryResults[5].maxSalary}`,
                description: `DevOps automates and integrates development and IT operations, improving collaboration, efficiency, and the deployment of software systems.`
                ,id: 6
                , link: `${salaryResults[5].link}`,
              },
              {
                name: "MOBILE DEVELOPMENT",
                salaryRange: `${currency}${salaryResults[6].minSalary} - ${currency}${salaryResults[6].maxSalary}`,
                description: `A mobile developer designs, develops, and maintains applications for mobile devices, ensuring functionality, usability, and performance across platforms.`
                ,id: 7
                , link: `${salaryResults[6].link}`,
              },
              {
                name: "GAME DEVELOPMENT",
                salaryRange: `${currency}${salaryResults[7].minSalary} - ${currency}${salaryResults[7].maxSalary}`,
                description: `A game developer designs, codes, tests, and refines video games, focusing on gameplay mechanics, graphics, and user experience.`
                ,id: 8,
                link: `${salaryResults[7].link}`,
              },
              {
                name: "FULL-STACK DEVELOPMENT",
                salaryRange: `${currency}${salaryResults[8].minSalary} - ${currency}${salaryResults[8].maxSalary}`,
                description: `A full-stack developer builds both front-end and back-end components of web applications, managing databases, servers, and user interfaces.`
                ,id: 9,
                link: `${salaryResults[8].link}`,
              },
              {
                name: "UI/UX DESIGNER",
                salaryRange: `${currency}${salaryResults[9].minSalary} - ${currency}${salaryResults[9].maxSalary}`,
                description: `A UI/UX developer designs and implements user interfaces and ensures a seamless, intuitive user experience across digital platforms.`
                ,id: 10
                , link: `${salaryResults[9].link}`,
              }
            ];
};

//USA 
export const homepageInfo1 = [ {
undergradsal: `76,077`,
ulink: 'https://www.uwosh.edu/career/wp-content/uploads/sites/38/2024/01/Winter-2024-Salary-Survey-Report.pdf',
jobavail : "356,700",
jlink:'https://www.bls.gov/ooh/computer-and-information-technology/',
emprate: "10.4%",
elink:'https://www.bls.gov/emp/tables/stem-employment.htm#BLStable_2024_7_29_10_34'
},]

//MALAYSIA
export const homepageInfo2 = [ {
    undergradsal: `48,000`,
    ulink: 'https://www.glassdoor.com/Salaries/malaysia-software-engineer-salary-SRCH_IL.0,8_IN170_KO9,26.htm',
    jobavail : "13,923",
    jlink:'https://www.ilmia.gov.my/bda-myjobprofile/job/2512/software-developers',
    emprate: "4.4%",
    elink:'https://www.bls.gov/emp/tables/stem-employment.htm#BLStable_2024_7_29_10_34'
  },]


export const homepageInfo = [
    {courseName : "computer science.",
    courseDefinition: "the study of computers and computing, including their theoretical and algorithmic foundations, hardware and software, and their uses for processing information.",
    undergradsal: `XXX`,
    jobavail : "XXX",
    emprate: "XXX",
    livestatscolor : "#1B046C",},
    
    {description: `Computer Science is the study of 
    computation, information processing, 
    and the design of computer systems. It encompasses both theoretical and 
    practical aspects of computation and information technology.`,
    backgroundColor1:"#DADAFF",
    backgroundColor2:"#E1E1FE",
    backgroundColor3:"#EEEEFF",
    fontColor: "#1B046C",
    popupcolor1 : "#2b1689",
    popupcolor2 : "#EEEEFF",
}
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



  export const prerequisites = [
    {
      skill: "Strong foundation in mathematics",
      description: "Essential for understanding algorithms, computational theory, and problem-solving in computer science."
    },
    {
      skill: "Basic understanding of computer systems",
      description: "Provides the groundwork for learning how hardware and software interact in computing."
    },
    {
      skill: "Logical thinking and analytical skills",
      description: "Vital for debugging, analyzing problems, and creating efficient solutions."
    },
    {
      skill: "Good communication skills",
      description: "Important for collaborating with teams and conveying technical concepts effectively."
    },
    {
      skill: "Self-motivation and ability to learn independently",
      description: "Crucial for keeping up with the rapidly evolving field of computer science."
    }
  ];
  export const coreAreasOfStudy = [
    {
      area: "Programming and Software Engineering",
      description: "Focuses on writing, testing, and maintaining code as well as applying engineering principles to software development."
    },
    {
      area: "Theory of Computation",
      description: "Explores the mathematical foundations of computing and algorithmic processes."
    },
    {
      area: "Computer Graphics and Visualization",
      description: "Studies methods for rendering images and visual representations of data."
    },
    {
      area: "Cryptography",
      description: "Focuses on securing communication and data through encryption techniques."
    },
    {
      area: "Operating Systems",
      description: "Explores the management of hardware and software resources by the system's core programs."
    },
    {
      area: "Database Management Systems",
      description: "Focuses on storing, managing, and retrieving structured data efficiently."
    },
    {
      area: "Data Structures and Algorithms",
      description: "Covers the organization of data and methods for solving computational problems efficiently."
    },
    {
      area: "Computer Architecture and Organization",
      description: "Examines the structure and functioning of computer hardware."
    },
    {
      area: "Computer Networks",
      description: "Studies the principles of data communication and network infrastructure."
    },
    

  ];
  export const topspecializations = [
    {
      specialization: "Artificial Intelligence and Machine Learning",
      description: "Developing systems that can learn and adapt through data-driven approaches."
    },
    {
      specialization: "Robotics",
      description: "focuses on building robots that can replicate human actions (from building cars to assisting in surgery)."
    },
    {
      specialization: "Data Science and Big Data Analytics",
      description: "Analyzing large datasets to uncover patterns and insights for decision-making."
    },
    {
      specialization: "Cybersecurity",
      description: "Cybersecurity refers to the practice of protecting computer systems, networks, programs, and mobile devices from unauthorized access or digital attacks. "
    },
    {
      specialization: "Cloud Computing and Distributed Systems",
      description: "Designing scalable systems for data storage and computation over the internet and with the emergence of cloud computing technology, companies no longer need their own servers to build products. "
    },
    {
      specialization: "Human-Computer Interaction",
      description: "Improving the usability and accessibility of computing systems."
    },
    {
      specialization: "Computer Vision and Image Processing",
      description: "Enabling machines to interpret and process visual data."
    },
    {
      specialization: "Bioinformatics",
      description: "Combines mathematics, biology, and computer science to better understand biological data."
    },
    {
      specialization: "Internet of Things (IoT)",
      description: "Creating interconnected devices that communicate and operate collaboratively, physical objects around the globe—from thermostats and lightbulbs to toys and audio speakers—are now connected to the internet."
    }
  ];
  export const trend = [
    {
      trend: "Quantum Computing",
      description: "Quantum computers leverage quantum mechanics to accelerate cryptography by breaking secure codes and transform drug discovery with precise molecular simulations in 2024."
    },
    {
      trend: "Edge Computing",
      description: "Edge computing processes data near where it’s created, reducing delays by avoiding centralized servers. It’s vital for real-time tasks like self-driving cars, factory automation, and remote local data handling."
    },
    {
      trend: "Extended Reality (XR) - including AR and VR",
      description: "Extended reality combines virtual reality, augmented reality, and mixed reality,  to offer immersive simulations for hands-on training in healthcare, aviation, and manufacturing."
    },
    {
      trend: "Blockchain and Cryptocurrency",
      description: "Blockchain technology, originally for Bitcoin, now enhances transparency, security, and fraud prevention. Applications include supply chain tracking, tamper-proof voting systems, and secure management of medical records."
    },
    {
      trend: "Green Computing and Sustainability",
      description: "Advances in green energy technologies improve the efficiency and affordability of renewables like solar, wind, and bioenergy, supporting sustainability and reducing carbon emissions globally."
    },
    {
      trend: "Neuromorphic Computing",
      description: "Designing chips inspired by brain neurons enables efficient processing of tasks like pattern recognition and sensory data analysis."
    }
  ];
  export const skills = [
    {
      skill: "Critical thinking and problem-solving",
      description: "Essential for tackling complex challenges and designing innovative solutions."
    },
    {
      skill: "Collaborative Decision Making",
      description: "In the real world, project specifications often come from multiple stakeholders with differing goals, making clear communication and early decision documentation crucial for aligning everyone involved."
    },
    {
      skill: "Communicating With Team Members And End Users",
      description: "Effective communication, both with users and within teams, is key to overcoming challenges in creating successful software programs."
    },
    {
      skill: "Algorithm design and optimization",
      description: "Key for creating efficient and scalable computational solutions."
    },
    {
      skill: "Speaking To Non-Tech Audiences",
      description: "Communication skills, especially explaining technical solutions to non-technical audiences, are crucial for success in a professional environment "
    },
    {
      skill: "Project management",
      description: "Coordinates resources and timelines to deliver successful outcomes."
    }
  ];
  export const challengesArray = [
    "UNDERGRADUATE CHALLENGES",
    {
      id: 1,
      heading: "Theoretical Focus Overlooks Practical Application.",
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
      heading: "Insufficient mentorship guides",
      description: `Lack of guidance from experienced professionals can impede understanding of advanced concepts and industry best practices.`
    },
    {
      id: 6,
      heading: "Lack of Emphasis on Collaboration and Creative Problem Solving",
      description: `Many CS programs do not prioritize teamwork or creative thinking, vital in the collaborative environments of the software development world.`
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
      heading: "Importance of Team Projects",
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
