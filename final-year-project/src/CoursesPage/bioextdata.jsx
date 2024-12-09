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
    import salaryData from '/../server/data/salary-data.json';
    import salaryData2 from '/../server/data/salary-dataMY.json';

    
    
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
            name: "BIOMECHANICS",
            salaryRange: `${currency}70,000 - ${currency}110,000`,
            description: `Study the mechanical principles of biological systems, focusing on movement, structure, and function of living organisms.`
        },
        {
            name: "MEDICAL DEVICE DESIGN",
            salaryRange: `${currency}75,000 - ${currency}115,000`,
            description: `Design and develop medical devices and equipment, ensuring they meet clinical and regulatory standards.`
        },
        {
            name: "TISSUE ENGINEERING",
            salaryRange: `${currency}80,000 - ${currency}125,000`,
            description: `Focus on the development of biological substitutes to restore, maintain, or improve tissue function.`
        },
        {
            name: "BIOMATERIALS",
            salaryRange: `${currency}70,000 - ${currency}105,000`,
            description: `Study and create materials compatible with biological systems, used in medical implants, devices, and treatments.`
        },
        {
            name: "MEDICAL IMAGING",
            salaryRange: `${currency}85,000 - ${currency}130,000`,
            description: `Explore techniques and technologies for visualizing internal structures of the body for diagnostic and therapeutic purposes.`
        },
        {
            name: "REHABILITATION ENGINEERING",
            salaryRange: `${currency}65,000 - ${currency}100,000`,
            description: `Develop technologies and devices to assist individuals with physical disabilities and improve quality of life.`
        },
        {
            name: "BIOINSTRUMENTATION",
            salaryRange: `${currency}75,000 - ${currency}120,000`,
            description: `Design and develop instruments and sensors to measure and analyze biological systems for medical applications.`
        },
        {
            name: "SYSTEMS PHYSIOLOGY",
            salaryRange: `${currency}70,000 - ${currency}110,000`,
            description: `Analyze biological systems and their functions using engineering principles to better understand health and disease.`
        }
      ]
};

    


export const prerequisites = [
    {
      skill: "Strong foundation in biology, chemistry, and physics",
      description: "A deep understanding of biological processes, chemical principles, and physical laws is essential for developing biomedical technologies."
    },
    {
        skill: "Knowledge of mathematics and engineering principles",
      description: "Proficiency in calculus, statistics, and engineering concepts provides the tools to analyze and design complex biomedical systems."
    },
    {
        skill: "Critical thinking and problem-solving skills",
      description: "The ability to identify challenges and develop innovative solutions is crucial for tackling issues in healthcare and medical device design."
    },
    {
        skill: "Attention to detail and precision",
      description: "Meticulousness is vital for ensuring the safety, reliability, and effectiveness of biomedical devices and treatments."
    },
    {
        skill: "Strong communication skills for interdisciplinary collaboration",
      description: "Effective communication enables seamless collaboration with professionals from various fields, such as medicine, engineering, and regulatory bodies."
    }
  ];

export const coreAreasOfStudy = [
    {
      area: "Biomaterials",
      description: "The study and development of materials that interact with biological systems for medical implants, prosthetics, and drug delivery systems."
    },
    {
      area: "Biomechanics",
      description: "Analyzing the mechanical principles of biological systems to design devices like prosthetics, orthotics, and surgical tools."
    },
    {
      area: "Medical Imaging",
      description: "Exploring imaging technologies such as MRI, CT, and ultrasound to diagnose and treat medical conditions."
    },
    {
      area: "Bioinstrumentation",
      description: "Designing and developing devices for monitoring and diagnosing medical conditions, such as ECG machines and glucose monitors."
    },
    {
      area: "Tissue Engineering",
      description: "Combining biology and engineering to develop artificial organs, skin grafts, and other tissue replacements."
    },
    {
      area: "Bioinformatics",
      description: "Using computational tools to analyze biological data, such as genetic sequences and protein structures, for medical research and applications."
    },
    {
      area: "Systems Biology",
      description: "Integrating data from various biological systems to model and understand complex interactions within the human body."
    },
    {
      area: "Genetic Engineering",
      description: "Modifying genetic material to develop treatments for diseases, improve biological functions, and create genetically engineered organisms."
    }
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
    {
      specialization: "Biomaterials",
      description: "Developing innovative materials for use in implants, prosthetics, and drug delivery systems, emphasizing biocompatibility and functionality."
    },
    {
      specialization: "Medical Imaging",
      description: "Advancing technologies like MRI, X-ray, and ultrasound to enhance diagnostic capabilities and patient outcomes."
    },
    {
      specialization: "Biomechanics",
      description: "Applying mechanical principles to biological systems for improving mobility through devices like prosthetics and exoskeletons."
    },
    {
      specialization: "Tissue Engineering",
      description: "Engineering artificial tissues and organs to address the shortage of donor organs and improve regenerative medicine."
    },
    {
      specialization: "Bioinstrumentation",
      description: "Creating diagnostic and therapeutic devices that provide precise monitoring and intervention for medical conditions."
    },
    {
      specialization: "Bioinformatics",
      description: "Using computational methods to analyze and interpret biological data for advancements in genomics and personalized medicine."
    },
    {
      specialization: "Genetic Engineering",
      description: "Harnessing CRISPR and other gene-editing tools to treat genetic disorders and enhance biological capabilities."
    }
  ];
export const trend = [
    {
      trend: "Artificial Organs",
      description: "Developing fully functional artificial organs to replace damaged ones and alleviate the shortage of donor organs."
    },
    {
      trend: "Wearable Medical Devices",
      description: "Advancing wearable technologies for continuous health monitoring, such as fitness trackers and smart medical patches."
    },
    {
      trend: "3D Bioprinting",
      description: "Using 3D printing technologies to create tissues, organs, and customized medical devices with high precision."
    },
    {
      trend: "Gene Editing (CRISPR)",
      description: "Leveraging CRISPR technology for precise genetic modifications to treat diseases and improve health outcomes."
    },
    {
      trend: "Personalized Medicine",
      description: "Developing treatments tailored to individual patients based on their genetic makeup and medical history."
    }
  ];

export const skills = [
    {
      skill: "Design of medical devices",
      description: "Creating innovative devices for diagnosis, treatment, and rehabilitation with a focus on functionality and safety."
    },
    {
      skill: "Knowledge of biological systems",
      description: "Understanding human anatomy and physiology to design devices and treatments compatible with the body."
    },
    {
      skill: "Data analysis and bioinformatics",
      description: "Analyzing complex biological data using computational tools to drive medical research and innovation."
    },
    {
      skill: "Proficiency in 3D modeling and CAD software",
      description: "Using design tools like AutoCAD and SolidWorks for creating precise models of biomedical devices and components."
    },
    {
      skill: "Problem-solving in clinical environments",
      description: "Addressing real-world challenges in healthcare by developing practical and effective solutions."
    },
    {
      skill: "Regulatory knowledge (FDA, CE Marking)",
      description: "Understanding regulatory standards to ensure compliance in the design and manufacturing of medical devices."
    },
    {
      skill: "Collaboration with healthcare professionals",
      description: "Working closely with doctors, nurses, and other specialists to design solutions that meet clinical needs."
    }
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

