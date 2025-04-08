import React from 'react'

const ResumeCard = ({ title, subTitle, date, children }) => {
  return (
    <div className="w-full rounded-lg border border-borderColor-light dark:border-borderColor-dark bg-cardBg-light dark:bg-cardBg-dark p-6 lg:p-8">
      <div className="flex flex-col gap-4">
        <h3 className="text-xl font-semibold text-zinc-900 dark:text-lightText-dark">
          {title}
        </h3>
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className="text-base text-zinc-700 dark:text-zinc-300">
              {subTitle}
            </span>
            <span className="text-sm text-zinc-500 dark:text-zinc-400">
              {date}
            </span>
          </div>
        </div>
        <div className="mt-2 text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  )
}

export default ResumeCard