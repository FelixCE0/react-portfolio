import React from 'react'
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";

const ProjectsCard = ({ title, des, src }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg border border-borderColor-light dark:border-borderColor-dark bg-cardBg-light dark:bg-cardBg-dark transition-all hover:shadow-shadowOne-light dark:hover:shadow-shadowOne-dark">
      <div className="relative aspect-video overflow-hidden">
        <img
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          src={src}
          alt={title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-lightText-light dark:text-lightText-dark">
            {title}
          </h3>
          <div className="flex gap-3">
            <a href="#" className="text-zinc-600 hover:text-lightText-light dark:text-zinc-400 dark:hover:text-lightText-dark transition-colors">
              <BsGithub className="text-xl" />
            </a>
            <a href="#" className="text-zinc-600 hover:text-lightText-light dark:text-zinc-400 dark:hover:text-lightText-dark transition-colors">
              <FaGlobe className="text-xl" />
            </a>
          </div>
        </div>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          {des}
        </p>
      </div>
    </div>
  );
}

export default ProjectsCard;