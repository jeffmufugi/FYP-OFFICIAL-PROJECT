export const homepageInfo = [
    {
        courseName: "aerospace engineering.",
        courseDefinition: "Aerospace Engineering is a field focused on the design, development, and testing of aircraft and spacecraft, combining principles from both mechanical and electrical engineering.",
        undergradsal: "$70,000",
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
            name: "FLIGHT DYNAMICS",
            salaryRange: `${currency}85,000 - ${currency}120,000`,
            description: `Study the behavior of aircraft in flight, focusing on stability, control, and performance analysis.`
        },
        {
            name: "PROPULSION",
            salaryRange: `${currency}90,000 - ${currency}130,000`,
            description: `Explore the principles and technologies behind engines and propulsion systems used in aerospace vehicles.`
        },
        {
            name: "AVIONICS",
            salaryRange: `${currency}80,000 - ${currency}115,000`,
            description: `Learn about the electronic systems used in aircraft, including navigation, communication, and control systems.`
        },
        {
            name: "AERODYNAMICS",
            salaryRange: `${currency}95,000 - ${currency}140,000`,
            description: `Analyze the behavior of air as it interacts with solid objects, focusing on lift, drag, and airflow patterns.`
        },
        {
            name: "STRUCTURAL ANALYSIS",
            salaryRange: `${currency}85,000 - ${currency}125,000`,
            description: `Evaluate the strength and stability of aerospace structures, ensuring safety and efficiency in design.`
        },
        {
            name: "MATERIALS SCIENCE",
            salaryRange: `${currency}80,000 - ${currency}120,000`,
            description: `Study the properties and applications of materials used in aerospace, including composites and metals.`
        },
        {
            name: "SPACE SYSTEMS ENGINEERING",
            salaryRange: `${currency}95,000 - ${currency}145,000`,
            description: `Focus on the design and integration of spacecraft systems, including communication, power, and thermal control.`
        },
        {
            name: "ROBOTICS AND AUTONOMY",
            salaryRange: `${currency}90,000 - ${currency}135,000`,
            description: `Explore robotics technology and autonomous systems applied in aerospace applications and research.`
        }

      ]
};

    
export const prerequisites = [
    "Strong foundation in physics and mathematics",
    "Analytical and problem-solving skills",
    "Familiarity with computer-aided design (CAD) software",
    "Teamwork and communication skills",
    "Basic programming knowledge (C++, MATLAB, etc.)"
];

export const coreAreasOfStudy = [
    "Fluid Mechanics",
    "Thermodynamics",
    "Structural Mechanics",
    "Control Systems",
    "Propulsion Systems",
    "Materials Science",
    "Avionics",
    "Astrodynamics"
];

export const jobGrowthFields = [
    "Aerospace Design and Manufacturing",
    "Space Exploration",
    "Unmanned Aerial Vehicles (UAVs)",
    "Satellite Technology",
    "Aerodynamics and Structural Analysis"
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
    "Flight Dynamics",
    "Propulsion Systems",
    "Avionics Engineering",
    "Aerodynamics",
    "Space Systems Engineering",
    "Robotics and Autonomy"
];

export const trend = [
    "Electric Propulsion",
    "Urban Air Mobility",
    "Reusable Launch Vehicles",
    "Hypersonic Travel",
    "Advanced Composites"
];

export const skills = [
    "Advanced mathematical modeling",
    "Simulation and analysis (ANSYS, MATLAB)",
    "Strong programming skills (C++, Python)",
    "Technical writing and communication",
    "Project management and teamwork",
    "Problem-solving and critical thinking"
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
