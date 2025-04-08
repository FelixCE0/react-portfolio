import React from 'react'
import { HiArrowRight } from "react-icons/hi";

const Card = ({ title, des, icon }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg border border-borderColor-light dark:border-borderColor-dark bg-cardBg-light dark:bg-cardBg-dark p-6 transition-all hover:shadow-shadowOne-light dark:hover:shadow-shadowOne-dark">
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-2">
          {icon ? (
            <span className="text-2xl text-designColor">{icon}</span>
          ) : (
            <div className="h-10 w-10">
              <div className="h-2 w-full rounded-full bg-designColor mb-2"></div>
              <div className="h-2 w-3/4 rounded-full bg-designColor"></div>
            </div>
          )}
          <h3 className="text-lg font-semibold text-lightText-light dark:text-lightText-dark">
            {title}
          </h3>
        </div>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">{des}</p>
        <div className="mt-auto">
          <span className="inline-flex items-center gap-1 text-sm font-medium text-designColor hover:gap-2 transition-all">
            Learn More <HiArrowRight className="text-base" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card