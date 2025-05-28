import { SiPlaywright, SiTestcafe } from 'react-icons/si';

const PlaywrightNote = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 my-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border-l-4 border-purple-500">
      <div className="flex items-start">
        <div className="flex-shrink-0 p-3 bg-purple-100 dark:bg-purple-900/50 rounded-lg">
          <SiTestcafe className="h-8 w-8 text-purple-600 dark:text-purple-400" />
        </div>
        
        <div className="ml-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
            Playwright
            <span className="ml-2 px-2 py-1 text-xs font-semibold bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full">
              Modern Testing
            </span>
          </h3>
          
          <div className="mt-2 text-gray-600 dark:text-gray-300">
            <p className="mb-3">
              Playwright enables reliable end-to-end testing for modern web apps across all browsers
              with capabilities like auto-waiting and web-first assertions.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                  Cross-browser (Chromium, WebKit, Firefox)
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                  Auto-waiting and built-in assertions
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                  Mobile device emulation
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                  Multi-language support (JS/TS, Python, Java, .NET)
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 flex flex-wrap gap-3">
            <a 
              href="https://playwright.dev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-md transition-colors"
            >
              Official Website
            </a>
            <a 
              href="https://playwright.dev/docs/intro" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 border border-purple-600 text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/30 text-sm font-medium rounded-md transition-colors"
            >
              Documentation
            </a>
            <a 
              href="https://github.com/microsoft/playwright" 
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
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200">
          v1.30+
        </span>
      </div>
    </div>
  );
};

export default PlaywrightNote;