import React from 'react'
import {
  RiBriefcaseLine,
  RiBookmarkLine,
  RiUserFollowLine,
  RiEyeLine,
  RiFilePaper2Line
} from "react-icons/ri";


const Analysis = () => {

    const analysis = [
  {
    name: "Applied Jobs",
    quantity: 22,
    icon: <RiBriefcaseLine className="text-blue-500 text-3xl" />
  },
  {
    name: "Saved Jobs",
    quantity: 8,
    icon: <RiBookmarkLine className="text-yellow-500 text-3xl" />
  },
  {
    name: "Profile Views",
    quantity: 143,
    icon: <RiEyeLine className="text-green-500 text-3xl" />
  },
  {
    name: "Resume Uploaded",
    quantity: 1,
    icon: <RiFilePaper2Line className="text-purple-500 text-3xl" />
  },
  {
    name: "Connections",
    quantity: 12,
    icon: <RiUserFollowLine className="text-pink-500  text-3xl" />
  }
];

  return (
   <div className="grid grid-cols-2 gap-4">
  {analysis.map((item, index) => (
    <div
      key={index}
      className="bg-white p-3 rounded-xl shadow-md flex items-center space-x-4 hover:bg-slate-700 hover:text-white"
    >
      
      <div>
        <p className="text-gray-600">{item.name}</p>
        <p className="text-3xl font-bold">{item.quantity}</p>
      </div>
      <div className=' h-full '>
         <div className='' >{item.icon}</div>
      </div>
     
    </div>
  ))}
</div>
  )
}

export default Analysis