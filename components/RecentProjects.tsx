"use client";

import { projects } from '@/data'
import React from 'react'
// import PinContainer from './UI/3D-Pin';

const RecentProjects = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
        A Small Selection of {" "}
        <span className="text-purple-001">Recent Projects</span>
      </h1>
      <div className='flex flex-wrap items-center justify-center p-4 gap-16 mt-10'>
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div key={id} className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]">
              {title}, {des}, {link}, {img}, {iconLists}
              {/* <PinContainer title={title} href={undefined}>
                <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh]">
                  <div>
                    <img src="/bg.png" alt="bg-img" />
                  </div>
                    <img src={img} alt={title} className="z-10 absolute bottom-0" />
                </div>
              </PinContainer> */}
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentProjects