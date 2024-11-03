export const homepageInfo = [
    {
        courseName: "marine biology.",
        courseDefinition: "Marine Biology is the study of ocean ecosystems, marine organisms, and their interactions with the environment.",
        undergradsal: "$55,000",
        jobavail: "10,000",
        emprate: "89%",
    },
    
    {
        description: `Marine Biology involves the exploration of marine species and ecosystems, understanding the effects of human activity, and working toward the conservation and sustainable use of ocean resources.`,
        backgroundColor1:"#DDF0FF",
        backgroundColor2:"#E4F3FF",
        backgroundColor3:"#E9F4FD",
        fontColor: "#364F64",
        popupcolor1 : "#364F64",
        popupcolor2 : "#E4F3FF",
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
            name: "MARINE ECOLOGY",
            salaryRange: `${currency}60,000 - ${currency}90,000`,
            description: `Focuses on the relationships between marine organisms and their environments, including ecosystems, biodiversity, and conservation.`
        },
        {
            name: "OCEANOGRAPHY",
            salaryRange: `${currency}65,000 - ${currency}95,000`,
            description: `Studies the physical, chemical, and geological aspects of the ocean, influencing marine biology and environmental management.`
        },
        {
            name: "MARINE CONSERVATION",
            salaryRange: `${currency}55,000 - ${currency}85,000`,
            description: `Involves the protection and restoration of marine habitats, addressing the impact of pollution, overfishing, and climate change.`
        },
        {
            name: "MARINE ANIMAL BEHAVIOR",
            salaryRange: `${currency}60,000 - ${currency}90,000`,
            description: `Examines the behaviors of marine animals, their communication, migration, feeding, and social patterns.`
        },
        {
            name: "MARINE MICROBIOLOGY",
            salaryRange: `${currency}65,000 - ${currency}100,000`,
            description: `Studies microorganisms in marine environments, contributing to our understanding of marine ecosystems and biotechnology.`
        },
        {
            name: "AQUACULTURE",
            salaryRange: `${currency}55,000 - ${currency}85,000`,
            description: `Focuses on the farming of marine organisms for food, improving sustainability, and reducing overfishing impacts.`
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
    "Strong background in biology and ecology",
    "Interest in marine ecosystems and wildlife",
    "Fieldwork skills, including diving and sampling",
    "Data analysis and research skills",
    "Understanding of oceanography and environmental science"
];

export const coreAreasOfStudy = [
    "Marine Ecology",
    "Oceanography",
    "Marine Conservation",
    "Marine Animal Behavior",
    "Aquaculture",
    "Marine Microbiology",
    "Marine Biotechnology",
    "Environmental Impact Assessment"
];

export const jobGrowthFields = [
    "Marine Conservation",
    "Aquaculture",
    "Marine Biotechnology",
    "Sustainable Fisheries Management",
    "Oceanic Research and Exploration"
];

export const experienceSalary = [
    { experience: "0-1 YEARS EXPERIENCE", salaryRange: "$50,000 - $60,000" },
    { experience: "1-3 YEARS EXPERIENCE", salaryRange: "$60,000 - $75,000" },
    { experience: "4-6 YEARS EXPERIENCE", salaryRange: "$70,000 - $90,000" },
    { experience: "7-9 YEARS EXPERIENCE", salaryRange: "$80,000 - $100,000" }
];


export const topspecializations = [
    "Marine Ecology",
    "Marine Conservation",
    "Oceanography",
    "Aquaculture",
    "Marine Microbiology",
    "Marine Biotechnology",
    "Marine Animal Behavior"
];

export const trend = [
    "Ocean Acidification Research",
    "Sustainable Aquaculture",
    "Coral Reef Conservation",
    "Plastic Pollution Reduction",
    "Marine Renewable Energy"
];

export const skills = [
    "Knowledge of marine species and ecosystems",
    "Fieldwork expertise, including diving and surveying",
    "Proficiency in data collection and analysis",
    "Conservation and environmental management skills",
    "Understanding of marine policy and regulations",
    "Ability to work in remote and challenging environments",
    "Communication skills for scientific outreach"
];

export const challengesArray = [
    "UNDERGRADUATE CHALLENGES",
    {
        heading: "Fieldwork in challenging conditions.",
        description: `Marine biology often involves fieldwork in harsh and unpredictable environments, requiring physical endurance and adaptability.`
    },
    {
        heading: "Understanding complex ecosystems.",
        description: `Marine ecosystems are dynamic and interconnected, making it difficult to predict the impact of human activity and climate change.`
    },
    {
        heading: "Securing funding for research.",
        description: `Marine biology research often depends on grants and external funding, which can be competitive and limited.`
    },
    {
        heading: "Balancing conservation with human needs.",
        description: `Marine biologists must find solutions that protect ecosystems while allowing sustainable use of marine resources.`
    }
];

export const issuesArray = [
    "CURRENT JOB ISSUES IN THE FIELD",
    {
        heading: "Impact of climate change on marine life.",
        description: `Rising ocean temperatures and acidification are disrupting marine ecosystems, leading to challenges in conservation efforts.`
    },
    {
        heading: "Overfishing and habitat destruction.",
        description: `Unsustainable fishing practices and habitat loss threaten marine biodiversity and the balance of marine ecosystems.`
    },
    {
        heading: "Marine pollution.",
        description: `Plastic waste, oil spills, and other pollutants are causing significant harm to marine species and habitats.`
    },
    {
        heading: "Conservation policy and enforcement.",
        description: `Global marine conservation efforts face challenges in policy implementation, monitoring, and enforcement across international waters.`
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
  
  