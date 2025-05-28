import { SiSelenium } from 'react-icons/si';

const SeleniumNote = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 my-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border-l-4 border-emerald-500">
      <div className="flex items-start">
        <div className="flex-shrink-0 p-3 bg-emerald-100 dark:bg-emerald-900/50 rounded-lg">
          <SiSelenium className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
        </div>
        
        <div className="ml-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
            Selenium WebDriver
            <span className="ml-2 px-2 py-1 text-xs font-semibold bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 rounded-full">
              Browser Automation
            </span>
          </h3>
          
          <div className="mt-2 text-gray-600 dark:text-gray-300">
            <p className="mb-3">
              Selenium is a powerful tool for controlling web browsers through programs and 
              automating browser testing across many platforms.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                  Supports multiple languages (Java, Python, C#, etc.)
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                  Cross-browser testing (Chrome, Firefox, Safari, etc.)
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                  Large community and ecosystem
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                  Integrates with testing frameworks (JUnit, TestNG, etc.)
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 flex flex-wrap gap-3">
            <a 
              href="https://www.selenium.dev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium rounded-md transition-colors"
            >
              Official Website
            </a>
            <a 
              href="https://www.selenium.dev/documentation" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 border border-emerald-600 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 text-sm font-medium rounded-md transition-colors"
            >
              Documentation
            </a>
            <a 
              href="https://github.com/SeleniumHQ/selenium" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm font-medium rounded-md transition-colors"
            >
              GitHub Repository
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute top-4 right-4">
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200">
          v4.0+
        </span>
      </div>
    </div>
  );
};

export default SeleniumNote;