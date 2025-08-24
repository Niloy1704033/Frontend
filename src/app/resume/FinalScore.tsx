import React from 'react'

import SpeedGauge from "@/app/resume/SpeedGauge"
import { Check, ChevronDown, ChevronUp, CircleCheck, EllipsisVertical, TriangleAlert, X, Paperclip, Globe, Lightbulb, AudioLines, PersonStanding, IdCardLanyard, Database } from 'lucide-react'

export default function FinalScore() {
  return (
    <div className="mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_500px] gap-6 h-screen">
        <div className='bg-indigo-50 rounded-xl p-5 overflow-y-auto'>

          <div className='h-60 text-center bg-white rounded-xl flex flex-col justify-center relative'>
            <div className='text-2xl mb-1'>Your Score</div>
            <SpeedGauge percentage={84} />
            <div className='absolute top-33 bottom-0 left-0 right-0 m-auto'>
              <div className='text-2xl font-semibold'>84</div>
              <div className='text-red-700'>12 issues to solve</div>
            </div>
          </div>


          <div className='my-5'>
            <div className='flex items-center gap-7 overflow-x-auto whitespace-nowrap w-full'>
              <div className='rounded-full px-3 py-1.5 flex items-center justify-center gap-x-2 text-indigo-700 bg-indigo-200 border border-indigo-200 text-xs font-semibold'>
                All Suggestions
                <span className='px-2.5 bg-white rounded-full'>12</span>
              </div>

              <div className='rounded-full px-3 py-1.5 flex items-center justify-center gap-x-2 text-gray-700 bg-gray-200 text-xs font-semibold'>
                Urgent
                <span className='px-2.5 bg-white rounded-full'>2</span>
              </div>

              <div className='rounded-full px-3 py-1.5 flex items-center justify-center gap-x-2 text-gray-700 bg-gray-200 text-xs font-semibold'>
                Warning
                <span className='px-2.5 bg-white rounded-full'>5</span>
              </div>
            </div>
          </div>

          <div className='flex flex-col gap-4'>
            <div className='rounded-lg p-3 bg-white'>
              <div className=' flex items-center justify-between'>
                <div className='flex items-center gap-x-3'>
                  <div className='h-5 w-5 bg-blue-100 rounded'></div>
                  <div>Structure & Organization</div>
                </div>


                <div className='flex items-center gap-x-2'>
                  <div className='rounded-full flex items-center gap-x-1 bg-green-100 text-green-700 text-xs px-2 py-0.5'>
                    <CircleCheck className='h-3.5 w-3.5' />
                    All Set</div>
                  <div className='bg-gray-100 rounded-full p-1'><ChevronDown className='h-5 w-5' /></div>
                </div>
              </div>
            </div>

            <div className='rounded-lg p-3 bg-white'>
              <div className='flex items-center justify-between '>
                <div className='flex items-center gap-x-3'>
                  <div className='h-5 w-5 bg-blue-100 rounded'></div>
                  <div>Writting Quality</div>
                </div>


                <div className='flex items-center gap-x-2'>
                  <div className='rounded flex items-center gap-x-1 bg-red-100 text-red-700 text-xs px-2 py-0.5'>
                    <TriangleAlert className='h-3.5 w-3.5' />
                    3</div>
                  <div className='bg-gray-100 rounded-full p-1'><ChevronUp className='h-5 w-5' /></div>
                </div>
              </div>

              <div className='mt-4 px-3 '>
                <div className='border-l border-gray-200 px-3 flex flex-col gap-3'>


                  <div className='flex flex-col gap-2 w-full  border-b border-gray-200 pb-3'>
                    <div className='flex items-center justify-between'>
                      <ol className="relative text-gray-500 border-s border-gray-200">
                        <li className="mb-5 ms-6">
                          <span className="absolute flex items-center justify-center w-4 h-4 bg-green-200 rounded-full -start-2">
                          </span>
                          <div className="text-sm"><span className='text-red-500'>Error</span> I Plays Football</div>
                        </li>
                        <li className="mb-5 ms-6">
                          <span className="absolute flex items-center justify-center w-4 h-4 bg-green-200 rounded-full -start-2">
                          </span>
                          <div className="text-sm"><span className='text-green-500'>Resolve</span> I Play Football</div>
                        </li>
                      </ol>

                      <div className='flex items-center gap-x-2'>
                        <div className='bg-gray-100 rounded-full p-1'><X className='h-4 w-4' /></div>
                        <div className='bg-gray-100 rounded-full p-1'><Check className='h-4 w-4' /></div>
                      </div>
                    </div>
                  </div>


                </div>
              </div>
            </div>

            <div className='rounded-lg p-3 bg-white'>
              <div className='flex items-center justify-between '>
                <div className='flex items-center gap-x-3'>
                  <div className='h-5 w-5 bg-blue-100 rounded'></div>
                  <div>Acheivements</div>
                </div>


                <div className='flex items-center gap-x-2'>
                  <div className='rounded flex items-center gap-x-1 bg-red-100 text-red-700 text-xs px-2 py-0.5'>
                    <TriangleAlert className='h-3.5 w-3.5' />
                    2</div>
                  <div className='bg-gray-100 rounded-full p-1'><ChevronUp className='h-5 w-5' /></div>
                </div>
              </div>
            </div>

            <div className='rounded-lg p-3 bg-white'>
              <div className='flex items-center justify-between '>
                <div className='flex items-center gap-x-3'>
                  <div className='h-5 w-5 bg-blue-100 rounded'></div>
                  <div>Formatting & Layout</div>
                </div>


                <div className='flex items-center gap-x-2'>
                  <div className='rounded flex items-center gap-x-1 bg-red-100 text-red-700 text-xs px-2 py-0.5'>
                    <TriangleAlert className='h-3.5 w-3.5' />
                    1</div>
                  <div className='bg-gray-100 rounded-full p-1'><ChevronUp className='h-5 w-5' /></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex">
          <div className="sticky top-0 h-[calc(100vh-5rem)] w-full">
            <div className='rounded-xl p-5 bg-white h-full flex flex-col'>
              <div className='shrink-0'>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-2'>
                    <div className='text-indigo-700 text-4xl font-black bg-gray-200 rounded-full h-12 w-12 grid place-items-center'>P</div>
                    <div className='flex flex-col'>
                      <div className='font-semibold text-sm'>Place.today</div>
                      <div className='text-xs text-gray-500'>Your AI partner</div>
                    </div>
                  </div>
                  <div><EllipsisVertical className='h-5 w-5' /></div>
                </div>
                <hr className='text-gray-300 my-3' />
              </div>
              <div className='flex-1 overflow-y-auto rounded-md p-3'>

                <div className='text-center px-15 mt-5'>
                  <div className='font-black text-4xl text-indigo-700'>Placed</div>
                  <div className='text-gray-400 text-xs mt-1'>Hello Jhon, you can ask any kind of questions regarding resume optimization</div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 mt-3">
                  <div className='py-2 w-full text-sm font-semibold flex items-center justify-center gap-2 rounded-lg bg-gray-100'>
                    <PersonStanding className='h-4 w-4' /> Personalization
                  </div>
                  <div className='py-2 w-full text-sm font-semibold flex items-center justify-center gap-2 rounded-lg bg-gray-100'>
                    <AudioLines className='h-4 w-4' />Speech
                  </div>
                  <div className='py-2 w-full text-sm font-semibold flex items-center justify-center gap-2 rounded-lg bg-gray-100'>
                    <Database className='h-4 w-4' />Data controls
                  </div>
                  <div className='py-2 w-full text-sm font-semibold flex items-center justify-center gap-2 rounded-lg bg-gray-100'>
                    <IdCardLanyard className='h-4 w-4' />Builder profile
                  </div>
                </div>
              </div>




              <div className="shrink-0 mt-3">
                <div className='flex items-center gap-3 overflow-x-auto whitespace-nowrap w-full'>
                  <div className='px-2 py-1.5 rounded-full text-gray-400 border border-gray-200 text-sm font-semibold'>How to get higher score</div>
                  <div className='px-2 py-1.5 rounded-full text-gray-400 border border-gray-200 text-sm font-semibold'>Resolve mistakes</div>
                  <div className='px-2 py-1.5 rounded-full text-gray-400 border border-gray-200 text-sm font-semibold'>How to get higher score</div>
                </div>
                <div className='relative mt-3'>
                  <textarea placeholder='Ask anything' className='placeholder:text-gray-400 p-4 w-full border border-gray-200 rounded-xl bg-gray-100 text-sm resize-none outline-none' rows={4}></textarea>
                  <div className='absolute bottom-3 w-full px-4'>
                    <div className='flex items-center justify-between'>
                      <div className='flex items-center gap-2'>
                        <div className='text-xs flex items-center justify-center gap-1 bg-white border border-gray-300 w-17 py-0.5 rounded-full font-semibold'><Paperclip className="h-3 w-3" /> Attach </div>
                        <div className='text-xs flex items-center justify-center gap-1 bg-white border border-gray-300 w-17 py-0.5 rounded-full font-semibold'><Globe className="h-3 w-3" /> Search </div>
                        <div className='text-xs flex items-center justify-center gap-1 bg-white border border-gray-300 w-17 py-0.5 rounded-full font-semibold'><Lightbulb className="h-3 w-3" /> Reason </div>
                      </div>
                      <div className='bg-indigo-700 rounded-full p-1.5'><AudioLines className="h-4 w-4 text-white" /></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
