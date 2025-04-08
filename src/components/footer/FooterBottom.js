import React from 'react'

const FooterBottom = () => {
  return (
    <div className="w-full py-8 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © 2025 Felix Correa. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FooterBottom