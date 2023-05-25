import React from 'react'

import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
} from "react-icons/si";
const Tools = () => {
  return (
    <div className='row skillset_row my-4'>
    <h1 className="text-center"  style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
          <strong className="purple">Tools</strong> I USE
       </h1>
       
          <div className='col-2 skillset_card'>
          <SiLinux />
          </div>

          <div className='col-2 skillset_card'>
          <SiVisualstudiocode />
           </div>


           <div className='col-2 skillset_card'>
           <SiPostman />
           </div>


           <div className='col-2 skillset_card'>
           <SiVercel />
           </div>

           <div className='col-2 skillset_card'>
           <SiHeroku />
           </div>
          
</div>
  )
}

export default Tools
