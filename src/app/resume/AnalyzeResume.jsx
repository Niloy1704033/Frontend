import React from 'react'
import CircularProgress from '@/app/resume/CircularProgress'
import { CircleCheck } from 'lucide-react';

export default function AnalyzeResume({ onFinalScore }) {
  return (
    <div className='mx-auto max-w-4xl bg-white' onClick={() => onFinalScore()}>
      <div className="rounded-lg h-100 w-full flex items-center justify-center flex-col mt-5 mx-auto">
        <CircularProgress progress={75} />

        <div className='font-semibold text-xl mt-2'>Analyzing Your Resume</div>
        <div className='text-gray-400 text-sm'>Scanning your resume for structure, content, style - and sparkle!</div>

        <div className="relative mt-5 max-h-40 overflow-y-hidden">
          {/* Shadow/Fade on Top */}
          <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white to-transparent pointer-events-none z-10" />

          <div className="flex flex-col gap-3 relative z-0">
            <div className="flex items-center gap-2">
              <CircleCheck className="h-5 w-5 text-green-500" />
              <span>Loading your resume</span>
            </div>
            <div className="flex items-center gap-2">
              <CircleCheck className="h-5 w-5 text-green-500" />
              <span>Loading your resume</span>
            </div>
            <div className="flex items-center gap-2">
              <CircleCheck className="h-5 w-5 text-green-500" />
              <span>Loading your resume</span>
            </div>
            <div className="flex items-center gap-2">
              <CircleCheck className="h-5 w-5 text-green-500" />
              <span>Loading your resume</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}
