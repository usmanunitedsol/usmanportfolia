import React from 'react'
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiPytorch,
  SiFirebase,
  SiNextdotjs,
} from "react-icons/si";
const Skillset = () => {
  return (
    
    <div className='row skillset_row'>
         <h1 className="text-center"  style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Professional <strong className="purple">Skillset</strong>
            </h1>
               <div className='col-md-2 col-sm-4 skillset_card'>
               <CgCPlusPlus />
               </div>

               <div className='col-md-2 col-sm-4  skillset_card'>
               <DiJavascript1 />
                </div>


                <div className='col-md-2 col-sm-4  skillset_card'>
                <DiNodejs />
                </div>


                <div className='col-md-2 col-sm-4  skillset_card'>
                <DiReact />
                </div>

                <div className='col-md-2 col-sm-4  skillset_card'>
                <SiNextdotjs />
                </div>
                 <div className='col-md-2 col-sm-4  skillset_card'>
                <DiMongodb />
                </div>
                <div className='col-md-2 col-sm-4  skillset_card'>
                <DiGit />
                </div>

                
                <div className='col-md-2 col-sm-4  skillset_card'>
                <SiFirebase />
                </div>

                
                <div className='col-md-2 col-sm-4  skillset_card'>
                <DiPython />
                </div>

                
                <div className='col-md-2 col-sm-4  skillset_card'>
                <SiPytorch />
                </div>
    </div>
    
  
  )
}

export default Skillset
