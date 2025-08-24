"use client"
import React from 'react'
import {
  LockKeyhole,
  X

} from 'lucide-react';
export default function UploadResume({ onClose, onUploadResume }) {
  return (
    <div className='mx-auto max-w-4xl text-center'>
      <div className="relative flex items-center justify-center">
        <div className="text-2xl font-semibold">Upload Your Resume</div>
        <button
          className="absolute right-0 p-1"
          onClick={() => onClose()}
        >
          <X className="w-5 h-5 text-gray-400" />
        </button>
      </div>


      <div className='text-sm text-gray-400'>Analyze your resume and fix issues with AI</div>

      <div className="border-2 border-dotted border-gray-400 rounded-lg h-70 w-full bg-gray-100 flex items-center justify-center flex-col mt-5 " onClick={() => onUploadResume()}>
        <div className='max-w-xs p-10'>
          <div className='font-semibold text-lg'>Upload Your Resume</div>
          <div className='mt-2 text-gray-500 text-sm'>We accept PDF, DOC or DOCX files max size 5MB</div>
        </div>
      </div>
      <div className='text-sm mt-2 flex items-center justify-center gap-x-2'><LockKeyhole className='h-4 w-5' />We protect your resume and your <a className='underline pl-0'>privacy</a></div>
    </div>
  )
}
