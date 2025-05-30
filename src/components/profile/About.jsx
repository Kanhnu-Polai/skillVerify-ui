import React from 'react';
import { RiAccountCircleLine, RiBriefcaseLine, RiBookmarkLine, RiFilePaper2Line, RiLogoutBoxLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";

const About = ({ setActiveSession }) => {
  const btns = [
    {
      name: "Account",
      icon: <RiAccountCircleLine />,
      onClick: () => setActiveSession("account")
    },
    {
      name: "Analysis",
      icon: <IoSettingsOutline />,
      onClick: () => setActiveSession("analysis")
    },
    {
      name: "My Jobs",
      icon: <RiBriefcaseLine />,
      onClick: () => setActiveSession("myJobs")
    },
    {
      name: "Saved Jobs",
      icon: <RiBookmarkLine />,
      onClick: () => setActiveSession("savedJobs")
    },
    {
      name: "Resume Builder",
      icon: <RiFilePaper2Line />,
      onClick: () => setActiveSession("resumeBuilder")
    },
    {
      name: "Logout",
      icon: <RiLogoutBoxLine />,
      onClick: () => setActiveSession("logout")
    }
  ];

  return (
    <div className='h-full w-60 bg-slate-800 p-4 rounded-b-md'>
      <div className='flex space-x-3 items-center mb-4'>
        <div className='bg-white w-20 h-20 rounded-full flex justify-center items-center text-black font-bold'>
          Profile
        </div>
        <div>
          <h1 className='text-2xl font-semibold antialiased text-white'>
            Kanhu Polai
          </h1>
        </div>
      </div>
      <hr className="border-slate-500" />
      <div className='mt-4'>
        {btns.map((btn, index) => (
          <div
            key={index}
            onClick={btn.onClick}
            className='flex items-center h-10 text-xl text-slate-400 rounded-md m-2 p-2 space-x-3 hover:bg-slate-600 hover:text-slate-200 cursor-pointer'
          >
            {btn.icon}
            <span>{btn.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;