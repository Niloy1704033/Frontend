"use client"
import { Loader } from 'lucide-react';
import Image from 'next/image';

type Props = {
  onUploadComplete?: any;
};

export default function UploadingResume({ onUploadComplete }: Props) {
  return (
    <div className='mx-auto max-w-4xl bg-white' onClick={() => onUploadComplete()} >
      <div className="rounded-lg h-70 w-full flex items-center justify-center flex-col mt-5 max-w-xs mx-auto">
        <Image src="/pdf.png" alt="" width={60} height={60} />
        <div className='font-semibold text-lg'>Uploading Your Resume</div>
        <div className="h-2 w-full rounded-full bg-slate-100 mt-3 mb-2">
          <div
            className="h-2 rounded-full bg-blue-500"
            style={{ width: `50%` }}
          />
        </div>
        <div className='text-xs text-gray-500 flex items-center gap-1'>
          <span className='font-semibold'>60 KB</span> of <span className='font-semibold'>120 KB . </span>
          <Loader className='h-3 w-3' />
          Uploading
        </div>
      </div>

    </div>
  )
}
