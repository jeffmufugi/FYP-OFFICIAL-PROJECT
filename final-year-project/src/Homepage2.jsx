import g1 from "/Users/mvsterjeffrey/Desktop/FYP-OFFICIAL-PROJECT/final-year-project/src/site_icons/Gear1.svg";
import g2 from "/Users/mvsterjeffrey/Desktop/FYP-OFFICIAL-PROJECT/final-year-project/src/site_icons/Gears2.svg";
import g3 from "/Users/mvsterjeffrey/Desktop/FYP-OFFICIAL-PROJECT/final-year-project/src/site_icons/Gears3.svg";
import {motion} from "framer-motion";
import bg2 from "/Users/mvsterjeffrey/Desktop/FYP-OFFICIAL-PROJECT/final-year-project/src/site_icons/lines.svg";




const Homepage2 = () => {
  const sections = [
    {
      text: <motion.div initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }} >
        Dive into a variety of career paths across multiple STEM fields.
        <br/>Each course recommendation is backed by up-to-date industry data, 
        <br/>helping you understand where each degree can take you.
        <br/>We give you the tools to see your potential future and plan accordingly.
      </motion.div>,
      className: "sect1"
    },
    {
      text: <motion.div initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      viewport={{ once: true }}>
        <br/>Based on your academic interests and personal strengths, 
        <br/>our platform suggests university programs that align with your goals. 
        <br/>Whether you're passionate about technology, business, or the arts, 
        <br/>we'll match you with the right opportunities.
      </motion.div>,
      className: "sect2"
    },
    {
      text: <motion.div initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 3 }}
      viewport={{ once: true }}>
        <br/>Get access to real-life data on graduate employment rates, 
        <br/>industry demand, and future job outlooks for different sectors. 
        <br/>Make your course decisions confidently with our detailed, 
        <br/>evidence-based insights.
      </motion.div>,
      className: "sect3"
    },
    {
      text: <motion.div initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 4 }}
      viewport={{ once: true }}>
        <br/>Stay ahead with data on emerging trends in STEM fields. 
        <br/>Learn about job growth, salary projections, and 
        <br/>the specific skills employers are looking for. 
        <br/>Our insights help you make informed decisions on the 
        <br/>STEM courses that will lead you to success.
      </motion.div>,
      className: "sect4"
    }
  ];


  return (
    <div className="second-section" id="second-section">
      <img src={bg2} className="bg2line"/>
      <div className="top-hlf">
        
        <motion.h1 className="main-txt2" initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      viewport={{ once: true }}>
          get detailed insights<br/> for your future<br/> career path.
        </motion.h1>
        <StaticGears />
      </div>
      
      <div className="text-inf">

        {sections.map((section, index) => (
          <Section key={index} className={section.className}>
            <SectionText>{section.text}</SectionText>
          </Section>
        ))}


      </div>
    </div>
  );
};

export default Homepage2;







const StaticGears = () => {
  return (
    <div className="gear-images">
      <motion.img src={g1} className="gear1" alt="Gear 1" animate={{ rotate: [0, 360] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}/>
      <motion.img src={g2} className="gear2" alt="Gear 2" animate={{ rotate: [0, 360] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}/>
      <motion.img src={g3} className="gear3" alt="Gear 3" animate={{ rotate: [360, 0] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}/>
    </div>
  );
};

const SectionText = ({ children }) => (
  <p className="inf-text">{children}</p>
);

const Section = ({ children, className }) => (
  <div className={className}>{children}</div>
);

