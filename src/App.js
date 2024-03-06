import React from "react";
import "./App.css";
import {motion} from "framer-motion"
import shark from "./assests/shark.png"
function App() {
  return (
   
    <div className="padding-section-medium">
      <div className="home_header-grid">
        <div className="home_header-left-wrapper">
          
              
              <motion.h1 className='earn-income' 
initial={{x:10}}
animate={{x:-10}}
transition={{
    
    type:"smooth",
    duration:2,
    repeat: Infinity
}}
>Earn your
first income</motion.h1>

<div className="header">
<motion.div className='info-text'

initial={{opacity:0,y:50}}
animate={{opacity:1,y:0}}
transition={{duration:0.5 ,delay:1}}>
Real companies, real projects, real earnings and real money


</motion.div>
<motion.div className='info-text-1'

initial={{opacity:0,y:50}}
animate={{opacity:1,y:0}}
transition={{duration:0.3 ,delay:2}}>
Smart opportunities for the smart generation

</motion.div>
</div>
              
                <div className="header-cta-wrapper">
                  <div className="text-block">
                    Download&nbsp;App</div>
                    <div className="download-app-wrapper">
                      <div>
                      <a href="https://play.google.com/store/apps/details?id=com.wishbanc.funngro" className="download-app-cta w-inline-block"><img src="https://assets-global.website-files.com/638b48215fd2fd34538fa6bc/638c80744c238bae49b47ff4_image%2027.png" width="150px" loading="lazy" alt="Get it on Google Play Banner" className="image-full-width"/>
                      </a>
                      </div>
                     <div>
                     <a href="https://apps.apple.com/in/app/funngro/id1579361075" className="download-app-cta w-inline-block">
                          <img src="https://assets-global.website-files.com/638b48215fd2fd34538fa6bc/638c80746a8a27189ca05fb9_image%2029.png" width="150px" loading="lazy" alt="Download on the App Store Banner" className="image-full-width"/>
                          </a>
                     </div>
                       </div></div>
                          
                          
                          
                          </div>
                          
                          <div className="header-right-wrapper">
                          <div className='shark-container'>
<motion.img src={shark} className='shark'
initial={{y:-10}}
animate={{y:10}}
transition={{
    
    type:"smooth",
    repeatType:"mirror",
    duration:2,
    repeat: Infinity
}}/>

<img/>
      </div>
                            </div>
                            </div>
                            </div>
   
  );
}

export default App;
