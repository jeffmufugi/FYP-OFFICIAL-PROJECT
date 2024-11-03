export const homepageInfo = [
    {
        courseName: "biomedical engineering.",
        courseDefinition: "Biomedical Engineering applies engineering principles to medicine and biology for healthcare purposes, such as developing medical devices, diagnostics, and therapies.",
        undergradsal: "$68,000",
        jobavail: "210,000",
        emprate: "92%",
    },
    
    {
        description: `Biomedical Engineering blends the knowledge of engineering, biology, and healthcare to design innovative medical solutions that improve patient care and medical technology.`,
        backgroundColor1:"#F9E5FF",
        backgroundColor2:"#FBECFF",
        backgroundColor3:"#FCF2FF",
        fontColor: "#453664",
        popupcolor1 : "#453664",
        popupcolor2 : "#FBECFF",
    }
];

export const homepageInfo1 = [ {
  undergradsal: `90,000`,
  jobavail : "16,700",
  emprate: "57%",
  },]
  
  //MALAYSIA
  export const homepageInfo2 = [ {
    undergradsal: `45,000`,
    jobavail : "12,700",
    emprate: "77%",
    },]
    import salaryData from '/Users/mvsterjeffrey/Desktop/FYP-OFFICIAL-PROJECT/server/data/salary-data.json'; // Adjust path accordingly
    import salaryData2 from '/Users/mvsterjeffrey/Desktop/FYP-OFFICIAL-PROJECT/server/data/salary-dataMY.json'; // Adjust path accordingly
    
    export const countries = 
    [{"flag":"🇺🇸","file":salaryData,"currency":"$",id:1},
    {"flag":"🇲🇾","file":salaryData2,"currency":"MYR",id:2}];

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
    "Strong foundation in biology, chemistry, and physics",
    "Knowledge of mathematics and engineering principles",
    "Critical thinking and problem-solving skills",
    "Attention to detail and precision",
    "Strong communication skills for interdisciplinary collaboration"
];

export const coreAreasOfStudy = [
    "Biomaterials",
    "Biomechanics",
    "Medical Imaging",
    "Bioinstrumentation",
    "Tissue Engineering",
    "Bioinformatics",
    "Systems Biology",
    "Genetic Engineering"
];

export const jobGrowthFields = [
    "Medical Devices",
    "Regenerative Medicine",
    "Biomedical Imaging",
    "Wearable Health Technology",
    "Bioinformatics"
];

export const experienceSalary = [
    { experience: "0-1 YEARS EXPERIENCE", salaryRange: "$60,000 - $75,000" },
    { experience: "1-3 YEARS EXPERIENCE", salaryRange: "$75,000 - $95,000" },
    { experience: "4-6 YEARS EXPERIENCE", salaryRange: "$90,000 - $120,000" },
    { experience: "7-9 YEARS EXPERIENCE", salaryRange: "$110,000 - $140,000" }
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
    "Biomaterials",
    "Medical Imaging",
    "Biomechanics",
    "Tissue Engineering",
    "Bioinstrumentation",
    "Bioinformatics",
    "Genetic Engineering"
];

export const trend = [
    "Artificial Organs",
    "Wearable Medical Devices",
    "3D Bioprinting",
    "Gene Editing (CRISPR)",
    "Personalized Medicine"
];

export const skills = [
    "Design of medical devices",
    "Knowledge of biological systems",
    "Data analysis and bioinformatics",
    "Proficiency in 3D modeling and CAD software",
    "Problem-solving in clinical environments",
    "Regulatory knowledge (FDA, CE Marking)",
    "Collaboration with healthcare professionals"
];

export const challengesArray = [
    "UNDERGRADUATE CHALLENGES",
    {
        heading: "Integration of engineering with biology.",
        description: `Understanding the complexities of human biology while mastering engineering principles can be challenging.`
    },
    {
        heading: "Cross-disciplinary knowledge.",
        description: `Students must develop strong knowledge across multiple domains like physics, chemistry, biology, and engineering.`
    },
    {
        heading: "Regulatory environment.",
        description: `Navigating the stringent regulations surrounding medical devices and healthcare technology is often difficult for students.`
    },
    {
        heading: "Innovation and ethics.",
        description: `Balancing innovative design with ethical concerns in patient care and clinical environments poses challenges.`
    }
];

export const issuesArray = [
    "CURRENT JOB ISSUES IN THE FIELD",
    {
        heading: "Regulatory hurdles.",
        description: `Getting approval for new medical devices or therapies involves navigating complex regulatory environments that can delay innovation.`
    },
    {
        heading: "Interdisciplinary challenges.",
        description: `Collaborating with professionals across biology, medicine, and engineering requires strong communication and adaptability.`
    },
    {
        heading: "Technological advancements.",
        description: `Staying updated with advancements in areas such as bioinformatics, 3D printing, and genetic engineering requires continuous learning.`
    },
    {
        heading: "Limited academic roles.",
        description: `Securing academic or research roles in biomedical engineering can be highly competitive, requiring advanced degrees and extensive research experience.`
    }
];

