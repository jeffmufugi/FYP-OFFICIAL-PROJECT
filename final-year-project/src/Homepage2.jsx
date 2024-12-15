import g1 from "./site_icons/Gear1.svg";
import g2 from "./site_icons/Gears2.svg";
import g3 from "./site_icons/Gears3.svg";
import { motion } from "framer-motion";
import bg2 from "./site_icons/lines.svg";
import i4 from "./site_icons/PriceIcon.svg";
import i1 from "./site_icons/bookIcon.svg";
import i3 from "./site_icons/AssessmentIcon.svg";
import i2 from "./site_icons/BalanceIcon.svg";
import mp from "./site_icons/probody.svg";
import vd from "./site_icons/usevideo.mov";
import gn from "./site_icons/greem.png";
import gx from "./site_icons/glow.png";
import gl from "./site_icons/greenline.png";
const Homepage2 = () => {

  return (
    <div className="second-section" id="second-section">
      <img src={bg2} className="bg2line"/>
      
      <div style={{display:"flex",zIndex:"9",flexDirection:"column",justifyContent:"center",width:"38vw"}}>
        <motion.h1 initial={{ x: -100 ,opacity: 1 }}
                        whileInView={{ x: 0 ,opacity: 1 }}
                        transition={{ duration: 0.5,delay: 0 }}
                        viewport={{ once: true }}className="txt-p3">Reliable</motion.h1>
        <motion.h1 initial={{ x: -100 ,opacity: 1 }}
                        whileInView={{ x: 0 ,opacity: 1 }}
                        transition={{ duration: 0.5,delay: 0 }}
                        viewport={{ once: true }} className="txt-p2">data you can<br/>TRUST from<br/>official sources.</motion.h1>
        <motion.p initial={{ x: -100 ,opacity: 1 }}
                        whileInView={{ x: 0 ,opacity: 1 }}
                        transition={{ duration: 0.5,delay: 0 }}
                        viewport={{ once: true }} className="wdwd-txt2">view verified data from official government<br/> resources and real salary information<br/> submitted by employees and employers</motion.p>
        <img className="moneybagg"src={gn} alt="" style={{width:"50%",height:"auto",alignSelf:"center"}}/>
        <img className="moneybagg2" src={gx} alt="" />
        
      </div>
      
      <div style={{display:"flex",flex:1,justifyContent:"center",alignItems:"center"}}>
        <img src={mp} style={{position:"absolute",width:"70vw",height:"auto",zIndex:"8",right:"-3vw"}} alt="" />
        
         <div className="glow"style={{position:"absolute",width:"55.3vw",height:"auto",zIndex:"7",right:"4.4vw",backgroundColor:"black",overflow: "hidden",aspectRatio:"1.4/1" }}>
         <video
              style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  overflow: "hidden"
              }}
              autoPlay
              loop
              muted
          >
              <source src={vd}  />
              Your browser does not support the video tag.
          </video>
          
                  </div>
                  {/* <img className="moneybagg3" src={gl} alt="" style={{zIndex:"4"}}/> */}
                  <div className="moneybagg3"></div>
                  

      </div>
    
    </div>
    
  );
};

export default Homepage2;






