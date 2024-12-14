export const homepageInfo = [
    {
        courseName: "physics.",
        courseDefinition: "Physics explores the fundamental principles governing matter, energy, space, and time at all scales.",
        undergradsal: "$75,753",
        jobavail: "182,700",
        emprate: "82%",
    },
    
    {
        description: `Physics combines mathematical modeling, experimental investigation, and theoretical analysis to understand the universe's fundamental laws and their applications in technology and innovation.`,
        backgroundColor1:"#F9E5FF",
        backgroundColor2:"#FBECFF",
        backgroundColor3:"#FCF2FF",
        fontColor: "#453664",
        popupcolor1 : "#453664",
        popupcolor2 : "#FBECFF",
    }
];
export const homepageInfo1 = [ {
  undergradsal: `75,753`,
  jobavail : "15,700",
  emprate: "47%",
  },]
  
  //MALAYSIA
  export const homepageInfo2 = [ {
    undergradsal: `41,000`,
    jobavail : "3,700",
    emprate: "79%",
    },]

    // import salaryData from '/../server/data/salary-data.json';
    // import salaryData2 from '/../server/data/salary-dataMY.json';

    import salaryData from '/../server/data/salary-dataPHYusa.json';
    import salaryData2 from '/../server/data/salary-dataPHYmy.json';
    
    export const countries = 
    [{"flag":"🇺🇸","file":salaryData,"currency":"$",id:1},
    {"flag":"🇲🇾","file":salaryData2,"currency":"MYR",id:2}];


    export const getTopCourses = (salaryData) => {
    
      const jobData = salaryData.data.find(job => job.title === 'Quantum computing');

      const currency = jobData ? jobData.currency : null;
      console.log(currency );
      


      const aiJob = salaryData?.data?.find(job => job.title === 'Quantum computing');
      const cyJob = salaryData?.data?.find(job => job.title === 'Medical Physics');
      const clJob = salaryData?.data?.find(job => job.title === 'Particle physics');
      const daJob = salaryData?.data?.find(job => job.title === 'Condensed matter physics');
      const swJob = salaryData?.data?.find(job => job.title === 'Astrophysics');
      const deJob = salaryData?.data?.find(job => job.title === 'Computational physics');
      const moJob = salaryData?.data?.find(job => job.title === 'Plasma physics');
      const gaJob = salaryData?.data?.find(job => job.title === 'Optics and photonics');
      const fuJob = salaryData?.data?.find(job => job.title === 'Biophysics');
      const uiJob = salaryData?.data?.find(job => job.title === 'Nuclear physics');

      const validJobs = [aiJob,cyJob,clJob,daJob,swJob,deJob,moJob,gaJob,fuJob,uiJob];

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
            name: "QUANTUM COMPUTING",
            salaryRange: `${currency}${salaryResults[0].minSalary} - ${currency}${salaryResults[0].maxSalary}`,
            description: `Research and develop quantum systems for computing applications, working with quantum bits, gates, and algorithms. Focus on advancing quantum technology for practical computing solutions.`,
            link: `${salaryResults[0].link}`
        },
        {
            name: "MEDICAL PHYSICS",
            salaryRange: `${currency}${salaryResults[1].minSalary} - ${currency}${salaryResults[1].maxSalary}`,
            description: `Apply physics principles to medicine, particularly in radiation therapy, medical imaging, and diagnostic technologies. Ensure safe and effective use of radiation in medical treatments.`,
            link: `${salaryResults[1].link}`
        },
        {
            name: "PARTICLE PHYSICS",
            salaryRange: `${currency}${salaryResults[2].minSalary} - ${currency}${salaryResults[2].maxSalary}`,
            description: `Study fundamental particles and their interactions, working at research facilities with particle accelerators and detectors to understand the basic building blocks of matter.`,
            link: `${salaryResults[2].link}`
        },
        {
            name: "CONDENSED MATTER PHYSICS",
            salaryRange: `${currency}${salaryResults[3].minSalary} - ${currency}${salaryResults[3].maxSalary}`,
            description: `Research properties of matter in solid and liquid states, developing new materials for electronics, energy storage, and quantum technologies.`,
            link: `${salaryResults[3].link}`
        },
        {
            name: "ASTROPHYSICS",
            salaryRange: `${currency}${salaryResults[4].minSalary} - ${currency}${salaryResults[4].maxSalary}`,
            description: `Study celestial objects, galaxies, and phenomena in the universe, using advanced telescopes and computational methods to understand cosmic evolution.`,
            link: `${salaryResults[4].link}`
        },
        {
            name: "COMPUTATIONAL PHYSICS",
            salaryRange: `${currency}${salaryResults[5].minSalary} - ${currency}${salaryResults[5].maxSalary}`,
            description: `Develop and apply numerical methods and computer simulations to solve complex physical problems, from climate modeling to molecular dynamics.`,
            link: `${salaryResults[5].link}`
        },
        {
            name: "PLASMA PHYSICS",
            salaryRange: `${currency}${salaryResults[6].minSalary} - ${currency}${salaryResults[6].maxSalary}`,
            description: `Study ionized gases and their applications in fusion energy, space propulsion, and materials processing, working on cutting-edge energy solutions.`,
            link: `${salaryResults[6].link}`
        },
        {
            name: "OPTICS AND PHOTONICS",
            salaryRange: `${currency}${salaryResults[7].minSalary} - ${currency}${salaryResults[7].maxSalary}`,
            description: `Research light-matter interactions and develop applications in laser technology, fiber optics, and optical computing, crucial for communications and sensing.`,
            link: `${salaryResults[7].link}`
        },
        {
            name: "BIOPHYSICS",
            salaryRange: `${currency}${salaryResults[8].minSalary} - ${currency}${salaryResults[8].maxSalary}`,
            description: `Apply physics principles to biological systems, studying molecular structures, cellular mechanics, and developing new techniques for medical diagnosis and treatment.`,
            link: `${salaryResults[8].link}`
        },
        {
            name: "NUCLEAR PHYSICS",
            salaryRange: `${currency}${salaryResults[9].minSalary} - ${currency}${salaryResults[9].maxSalary}`,
            description: `Study atomic nuclei, nuclear reactions, and applications in energy production, medical treatments, and national security, working in labs or power facilities.`,
            link: `${salaryResults[9].link}`
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




export const jobGrowthFields = [
    "QUANTUM COMPUTING",
    "MEDICAL PHYSICS",
    "DATA SCIENCE",
    "RENEWABLE ENERGY",
    "AEROSPACE RESEARCH"
];

export const experienceSalary = [
    { experience: "0-1 YEARS EXPERIENCE", salaryRange: "$60,000 - $75,000" },
    { experience: "1-3 YEARS EXPERIENCE", salaryRange: "$70,000 - $90,000" },
    { experience: "4-6 YEARS EXPERIENCE", salaryRange: "$85,000 - $110,000" },
    { experience: "7-9 YEARS EXPERIENCE", salaryRange: "$95,000 - $130,000" }
];

export const prerequisites = [
  {
    skill: "Strong foundation in mathematics, including calculus",
    description: "A deep understanding of mathematics, particularly calculus, is crucial for analyzing physical phenomena and solving complex problems in physics."
  },
  {
    skill: "Critical thinking and problem-solving abilities",
    description: "Key for approaching complex physics problems, developing solutions, and analyzing experimental data critically."
  },
  {
    skill: "Laboratory and experimental skills",
    description: "Hands-on experience in laboratories to carry out experiments, collect data, and analyze results is essential in physics."
  },
  {
    skill: "Programming and computational skills",
    description: "Programming skills (e.g., Python, C++) are vital for data analysis, simulations, and solving complex physics problems."
  },
  {
    skill: "Strong analytical and abstract reasoning",
    description: "Physics often involves abstract concepts and theoretical models, making strong analytical skills essential."
  }
];
export const coreAreasOfStudy = [
  {
    area: "Classical Mechanics",
    description: "Study of the motion of bodies under the influence of forces, covering topics like Newton's laws, energy conservation, and momentum."
  },
  {
    area: "Quantum Mechanics",
    description: "Explores the behavior of matter and energy at atomic and subatomic scales, involving concepts like wave-particle duality and uncertainty principle."
  },
  {
    area: "Electromagnetism",
    description: "Study of electric and magnetic fields and their interactions, crucial for understanding forces, circuits, and electromagnetic waves."
  },
  {
    area: "Thermodynamics",
    description: "Focuses on the principles of energy conservation, heat transfer, and the relationship between different forms of energy in physical systems."
  },
  {
    area: "Statistical Physics",
    description: "Applies statistical methods to physical systems, linking microscopic properties to macroscopic behavior in systems like gases and fluids."
  },
  {
    area: "Optics",
    description: "Study of light and its interactions with matter, including reflection, refraction, diffraction, and the behavior of optical instruments."
  },
  {
    area: "Relativity",
    description: "Study of the theory of relativity, including special and general relativity, explaining how time, space, and gravity behave at high speeds and large masses."
  },
  {
    area: "Nuclear Physics",
    description: "Focuses on the structure, behavior, and reactions of atomic nuclei, including topics like nuclear decay and fission."
  }
];

export const topspecializations = [
  {
    specialization: "Quantum Physics",
    description: "Focuses on the study of quantum phenomena, including quantum mechanics, quantum field theory, and quantum computing."
  },
  {
    specialization: "Astrophysics",
    description: "Explores the physics of the universe, including the study of stars, galaxies, black holes, and cosmology."
  },
  {
    specialization: "Particle Physics",
    description: "Studies the fundamental particles of nature and their interactions, often through high-energy experiments in particle accelerators."
  },
  {
    specialization: "Condensed Matter Physics",
    description: "Explores the properties of matter in its solid and liquid states, including materials science, superconductivity, and magnetism."
  },
  {
    specialization: "Medical Physics",
    description: "Applies physics principles to medicine, focusing on medical imaging, radiation therapy, and diagnostics."
  },
  {
    specialization: "Computational Physics",
    description: "Uses computational methods to solve complex physics problems, including simulations, numerical models, and algorithm development."
  },
  {
    specialization: "Optics and Photonics",
    description: "Study of light and its applications, including lasers, optical fibers, and the development of optical technologies."
  },
  {
    specialization: "Nuclear Physics",
    description: "Involves the study of atomic nuclei and their interactions, nuclear reactions, and nuclear energy."
  }
];
export const trend = [
  {
    trend: "Quantum Computing",
    description: "Exploring the use of quantum-mechanical phenomena to perform computations, offering new possibilities for data processing and problem-solving."
  },
  {
    trend: "Machine Learning in Physics",
    description: "Leveraging machine learning techniques to analyze large data sets, model complex systems, and optimize experiments in physics."
  },
  {
    trend: "Clean Energy Technologies",
    description: "Research into sustainable energy sources, such as solar, wind, and nuclear fusion, to reduce carbon emissions and meet global energy needs."
  },
  {
    trend: "Quantum Sensors",
    description: "Developing sensors based on quantum principles that can measure physical quantities with unprecedented precision."
  },
  {
    trend: "Space Exploration",
    description: "Advancing technologies for exploring outer space, including space telescopes, planetary missions, and deep space communication."
  },
  {
    trend: "Advanced Materials Research",
    description: "Research into new materials with exceptional properties, such as superconductors, nanomaterials, and materials for energy storage."
  }
];
export const skills = [
  {
    skill: "Advanced mathematical modeling",
    description: "Ability to develop and apply mathematical models to describe and predict physical systems and phenomena."
  },
  {
    skill: "Data analysis and statistics",
    description: "Skills in analyzing experimental data, including error analysis, data fitting, and statistical interpretation."
  },
  {
    skill: "Scientific programming (Python, C++)",
    description: "Proficiency in programming languages such as Python and C++ to write algorithms, run simulations, and process data."
  },
  {
    skill: "Laboratory techniques and instrumentation",
    description: "Hands-on experience with laboratory tools and techniques used in physics experiments, such as oscilloscopes, spectrometers, and particle detectors."
  },
  {
    skill: "Technical writing and documentation",
    description: "Ability to write clear and concise technical reports, research papers, and documentation to communicate scientific findings."
  },
  {
    skill: "Problem-solving and critical thinking",
    description: "Skills in analyzing complex problems, thinking critically, and developing solutions using a scientific approach."
  },
  {
    skill: "Research methodology",
    description: "Understanding of research design, experimental procedures, and data analysis methods to conduct and interpret physics experiments."
  }
];

export const challengesArray = [
    "UNDERGRADUATE CHALLENGES",
    {
        heading: "Advanced mathematics requirements.",
        description: `Success requires mastery of complex mathematical concepts, including differential equations, linear algebra, and advanced calculus.`
    },
    {
        heading: "Abstract concept comprehension.",
        description: `Understanding quantum mechanics, relativity, and other abstract physical concepts can be intellectually challenging.`
    },
    {
        heading: "Laboratory work precision.",
        description: `Developing experimental skills and maintaining precise measurements while dealing with sophisticated equipment requires patience and attention to detail.`
    },
    {
        heading: "Computational demands.",
        description: `Learning programming languages and computational methods for data analysis and modeling can be demanding for students without prior coding experience.`
    }
];

export const issuesArray = [
    "CURRENT JOB ISSUES IN THE FIELD",
    {
        heading: "Limited academic positions.",
        description: `Strong competition for tenure-track positions in universities and research institutions requires extensive publication records and research experience.`
    },
    {
        heading: "Funding uncertainties.",
        description: `Research funding can be inconsistent and highly competitive, affecting job stability and project continuity in both academic and research sectors.`
    },
    {
        heading: "Industry transition challenges.",
        description: `Physics graduates moving to industry roles may need additional training in practical applications and business-oriented skills.`
    },
    {
        heading: "Rapid technological change.",
        description: `Keeping up with advancing technologies in areas like quantum computing and AI requires continuous learning and adaptation.`
    },
    {
        heading: "Geographic limitations.",
        description: `Many specialized physics jobs are concentrated in specific locations near major research facilities or tech hubs, requiring potential relocation.`
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
  
  