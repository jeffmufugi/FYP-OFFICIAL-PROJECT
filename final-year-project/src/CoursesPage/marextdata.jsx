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

    import salaryData from '/../server/data/salary-dataMARusa.json';
    import salaryData2 from '/../server/data/salary-dataMARmy.json';
    
    export const countries = 
    [{"flag":"🇺🇸","file":salaryData,"currency":"$",id:1},
    {"flag":"🇲🇾","file":salaryData2,"currency":"MYR",id:2}];


    export const getTopCourses = (salaryData) => {
    
      const jobData = salaryData.data.find(job => job.title === 'Marine Ecology');

      const currency = jobData ? jobData.currency : null;
      console.log(currency );
      


      const meJob = salaryData?.data?.find(job => job.title === 'Marine Ecology');
      const ocJob = salaryData?.data?.find(job => job.title === 'Oceanography');
      const mcJob = salaryData?.data?.find(job => job.title === 'Marine Conservation');
      const mabJob = salaryData?.data?.find(job => job.title === 'Marine Animal Behavior');
      const mmJob = salaryData?.data?.find(job => job.title === 'Marine Microbiology');
      const aqJob = salaryData?.data?.find(job => job.title === 'Aquaculture');
      
      const validJobs = [meJob, ocJob, mcJob, mabJob, mmJob, aqJob];

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
            name: "Marine Ecology",
            salaryRange: `${currency}${salaryResults[0].minSalary} - ${currency}${salaryResults[0].maxSalary}`,
            description: `Focuses on the relationships between marine organisms and their environments, including ecosystems, biodiversity, and conservation.`,
            link: `${salaryResults[0].link}`,
            id: 1
          },
          {
            name: "Oceanography",
            salaryRange: `${currency}${salaryResults[1].minSalary} - ${currency}${salaryResults[1].maxSalary}`,
            description: `Studies the physical, chemical, and geological aspects of the ocean, influencing marine biology and environmental management.`,
            link: `${salaryResults[1].link}`,
            id: 2
          },
          {
            name: "Marine Conservation",
            salaryRange: `${currency}${salaryResults[2].minSalary} - ${currency}${salaryResults[2].maxSalary}`,
            description: `Involves the protection and restoration of marine habitats, addressing the impact of pollution, overfishing, and climate change.`,
            link: `${salaryResults[2].link}`,
            id: 3
          },
          {
            name: "Marine Animal Behavior",
            salaryRange: `${currency}${salaryResults[3].minSalary} - ${currency}${salaryResults[3].maxSalary}`,
            description: `Examines the behaviors of marine animals, their communication, migration, feeding, and social patterns.`,
            link: `${salaryResults[3].link}`,
            id: 4
          },
          {
            name: "Marine Microbiology",
            salaryRange: `${currency}${salaryResults[4].minSalary} - ${currency}${salaryResults[4].maxSalary}`,
            description: `Studies microorganisms in marine environments, contributing to our understanding of marine ecosystems and biotechnology.`,
            link: `${salaryResults[4].link}`,
            id: 5
          },
          {
            name: "Aquaculture",
            salaryRange: `${currency}${salaryResults[5].minSalary} - ${currency}${salaryResults[5].maxSalary}`,
            description: `Focuses on the farming of marine organisms for food, improving sustainability, and reducing overfishing impacts.`,
            link: `${salaryResults[5].link}`,
            id: 6
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


export const topspecializations = [
  {
    specialization: "Marine Ecology",
    description: "Study of marine organisms and their interactions with the environment."
  },
  {
    specialization: "Marine Conservation",
    description: "Focus on protecting marine ecosystems and biodiversity."
  },
  {
    specialization: "Oceanography",
    description: "Study of ocean dynamics, including physical, chemical, and biological processes."
  },
  {
    specialization: "Aquaculture",
    description: "Cultivation of aquatic organisms like fish, crustaceans, and plants for food and resources."
  },
  {
    specialization: "Marine Microbiology",
    description: "Study of microorganisms in marine environments and their ecological roles."
  },
  {
    specialization: "Marine Biotechnology",
    description: "Application of marine biological processes for innovation in medicine, energy, and materials."
  },
  {
    specialization: "Marine Animal Behavior",
    description: "Research into the behaviors and social interactions of marine species."
  }
];
export const trend = [
  {
    trend: "Ocean Acidification Research",
    description: "Investigating the impact of increased carbon dioxide on ocean chemistry and marine life."
  },
  {
    trend: "Sustainable Aquaculture",
    description: "Developing environmentally friendly and efficient aquaculture practices."
  },
  {
    trend: "Coral Reef Conservation",
    description: "Efforts to protect and restore coral reef ecosystems under threat from climate change and pollution."
  },
  {
    trend: "Plastic Pollution Reduction",
    description: "Innovative solutions to mitigate and remove plastic waste from marine environments."
  },
  {
    trend: "Marine Renewable Energy",
    description: "Harnessing energy from oceanic sources like waves, tides, and thermal gradients."
  }
];
export const skills = [
  {
    skill: "Knowledge of marine species and ecosystems",
    description: "Understanding the diversity and ecological roles of marine organisms."
  },
  {
    skill: "Fieldwork expertise, including diving and surveying",
    description: "Ability to conduct hands-on research and collect data in marine environments."
  },
  {
    skill: "Proficiency in data collection and analysis",
    description: "Skills to gather, process, and interpret scientific data effectively."
  },
  {
    skill: "Conservation and environmental management skills",
    description: "Applying strategies to preserve and restore marine ecosystems."
  },
  {
    skill: "Understanding of marine policy and regulations",
    description: "Knowledge of laws and policies governing marine conservation and resource use."
  },
  {
    skill: "Ability to work in remote and challenging environments",
    description: "Adaptability and resilience for conducting research in diverse marine settings."
  },
  {
    skill: "Communication skills for scientific outreach",
    description: "Conveying scientific findings to the public, policymakers, and stakeholders."
  }
];
export const prerequisites = [
  {
    skill: "Strong background in biology and ecology",
    description: "Foundational knowledge essential for understanding marine ecosystems."
  },
  {
    skill: "Interest in marine ecosystems and wildlife",
    description: "Passion for studying and protecting ocean life and environments."
  },
  {
    skill: "Fieldwork skills, including diving and sampling",
    description: "Experience with hands-on research techniques in aquatic settings."
  },
  {
    skill: "Data analysis and research skills",
    description: "Ability to interpret scientific data and present research findings."
  },
  {
    skill: "Understanding of oceanography and environmental science",
    description: "Knowledge of oceanic processes and their environmental implications."
  }
];
export const coreAreasOfStudy = [
  {
    area: "Marine Ecology",
    description: "Exploring the interactions between marine organisms and their environments."
  },
  {
    area: "Oceanography",
    description: "Studying oceanic processes and their effects on global systems."
  },
  {
    area: "Marine Conservation",
    description: "Learning about efforts to protect and sustainably manage marine ecosystems."
  },
  {
    area: "Marine Animal Behavior",
    description: "Understanding behavioral patterns and adaptations of marine species."
  },
  {
    area: "Aquaculture",
    description: "Focusing on sustainable practices in aquatic farming."
  },
  {
    area: "Marine Microbiology",
    description: "Investigating the roles of microorganisms in marine ecosystems."
  },
  {
    area: "Marine Biotechnology",
    description: "Applying marine biological knowledge to develop innovative technologies."
  },
  {
    area: "Environmental Impact Assessment",
    description: "Evaluating human activities' effects on marine environments and ecosystems."
  }
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
  
  