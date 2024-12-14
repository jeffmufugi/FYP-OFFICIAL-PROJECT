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
  

    import salaryData from '/../server/data/salary-dataCYBusa.json';
    import salaryData2 from '/../server/data/salary-dataCYBmy.json';
    
    export const countries = 
    [{"flag":"🇺🇸","file":salaryData,"currency":"$",id:1},
    {"flag":"🇲🇾","file":salaryData2,"currency":"MYR",id:2}
    ];
    
    export const getTopCourses = (salaryData) => {
    
              const jobData = salaryData.data.find(job => job.title === 'Network Security');
    
              const currency = jobData ? jobData.currency : null;
              console.log(currency);
    
              const nsJob = salaryData?.data?.find(job => job.title === 'Network Security');
              const ehJob = salaryData?.data?.find(job => job.title === 'Ethical Hacking');
              const crJob = salaryData?.data?.find(job => job.title === 'Cryptography');
              const clpJob = salaryData?.data?.find(job => job.title === 'Cybersecurity Law & Policy');
              const maJob = salaryData?.data?.find(job => job.title === 'Malware Analysis');
              const csJob = salaryData?.data?.find(job => job.title === 'Cloud Security');

const validJobs = [nsJob, ehJob, crJob, clpJob, maJob, csJob];
    
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
                    name: "Network Security",
                    salaryRange: `${currency}${salaryResults[0].minSalary} - ${currency}${salaryResults[0].maxSalary}`,
                    description: `Covers securing networks from unauthorized access, malware, and cyber attacks through firewalls, VPNs, and secure protocols.`,
                    link: `${salaryResults[0].link}`,
                    id: 1
                  },
                  {
                    name: "Ethical Hacking",
                    salaryRange: `${currency}${salaryResults[1].minSalary} - ${currency}${salaryResults[1].maxSalary}`,
                    description: `Teaches how to simulate cyber attacks on systems to identify vulnerabilities and weaknesses before malicious hackers can exploit them.`,
                    link: `${salaryResults[1].link}`,
                    id: 2
                  },
                  {
                    name: "Cryptography",
                    salaryRange: `${currency}${salaryResults[2].minSalary} - ${currency}${salaryResults[2].maxSalary}`,
                    description: `Focuses on techniques for encrypting information to protect sensitive data from being intercepted or accessed by unauthorized individuals.`,
                    link: `${salaryResults[2].link}`,
                    id: 3
                  },
                  {
                    name: "Cybersecurity Law & Policy",
                    salaryRange: `${currency}${salaryResults[3].minSalary} - ${currency}${salaryResults[3].maxSalary}`,
                    description: `Examines the legal and policy aspects of cybersecurity, including regulatory frameworks, compliance, and data protection laws.`,
                    link: `${salaryResults[3].link}`,
                    id: 4
                  },
                  {
                    name: "Malware Analysis",
                    salaryRange: `${currency}${salaryResults[4].minSalary} - ${currency}${salaryResults[4].maxSalary}`,
                    description: `Explores methods for detecting, analyzing, and mitigating malicious software (malware) to prevent damage to systems and data.`,
                    link: `${salaryResults[4].link}`,
                    id: 5
                  },
                  {
                    name: "Cloud Security",
                    salaryRange: `${currency}${salaryResults[5].minSalary} - ${currency}${salaryResults[5].maxSalary}`,
                    description: `Focuses on securing cloud-based services and data, including encryption, access control, and securing virtualized infrastructure.`,
                    link: `${salaryResults[5].link}`,
                    id: 6
                  }
                ];
    };



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
      skill: "Strong foundation in computer science and networking",
      description: "Provides the necessary knowledge to understand and secure complex systems."
    },
    {
      skill: "Proficiency in programming languages like Python and JavaScript",
      description: "Enables scripting for automation, analyzing vulnerabilities, and building secure applications."
    },
    {
      skill: "Understanding of encryption, firewalls, and security protocols",
      description: "Essential for implementing and managing secure communication and data protection."
    },
    {
      skill: "Familiarity with penetration testing and vulnerability assessment tools",
      description: "Helps in identifying and mitigating potential threats and system vulnerabilities."
    },
    {
      skill: "Knowledge of cybersecurity laws and compliance requirements",
      description: "Ensures adherence to legal and regulatory standards in the field of cybersecurity."
    }
  ];
  export const coreAreasOfStudy = [
    {
      area: "Network Security",
      description: "Focuses on securing data communication and protecting against unauthorized access."
    },
    {
      area: "Ethical Hacking",
      description: "Involves legally testing systems to identify and fix security vulnerabilities."
    },
    {
      area: "Cryptography",
      description: "Studies methods for securing data through encryption and secure key exchange."
    },
    {
      area: "Cloud Security",
      description: "Explores protecting data and systems hosted on cloud platforms."
    },
    {
      area: "Malware Analysis",
      description: "Deals with understanding and mitigating threats posed by malicious software."
    },
    {
      area: "Cybersecurity Law and Policy",
      description: "Examines the legal and regulatory aspects of cybersecurity practices."
    },
    {
      area: "Incident Response",
      description: "Focuses on managing and mitigating the effects of security breaches."
    }
  ];

  export const topspecializations = [
    {
      specialization: "Network Security",
      description: "Protecting data integrity and confidentiality across computer networks."
    },
    {
      specialization: "Cryptography",
      description: "Securing data through advanced encryption techniques."
    },
    {
      specialization: "Cloud Security",
      description: "Ensuring the safety of data and applications in cloud environments."
    },
    {
      specialization: "Penetration Testing",
      description: "Simulating attacks to test system defenses and discover weaknesses."
    },
    {
      specialization: "Cybersecurity Law and Policy",
      description: "Understanding the intersection of cybersecurity and regulatory frameworks."
    },
    {
      specialization: "Incident Response",
      description: "Specializing in detecting, responding to, and recovering from cyber threats."
    }
  ];

  export const trend = [
    {
      trend: "Increase in cyberattacks on cloud infrastructure",
      description: "Rising reliance on cloud services has made them a primary target for cybercriminals."
    },
    {
      trend: "Growth in AI-based security solutions",
      description: "AI and machine learning are increasingly used for threat detection and prevention."
    },
    {
      trend: "Expansion of privacy regulations",
      description: "Countries are adopting stricter laws to protect user data and privacy."
    },
    {
      trend: "Emergence of IoT security threats",
      description: "The proliferation of connected devices has introduced new vulnerabilities."
    },
    {
      trend: "Ransomware attacks on critical infrastructure",
      description: "Critical sectors like healthcare and energy are being targeted by ransomware."
    }
  ];
  export const skills = [
    {
      skill: "Strong understanding of network protocols and architectures",
      description: "Foundational knowledge for identifying and addressing vulnerabilities in communication systems."
    },
    {
      skill: "Proficiency in scripting languages (Python, Bash)",
      description: "Used for automating security tasks and analyzing threat patterns."
    },
    {
      skill: "Experience with firewalls, VPNs, and IDS/IPS systems",
      description: "Critical for defending systems against unauthorized access and intrusion."
    },
    {
      skill: "Knowledge of encryption and public key infrastructure (PKI)",
      description: "Ensures secure data exchange and verification through cryptographic methods."
    },
    {
      skill: "Familiarity with penetration testing and ethical hacking tools",
      description: "Helps in actively finding and fixing system weaknesses."
    },
    {
      skill: "Ability to assess risks and implement security policies",
      description: "Important for minimizing vulnerabilities and adhering to best practices."
    },
    {
      skill: "Critical thinking and problem-solving skills",
      description: "Essential for identifying, analyzing, and resolving complex security challenges."
    }
  ];




export const jobGrowthFields = [
    "Cloud Security",
    "Cybercrime Investigation",
    "Data Privacy",
    "Internet of Things (IoT) Security",
    "Artificial Intelligence Security"
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




