"use client"
import React from 'react';
import { FolderPlus, X, ExternalLink } from 'lucide-react';

export default function ResumeScorer({ onClose, onUploading }) {
  const resumeHistory = [
    {
      name: 'my-cv.pdf',
      size: '120 KB',
      score: '68%'
    },
    {
      name: 'my-cv.pdf',
      size: '120 KB',
      score: '68%'
    },
    {
      name: 'my-cv.pdf',
      size: '120 KB',
      score: '68%'
    }
  ];

  return (
    <div className="mx-auto max-w-4xl bg-white rounded-xl p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold text-gray-900">Resume Score</h1>
          <p className="text-sm text-gray-500">Analyze your resume and fix issues with AI.</p>
        </div>
        <button className="p-1" onClick={() => onClose()}>
          <X className="w-5 h-5 text-gray-400" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8 items-center">
        {/* Left Section - Upload */}
        <div onClick={() => onUploading()} className="flex flex-col justify-center h-full bg-gray-100 border-2 border-dotted border-gray-400 rounded-lg p-8 text-center">

          <div className="flex items-center justify-center mx-auto mb-4">
            <FolderPlus className="w-10 h-10 text-blue-600 " />
          </div>
          <h2 className="text-base font-semibold text-gray-900 mb-1">Upload New Resume</h2>
          <p className="text-sm text-gray-500 mb-6">We accept PDF files max size 10MB</p>
          <button className="text-blue-600 underline">Browse Files</button>

        </div>

        {/* Right Section - Resume History */}
        <div className="flex flex-col h-full">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Resume History</h2>
          <div className="space-y-4">
            {resumeHistory.map((resume, index) => (
              <div key={index} className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    {/* <div className="w-10 h-10 bg-red-100 rounded flex items-center justify-center">
                      <FileText className="w-5 h-5 text-red-600" />
                      <span className="text-xs text-red-600 font-semibold absolute">PDF</span>
                    </div> */}
                    <img src="/pdf.png" alt="" className='h-10 w-10' />
                    <div>
                      <p className="font-medium text-gray-900">{resume.name}</p>
                      <p className="text-sm text-gray-500">{resume.size} • Scored {resume.score}</p>
                    </div>
                  </div>
                  <button className="p-1">
                    <ExternalLink className="w-4 h-4 text-gray-400" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}