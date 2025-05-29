import React, { useState, useEffect } from 'react';
import { Copy, Check, Zap, Code2, Terminal, ClipboardList, ExternalLink, Sparkles, Brain, Rocket } from 'lucide-react';

const RestAssuredBlog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [copiedId, setCopiedId] = useState(null);
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://protbackend-woho.onrender.com/api/restAssured');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
        // Fallback data in case API fails
        setPosts([
          {
            workName: "API Testing with RestAssured - Sample",
            workDescription: "Unable to load data from server. This is a sample entry.",
            prompt: "Sample prompt for API testing",
            result: "Sample test code"
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <div className="relative">
          <div className="w-20 h-20 border-4 border-purple-500/30 rounded-full animate-spin border-t-purple-500 mx-auto mb-4"></div>
          <Sparkles className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-purple-400 h-8 w-8 animate-pulse" />
        </div>
        <p className="text-purple-300 font-medium">Loading AI-powered insights...</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/50 to-slate-900">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-10 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-300"></div>
          <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-pink-500/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
        </div>
      </div>

      {/* Header Section */}
      <div className="relative z-10 w-full border-b border-white/10 backdrop-blur-xl bg-white/5">
        <div className="max-w-8xl mx-auto px-8 py-12">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="relative">
                <div className="p-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl shadow-2xl">
                  <Brain className="h-12 w-12 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 p-1 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full">
                  <Sparkles className="h-4 w-4 text-white" />
                </div>
              </div>
              <div className="text-left">
                <h1 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 mb-2">
                  AI RestAssured
                </h1>
                <div className="flex items-center gap-3">
                  <span className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-bold rounded-full shadow-lg">
                    🤖 AI-Powered
                  </span>
                  <span className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-sm font-bold rounded-full shadow-lg">
                    ⚡ Smart Testing
                  </span>
                </div>
              </div>
            </div>
            
            <p className="text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-14">
              Revolutionary AI-powered test case generation for RestAssured API testing. 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-semibold">
                {" "}Transform your testing workflow with intelligent automation.
              </span>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <Rocket className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                <p className="text-white font-semibold">Smart Generation</p>
                <p className="text-slate-400 text-sm">AI creates comprehensive test cases</p>
              </div>
              <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <Code2 className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                <p className="text-white font-semibold">RestAssured Ready</p>
                <p className="text-slate-400 text-sm">Production-ready Java code</p>
              </div>
              <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <Terminal className="h-8 w-8 text-green-400 mx-auto mb-2" />
                <p className="text-white font-semibold">Edge Cases</p>
                <p className="text-slate-400 text-sm">Covers positive & negative scenarios</p>
              </div>
              <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <Sparkles className="h-8 w-8 text-pink-400 mx-auto mb-2" />
                <p className="text-white font-semibold">TestNG Integration</p>
                <p className="text-slate-400 text-sm">Framework-ready structure</p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <button className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-purple-500/25 hover:scale-105">
                <span className="flex items-center gap-2">
                  📚 Documentation
                  <ExternalLink className="h-4 w-4 group-hover:rotate-45 transition-transform" />
                </span>
              </button>
              <button className="group px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-purple-500 text-purple-300 hover:text-white hover:bg-purple-500 font-bold rounded-2xl transition-all duration-300">
                <span className="flex items-center gap-2">
                  🚀 Get Started
                  <Rocket className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full px-8 py-16">
        <div className="max-w-8xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-6">
              AI-Generated Testing Solutions
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Discover how artificial intelligence revolutionizes API testing with smart, comprehensive test case generation
            </p>
          </div>

          {/* Full Width Cards */}
          <div className="space-y-8">
            {posts.map((post, index) => (
              <div
                key={index}
                className="group relative w-full bg-gradient-to-r from-slate-800/80 via-slate-800/90 to-slate-800/80 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20"
              >
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-transparent to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Card Header */}
                <div className="relative p-8 border-b border-white/10">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-6 flex-1">
                      <div className="relative">
                        <div className="p-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl shadow-xl">
                          <Brain className="h-8 w-8 text-white" />
                        </div>
                        <div className="absolute -top-1 -right-1 p-1 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full animate-pulse">
                          <Sparkles className="h-3 w-3 text-white" />
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <h3 className="text-3xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                            {post.workName}
                          </h3>
                          <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-bold rounded-full shadow-lg animate-pulse">
                            🤖 AI Generated
                          </span>
                        </div>
                        
                        <p className="text-lg text-slate-300 leading-relaxed max-w-4xl">
                          {post.workDescription}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-end gap-2">
                      <span className="px-4 py-2 bg-gradient-to-r from-purple-600/30 to-blue-600/30 text-purple-300 text-sm font-semibold rounded-full border border-purple-500/30">
                        #{String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="px-3 py-1 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 text-blue-300 text-xs font-medium rounded-full border border-blue-500/30">
                        Advanced Level
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
                        <div className="p-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg border border-purple-500/30">
                          <Brain className="h-5 w-5 text-purple-400" />
                        </div>
                        <h4 className="text-xl font-bold text-purple-300">AI Prompt Template</h4>
                      </div>
                      
                      <div className="relative group/prompt">
                        <div className="p-6 bg-gradient-to-r from-slate-900/50 to-purple-900/20 rounded-2xl border border-purple-500/30 backdrop-blur-sm h-32 overflow-hidden">
                          <p className="text-slate-300 leading-relaxed font-mono text-sm">
                            {post.prompt.substring(0, 200)}...
                          </p>
                        </div>
                        
                        <button
                          onClick={() => copyToClipboard(post.prompt, `prompt-${index}`)}
                          className="mt-4 w-full group/btn flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold rounded-2xl transition-all duration-300 shadow-xl hover:shadow-purple-500/30 hover:scale-[1.02]"
                        >
                          <ClipboardList className="h-5 w-5" />
                          <span>Copy AI Prompt</span>
                          {copiedId === `prompt-${index}` ? (
                            <Check className="h-5 w-5 text-green-300" />
                          ) : (
                            <Copy className="h-5 w-5 group-hover/btn:rotate-12 transition-transform" />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Instructions Section */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-lg border border-blue-500/30">
                          <Terminal className="h-5 w-5 text-blue-400" />
                        </div>
                        <h4 className="text-xl font-bold text-blue-300">Implementation Guide</h4>
                      </div>
                      
                      <div className="relative group/result">
                        <div className="p-6 bg-gradient-to-r from-slate-900/50 to-blue-900/20 rounded-2xl border border-blue-500/30 backdrop-blur-sm h-32 overflow-hidden">
                          <p className="text-slate-300 leading-relaxed font-mono text-sm">
                            {post.result}
                          </p>
                        </div>
                        
                        <button
                          onClick={() => copyToClipboard(post.result, `result-${index}`)}
                          className="mt-4 w-full group/btn flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold rounded-2xl transition-all duration-300 shadow-xl hover:shadow-blue-500/30 hover:scale-[1.02]"
                        >
                          <Code2 className="h-5 w-5" />
                          <span>Copy Instructions</span>
                          {copiedId === `result-${index}` ? (
                            <Check className="h-5 w-5 text-green-300" />
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
                  <Sparkles className="h-6 w-6 text-purple-400 animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Success Alert */}
      {isAlertOpen && (
        <div className="fixed bottom-8 right-8 z-50 animate-in slide-in-from-bottom-4 fade-in">
          <div className="relative overflow-hidden bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl shadow-2xl border border-green-400/30">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-emerald-400/20 animate-pulse"></div>
            <div className="relative flex items-center gap-4 px-8 py-6">
              <div className="p-3 bg-white/20 rounded-full">
                <Check className="text-white h-6 w-6" />
              </div>
              <div>
                <p className="font-bold text-white text-lg">Successfully Copied! ✨</p>
                <p className="text-green-100">
                  {copiedId?.includes('prompt') ? '🤖 AI Prompt' : '📋 Instructions'} ready to use
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RestAssuredBlog;