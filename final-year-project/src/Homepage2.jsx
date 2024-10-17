import g1 from "./site_icons/Gear1.svg";
import g2 from "./site_icons/Gears2.svg";
import g3 from "./site_icons/Gears3.svg";
import { motion } from "framer-motion";
import bg2 from "./site_icons/lines.svg";
import i4 from "./site_icons/PriceIcon.svg";
import i1 from "./site_icons/BookIcon.svg";
import i3 from "./site_icons/AssessmentIcon.svg";
import i2 from "./site_icons/BalanceIcon.svg";




const Homepage2 = () => {
  const sections = [
    {
      text: <motion.div initial={{ x: 100 ,opacity: 0 }}
      whileInView={{ x: 0 ,opacity: 1 }}
      transition={{ duration: 0.5,delay: 0 }}
      viewport={{ once: true }} >
        Explore diverse career opportunities across a wide range of STEM fields. 
        Each course recommendation is grounded in the latest industry insights, 
        giving you a clear vision of where your degree can lead. 
        We’re here to equip you with knowledge to map out your future with confidence
      </motion.div>,
      className: "sect1",
      icon: i1
    },
    {
      text: <motion.div initial={{ x: -100,opacity: 0  }}
      whileInView={{ x:0, opacity: 1}}
      transition={{ duration: 0.5,delay: 0.3 }}
      viewport={{ once: true }}>
        Based on your academic interests and personal strengths, 
        our platform connects you with programs tailored to your goals. 
        Weighing the pros and cons of each option ensures you will 
        make a balanced & informed choice that aligns with your aspirations.
      </motion.div>,
      className: "sect2",
      icon: i2
    },
    {
      text: <motion.div initial={{  x: 100,opacity: 0  }}
      whileInView={{  x: 0,opacity: 1  }}
      transition={{ duration: 0.5,delay: 0.6 }}
      viewport={{ once: true }}>
        Get access to real-life data on graduate employment rates, 
        industry demand, and future job outlooks for different sectors. 
        Make your course decisions confidently with our detailed, 
        evidence-based insights.
      </motion.div>,
      className: "sect3",
      icon: i3
    },
    {
      text: <motion.div initial={{  x: -100,opacity: 0 }}
      whileInView={{  x: 0,opacity: 1 }}
      transition={{ duration: 0.5,delay: 0.8 }}
      viewport={{ once: true }}>
        Stay ahead with data on emerging trends in STEM fields. 
        Learn about job growth, salary projections, and the specific skills
        employers are looking for. Our insights help you make
        informed decisions on the STEM courses that will lead you to success.
      </motion.div>,
      className: "sect4",
      icon: i4
    }
  ];


  return (
    <div className="second-section" id="second-section">
      <img src={bg2} className="bg2line"/>
      <div className="top-hlf">
        <div className="left-hp2">
              <motion.h1 className="main-txt2">
                get detailed insights<br/> for your future<br/> career path.
              </motion.h1>
        </div>
        <div className="right-hp2">
           <StaticGears />
        </div> 
      </div>
      
      <div className="main-sect2">
        <div className="left-main2"></div>
        <div className="text-inf">
          {sections.map((section, index) => (
              <Section key={index} className={section.className} icon={section.icon}>
                <SectionText>{section.text}</SectionText>
              </Section>
            ))}
      </div>
        <div className="right-main2"></div>


      </div>
     
    </div>
  );
};

export default Homepage2;







const StaticGears = () => {
  return (
    <div className="gears-container">
      <motion.img src={g1} className="gear1" alt="Gear 1" animate={{ rotate: [0, 360] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}/>
      <motion.img src={g2} className="gear2" alt="Gear 2" animate={{ rotate: [0, 360] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}/>
      <motion.img src={g3} className="gear3" alt="Gear 3" animate={{ rotate: [360, 0] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}/>
    </div>
  );
};

const SectionText = ({ children }) => (
  <p className="inf-text">{children}</p>
);

const Section = ({ children, className, icon }) => (
  <div className={className}>
    <div className="section-content">{children}</div>
    <div className="iconmain2"><motion.img src={icon} alt="Section icon" className="section-icon"  initial={{ opacity: 0,skew:90  }}
  whileInView={{ opacity: 1,skew:0}}
  transition={{ duration: 1, delay: 2 }}
  viewport={{ once: true }}/></div>
</div>
);


