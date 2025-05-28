import { SiCypress } from 'react-icons/si';

const CypressNote = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 my-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border-l-4 border-cyan-500">
      <div className="flex items-start">
        <div className="flex-shrink-0 p-3 bg-cyan-100 dark:bg-cyan-900/50 rounded-lg">
          <SiCypress className="h-8 w-8 text-cyan-600 dark:text-cyan-400" />
        </div>
        
        <div className="ml-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
            Cypress Testing Framework
            <span className="ml-2 px-2 py-1 text-xs font-semibold bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200 rounded-full">
              E2E Testing
            </span>
          </h3>
          
          <div className="mt-2 text-gray-600 dark:text-gray-300">
            <p className="mb-3">
              Cypress is a next-generation front-end testing tool built for the modern web. 
              It enables you to write faster, easier, and more reliable tests.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                  Real-time reloads and automatic waiting
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                  Time travel debugging
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                  Built-in screenshot and video recording
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                  Cross-browser testing support
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 flex flex-wrap gap-3">
            <a 
              href="https://www.cypress.io" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white text-sm font-medium rounded-md transition-colors"
            >
              Official Website
            </a>
            <a 
              href="https://docs.cypress.io" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 border border-cyan-600 text-cyan-600 dark:text-cyan-400 hover:bg-cyan-50 dark:hover:bg-cyan-900/30 text-sm font-medium rounded-md transition-colors"
            >
              Documentation
            </a>
            <a 
              href="https://github.com/cypress-io/cypress" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm font-medium rounded-md transition-colors"
            >
              GitHub Repository
            </a>
          </div>
        </div>
      </div>
      
      {/* Version badge */}
      <div className="absolute top-4 right-4">
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200">
          v10.0+
        </span>
      </div>
    </div>
  );
};

export default CypressNote;