"use client";
import React, { useState } from 'react';
import {
  MoreHorizontal,
  Download,
  ExternalLink,
  Share2,
  TrendingUp,
  ChevronDown,
  Check,
  FileText,
  SquarePen,
  Upload
} from 'lucide-react';

const Dashboard = () => {
  const [selectedActivityFilter, setSelectedActivityFilter] = useState('All');

  const recentResumes = [
    { id: 1, title: 'UI/UX design final resume 2025', date: '23 June, 2025', bgColor: 'bg-teal-100' },
    { id: 2, title: 'Software Engineer 2025 Resume', date: '23 June, 2025', bgColor: 'bg-gray-100' },
    { id: 3, title: 'Graphics Design Resume Final 2024', date: '23 June, 2025', bgColor: 'bg-blue-100' }
  ];

  const overviewCards = [
    { title: 'Interview Sessions', current: '07', total: '15', action: 'Create Session' },
    { title: 'Resume Optimizer', current: '06', total: '10', action: 'Score Resume' },
    { title: 'Create Resume', current: '03', total: '05', action: 'Create Resume' }
  ];

  const nextSteps = [
    { id: 1, title: 'Create Resume', description: 'Great Job! Download your resume', status: 'completed', action: 'Download' },
    { id: 2, title: 'Create Cover Letter', description: 'Great Job! Download your resume', status: 'completed', action: 'Download' },
    { id: 3, title: 'Interview Sessions', description: 'Great Job! Download your resume', status: 'pending', action: 'Create Session' },
    { id: 4, title: 'Auto apply with resume', description: 'We assist you to apply into several website', status: 'pending', action: 'Apply Now' }
  ];

  const jobListings = [
    { id: 1, company: 'Jr. Software eng', location: 'Ornette', logo: '🔴' },
    { id: 2, company: 'Jr. Software eng', location: 'Ornette', logo: '🔵' },
    { id: 3, company: 'Jr. Software eng', location: 'Ornette', logo: '⚫' },
    { id: 4, company: 'Jr. Software eng', location: 'Ornette', logo: '🟨' },
    { id: 5, company: 'Jr. Software eng', location: 'Ornette', logo: '🔵' }
  ];

  const activityItems = [
    { id: 1, title: 'Resume Scored', description: 'Suggest 34 keywords that optimized', time: '12/06/2025  21:54', type: 'Resume Scoring' },
    { id: 2, title: 'Resume Scored', description: 'Suggest 34 keywords that optimized', time: '12/06/2025  21:54', type: 'Resume Scoring' },
    { id: 3, title: 'Resume Scored', description: 'Suggest 34 keywords that optimized', time: '12/06/2025  21:54', type: 'Resume Scoring' }
  ];

  return (
    <div className="min-h-screen">
      <div className="flex flex-col lg:flex-row">

        {/* Main Content */}
        <div className="flex-1 space-y-6">
          {/* Hero Section */}
          <div className='bg-gradient-to-r from-purple-600 to-blue-600 p-5 text-white rounded-xl'>
            <div className="flex items-center flex-wrap justify-between gap-4">
              <div className='flex flex-col justify-center'>
                <div className="text-2xl font-semibold">100% Interview Prep</div>
                <div className="text-2xl font-semibold">With Accurate Tools</div>
                <p className="text-purple-100 text-sm">Get your job today!</p>
              </div>
              <div >
                <button className="bg-white text-black font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-2 text-sm sm:text-base">
                  Start Preparation
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Recent Resumes */}
          <div className="bg-white rounded-2xl p-4 sm:p-6">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Recent Resumes</h3>
              <button className="text-black hover:text-purple-700 text-sm sm:text-base font-medium">See all</button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {recentResumes.map((resume) => (
                <div key={resume.id} className="group">
                  <div className={`${resume.bgColor} rounded-lg p-4 mb-3 h-40 sm:h-48 flex items-center justify-center relative`}>
                    <div className="w-full h-full bg-white/20 rounded backdrop-blur-sm"></div>
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-1 bg-white/20 rounded hover:bg-white/30">
                        <MoreHorizontal className="w-4 h-4 text-white" />
                      </button>
                    </div>
                  </div>
                  <h4 className="font-medium text-gray-900 text-sm sm:text-base mb-1">{resume.title}</h4>
                  <div className="flex items-center justify-between">
                    <p className="text-xs sm:text-sm text-gray-500">{resume.date}</p>
                    <div className="flex items-center gap-2">
                      <button className="p-1 text-gray-400 hover:text-gray-600">
                        <Upload className="w-4 h-4" />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-gray-600">
                        <SquarePen className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Overview + Chart */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* Overview Cards */}
            <div className="space-y-4">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Overview</h3>
              {overviewCards.map((card, i) => (
                <div key={i} className="bg-[#edeefc] rounded-xl p-4 sm:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 text-sm mb-1">{card.title}</p>
                      <p className="text-2xl sm:text-3xl font-bold text-gray-900">
                        {card.current}<span className="text-gray-400">/{card.total}</span>
                      </p>
                    </div>
                    <button className="bg-white text-black px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-sm font-semibold transition-colors">
                      {card.action}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Auto Application Chart */}
            <div className="bg-white rounded-xl p-4 sm:p-6 overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-gray-600 text-sm">Auto application on</p>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-lg sm:text-2xl font-bold">70+ Application</span>
                    <span className="text-green-500 text-xs sm:text-sm flex items-center">
                      <TrendingUp className="w-4 h-4 mr-1" /> +11.01%
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-xs sm:text-sm text-gray-500">
                  <span>7 Days</span>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>

              {/* Bar chart - horizontally scrollable on mobile */}
              <div className="flex items-end gap-4 w-full h-full">
                {[
                  { color: "bg-red-500", value: 20, label: 'Dice' },
                  { color: "bg-blue-500", value: 25, label: 'Linked In' },
                  { color: "bg-purple-500", value: 18, label: 'Monster' },
                  { color: "bg-gray-700", value: 25, label: 'Zip Recruiter' },
                  { color: "bg-blue-300", value: 20, label: 'Otheres' }
                ].map((bar, i, arr) => {
                  const max = Math.max(...arr.map(b => b.value)); // highest value
                  const heightPercent = (bar.value / max) * 100;  // relative height %

                  return (
                    <div
                      key={i}
                      className="w-6 sm:w-9 h-full flex flex-col items-center justify-end"
                    >
                      {/* Bar */}
                      <div
                        className={`${bar.color} w-full rounded-t flex justify-center relative`}
                        style={{ height: `${heightPercent}%` }}
                      >
                        {/* Value at the top inside the bar */}
                        <span className="absolute top-1 text-white text-[10px] sm:text-xs">
                          {bar.value}
                        </span>
                      </div>

                    </div>
                  );
                })}
              </div>


            </div>
          </div>

          {/* Activity Feed */}
          <div className="bg-white rounded-2xl p-4 sm:p-6">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Activity Feed</h3>
              <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-500">
                <span>Today</span>
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>

            {/* Filters */}
            <div className="flex gap-2 sm:gap-4 overflow-x-auto pb-2 mb-4 sm:mb-6">
              {['All', 'Resume Building', 'Resume Scoring', 'Auto Application'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSelectedActivityFilter(filter)}
                  className={`px-3 py-1 rounded-full text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${selectedActivityFilter === filter
                    ? 'bg-[#edeefc] text-purple-600'
                    : 'text-gray-600 hover:text-gray-900'
                    }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            <div className="space-y-3 sm:space-y-4">
              {activityItems.map((item) => (
                <div key={item.id} className="flex items-start gap-3 p-3 sm:p-4 hover:bg-gray-50 rounded-lg transition-colors">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                    <FileText className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 text-sm sm:text-base mb-1">{item.title}</h4>
                    <p className="text-gray-600 text-xs sm:text-sm mb-1">{item.description}</p>
                    <p className="text-gray-400 text-[10px] sm:text-xs">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar (moves below on mobile) */}
        <div className="w-full lg:w-80 p-2 sm:p-4 space-y-6">
          {/* Next Steps */}
          <div className="bg-slate-100 rounded-2xl p-4">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900">Next Steps</h3>
              <span className="text-xs sm:text-sm text-gray-500">Done 2/4</span>
            </div>
            <div className="space-y-3 ">
              {nextSteps.map((step) => (
                <div className={`space-y-3 rounded-lg bg-white p-2 ${step.status === 'completed' ? 'border border-green-500' : ''
                  }`}>
                  <div key={step.id} className="flex items-start gap-2 sm:gap-3">
                    <div className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center mt-0.5 ${step.status === 'completed' ? 'bg-green-500' : 'bg-gray-200'
                      }`}>
                      {step.status === 'completed' ? (
                        <Check className="w-2.5 sm:w-3 h-2.5 sm:h-3 text-white" />
                      ) : (
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full"></div>
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 text-sm sm:text-base mb-1">{step.title}</h4>
                      <p className="text-gray-600 text-xs sm:text-sm mb-2">{step.description}</p>
                      <button className="text-purple-600 text-xs sm:text-sm font-medium hover:text-purple-700">
                        {step.action}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Job Board */}
          <div className="bg-white rounded-2xl p-4 sm:p-6">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4 sm:mb-6">Today's Job Board</h3>
            <div className="space-y-3 sm:space-y-4">
              {jobListings.map((job) => (
                <div key={job.id} className="flex items-center justify-between p-2 sm:p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gray-100 flex items-center justify-center">
                      <span className="text-xs sm:text-sm">{job.logo}</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 text-xs sm:text-sm">{job.company}</h4>
                      <p className="text-gray-500 text-[10px] sm:text-xs">{job.location}</p>
                    </div>
                  </div>
                  <button className="bg-purple-100 px-2 py-1 text-xs rounded-full font-medium hover:text-purple-700">
                    Apply
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
