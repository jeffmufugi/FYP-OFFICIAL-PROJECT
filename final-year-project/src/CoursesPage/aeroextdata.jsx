export const homepageInfo = [
    {
        courseName: "aerospace engineering.",
        courseDefinition: "aerospace engineering, field of engineering concerned with the design, development, construction, testing, and operation of vehicles operating in the Earth’s atmosphere or in outer space.",
        undergradsal: "$77,539",
        jobavail: "300,000",
        emprate: "92%",
    },
    
    {
        description: `Aerospace Engineering encompasses the study of aerodynamics, materials science, structural analysis, propulsion, and avionics to develop efficient and innovative aerospace systems.`,
        backgroundColor1:"#FFEFD6",
        backgroundColor2:"#FFF5E5",
        backgroundColor3:"#FFF8ED",
        fontColor: "#604110",
        popupcolor1: "#604110", 
        popupcolor2: "#FFF5E5",
    }
];

export const homepageInfo1 = [ {
  undergradsal: `77,539`,
  jobavail : "15,700",
  emprate: "47%",
  },]
  
  //MALAYSIA
  export const homepageInfo2 = [ { 
    undergradsal: `41,000`,
    jobavail : "3,700",
    emprate: "79%",
    },]

    import salaryData from '/../server/data/salary-dataAEROusa.json';
    import salaryData2 from '/../server/data/salary-dataAEROmy.json';
    export const countries = 
    [{"flag":"🇺🇸","file":salaryData,"currency":"$",id:1},
    {"flag":"🇲🇾","file":salaryData2,"currency":"MYR",id:2}];


    export const getTopCourses = (salaryData) => {
    
      const jobData = salaryData.data.find(job => job.title === 'Flight Dynamics Engineer');

      const currency = jobData ? jobData.currency : null;
      console.log(currency );
      

      const fdJob = salaryData?.data?.find(job => job.title === 'Flight Dynamics Engineer');
      const prJob = salaryData?.data?.find(job => job.title === 'Propulsion Engineer');
      const avJob = salaryData?.data?.find(job => job.title === 'Avionics Engineer');
      const adJob = salaryData?.data?.find(job => job.title === 'Aerodynamics Engineer');
      const saJob = salaryData?.data?.find(job => job.title === 'Structural Analysis Engineer');
      const msJob = salaryData?.data?.find(job => job.title === 'Materials Science Engineer');
      const sseJob = salaryData?.data?.find(job => job.title === 'Space Systems Engineer');
      const raJob = salaryData?.data?.find(job => job.title === 'Autonomy Engineer');

      const validJobs = [fdJob, prJob, avJob, adJob, saJob, msJob, sseJob, raJob];

      // Array to store the formatted salary data for each job
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
            name: "FLIGHT DYNAMICS",
            salaryRange: `${currency}${salaryResults[0].minSalary} - ${currency}${salaryResults[0].maxSalary}`,
            description: `Study the behavior of aircraft in flight, focusing on stability, control, and performance analysis.`,
            link: `${salaryResults[0].link}`,
        },
        {
            name: "PROPULSION",
            salaryRange: `${currency}${salaryResults[1].minSalary} - ${currency}${salaryResults[1].maxSalary}`,
            description: `Explore the principles and technologies behind engines and propulsion systems used in aerospace vehicles.`,
            link: `${salaryResults[1].link}`,
        },
        {
            name: "AVIONICS",
            salaryRange: `${currency}${salaryResults[2].minSalary} - ${currency}${salaryResults[2].maxSalary}`,
            description: `Learn about the electronic systems used in aircraft, including navigation, communication, and control systems.`,
            link: `${salaryResults[2].link}`,
        },
        {
            name: "AERODYNAMICS",
            salaryRange: `${currency}${salaryResults[3].minSalary} - ${currency}${salaryResults[3].maxSalary}`,
            description: `Analyze the behavior of air as it interacts with solid objects, focusing on lift, drag, and airflow patterns.`,
            link: `${salaryResults[3].link}`,
        },
        {
            name: "STRUCTURAL ANALYSIS",
            salaryRange: `${currency}${salaryResults[4].minSalary} - ${currency}${salaryResults[4].maxSalary}`,
            description: `Evaluate the strength and stability of aerospace structures, ensuring safety and efficiency in design.`,
            link: `${salaryResults[4].link}`,
        },
        {
            name: "MATERIALS SCIENCE",
            salaryRange: `${currency}${salaryResults[5].minSalary} - ${currency}${salaryResults[5].maxSalary}`,
            description: `Study the properties and applications of materials used in aerospace, including composites and metals.`,
            link: `${salaryResults[5].link}`,
        },
        {
            name: "SPACE SYSTEMS ENGINEERING",
            salaryRange: `${currency}${salaryResults[6].minSalary} - ${currency}${salaryResults[6].maxSalary}`,
            description: `Focus on the design and integration of spacecraft systems, including communication, power, and thermal control.`,
            link: `${salaryResults[6].link}`,
        },
        {
            name: "ROBOTICS AND AUTONOMY",
            salaryRange: `${currency}${salaryResults[7].minSalary} - ${currency}${salaryResults[7].maxSalary}`,
            description: `Explore robotics technology and autonomous systems applied in aerospace applications and research.`
            ,         link: `${salaryResults[7].link}`,
        }
    ];
};

    
export const prerequisites = [
    {
      skill: "Strong foundation in physics and mathematics",
      description: "A deep understanding of fundamental principles such as mechanics, dynamics, calculus, and differential equations is crucial for solving complex engineering problems."
    },
    {
        skill: "Analytical and problem-solving skills",
      description: "The ability to critically analyze problems and devise innovative solutions is essential in addressing technical challenges in engineering and design."
    },
    {
        skill: "Familiarity with computer-aided design (CAD) software",
      description: "Proficiency in CAD tools like SolidWorks, AutoCAD, or CATIA is necessary for creating and modifying engineering designs."
    },
    {
      skill: "Teamwork and communication skills",
      description: "Effective collaboration and clear communication are vital for working within multidisciplinary teams on complex projects."
    },
    {
        skill: "Basic programming knowledge (C++, MATLAB, etc.)",
      description: "Understanding programming languages helps in simulation, modeling, and automation of engineering processes."
    }
  ];

  export const coreAreasOfStudy = [
    {
      area: "Fluid Mechanics",
      description: "Explores the behavior of fluids and their interaction with surfaces, essential for understanding aerodynamics and propulsion systems."
    },
    {
      area: "Thermodynamics",
      description: "Focuses on the principles of energy transfer and conversion, crucial for designing engines and propulsion systems."
    },
    {
      area: "Structural Mechanics",
      description: "Covers the analysis and design of structures to ensure they can withstand forces and stresses in various operating conditions."
    },
    {
      area: "Control Systems",
      description: "Studies the behavior and regulation of dynamic systems, enabling the design of stable and responsive systems like autopilots."
    },
    {
      area: "Propulsion Systems",
      description: "Focuses on the design and optimization of engines and propulsion technologies used in aircraft and spacecraft."
    },
    {
      area: "Materials Science",
      description: "Examines the properties and applications of materials, ensuring they meet the demands of aerospace structures and systems."
    },
    {
      area: "Avionics",
      description: "Covers the electronic systems used in aerospace applications, including navigation, communication, and flight control."
    },
    {
      area: "Astrodynamics",
      description: "Studies the motion of objects in space, providing the foundation for spacecraft trajectory design and orbital mechanics."
    }
  ];



export const experienceSalary = [
    { experience: "0-1 YEARS EXPERIENCE", salaryRange: "$60,000 - $75,000" },
    { experience: "1-3 YEARS EXPERIENCE", salaryRange: "$75,000 - $95,000" },
    { experience: "4-6 YEARS EXPERIENCE", salaryRange: "$90,000 - $115,000" },
    { experience: "7-9 YEARS EXPERIENCE", salaryRange: "$100,000 - $130,000" }
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
    {
      specialization: "Flight Dynamics",
      description: "Studies the forces and moments acting on aircraft and spacecraft, focusing on stability, control, and performance optimization."
    },
    {
      specialization: "Propulsion Systems",
      description: "Involves the design and development of engines and propulsion technologies, including jet engines and rocket systems."
    },
    {
      specialization: "Avionics Engineering",
      description: "Focuses on the electronic systems used in aerospace vehicles, such as navigation, communication, and automated controls."
    },
    {
      specialization: "Aerodynamics",
      description: "Examines the behavior of air as it interacts with solid surfaces, critical for improving the efficiency and performance of aerospace vehicles."
    },
    {
      specialization: "Space Systems Engineering",
      description: "Integrates various disciplines to design and manage spacecraft, satellites, and related technologies for space exploration."
    },
    {
      specialization: "Robotics and Autonomy",
      description: "Focuses on developing autonomous systems and robotics for use in aerospace applications, such as unmanned aerial vehicles and planetary rovers."
    }
  ];

  export const trend = [
    {
      trend: "Electric Propulsion",
      description: "The use of electric engines for more sustainable and efficient aerospace propulsion, gaining traction in satellites and spacecraft."
    },
    {
      trend: "Urban Air Mobility",
      description: "Development of personal air vehicles and air taxis to address urban transportation challenges and reduce congestion."
    },
    {
      trend: "Reusable Launch Vehicles",
      description: "Innovations in reusable rockets and spacecraft that reduce costs and improve sustainability in space exploration."
    },
    {
      trend: "Hypersonic Travel",
      description: "Advancements in technologies enabling travel at speeds greater than Mach 5, revolutionizing transportation and defense."
    },
    {
      trend: "Advanced Composites",
      description: "The use of lightweight and high-strength materials to improve fuel efficiency, durability, and performance in aerospace vehicles."
    }
  ];

  export const skills = [
    {
      skill: "Advanced mathematical modeling",
      description: "The ability to create complex mathematical models to simulate real-world scenarios and optimize aerospace designs."
    },
    {
      skill: "Simulation and analysis (ANSYS, MATLAB)",
      description: "Proficiency in simulation tools to analyze stress, heat, and fluid dynamics in aerospace components and systems."
    },
    {
      skill: "Strong programming skills (C++, Python)",
      description: "Expertise in programming for developing algorithms, simulations, and software used in aerospace systems and automation."
    },
    {
      skill: "Technical writing and communication",
      description: "The ability to document complex technical concepts and communicate them effectively to diverse audiences."
    },
    {
      skill: "Project management and teamwork",
      description: "Skills in coordinating multidisciplinary teams and managing large-scale projects to meet aerospace engineering objectives."
    },
    {
      skill: "Problem-solving and critical thinking",
      description: "The capability to analyze complex challenges and devise innovative solutions for engineering and design problems."
    }
  ];

export const challengesArray = [
    "UNDERGRADUATE CHALLENGES",
    {
        heading: "Complex design problems.",
        description: `Addressing the multifaceted challenges of designing efficient aerospace systems requires deep knowledge across multiple disciplines.`
    },
    {
        heading: "High standards for safety.",
        description: `Meeting the rigorous safety standards in aerospace engineering poses significant challenges in design and testing.`
    },
    {
        heading: "Rapid technological advancements.",
        description: `Keeping up with fast-paced innovations in aerospace technologies can be overwhelming for students and professionals alike.`
    },
    {
        heading: "Interdisciplinary collaboration.",
        description: `Working effectively across disciplines such as mechanical, electrical, and materials engineering requires strong teamwork skills.`
    }
];

export const issuesArray = [
    "CURRENT JOB ISSUES IN THE FIELD",
    {
        heading: "Workforce shortage.",
        description: `The aerospace industry faces a growing shortage of skilled workers, creating a competitive job market.`
    },
    {
        heading: "Regulatory challenges.",
        description: `Navigating complex regulations and compliance issues is crucial but can be cumbersome for aerospace professionals.`
    },
    {
        heading: "Global competition.",
        description: `The aerospace sector is highly competitive, with many companies vying for contracts and market share worldwide.`
    },
    {
        heading: "Funding and budget constraints.",
        description: `Limited funding for research and development can hinder innovation and growth in the aerospace sector.`
    }
];
