export const homepageInfo = [
    {
        courseName: "cybersecurity.",
        courseDefinition: "Cybersecurity focuses on protecting systems, networks, and programs from digital attacks, often involving securing information from unauthorized access and cyber threats.",
        undergradsal: "$90,000",
        jobavail: "100,000",
        emprate: "95%",
    },
    
    {
        description: `Cybersecurity professionals are responsible for defending against attacks on critical infrastructures, ensuring data privacy, and securing communication systems across various industries.`,
        backgroundColor1:"#E3ECFD",
        backgroundColor2:"#DBE5F9",
        backgroundColor3:"#D1E0F7",
        fontColor: "#364F64",
        popupcolor1 : "#063866",
        popupcolor2 : "#E3ECFD",
    }
];

//USA 
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
                      name: "NETWORK SECURITY",
                      salaryRange: `${currency}85,000 - ${currency}120,000`,
                      description: `Covers securing networks from unauthorized access, malware, and cyber attacks through firewalls, VPNs, and secure protocols.`
                  },
                  {
                      name: "ETHICAL HACKING",
                      salaryRange: `${currency}90,000 - ${currency}130,000`,
                      description: `Teaches how to simulate cyber attacks on systems to identify vulnerabilities and weaknesses before malicious hackers can exploit them.`
                  },
                  {
                      name: "CRYPTOGRAPHY",
                      salaryRange: `${currency}95,000 - ${currency}135,000`,
                      description: `Focuses on techniques for encrypting information to protect sensitive data from being intercepted or accessed by unauthorized individuals.`
                  },
                  {
                      name: "CYBERSECURITY LAW & POLICY",
                      salaryRange: `${currency}80,000 - ${currency}110,000`,
                      description: `Examines the legal and policy aspects of cybersecurity, including regulatory frameworks, compliance, and data protection laws.`
                  },
                  {
                      name: "MALWARE ANALYSIS",
                      salaryRange: `${currency}90,000 - ${currency}125,000`,
                      description: `Explores methods for detecting, analyzing, and mitigating malicious software (malware) to prevent damage to systems and data.`
                  },
                  {
                      name: "CLOUD SECURITY",
                      salaryRange: `${currency}95,000 - ${currency}135,000`,
                      description: `Focuses on securing cloud-based services and data, including encryption, access control, and securing virtualized infrastructure.`
                  }
              ]
    };


export const prerequisites = [
    "Strong foundation in computer science and networking",
    "Proficiency in programming languages like Python and JavaScript",
    "Understanding of encryption, firewalls, and security protocols",
    "Familiarity with penetration testing and vulnerability assessment tools",
    "Knowledge of cybersecurity laws and compliance requirements"
];

export const coreAreasOfStudy = [
    "Network Security",
    "Ethical Hacking",
    "Cryptography",
    "Cloud Security",
    "Malware Analysis",
    "Cybersecurity Law and Policy",
    "Incident Response"
];

export const jobGrowthFields = [
    "Cloud Security",
    "Cybercrime Investigation",
    "Data Privacy",
    "Internet of Things (IoT) Security",
    "Artificial Intelligence Security"
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
    "Network Security",
    "Cryptography",
    "Cloud Security",
    "Penetration Testing",
    "Cybersecurity Law and Policy",
    "Incident Response"
];

export const trend = [
    "Increase in cyberattacks on cloud infrastructure",
    "Growth in AI-based security solutions",
    "Expansion of privacy regulations",
    "Emergence of IoT security threats",
    "Ransomware attacks on critical infrastructure"
];

export const skills = [
    "Strong understanding of network protocols and architectures",
    "Proficiency in scripting languages (Python, Bash)",
    "Experience with firewalls, VPNs, and IDS/IPS systems",
    "Knowledge of encryption and public key infrastructure (PKI)",
    "Familiarity with penetration testing and ethical hacking tools",
    "Ability to assess risks and implement security policies",
    "Critical thinking and problem-solving skills"
];

export const challengesArray = [
    "UNDERGRADUATE CHALLENGES",
    {
        heading: "Keeping up with evolving threats.",
        description: `The cybersecurity landscape is constantly changing, requiring continuous learning to stay ahead of new attack vectors and threats.`
    },
    {
        heading: "Balancing security and usability.",
        description: `Striking a balance between providing strong security measures and maintaining user-friendly systems is often challenging.`
    },
    {
        heading: "Handling cyber incidents in real-time.",
        description: `Responding to cyber attacks and breaches in real-time can be stressful and requires quick decision-making under pressure.`
    },
    {
        heading: "Complex regulations.",
        description: `Navigating the intricate legal and regulatory requirements around cybersecurity, especially in international contexts, can be difficult.`
    }
];


export const issuesArray = [
    "CURRENT JOB ISSUES IN THE FIELD",
    {
        heading: "Shortage of skilled professionals.",
        description: `There is a significant gap between the demand for cybersecurity professionals and the number of qualified candidates.`
    },
    {
        heading: "Sophistication of cyber threats.",
        description: `Cyber attacks are becoming more advanced, requiring stronger defenses and more skilled professionals to counter them.`
    },
    {
        heading: "Privacy vs. security debate.",
        description: `Balancing user privacy with the need for security continues to be a major challenge, especially in regulated industries like finance and healthcare.`
    },
    {
        heading: "Cost of implementing security measures.",
        description: `Small businesses often struggle with the financial burden of implementing strong cybersecurity measures.`
    }
];




