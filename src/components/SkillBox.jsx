import React, { useContext } from 'react'
import { MyContext } from '../Context/ContextProvider'

const SkillBox = ({icon , title}) => {

  const {handleToolTip}=useContext(MyContext)
  return (
    <div onMouseLeave={()=>handleToolTip('')} onMouseEnter={()=>handleToolTip(title)} className=' text-ellipsis m-auto   w-24 p-1'>
      <img className='w-16 m-auto' alt={title} src={icon}/>
    </div>
  )
}

export default SkillBox
