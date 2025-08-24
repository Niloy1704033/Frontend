import React from "react";
import Image from 'next/image';

const CircularProgress = ({ progress = 0 }) => {
  const radius = 44; // circle radius
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative">
      {/* Circular Progress */}
      <svg className="w-24 h-24 transform -rotate-90">
        {/* Background track */}
        <circle
          className="text-gray-100"
          stroke="currentColor"
          strokeWidth="4"
          fill="transparent"
          r={radius}
          cx="48"
          cy="48"
        />
        {/* Progress stroke */}
        <circle
          className="text-blue-500"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          fill="transparent"
          r={radius}
          cx="48"
          cy="48"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>

      {/* Center Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-20 w-20 rounded-full bg-gray-100 flex items-center justify-center">
          <Image src="/pdf.png" alt="PDF" width={48} height={48} />
        </div>
      </div>
    </div>
  );
};

export default CircularProgress;
