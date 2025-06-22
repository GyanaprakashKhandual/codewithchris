import React, { useState, useEffect } from 'react';
import { Copy, Check, Zap, Code2, Terminal, ClipboardList, ExternalLink, Sparkles, Brain, Rocket } from 'lucide-react';

const CypressBlog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [copiedId, setCopiedId] = useState(null);
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://protbackend-woho.onrender.com/api/cypress');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
        // Fallback data in case API fails
        setPosts([
          {
            workName: "End-to-End Testing with Cypress - Sample",
            workDescription: "Unable to load data from server. This is a sample entry demonstrating Cypress test automation.",
            prompt: "Sample prompt for Cypress testing",
            result: "Sample test code using Cypress commands"
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setIsAlertOpen(true);
    setTimeout(() => {
      setCopiedId(null);
      setIsAlertOpen(false);
    }, 3000);
  };

  if (loading) return (
    <div className="min-h-screen bg-gradient-to-br from-white via-emerald-50 to-white flex items-center justify-center">
      <div className="text-center">
        <div className="relative">
          <div className="w-20 h-20 border-4 border-emerald-500/30 rounded-full animate-spin border-t-emerald-500 mx-auto mb-4"></div>
          <Sparkles className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-emerald-400 h-8 w-8 animate-pulse" />
        </div>
        <p className="text-emerald-600 font-medium">Loading Cypress testing solutions...</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-emerald-50 to-white">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-10 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-300"></div>
          <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-green-500/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
        </div>
      </div>

      {/* Header Section */}
      <div className="relative z-10 w-full border-b border-emerald-100 backdrop-blur-xl bg-white/80">
        <div className="max-w-8xl mx-auto px-8 py-12">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="relative">
                <div className="p-4 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl shadow-2xl">
                  <Zap className="h-12 w-12 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 p-1 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full">
                  <Sparkles className="h-4 w-4 text-white" />
                </div>
              </div>
              <div className="text-left">
                <h1 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 mb-2">
                  AI Cypress
                </h1>
                <div className="flex items-center gap-3">
                  <span className="px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-sm font-bold rounded-full shadow-lg">
                    🚀 Fast Testing
                  </span>
                  <span className="px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white text-sm font-bold rounded-full shadow-lg">
                    ⚡ Real-time Reloads
                  </span>
                </div>
              </div>
            </div>
            
            <p className="text-2xl text-slate-700 max-w-4xl mx-auto leading-relaxed mb-14">
              AI-powered test generation for Cypress end-to-end testing. 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 font-semibold">
                {" "}Create reliable, maintainable tests with intelligent automation.
              </span>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="p-4 bg-white/90 backdrop-blur-sm rounded-xl border border-emerald-100 shadow-sm">
                <Rocket className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                <p className="text-slate-800 font-semibold">Visual Testing</p>
                <p className="text-slate-600 text-sm">Built-in screenshot comparison</p>
              </div>
              <div className="p-4 bg-white/90 backdrop-blur-sm rounded-xl border border-emerald-100 shadow-sm">
                <Code2 className="h-8 w-8 text-teal-600 mx-auto mb-2" />
                <p className="text-slate-800 font-semibold">Time Travel</p>
                <p className="text-slate-600 text-sm">Debug with test snapshots</p>
              </div>
              <div className="p-4 bg-white/90 backdrop-blur-sm rounded-xl border border-emerald-100 shadow-sm">
                <Terminal className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <p className="text-slate-800 font-semibold">Automatic Waits</p>
                <p className="text-slate-600 text-sm">No more async headaches</p>
              </div>
              <div className="p-4 bg-white/90 backdrop-blur-sm rounded-xl border border-emerald-100 shadow-sm">
                <Sparkles className="h-8 w-8 text-amber-500 mx-auto mb-2" />
                <p className="text-slate-800 font-semibold">Dashboard</p>
                <p className="text-slate-600 text-sm">CI/CD integration</p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="https://docs.cypress.io" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-emerald-500/25 hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  📚 Cypress Docs
                  <ExternalLink className="h-4 w-4 group-hover:rotate-45 transition-transform" />
                </span>
              </a>
              <a
                href="https://www.cypress.io/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group px-8 py-4 bg-white/90 backdrop-blur-sm border-2 border-emerald-500 text-emerald-700 hover:text-white hover:bg-emerald-500 font-bold rounded-2xl transition-all duration-300"
              >
                <span className="flex items-center gap-2">
                  🏠 Official Site
                  <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full px-8 py-16">
        <div className="max-w-8xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-600 mb-6">
              AI-Generated Cypress Tests
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Discover how artificial intelligence revolutionizes end-to-end testing with smart, comprehensive test case generation for Cypress
            </p>
          </div>

          {/* Full Width Cards */}
          <div className="space-y-8">
            {posts.map((post, index) => (
              <div
                key={index}
                className="group relative w-full bg-white/90 backdrop-blur-xl rounded-3xl border border-emerald-100 overflow-hidden hover:border-emerald-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/20"
              >
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 via-transparent to-teal-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Card Header */}
                <div className="relative p-8 border-b border-emerald-100">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-6 flex-1">
                      <div className="relative">
                        <div className="p-4 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl shadow-xl">
                          <Zap className="h-8 w-8 text-white" />
                        </div>
                        <div className="absolute -top-1 -right-1 p-1 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full animate-pulse">
                          <Sparkles className="h-3 w-3 text-white" />
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <h3 className="text-3xl font-bold text-slate-800 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-600 group-hover:to-teal-600 transition-all duration-300">
                            {post.workName}
                          </h3>
                          <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-bold rounded-full shadow-lg animate-pulse">
                            🚀 Cypress Ready
                          </span>
                        </div>
                        
                        <p className="text-lg text-slate-600 leading-relaxed max-w-4xl">
                          {post.workDescription}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-end gap-2">
                      <span className="px-4 py-2 bg-gradient-to-r from-emerald-600/10 to-teal-600/10 text-emerald-700 text-sm font-semibold rounded-full border border-emerald-500/30">
                        #{String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="px-3 py-1 bg-gradient-to-r from-teal-600/10 to-green-600/10 text-teal-700 text-xs font-medium rounded-full border border-teal-500/30">
                        JavaScript
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="relative p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* AI Prompt Section */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-gradient-to-r from-emerald-600/10 to-teal-600/10 rounded-lg border border-emerald-500/30">
                          <Brain className="h-5 w-5 text-emerald-600" />
                        </div>
                        <h4 className="text-xl font-bold text-emerald-700">AI Prompt Template</h4>
                      </div>
                      
                      <div className="relative group/prompt">
                        <div className="p-6 bg-gradient-to-r from-white to-emerald-50 rounded-2xl border border-emerald-500/30 backdrop-blur-sm h-32 overflow-hidden">
                          <p className="text-slate-700 leading-relaxed font-mono text-sm">
                            {post.prompt.substring(0, 200)}...
                          </p>
                        </div>
                        
                        <button
                          onClick={() => copyToClipboard(post.prompt, `prompt-${index}`)}
                          className="mt-4 w-full group/btn flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold rounded-2xl transition-all duration-300 shadow-xl hover:shadow-emerald-500/30 hover:scale-[1.02]"
                        >
                          <ClipboardList className="h-5 w-5" />
                          <span>Copy AI Prompt</span>
                          {copiedId === `prompt-${index}` ? (
                            <Check className="h-5 w-5 text-emerald-300" />
                          ) : (
                            <Copy className="h-5 w-5 group-hover/btn:rotate-12 transition-transform" />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Instructions Section */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-gradient-to-r from-teal-600/10 to-green-600/10 rounded-lg border border-teal-500/30">
                          <Terminal className="h-5 w-5 text-teal-600" />
                        </div>
                        <h4 className="text-xl font-bold text-teal-700">Cypress Test Code</h4>
                      </div>
                      
                      <div className="relative group/result">
                        <div className="p-6 bg-gradient-to-r from-white to-teal-50 rounded-2xl border border-teal-500/30 backdrop-blur-sm h-32 overflow-hidden">
                          <pre className="text-slate-700 leading-relaxed font-mono text-sm overflow-auto">
                            {post.result}
                          </pre>
                        </div>
                        
                        <button
                          onClick={() => copyToClipboard(post.result, `result-${index}`)}
                          className="mt-4 w-full group/btn flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-teal-600 to-green-600 hover:from-teal-700 hover:to-green-700 text-white font-bold rounded-2xl transition-all duration-300 shadow-xl hover:shadow-teal-500/30 hover:scale-[1.02]"
                        >
                          <Code2 className="h-5 w-5" />
                          <span>Copy Test Code</span>
                          {copiedId === `result-${index}` ? (
                            <Check className="h-5 w-5 text-emerald-300" />
                          ) : (
                            <Copy className="h-5 w-5 group-hover/btn:rotate-12 transition-transform" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                  <Sparkles className="h-6 w-6 text-emerald-400 animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer with Cypress Resources */}
      <div className="relative z-10 w-full border-t border-emerald-100 backdrop-blur-xl bg-white/80 py-12">
        <div className="max-w-8xl mx-auto px-8">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 mb-6">
              Cypress Resources
            </h3>
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <a 
                href="https://docs.cypress.io/guides/overview/why-cypress" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 bg-emerald-100 border border-emerald-300 rounded-xl hover:bg-emerald-200 transition-colors text-emerald-800"
              >
                Why Cypress?
              </a>
              <a 
                href="https://docs.cypress.io/guides/getting-started/writing-your-first-test" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 bg-emerald-100 border border-emerald-300 rounded-xl hover:bg-emerald-200 transition-colors text-emerald-800"
              >
                Writing Your First Test
              </a>
              <a 
                href="https://docs.cypress.io/guides/core-concepts/introduction-to-cypress" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 bg-emerald-100 border border-emerald-300 rounded-xl hover:bg-emerald-200 transition-colors text-emerald-800"
              >
                Core Concepts
              </a>
              <a 
                href="https://docs.cypress.io/guides/references/best-practices" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 bg-emerald-100 border border-emerald-300 rounded-xl hover:bg-emerald-200 transition-colors text-emerald-800"
              >
                Best Practices
              </a>
            </div>
            <p className="text-slate-600">
              Powered by Cypress {new Date().getFullYear()} | AI-generated test solutions
            </p>
          </div>
        </div>
      </div>

      {/* Enhanced Success Alert */}
      {isAlertOpen && (
        <div className="fixed bottom-8 right-8 z-50 animate-in slide-in-from-bottom-4 fade-in">
          <div className="relative overflow-hidden bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl shadow-2xl border border-emerald-400/30">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 animate-pulse"></div>
            <div className="relative flex items-center gap-4 px-8 py-6">
              <div className="p-3 bg-white/20 rounded-full">
                <Check className="text-white h-6 w-6" />
              </div>
              <div>
                <p className="font-bold text-white text-lg">Successfully Copied!</p>
                <p className="text-emerald-100">
                  {copiedId?.includes('prompt') ? 'AI Prompt' : 'Test Code'} ready to use
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CypressBlog;