"use client"
import { useState } from 'react'
import {
    ChevronRight

} from 'lucide-react';

import ResumeScorer from '@/app/resume/ResumeScorer'
import UploadResume from '@/app/resume/UploadResume'
import UploadingResume from '@/app/resume/UploadingResume'
import AnalyzeResume from '@/app/resume/AnalyzeResume'
import FinalScore from '@/app/resume/FinalScore'

export default function page() {

    const cards = Array.from({ length: 3 }).map((_, i) => ({
        id: i + 1,
        title: `my-cv.pdf`,
        path: '',
        scored: '80'
    }));

    const [main, setMain] = useState(true);
    const [showUpload, setShowUpload] = useState(false);
    const [resumeScore, setResumeScore] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [analyzing, setAnalyzing] = useState(false);
    const [score, setScore] = useState(false);

    const handleClose = () => {
        setResumeScore(false);
        setMain(true);
    };
    const handleUpload = () => {
        setShowUpload(false);
        setResumeScore(true);
    };

    const handleResumeScore = () => {
        setResumeScore(false);
        setUploading(true);
    };
    
    let content;

    if (main) {
        content =
            <div className="mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6">
                    <div>
                        <div className='bg-gray-600 p-5 text-gray-50 rounded-xl'>
                            <div className="flex items-center justify-between align-center">
                                <div >
                                    <div className="text-2xl font-semibold">Optimize Your Resume</div>
                                    <div className="text-2xl font-semibold">With Accurate
                                        Tools</div>

                                    <button className="bg-white text-black font-semibold px-3 py-1 mt-3 flex items-center gap-2 text-sm  rounded-full">
                                        Start Now
                                        <ChevronRight className="w-4 h-4" />
                                    </button>
                                </div>
                                <div className="hidden sm:block">
                                    <div className="h-24 w-36 rounded-xl bg-white/10" />
                                </div>
                            </div>
                        </div>

                        <div className='mt-5'>
                            <div className='flex items-center justify-between'>
                                <div className='text-lg font-semibold'>Recent Interviews</div>
                                <button className="px-3 py-2 bg-blue-600 text-gray-50 rounded-lg cursor-pointer" onClick={() => {
                                    setShowUpload(!showUpload);
                                    setMain(false);
                                }}>Optimize Resume</button>
                            </div>

                            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-2'>
                                {cards.map((c) => (
                                    <div className='p-6 bg-white rounded-xl' key={c.id}>
                                        <div className='flex items-center gap-2'>
                                            <div className='border rounded-lg border h-15 w-15'>

                                            </div>
                                            <div className='flex flex-col'>

                                                <div className='font-semibold'>{c.title}</div>
                                                <div className='text-gray-500 text-xs'>Scored <span>({c.scored})</span></div>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>
                    <div>
                        <aside className="rounded-2xl bg-indigo-700 text-white p-6 shadow-soft h-[400px] flex flex-col justify-center">
                            <div className="text-lg opacity-90">One to One Meeting</div>
                            <div className="mt-1 text-4xl font-bold leading-tight">With Our
                                Experts</div>
                            <p className="mt-2 text-base opacity-90">As like real environment</p>
                            <button className="mt-6 w-full rounded-lg bg-white/95 text-black font-semibold py-2 hover:bg-white">Join Now</button>
                        </aside>
                    </div>
                </div>
            </div>
    } else if (showUpload) {
        content = <UploadResume onUpload={handleUpload} />;
    } else if (resumeScore) {
        content = <ResumeScorer onClose={handleClose} onResumeScore={handleResumeScore}/>;
    } else if (uploading) { 
        content = <div><UploadingResume /></div>;
    } else if (analyzing) {
        content = <div><AnalyzeResume /></div>;
    } else if (analyzing) {
        content = <div><AnalyzeResume /></div>;
    }



    return <div>{content}</div>;
}
