"use client"
import React from 'react'
import {
    LockKeyhole

} from 'lucide-react';
export default function UploadResume({onUpload}) {
  return (
    <div className='mx-auto max-w-3xl text-center'>
                <div className='text-2xl font-semibold'>Upload Your Resume</div>
                <div className='text-sm text-gray-400'>Analyze your resume and fix issues with AI</div>
    
                <div className="border-2 border-dotted border-gray-400 rounded-lg h-70 w-full bg-gray-200 flex items-center justify-center flex-col mt-5">
                    <div className='font-semibold text-lg'  onClick={() => onUpload()}>Upload Your Resume</div>
                    <div className='mt-2 text-gray-500 text-sm'>We accept PDF, DOC or DOCX files max size 5MB</div>
                </div>
                <div className='text-sm mt-2 flex items-center justify-center gap-x-2'><LockKeyhole className='h-4 w-5' />We protect your resume and your <a className='underline pl-0'>privacy</a></div>
            </div>
  )
}
