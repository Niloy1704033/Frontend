import React from 'react'

export default function page() {
    const cards = Array.from({ length: 6 }).map((_, i) => ({
        id: i + 1,
        title: `Job interview preparation ${i + 1}`,
        score: 72,
    }));
    return (
        <div className="mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6">
                <div>
                    <div className='bg-gray-600 p-5 text-gray-50 rounded-xl'>
                        <div className="flex items-center justify-between align-center">
                            <div >
                                <div className="text-2xl font-semibold">One to One Interview</div>
                                <div className="text-2xl font-semibold">With Industry
                                    Experts</div>
                            </div>
                            <div className="hidden sm:block">
                                <div className="h-24 w-36 rounded-xl bg-white/10" />
                            </div>
                        </div>
                    </div>

                    <div className='mt-5'>
                        <div className='flex items-center justify-between'>
                            <div className='text-lg font-semibold'>Recent Interviews</div>
                            <button className="px-3 py-2 bg-blue-600 text-gray-50 rounded-lg">New Session</button>
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-2'>
                            {cards.map((c) => (
                                <div className='p-6 bg-blue-100 rounded-xl' key={c.id}>
                                    <div className='flex items-top justify-between'>
                                        <div className='font-semibold'>Job interview <br /> preparation 1</div>
                                        <div>
                                            <button className='p-3 rounded-full bg-slate-300'></button>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='text-sm text-slate-600 font-semibold mt-5 mb-1'>72/1000 points</div>
                                        <div className="h-2 w-full rounded-full bg-slate-300">
                                            <div
                                                className="h-2 rounded-full bg-slate-500"
                                                style={{ width: `70%` }}
                                            />
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
    )
}
