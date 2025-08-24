import { Dot, Plus, Youtube } from 'lucide-react'
import React from 'react'

export default function page() {
    return (
        <div>
            <div className='flex items-center justify-between'>
                <div className='font-semibold text-lg'>Recommended Videos</div>
                <button className='bg-violet-200 text-violet-700 rounded-lg px-2 py-0.5 text-sm'>See all</button>
            </div>
            <div className="flex items-center gap-3 overflow-x-auto mt-3 pb-3">
                {Array.from({ length: 5 }).map((_, idx) => (
                    <div key={idx} className="w-1/5 flex-shrink-0">
                        <div className="h-40 rounded-xl bg-gray-200"></div>
                        <div className="flex items-start gap-2 mt-2">
                            <div className="h-8 w-11 rounded-full bg-gray-300"></div>
                            <div className="flex flex-col">
                                <div className="font-semibold text-sm">
                                    Graphics Designer Reacts To YOUR PORTFOLIOS (+ Tips)
                                </div>
                                <div className="text-sm">Aina</div>
                                <div className="text-xs text-gray-400 flex items-center gap-0.5">
                                    Aina <Dot /> 332K views
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className='p-4 mt-5 rounded-xl bg-violet-100'>
                <div className='font-semibold text-lg'>Create a New Note</div>

                <div className="flex items-center gap-3 overflow-x-auto mt-3 pb-3">
                    {Array.from({ length: 5 }).map((_, idx) => (
                        <div key={idx} className="w-1/5 flex-shrink-0 bg-white h-40 relative rounded-xl p-4">
                            <Youtube />
                            <div className='absolute bottom-2'>
                                <div className="flex flex-col">
                                    <div className="font-semibold text-sm">
                                        YouTube Video
                                    </div>
                                    <div className="text-sm">Analyze a video from a URL</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            <div className='mt-5'>
                <div className='flex items-center justify-between'>
                    <div className='font-semibold text-lg'>Your Notes</div>
                    <button className='bg-violet-200 text-violet-700 rounded-lg px-2 py-0.5 flex items-center gap-1 text-sm'>Create New Folder <Plus className='h-5 w-5' /></button>
                </div>
                <div className="flex items-center gap-3 overflow-x-auto mt-3 pb-3">
                    {Array.from({ length: 5 }).map((_, idx) => (
                        <div key={idx} className="w-1/5 flex-shrink-0">
                            <div className="h-40 rounded-xl bg-gray-200"></div>
                            <div className="flex items-start gap-2 mt-2">
                                <div className="font-semibold text-sm">
                                    Folder Title
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


        </div >
    )
}
