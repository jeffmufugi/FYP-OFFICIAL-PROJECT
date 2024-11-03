export const homepageInfo = [
    {
        courseName: "physics.",
        courseDefinition: "Physics explores the fundamental principles governing matter, energy, space, and time at all scales.",
        undergradsal: "$75,000",
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

    import salaryData from '/Users/mvsterjeffrey/Desktop/FYP-OFFICIAL-PROJECT/server/data/salary-data.json'; // Adjust path accordingly
    import salaryData2 from '/Users/mvsterjeffrey/Desktop/FYP-OFFICIAL-PROJECT/server/data/salary-dataMY.json'; // Adjust path accordingly
    
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
            name: "QUANTUM COMPUTING",
            salaryRange: `${currency}120,000 - ${currency}180,000`,
            description: `Research and develop quantum systems for computing applications, working with quantum bits, gates, and algorithms. Focus on advancing quantum technology for practical computing solutions.`
        },
        {
            name: "MEDICAL PHYSICS",
            salaryRange: `${currency}130,000 - ${currency}190,000`,
            description: `Apply physics principles to medicine, particularly in radiation therapy, medical imaging, and diagnostic technologies. Ensure safe and effective use of radiation in medical treatments.`
        },
        {
            name: "PARTICLE PHYSICS",
            salaryRange: `${currency}85,000 - ${currency}140,000`,
            description: `Study fundamental particles and their interactions, working at research facilities with particle accelerators and detectors to understand the basic building blocks of matter.`
        },
        {
            name: "CONDENSED MATTER PHYSICS",
            salaryRange: `${currency}90,000 - ${currency}150,000`,
            description: `Research properties of matter in solid and liquid states, developing new materials for electronics, energy storage, and quantum technologies.`
        },
        {
            name: "ASTROPHYSICS",
            salaryRange: `${currency}80,000 - ${currency}140,000`,
            description: `Study celestial objects, galaxies, and phenomena in the universe, using advanced telescopes and computational methods to understand cosmic evolution.`
        },
        {
            name: "COMPUTATIONAL PHYSICS",
            salaryRange: `${currency}100,000 - ${currency}160,000`,
            description: `Develop and apply numerical methods and computer simulations to solve complex physical problems, from climate modeling to molecular dynamics.`
        },
        {
            name: "PLASMA PHYSICS",
            salaryRange: `${currency}95,000 - ${currency}155,000`,
            description: `Study ionized gases and their applications in fusion energy, space propulsion, and materials processing, working on cutting-edge energy solutions.`
        },
        {
            name: "OPTICS AND PHOTONICS",
            salaryRange: `${currency}100,000 - ${currency}165,000`,
            description: `Research light-matter interactions and develop applications in laser technology, fiber optics, and optical computing, crucial for communications and sensing.`
        },
        {
            name: "BIOPHYSICS",
            salaryRange: `${currency}85,000 - ${currency}145,000`,
            description: `Apply physics principles to biological systems, studying molecular structures, cellular mechanics, and developing new techniques for medical diagnosis and treatment.`
        },
        {
            name: "NUCLEAR PHYSICS",
            salaryRange: `${currency}110,000 - ${currency}170,000`,
            description: `Study atomic nuclei, nuclear reactions, and applications in energy production, medical treatments, and national security, working in labs or power facilities.`
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
    "Strong foundation in mathematics, including calculus",
    "Critical thinking and problem-solving abilities",
    "Laboratory and experimental skills",
    "Programming and computational skills",
    "Strong analytical and abstract reasoning"
];

export const coreAreasOfStudy = [
    "Classical Mechanics",
    "Quantum Mechanics",
    "Electromagnetism",
    "Thermodynamics",
    "Statistical Physics",
    "Optics",
    "Relativity",
    "Nuclear Physics"
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



export const topspecializations = [
    "Quantum Physics",
    "Astrophysics",
    "Particle Physics",
    "Condensed Matter Physics",
    "Medical Physics",
    "Computational Physics",
    "Optics and Photonics",
    "Nuclear Physics"
];

export const trend = [
    "Quantum Computing",
    "Machine Learning in Physics",
    "Clean Energy Technologies",
    "Quantum Sensors",
    "Space Exploration",
    "Advanced Materials Research"
];

export const skills = [
    "Advanced mathematical modeling",
    "Data analysis and statistics",
    "Scientific programming (Python, C++)",
    "Laboratory techniques and instrumentation",
    "Technical writing and documentation",
    "Problem-solving and critical thinking",
    "Research methodology"
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
  
  